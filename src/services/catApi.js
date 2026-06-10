import axios from "axios";

export async function getCats() {
    const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10"
    );

    return response.data;
}