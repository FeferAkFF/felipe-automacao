export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, system } = req.body;
  if (!prompt) return res.status(400).json({ error: 'prompt required' });

  const GOOGLE_KEY = process.env.GOOGLE_AI_API_KEY;
  const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;

  if (GOOGLE_KEY) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: system ? `${system}\n\n${prompt}` : prompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 4096 }
          })
        }
      );
      const d = await r.json();
      if (d.candidates?.[0]?.content?.parts?.[0]?.text) {
        return res.json({ text: d.candidates[0].content.parts[0].text });
      }
    } catch (e) {}
  }

  if (OPENROUTER_KEY) {
    try {
      const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_KEY}`,
          'HTTP-Referer': 'https://felipe-automacao.vercel.app'
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.1-8b-instruct:free',
          messages: [
            ...(system ? [{ role: 'system', content: system }] : []),
            { role: 'user', content: prompt }
          ]
        })
      });
      const d = await r.json();
      if (d.choices?.[0]?.message?.content) {
        return res.json({ text: d.choices[0].message.content });
      }
    } catch (e) {}
  }

  return res.status(500).json({ error: 'No AI provider available. Configure GOOGLE_AI_API_KEY or OPENROUTER_API_KEY.' });
}
