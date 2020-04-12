import React from 'react'
import Tab from '../../common/component/tab'
import Article from './article'

export default function Main (props) {
  let { data } = props;
  return (
    <div className="work-details">
      <Tab
        data={ data.image_path.map(item => item.path) }
        render={(src) => <img src={src}/>}
      />
      <div className="miiaov_box">
        <Article
          data={ data }
        />
      </div>
    </div>
  )
}