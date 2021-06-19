import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=baf8dd6e';
const axiosInstance = axios.create(configOMB);

export  const searchAPI = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`;
        return axiosInstance.get(query)
        .then(response => response.data);
    },
   
};


