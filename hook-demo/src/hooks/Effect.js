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
    useEffect(() => {
        return () => {
            console.log("组件要卸载了")
        }
    })
    return (
        <p>
            <span>{msg}</span>
            <button onClick={() => {
                setEdit(true)
            }}>修改</button>
        </p>        
    )
}

function Effect(){
    const [edit, setEdit] = useState(false);
    const [msg, setMsg] = useState("这个是测试用的msg");
    useEffect(() => {
        console.log("状态有改变");
    })
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
                    <input 
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
        </div>
    )
}

export default Effect;