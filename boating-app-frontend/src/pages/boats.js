import { useEffect, useState } from 'react';
import BoatForm from '../components/boatForm';
import BoatRegistration from '../components/boatRegistration';
import BoatsList from '../components/boatslist';
import getUserBoats from '../logic/boatslist';


function Boats() {


    const [boats, setBoats] = useState([])
    const [isBoatFormVisible, setisBoatFormVisible] = useState(false)
    const [editableBoatInfo, setEditableBoatInfo] = useState(false)

    const fetchBoats = async () => {
        const fetchedBoats = await getUserBoats()
        setBoats(fetchedBoats)
    }

    useEffect(() => {
        fetchBoats()
    }, [])


    const refreshBoats = async () => {
        setisBoatFormVisible(false)
        await fetchBoats();
    }

    const triggerNewBoatCreation = (event) => {
        event.preventDefault()
        setisBoatFormVisible(true)
    }

    const onUpdateBoatRequest = (boatId) => {
        console.log('Received update event for boat', boatId)
        setEditableBoatInfo(boats.find(boat => boat._id === boatId))
        setisBoatFormVisible(true)
    }

    return (
        <main className="w-screen min-h-screen bg-bone pt-10">
            <div>{isBoatFormVisible && <BoatForm onChange={refreshBoats} boatInfo={editableBoatInfo}></BoatForm>}

                <div className="flex justify-center">
                    <div className="w-11/12">
                        <BoatsList boatsList={boats} onUpdate={refreshBoats} onUpdateBoatRequest={onUpdateBoatRequest}></BoatsList>
                    </div>
                    <div>
                        <button onClick={triggerNewBoatCreation}>Add new boat</button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Boats