#!/bin/bash

set -eu

cd "$(dirname "$0")"

# Run parallel commands and fail if any of them fails.
# Start in a lib/ subdirectory so that all commands look similar
cd models


pids=()
# No dependencies
cd ../models
yarn build &
pids+=($!)

# No dependencies
cd ../react
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


pids=()
# Depend on models and react
cd ../bootstrap
yarn build &
pids+=($!)

# Depend on models and react
cd ../material-ui
yarn build &
pids+=($!)

# Depend on models
cd ../rdf
yarn build &
pids+=($!)

# Depends on react
cd ../next
yarn build &
pids+=($!)

# Depends on models
cd ../services
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


pids=()
# Depend on models and services
cd ../lunr
yarn build &
pids+=($!)

# Depends on material-ui and next
cd ../material-ui-next
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done


pids=()
# Depend on lunr and react
cd ../lunr-react
yarn build &
pids+=($!)

for pid in "${pids[@]}"; do
  wait "$pid"
done
