#!/usr/bin/env sh
set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://gitee.com/tangzhengfeng_admin/a-idea-doc.git master:gh-pages

cd -
