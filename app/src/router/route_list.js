import React from 'react'

import Index from '../view/index/index'
import Course from '../view/course/index'
import Lectruer from '../view/lectruer/index'
import Login from '../view/login/index'
import Work from '../view/work/index'

const routeList = [
    {
        name: "首页",
        path: "/",
        exact: true,
        render(props){
            return <Index {...props}/>
        }
    },
    {
        name: "课程",
        path: "/course",
        exact: true,
        render(props){
            return <Course {...props}/>
        }
    },
    {
        name: "讲师团队",
        path: "/lectruer",
        exact: true,
        render(props){
            return <Lectruer {...props}/>
        }
    },
    {
        name: "登录注册",
        path: "/login",
        exact: true,
        render(props){
            return <Login {...props}/>
        }
    },
    {
        name: "作品",
        path: "/work",
        exact: true,
        render(props){
            return <Work {...props}/>
        }
    },
];

export default routeList;