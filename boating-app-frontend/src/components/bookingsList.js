function BookingsList({ bookingsList, ports, boats }) {


    const portNameFromId = (portId) => {
        let portName = ''
        ports.forEach(port => {
            if (port._id === portId) {
                portName = port.name
            }
        });
        return portName
    }

    const boatNameFromId = (boatId) => {
        let boatName = ''
        boats.forEach(boat => {
            if (boat._id === boatId) {
                boatName = boat.name
            }
        });
        return boatName
    }


    return (
        <>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            From
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            To
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Port
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Boat
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookingsList.map(booking => (
                                        <tr key={booking._id} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {new Date(booking.startDate).toLocaleDateString()}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {new Date(booking.endDate).toLocaleDateString()}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {portNameFromId(booking.port)}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {boatNameFromId(booking.boat)}
                                            </td>

                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span>Edit</span>
                                                <span>Delete</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BookingsList