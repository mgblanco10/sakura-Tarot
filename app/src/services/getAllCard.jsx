import axios from 'axios';

export const getAllCards = ()=>{
    return axios.get('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
      .then(response => {
       const {data} = response
       return data
      })
      .catch((error) => console.log(error));
}