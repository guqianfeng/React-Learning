import React from 'react'

import Index from '../view/index/index'

const routeList = [
    {
        name: "首页",
        path: "/",
        exact: true,
        render(props){
            return <Index {...props}/>
        }
    },
];

export default routeList;