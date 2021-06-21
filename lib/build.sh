#!/bin/bash

set -eu

cd "$(dirname "$0")"

# Run parallel commands and fail if any of them fails.
pids=()

# No dependencies
cd base
npm run build &
pids+=($!)

# No dependencies
cd ../next
npm run build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


# Depends on base
cd ../models
npm run build


# Depends on models
cd ../model-utils
npm run build


pids=()
# Depend on models and model-utils
cd ../lunr
npm run build &
pids+=($!)

# Depend on models and model-utils
cd ../rdf
npm run build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


pids=()
# Depend on models, model-utils, and lunr
cd ../bootstrap
npm run build &
pids+=($!)

# Depend on models, model-utils, and lunr
cd ../material-ui
npm run build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


# Depends on material-ui and next
cd ../material-ui-next
npm run build
