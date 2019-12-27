import React, {Component, useState, useEffect} from 'react'

/* class Txt extends Component{

    componentWillUnmount(){
        console.log("组件将要卸载")
    }

    render(){
        let {msg, setEdit} = this.props;
        return (
            <p>
                <span>{msg}</span>
                <button onClick={() => {
                    setEdit(true)
                }}>修改</button>
            </p>
        )
    }
} */

/* class Effect extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg: "这个是测试用的msg",
            edit: false,
        }
        this.setEdit = this.setEdit.bind(this);
    }

    componentDidMount(){
        console.log("组件挂载好了")
    }

    componentDidUpdate(){
        console.log("组件更新好了")
    }

    setEdit(val){
        this.setState({
            edit: val
        })
    }

    render(){
        let {msg, edit} = this.state
        return (
            <div>
                <h1>useEffect</h1>
                {   
                    !edit ? 
                    (
                        <Txt msg={msg} setEdit={this.setEdit}/>
                    )
                    :
                    (
                        <input 
                            type="text" 
                            value={msg} 
                            onChange={e => {
                                this.setState({
                                    msg: e.target.value
                                })
                            }} 
                            onBlur={()=>{
                                this.setEdit(false)
                            }}
                        />
                    )
                } 
            </div>
        )
    }
} */


function Txt({msg, setEdit}){
    return (
        <p>
            <span>{msg}</span>
            <button onClick={() => {
                setEdit(true)
            }}>修改</button>
        </p>        
    )
}

function scrollFn(){
    // console.log(window.scrollY);
    let y = window.scrollY;
    let inputEle = document.getElementById("inputEle"); //这里先用low的方式，后面会讲到ref
    // console.log(inputEle, y);
    inputEle.style.transform = `translateY(${y}px)`;
}

function Edit({msg, setMsg, setEdit}){
    useEffect(() => {
        // console.log("挂载的时候搞事情");
        window.addEventListener("scroll", scrollFn);
        return () => {
            // console.log("卸载的时候搞事情")
            window.removeEventListener("scroll", scrollFn);
        }
    }, [])
    return (
        <input 
            id="inputEle" //这里先用low的方式，后面会讲到ref
            type="text" 
            value={msg} 
            onChange={e => {
                setMsg(e.target.value)
            }} 
            onBlur={()=>{
                setEdit(false)
            }}
        />
    )
}

function Effect(){
    const [edit, setEdit] = useState(false);
    const [msg, setMsg] = useState("这个是测试用的msg");
    return (
        <div>
            <h1>useEffect</h1>
            {   
                !edit ? 
                (
                    <Txt msg={msg} setEdit={setEdit}/>
                )
                :
                (
                    <Edit msg={msg} setMsg={setMsg} setEdit={setEdit}/>                    
                )
            } 
            {[...".".repeat(100)].map((item,index) => <p key={index}>这个是填充页面的啦</p>)}
        </div>
    )
}

export default Effect;