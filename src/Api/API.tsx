import axios from 'axios';
import {  MovieType } from '../Movies/movieReducer';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=baf8dd6e';
const axiosInstance = axios.create(configOMB);

export const searchAPI = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`;
        return axiosInstance.get<ResponseType>(query)
            .then(response => response.data);
    },

};

export type ResponseType = {
    Response: 'True' | 'False'
    Error?: 'string'
    Search: MovieType[]
  }
  