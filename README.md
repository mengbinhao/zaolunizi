## VUE UI组件

1. 全局样式 `margin: 0; padding: 0; box-sizing: border-box;`
2. 完成button基本样式第一版
3. 加入parcel,button改成Vue单文件组件
    - npx parcel index.html --no-cache --open  or C:\Users\OUR\Desktop\zaolunizi\node_modules\.bin\parcel
4. button添加icon
    - iconfont 生成矢量图链接
    - 使用svg
    - 添加icon逻辑不使用js 而使用css(inline-flex)
5. button添加loading
6. 单元测试
    - chai
    - chai spies (mock click)
    - 使用块隔绝作用域+断言
7. 自动化测试
    - Karma 测试运行器 呼起浏览器 加载测试脚本 运行测试脚本
    - Mocha 单元测试框架 写测试用例
    - Sinon  JavaScript test spies, stubs and mocks 辅助测试
    ```
    1 npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
    2 karma.cong.js
    3 test/button.test.js
    4 "scripts": {
        "dev-test": "parcel watch test/* --no-cache & karma start",
        "test": "parcel build test/* --no-minify && karma start --single-run"
      }
    5 npm run test
    ```
8. 持续集成 -> TravisCI / circleci
9. 发布npm package
    - 确保测试已通过
    - package.json -> main -> index.js(引入自己的组件再统一导出)
    - npm adduser
    - npm publish
    - mock用户如何使用自己的包 
        - vue-cli
            - 报错import语法有问题(babel转译)
                - npx parcel build index.js --no-minify(不加有bug)
                - main -> dist/index.js
        - webpack
        - parcel
    - npm link or yarn link(必须本机用户)
        - npm link xxxx


## knowledge point
- CSS variable
- CSS selector
- sass
- Vue.component -> 单文件组件
- slot / $emit / props
- Parcel
- chai -> assertion library
    - chai spies
- Karma -> Spectacular Test Runner for JavaScript
- Mocha -> test framewor
- sinon -> JavaScript test spies, stubs and mocks
- TravisCI / CircleCI
- package.json
    - npm link