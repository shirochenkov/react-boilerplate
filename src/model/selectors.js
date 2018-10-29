import app from "./app/selectors";
import user from "./user-api/selectors";

const storeShape = {
  app: ["app"],
  user: ["user"]
};

export default {
  app: app(storeShape),
  user: user(storeShape)
};
