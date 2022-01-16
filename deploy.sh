#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git clone https://github.com/melody-core/rem.github.io.git rem
rm -rf rem/.git
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/melody-core/melody-core.github.io.git master
