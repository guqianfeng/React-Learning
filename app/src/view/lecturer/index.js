import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import Frame from '../../common/component/frame'
import LecturerTab from './tab'
import Join from './join'
import Footer from './footer'
import LecturerAlert from './lecturerAlert'
import getLecturers from '../../store/action/getLecturers'

import '../../common/css/teacher.css'

function Lecturer(props) {
  const [show, setShow] = useState(false);
  const [alertData, setAlertData] = useState(null);
  let { data, dispatch } = props;
  let newData = []; //一共拿到9个数据，3个一组
  function showAlert(data) {
    setShow(true);
    setAlertData(data);
  }
  useEffect(() => {
    dispatch(getLecturers())
  }, [])
  // console.log(data)
  for (let i = 0; i < data.length; i += 3) {
    newData.push([
      data[i],
      data[i + 1],
      data[i + 2]
    ])
  }
  // console.log(newData)
  return (
    <div>
      <Frame>
        <div className="teacher_banner">
          <h2><span>妙味团队</span></h2>
          <LecturerTab
            data={data}
            newData={newData}
            showAlert={showAlert}
          />
        </div>
        <Join />
        <Footer />
      </Frame>
      {show ? <LecturerAlert
          data={alertData}
        /> : ''}
    </div>
  )
}

export default connect(state => state.lecturers)(Lecturer)