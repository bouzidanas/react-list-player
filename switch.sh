#!/bin/bash

# Get first parameter from command line and save in variable called type
type=$1

echo "updating package.json..."

if [ "$type" == "lib" ]; then
    # Replace contents of package.json with lib-mode-package.json
    cp lib-mode-package.json package.json
    cp lib-mode-vite.config.ts vite.config.ts
elif [ "$type" == "demo" ]; then
    # Replace contents of package.json with lib-mode-package.json
    cp demo-mode-package.json package.json 
    cp demo-mode-vite.config.ts vite.config.ts
elif ["$type" == ""]; then
    echo "No command parameter provided. Must be 'core' or 'base'"
    exit 1
else
    echo "Invalid command parameter. Must be 'lib' or 'demo'"
    exit 1
fi