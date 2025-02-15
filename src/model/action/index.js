import { fetchAction } from "./fetchAction";
import { registerAction } from "./registerAction";

export const action = async (type, data) => {
  let ret;

  try {
    switch (type) {
      case "register":
        ret = await registerAction(data);
        break;

      case "login":
        ret = await loginAction(data);
        break;

      case "fetch":
        ret = await fetchAction(data);
        break;

      default:
        ret = { status: false, message: "Invalid action type" };
    }

    if (!ret.status) throw new Error(ret.message);
  } catch (error) {
    ret = { status: false, message: error };
  }

  return ret;
};
