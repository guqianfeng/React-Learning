# json-server

## [json-server github](https://github.com/typicode/json-server)

## [postman](https://learning.postman.com/)

## REST API

一句话总结 URI 代表资源/对象，METHOD 代表行为

```
GET /tickets/ // 列表
GET /tickets/12 // 详情
POST /tickets/ // 增加
PUT /tickets/12 // 替换
PATCH /tickets/12 // 修改
DELETE /tickets/12 // 删除
```

## json-server 体验过程

- 全局安装`npm i json-server -g`
- jira 根目录下新建`db.json`
  ```json
  {
    "users": []
  }
  ```
- 执行`json-server --watch db.json`
- 可以在 postman 中玩耍，用 REST API
  - 举个例子，新增，使用 post 请求，body 中选择 raw 和 json，在输入对应的 json 格式数据，在点击 send
  - crud 可自行体验下
- 项目中安装依赖`yarn add json-server -D`
- 根目录下新建文件夹`__json_server_mock__`
