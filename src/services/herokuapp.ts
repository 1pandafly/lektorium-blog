import axios from "axios";

export default class Herokuapp {
    // axios = require('axios');
    _baseUrl = 'https://ekreative-json-server.herokuapp.com/';

    async getData(url: string) {
        // const res = await fetch(`${this._baseUrl}${url}`);
        return await axios.get(`${this._baseUrl}${url}`);
    }
}