import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () =>{
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};

const create = personObject =>{
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const update = () =>{

}


export default { 
    getAll: getAll, 
    create: create, 
    update: update 
  }
