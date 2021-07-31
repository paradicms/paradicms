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

for pid in "${pids[@]}"; do
  wait "$pid"
done


pids=()
# Depend on models
cd ../lunr
yarn build &
pids+=($!)

# Depends on models
cd ../next
yarn build &
pids+=($!)

# Depend on models
cd ../rdf
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


pids=()

# Depend on lunr and react
cd ../bootstrap
yarn build &
pids+=($!)

# Depend on models and react
cd ../lunr-react
yarn build &
pids+=($!)

# Depend on models and react
cd ../material-ui
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


# Depends on material-ui and next
cd ../material-ui-next
yarn build
