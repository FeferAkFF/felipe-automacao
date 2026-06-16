#!/bin/bash
set -euo pipefail

# Only run in remote (web) sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
STATE_FILE="$PROJECT_DIR/STATE.md"
CLAUDE_FILE="$PROJECT_DIR/CLAUDE.md"

echo "=== FELIPE AUTOMAÇÃO — CONTEXTO DA SESSÃO ==="
echo ""

if [ -f "$STATE_FILE" ]; then
  echo "--- STATE.md ---"
  cat "$STATE_FILE"
  echo ""
fi

if [ -f "$CLAUDE_FILE" ]; then
  echo "--- CLAUDE.md (resumo) ---"
  # Print first 80 lines of CLAUDE.md (overview + rules)
  head -80 "$CLAUDE_FILE"
  echo "..."
  echo "[CLAUDE.md completo disponível em $CLAUDE_FILE]"
fi

echo ""
echo "=== FIM DO CONTEXTO ==="
