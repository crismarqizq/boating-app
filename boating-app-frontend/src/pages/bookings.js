import { useEffect, useState } from "react";
import getPorts from "../logic/portsList";
import boatslist from "../logic/boatslist"
import BookingCreation from "../components/createBooking";

function Bookings() {

    // As long as we don't use a global store, we need to fetch ports and boats again
    const [ports, setPorts] = useState([])
    const [boats, setBoats] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            const fetchedPorts = await getPorts()
            const fetchedBoats = await boatslist()

            setPorts(fetchedPorts)
            setBoats(fetchedBoats)

        }
        fetchData()
    }, [])


    return (
        <main className="w-screen h-screen bg-bone pt-20">
            <BookingCreation boats={boats} ports={ports}></BookingCreation>
            <div>Here we should render bookings list</div>

        </main>
    )
}

export default Bookings