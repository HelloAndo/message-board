# Vue留言板

> 一个基于Vue的留言板练习作业

## 安装 & 启动

``` bash
# 安装依赖
npm install

# 启动应用 localhost:8080
npm run dev
```
## 项目结构

``` bash
.
├── config.js                   # 项目配置文件
├── build/                      # webpack 配置文件
│   └── ...
├── src/
│   ├── main.js                 # app 入口文件
│   ├── App.vue                 # app 主组件
│   ├── components/             # ui 组件
│   │   └── ...
│   └── assets/                 # 模块静态资源，会被 webpack 打包
│       └── ...
├── static/                     # 纯静态资源，打包是直接被复制
├── .babelrc                    # babel 配置
├── .eslintrc.js                # eslint 配置
├── index.html                  # index.html 模版
└── package.json                # 命令和依赖列表
```
