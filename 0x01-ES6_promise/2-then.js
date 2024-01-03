export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => ({
      status: 200,
      body: "Sucess",
    }))
    .catch((error) => new Error())
    .finally(() => console.log("Got a response from the API"));
}
