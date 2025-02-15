import { protocol, address, port } from "../../../server_config.json";

export const fetchAction = async (data) => {
  let ret = {
    status: false,
    message: "Ocorreu um erro ao buscar os dados...",
  };

  await fetch(
    `${protocol}://${address}:${port}/api/data?collection=${
      data.collection
    }&query=${data.query || "{}"}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      (ret.status = true), (ret.message = ""), (ret.data = data);
    })
    .catch((error) => console.error(error));

  return ret;
};
