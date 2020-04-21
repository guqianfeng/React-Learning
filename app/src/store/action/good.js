import HTTP from './http'
function getGood(id) {
  return function (dispatch) {
    return HTTP.post(`/lecturer/getgood`, {
      article_id: id
    })
      .then(res => {
        //  console.log(res);
        if (res.data.code == 0) {
          dispatch({
            type: "GOOD"
          })
        } else {
          dispatch({
            type: "CANCEL_GOOD"
          })
        }
      })
  }
}

export {
  getGood
}