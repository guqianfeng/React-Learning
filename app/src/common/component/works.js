import React from 'react'

function Works(props){
    let {data, loadEnd, loading} = props;
    return (
        <div className="works">
            <h3>学员作品</h3>
            <ul className="works_list clearfix">
                {data.map(item => (
                    <li key={item.id}>
                        <a href="#">
                            <img src={item.icon} />
                            <span className="wrork_txt clearfix">
                            <strong>{item.title}</strong>
                                <span>
                                    <em>{item.message}</em>
                                    <em>{item.good}</em>
                                </span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <a className="more" href="#">{loadEnd ? "没有新的数据了" : (loading ? "正在加载中..." : "上滑加载更多")}</a>
        </div>        
    )
}

export default Works;