import { useEffect, useState } from "react";
import getPorts from "../logic/portsList";
import boatslist from "../logic/boatslist"
import BookingsList from "../components/bookingsList";
import getUserBookings from "../logic/bookingsList";
import BookingForm from "../components/bookingForm";

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
        <main className="w-screen min-h-screen bg-bone pt-10">
            <div>
                <BookingForm boats={boats} ports={ports} onUpdate={refreshBookings}></BookingForm>

                <div className="flex justify-center">
                    <div className="w-11/12">
                        <BookingsList bookingsList={bookings} ports={ports} boats={boats} onUpdate={refreshBookings} ></BookingsList>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Bookings