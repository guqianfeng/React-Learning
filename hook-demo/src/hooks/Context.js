import React, {Component, createContext, useContext} from 'react'

// let {Provider, Consumer} = createContext();
let myContext = createContext();

class Children extends Component{
    static contextType = myContext;
    render(){
        console.log(this.context)
        return (
            <div>
                <h1>
                    Children - {this.context}
                </h1>
            </div>
        )
    }
}

function Child(){
    // console.log("useContext",useContext(myContext))
    let info = useContext(myContext);
    return (
        <div>
            <h1>
                Child - {info}
            </h1>
        </div>       
    )
}

// function Child(){
//     return (
//         <myContext.Consumer>
//             {
//                 (ctx) => {
//                     console.log(ctx)
//                     return (
//                         <div>
//                             <h1>
//                                 Child - {ctx}
//                             </h1>
//                         </div> 
//                     )
//                 }
//             }
//         </myContext.Consumer>
               
//     )
// }

// class Children extends Component{
//     render(){
//         return (
//             <Consumer>
//                 {
//                     (ctx) => {
//                         console.log(ctx)
//                         return (
//                             <div>
//                                 <h1>
//                                     {/* Children - {ctx.info} */}
//                                     Children - {ctx}
//                                 </h1>
//                             </div>
//                         )
//                     }
//                 }
//             </Consumer>
//         )
//     }
// }

class Parent extends Component{
    render(){
        return (
            <div>
                <h1>
                    Parent
                </h1>
                <Children/>
                <Child/>
            </div>
        )
    }
}

export default class Context extends Component{
    render(){
        return (
            // <myContext.Provider value={{info: '这是祖先传下去的宝贝啊'}}>
            <myContext.Provider value={'这是祖先传下去的宝贝啊'}>
                <div>
                    <h1>
                        useContext-1
                    </h1>
                    <Parent />
                </div>
            </myContext.Provider>
            
        )
    }
}