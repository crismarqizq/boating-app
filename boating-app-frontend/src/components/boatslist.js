import { useEffect, useState } from "react";
import getUserBoats from "../logic/boatslist";

//FIXME: this doesnt work
function BoatsList() {

    const [boats, setBoats] = useState([])


    useEffect(() => {
        const fetchBoats = async () => {
            const fetchedBoats = await getUserBoats()
            setBoats(fetchedBoats)
        }
        fetchBoats()
    }, [])


    return (
        <>
            <div>
                {boats}
            </div>
        </>
    )

}

export default BoatsList