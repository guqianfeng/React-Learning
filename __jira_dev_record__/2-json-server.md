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
- 根目录下新建文件夹`__json_server_mock__`, 创建一样的`db.json`
- `package.json`中增加脚本`"json-server": "json-server __json_server_mock__/db.json --watch"`
- 根目录下新建文件夹`__json_server_mock__`

## 登陆接口模拟

- `__json_server_mock__`文件夹下新建`middleware.js`

```js
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'gqf' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: '123456'
                }
            })
        } else {
            return res.status(400).json({
                msg: '用户名密码错误'
            })
        }
    }
    next()
}
```

- `package.json`中`json-server`脚本追加中间件参数`json-server --watch --port 3001 __json_server_mock__/db.json --middlewares __json_server_mock__/middleware.js`

- 简单写个登陆组件，代码如下
```tsx
import React, {useState} from 'react'

const domain = process.env.REACT_APP_API_URL

export default function Login() {
    const [loginParam, setLoginParam] = useState({
        username: '',
        password: ''
    })
    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={loginParam.username} onChange={e => {
                setLoginParam({
                    ...loginParam,
                    username: e.target.value
                })
            }}/>
            <input type="password" value={loginParam.password} onChange={e => {
                setLoginParam({
                    ...loginParam,
                    password: e.target.value
                })
            }}/>
            <button onClick={() => {
                fetch(`${domain}/login`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginParam)
                }).then(async response => {
                    if (response.ok) {
                        console.log(await response.json())
                    }
                })
            }}>Login</button>
        </div>
    )
}
```
