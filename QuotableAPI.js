const axios = require('axios');

const uri = "https://api.quotable.io/random";

const getData = async () => {
    const response = await axios.get(uri);
    return response.data.content.split(" ");
};

module.exports = getData;