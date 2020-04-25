export default function messageList(state = {
  messageList: [],
  loading: false,
  loadEnd: false,
  page: 1
}, action) {
  switch (action.type) {
    case "MESSAGE_LOAD":
      return {
        ...state,
        loading: true
      };
    case "MESSAGE_LOADOVER":
      return {
        ...state,
        loading: false,
        page: ++state.page,
        messageList: state.messageList.concat(action.messageList), //这里拼接下数据
      }
    case "MESSAGE_LOADEND":
      return {
        ...state,
        loadEnd: true
      }
    case "MESSAGE_RESET":
      return {
        messageList: [],
        loading: false,
        loadEnd: false,
        page: 1
      }
  }
  return state;
}