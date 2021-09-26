import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:3003/dogs'
  });

export const getAllDogs = async () => {
    const dogs = await client.get('/')
    return dogs;
}

//If we do get around to posting dogs I will test this.
export const postOneDog = async (data) => {
    const dogs = await client.post('/', data);
    return 'doggie added';
}

export const getOneDog = async (id) => {
    const dog = await client.post('/' + id);
    return dog;
}

//Also not sure if this will work!
export const getDogsByDistance = async (id) => {
    const dogs = await client.post('/distance/' + id)
    return dogs;
}