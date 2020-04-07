import React from 'react'

function LecturerAlert(props) {
  let { data } = props;
  console.log(data)
  return (
    <aside className="elastic">
      <div className="elastic_box">
        <span className="close">关闭</span>
        <div className="elastic_img">
          <img src={data.icon} alt="" />
        </div>
        <div className="elastic_txt">
          <h3>{data.title}-妙味课堂 全职讲师</h3>
          <div className="elastic_content">
            <div
              dangerouslySetInnerHTML={{
                __html: data.content
              }}
            ></div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default LecturerAlert;