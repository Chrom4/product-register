import { protocol, address, port } from "../../../server_config.json";

export const registerAction = async (data) => {
  let ret = {
    status: false,
    message: "Ocorreu um erro no seu cadastro...",
  };

  await fetch(`${protocol}://${address}:${port}/api/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      (ret.status = true), (ret.message = data);
    })
    .catch((error) => console.error(error));

  return ret;
};
