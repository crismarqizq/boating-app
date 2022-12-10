import { useEffect, useState } from "react";
import getPorts from "../logic/portsList";
import boatslist from "../logic/boatslist"
import BookingCreation from "../components/createBooking";
import BookingsList from "../components/bookingsList";
import getUserBookings from "../logic/bookingsList";




function Bookings() {

    // As long as we don't use a global store, we need to fetch ports and boats again
    const [ports, setPorts] = useState([])
    const [boats, setBoats] = useState([])
    const [bookings, setBookings] = useState([])




    useEffect(() => {
        const fetchData = async () => {
            const fetchedPorts = await getPorts()
            const fetchedBoats = await boatslist()
            const fetchedBookings = await getUserBookings()

            setPorts(fetchedPorts)
            setBoats(fetchedBoats)
            setBookings(fetchedBookings)


        }
        fetchData()
    }, [])

    const refreshBookings = async () => {
        const refreshedBookings = await getUserBookings()
        setBookings(refreshedBookings)
    }


    return (
        <main className="w-screen h-screen bg-bone pt-20">
            <BookingCreation onCreate={refreshBookings} boats={boats} ports={ports}></BookingCreation>
            <div>
                <BookingsList bookingsList={bookings} ports={ports} boats={boats} ></BookingsList>
            </div>

        </main>
    )
}

export default Bookings