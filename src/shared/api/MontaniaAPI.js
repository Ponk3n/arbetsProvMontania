import Axios from 'axios';

const MontaniaAPI = Axios.create({
    baseURL: 'https://swapi.dev/api/'
})



export default MontaniaAPI