#!/usr/bin/env sh
# Deploy dist/ to gh-pages branch (creates branch if it doesn't exist)
set -e
cd "$(dirname "$0")/.."

echo "Building..."
VITE_BASE="/AbhishekBasu-portfolio/" npm run build

REMOTE=$(git config --get remote.origin.url)
DEPLOY_DIR=$(mktemp -d)
trap "rm -rf $DEPLOY_DIR" EXIT

echo "Copying dist to $DEPLOY_DIR..."
cp -r dist/. "$DEPLOY_DIR/"
# Remove LFS pointer and attributes so push doesn't require LFS (app uses character.enc)
rm -f "$DEPLOY_DIR/models/character.glb" "$DEPLOY_DIR/models/.gitattributes" 2>/dev/null || true
cd "$DEPLOY_DIR"

git init
git add -A
git commit -m "Deploy to GitHub Pages"

git branch -M gh-pages
git remote add origin "$REMOTE"
git push -f origin gh-pages

echo "Done. gh-pages branch pushed to origin."
