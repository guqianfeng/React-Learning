import React, {Component, createContext} from 'react'

let {Provider, Consumer} = createContext();

class Children extends Component{
    render(){
        return (
            <Consumer>
                {
                    (ctx) => {
                        console.log(ctx)
                        return (
                            <div>
                                <h1>
                                    {/* Children - {ctx.info} */}
                                    Children - {ctx}
                                </h1>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

class Parent extends Component{
    render(){
        return (
            <div>
                <h1>
                    Parent
                </h1>
                <Children/>
            </div>
        )
    }
}

export default class Context extends Component{
    render(){
        return (
            // <Provider value={{info: '这是祖先传下去的宝贝啊'}}>
            <Provider value={'这是祖先传下去的宝贝啊'}>
                <div>
                    <h1>
                        useContext-1
                    </h1>
                    <Parent />
                </div>
            </Provider>
            
        )
    }
}