import axios from "axios";

async function registerUser(name, surname, birthDate, idNumber, email, contactNumber, address, password) {



    const response = await axios.post('http://localhost:8080/register', { name, surname, birthDate, idNumber, email, contactNumber, address, password })
    return response.data


}

export default registerUser