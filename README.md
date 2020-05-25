# vue-admin-system
本项目参考花裤衩的[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)这个简易模板，自定制符合个人习惯的管理后台模板。在此先感谢大佬。

**更完善的版本后续更新...**

## 分支
- `easy-template`：简易模板，不包含权限控制以及更多组件

## 路由配置项
```js
// 设置为 true 时，不会显示在侧边栏
hidden: true,

// 是否总显示根节点（侧边栏中）
alwaysShow: true,

meta: {
    // 设置该路由在侧边栏和面包屑中展示的名字
    title:'title',

    // 设置该路由的图标，
    // 如 user 表示使用 element 自带的 user 图标
    // 若加上前缀 _ ，_user 表示使用自定义图标，自定义图标在阿里 iconfont 下载，引入 @/assets/font 即可
    icon:'user'
}
```