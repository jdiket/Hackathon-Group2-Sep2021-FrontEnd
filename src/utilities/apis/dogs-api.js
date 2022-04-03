import axios from 'axios'

const client = axios.create({
    baseURL: process.env.NODE_ENV === "production" 
    ? process.env.REACT_APP_DATABASE 
    : 'http://localhost:3003/'
  });

export const getAllDogs = async () => {
    const dogs = await client.get('/dogs')
    return dogs;
}

//If we do get around to posting dogs I will test this.
export const postOneDog = async (data) => {
    const dogs = await client.post('/dogs', data);
    return 'doggie added';
}

export const getOneDog = async (id) => {
    const dog = await client.post('/dogs' + id);
    return dog;
}

//Also not sure if this will work!
export const getDogsByDistance = async (id) => {
    const dogs = await client.post('/dogs/distance/' + id)
    return dogs;
}