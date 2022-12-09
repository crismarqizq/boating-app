
function BoatsList({ boatsList }) {

    return (
        <>
            <span>Boats list component</span>
            {boatsList.map(boat => (
                <div key={boat._id}>This is boat: {boat.name}</div>
            ))}
        </>
    )

}

export default BoatsList