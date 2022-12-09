import axios from "axios";

async function createBooking(bookingInfo) {

    const response = await axios.post('http://localhost:8080/booking', bookingInfo)
    return response.data


}

export default createBooking