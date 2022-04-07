import axios from "axios";

const BACKEND_URL =
  "https://react-native-form-layout-default-rtdb.firebaseio.com";

export async function getData() {
  const responseData = await axios.get(BACKEND_URL + "/userData.json");

  const response = [];

  for (const key in responseData.data) {
    const responseObj = {
      id: key,
      name: responseData.data[key].name,
      age: responseData.data[key].age,
      DOB: responseData.data[key].DOB,
      password: responseData.data[key].password,
    };
    response.push(responseObj);
  }
  return response;
}

export function addData(userData) {
  axios.post(BACKEND_URL + "/userData.json", userData);
}
