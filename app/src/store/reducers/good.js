export default function good(state = false, action) {
  switch (action.type) {
    case "GOOD":
      return true;
    case "CAMCEL_GOOD":
      return false;
    case "RESET_GOOD":
      return false;
  }
  return state;
}