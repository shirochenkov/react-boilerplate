export default function selectorsGen(storeShape = {}) {
  const appPath = storeShape.app;

  const uploadUserProfile = state =>
    state.getIn(appPath).get("uploadUserProfile");

  return {
    uploadUserProfile
  };
}
