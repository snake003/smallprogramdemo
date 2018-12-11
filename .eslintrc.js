// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "class-methods-use-this": "off",
    "indent": [0, 4, { "SwitchCase": 1 }],
    "quotes": [0, "double", "avoid-escape"],// 强制使用一致的反勾号、双引号或单引号
    "comma-dangle": [1, "never"],// 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，// always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "max-len": [1, 1000],// 强制一行的最大长度
    "global-require": 0,// 要求 require() 出现在顶层模块作用域中
    "no-plusplus": 0,// 禁止使用一元操作符 ++ 和 --
    "radix": 0,// 强制在parseInt()使用基数参数
    "object-curly-spacing": 0,// 强制在花括号中使用一致的空格
    "rest-spread-spacing": 0,
    "no-unused-vars": [0, { "vars": "all", "args": "none" }],// 禁止出现未使用过的变量
    "no-unused-expressions": 0,// 禁止出现未使用过的表达式
    "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"] }],// 强制在注释中 // 或 /* 使用一致的空格
    "eol-last": 0,// 文件末尾强制换行
    "no-prototype-builtins": 0,// 禁止直接使用 Object.prototypes 的内置属性
    "default-case": 0,// switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
    "no-case-declarations": 0// 不允许在 case 子句中使用词法声明
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    requirePlugin: true
  }
};
