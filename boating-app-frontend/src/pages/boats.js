import { useEffect, useState } from 'react';
import BoatRegistration from '../components/boatRegistration';
import BoatsList from '../components/boatslist';
import getUserBoats from '../logic/boatslist';




function Boats() {


    const [boats, setBoats] = useState([])

    const fetchBoats = async () => {
        const fetchedBoats = await getUserBoats()
        setBoats(fetchedBoats)
    }

    useEffect(() => {
        fetchBoats()
    }, [])


    const refreshBoats = async () => {
        await fetchBoats();
    }


    return (
        <main className="w-screen min-h-screen bg-bone pt-10">
            <div>
                <BoatRegistration onCreate={refreshBoats}></BoatRegistration>
                <div className="flex justify-center">
                    <div className="w-11/12">
                        <BoatsList boatsList={boats}></BoatsList>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Boats