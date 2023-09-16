import axios from "axios";

export async function getSongs(termName){
    const URL = `https://itunes.apple.com/search?term=${termName}&country=in`;

   const response = await axios.get(URL);
   // Response comes with data containing Results
   console.log(response.data['results']);

    return response.data['results'];
}