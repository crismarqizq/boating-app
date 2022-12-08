
function BoatsList({ boatsList }) {

    return (
        <>
            {boatsList.map(boat => (
                <div>This is {boat.name}</div>
            ))}
        </>
    )

}

export default BoatsList