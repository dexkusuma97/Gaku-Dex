#!/usr/bin/env bash
set +x
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
node generate.cjs simulasi "$@"
