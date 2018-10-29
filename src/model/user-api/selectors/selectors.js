export default function selectorsGen(storeShape = {}) {
  const userPath = storeShape.user;

  const loggedIn = state => state.getIn(userPath).get("loggedIn");
  const token = state => state.getIn(userPath).get("token");

  return {
    loggedIn,
    token
  };
}
