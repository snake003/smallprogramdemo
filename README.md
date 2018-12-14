# livescore

> livescore

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

1、工具：WebStorm、微信小程序开发原生工具
2、选择mpvue框架，有以下优点：
    *与vue.js项目开发类似，低学习成本
    *可以直接使用html标签进行界面布局，也可以使用微信的组件
    *可以使用npm包、支持ES2015特性、支持自定义组件等
    *可以引入iview组件（第三方组件库）
    *可以使用vue-i18n进行多语言的切换
  坑：
    *除了绑定事件意外，模版内不可以使用methods内的函数，可以使用计算属性代替
    *不能直接使用<template>标签进行for循环渲染内容（原h5项目是可以这么使用的）
    *另外有坑的需注意，参考链接
    https://www.imooc.com/article/40127?block_id=tuijian_wz
    https://www.jianshu.com/p/184db91b101d
3、mpvue项目里，找到"mpvue-loader": 把后面版本号前的^符号去去掉，然后再npm install，有^的话就会自动安装最新的包，兼容性有问题。
4、在进行开发的过程中，发现每次设置数据的长度是有限的，如果设置数据长度超出会报错，所以每次设置数据尽可能只设置有用到或有改变的数据。
5、使用第三方组件iview，参考https://weapp.iviewui.com/docs/guide/start
6、mpvue项目多语言参考，https://segmentfault.com/a/1190000015008808
7、mpvue开发文档，http://mpvue.com/mpvue/#-html
8、示例项目地址：https://github.com/snake003/smallprogramdemo
    下载打开后，
    *执行npm install
    *再执行npm run dev
    *使用微信小程序打开此项目即可运行
    参考其他小程序，做了几个组件可供使用，后续根据参考小程序添加另外的内容。
    
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
