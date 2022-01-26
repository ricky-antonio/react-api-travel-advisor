import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


// let defBounds = {
//     "ne": {
//         "lat": 32.74165742070585,
//         "lng": -117.12771186218262
//     },
//     "sw": {
//         "lat": 32.68973502287767,
//         "lng": -117.19448813781739
//     }
// };


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'a66e472fddmshcaaa062e6841783p11cfbajsna9560a6b44ab'
              }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}