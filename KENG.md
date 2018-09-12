1. gitignore
    ```
    git rm -r --cached .
    git add .
    git commit -m "fixed untracked files"
    ```
2. vue integreted parcel
    ```
    //package.json
    "alias": {
        "vue" : "./node_modules/vue/dist/vue.common.js"
    }
    ```
3. css对齐  
    ```
    vertical-align: middle;
    ```
4. 使用npm run test测试失败,删除.cache和dist或者parcel build test/* --no-minify，重新run一次