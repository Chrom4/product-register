import { registerMutation } from "./registerMutation";

export const mutation = async (type, data) => {
  let status;

  switch (type) {
    case "register":
      try {
        status = await registerMutation(data);
      } catch (error) {
        console.error(error);
        status = { key: false, value: "Error occurred" };
      }
      break;
    case "login":
      try {
        status = await loginMutation(data);
      } catch (error) {
        console.error(error);
        status = { key: false, value: "Error occurred" };
      }
      break;
    default:
      status = { key: false, value: "Invalid mutation type" };
  }

  return status;
};
