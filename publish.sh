gitbook build
cp -R _book/* publish
cd publish
# git init
git add -A
git commit -m 'Update docs'
git push git@github.com:tommyassociates/tommyassociates.github.io master --force
cd ..
