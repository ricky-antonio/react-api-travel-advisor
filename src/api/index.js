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


export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '33b28bf3b1msh54438d2006653bdp1b8040jsn04561df521b2'
              }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}