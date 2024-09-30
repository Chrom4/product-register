import serverConfig from "../../server_config.json";

const { protocol, address, port } = serverConfig;

export const registerMutation = async (data) => {
  let status = {
    key: false,
    value: "Ocorreu um erro no seu cadastro...",
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
      (status.key = true), (status.value = data);
      console.log(data);
    })
    .catch((error) => console.error(error));

  return status;
};
