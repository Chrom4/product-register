import { registerMutation } from "./registerMutation";

export const mutation = (type, data) => {
  let status;

  switch (type) {
    case "register":
      status = registerMutation(data);
  }

  return status;
};
