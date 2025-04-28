#!/bin/sh
set -e

npm run generate

cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/williambrooks84/Multi-Step-Form.git master:gh-pages

cd -d