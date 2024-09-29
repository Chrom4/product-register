export const registerMutation = async (data) => {
  let status = {
    key: false,
    value: "Ocorreu um erro no seu cadastro...",
  };

  fetch("http://192.168.1.2:3000/api/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return status;
};
