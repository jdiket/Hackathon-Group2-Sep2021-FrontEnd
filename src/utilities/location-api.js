import axios from 'axios'
const LOCATIONS_URL = 'http://localhost:3003/places'

// export const getAllDogs = async () => {
//     const dogs = await axios.get(LOCATIONS_URL + '/')
//     return dogs;
// }

//If we do get around to posting dogs I will test this.
// export const postOneDog = async (data) => {
//     const dogs = await axios.post(LOCATIONS_URL + '/', data);
//     console.log(dogs);
//     return 'doggie added';
// }

export const getLocationById = async (id) => {
    const location = await axios.get(LOCATIONS_URL + '/' + id);
    console.log(location);
    return location.data;
}

//Also not sure if this will work!
// export const getDogsByDistance = async (id) => {
//     const dogs = await axios.post(LOCATIONS_URL + '/distance/' + id)
//     return dogs;
// }