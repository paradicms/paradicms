#!/bin/bash

set -eu

cd "$(dirname "$0")"

# Run parallel commands and fail if any of them fails.
pids=()

# No dependencies
cd models
yarn build

# No dependencies
cd ../react
yarn build &
pids+=($!)

# No dependencies
cd ../next
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done



# Depends on models
cd ../model-utils
yarn build


pids=()
# Depend on models and model-utils
cd ../lunr
yarn build &
pids+=($!)

# Depend on models and model-utils
cd ../rdf
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


pids=()
# Depend on models, model-utils, and lunr
cd ../bootstrap
yarn build &
pids+=($!)

# Depend on models, model-utils, and lunr
cd ../material-ui
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


# Depends on material-ui and next
cd ../material-ui-next
yarn build
