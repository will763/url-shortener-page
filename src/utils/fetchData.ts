import { default as axios } from "axios";

async function fetch(url:string) {
    const payload = {originURL : url};
    const resnponse  = await axios.post("https://url-shortener-api1.herokuapp.com/shorten",payload);
    return resnponse.data;
}

export default fetch;