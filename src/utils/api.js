/* This JavaScript code snippet is setting up a function `fetchDataFromApi` that makes an HTTP GET
request to a specified URL using the Axios library. Here's a breakdown of what each part of the code
is doing: */
import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": "da708d9f09mshf1e10b3d24948b1p1d0717jsn8e08350550e1",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
