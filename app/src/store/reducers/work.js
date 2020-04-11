export default function work(state = {
  data: {},
  loading: false,
}, action) {
  switch (action.type) {
    case "WORK_RESET":
      return {
        data: {},
        loading: false
      };
    case "WORK_LOADOVER":
      return {
        loading: true,
        data: action.data
      }
  }
  return state;
}