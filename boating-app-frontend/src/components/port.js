function Port({ portInfo }) {


    function convertToDms(dd, isLng) {
        var dir = dd < 0
            ? isLng ? 'W' : 'S'
            : isLng ? 'E' : 'N';

        var absDd = Math.abs(dd);
        var deg = absDd | 0;
        var frac = absDd - deg;
        var min = (frac * 60) | 0;
        var sec = frac * 3600 - min * 60;
        // Round it to 2 decimal points.
        sec = Math.round(sec * 100) / 100;
        return deg + "°" + min + "'" + sec + '"' + dir;
    }


    return (
        <>
            <div className="flex flex-col bg-white font-sans shadow-md">
                <div className="flex-none h-60 relative">
                    <img src={portInfo.imagePath} alt="" className="absolute inset-0 w-full h-full object-cover"></img>
                </div>
                <div className="p-2">
                    <div>
                        <h2 className="text-darkblue">{portInfo.name}</h2>
                        <div>
                            <div><span className="text-midblue font-semibold">Location:</span> {convertToDms(portInfo.coordinates[0], false)}
                                <span className="ml-1"></span>
                                {convertToDms(portInfo.coordinates[1], true)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            {portInfo.street},
                            {portInfo.postalCode},
                            {portInfo.town},
                            {portInfo.city},
                            {portInfo.country}
                        </p>
                        <p> {portInfo.contactNumber}</p>
                        <p>VHF: {portInfo.VHF}</p>

                    </div>

                    <div>
                        <p>Berths {portInfo.berths}</p>

                        {/* facilities icons */}
                    </div>

                </div>
            </div>
        </>
    )

}

export default Port