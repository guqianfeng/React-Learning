import React from 'react'

function Works(props){
    console.log(props);
    return (
        <div className="works">
            <h3>学员作品</h3>
            <ul className="works_list clearfix">
                <li>
                    <a href="#">
                        <img src="images/work1.jpg" />
                        <span className="wrork_txt clearfix">
                            <strong>时空唱片机时空唱片机时空唱片机时空唱片机</strong>
                            <span>
                                <em>25</em>
                                <em>986</em>
                            </span>
                        </span>
                    </a>
                </li>
            </ul>
            <a className="more" href="#">上滑加载更多......</a>
        </div>        
    )
}

export default Works;