import axios from 'axios'
const DOGS_URL = 'http://localhost:3003/dogs'

export const getAllDogs = async () => {
    const dogs = await axios.get(DOGS_URL + '/')
    return dogs;
}

//If we do get around to posting dogs I will test this.
export const postOneDog = async (data) => {
    const dogs = await axios.post(DOGS_URL + '/', data);
    console.log(dogs);
    return 'doggie added';
}

export const getOneDog = async (id) => {
    const dog = await axios.post(DOGS_URL + '/' + id);
    console.log(dog);
    return dog;
}

//Also not sure if this will work!
export const getDogsByDistance = async (id) => {
    const dogs = await axios.post(DOGS_URL + '/distance/' + id)
    return dogs;
}