import { useEffect, useState } from 'react';
import registerBoat from '../logic/registerBoat';
import updateBoat from '../logic/updateBoat';

function BoatForm({ onChange, boatInfo }) {


    const [isEditMode, setIsEditMode] = useState(false)
    const [formValues, setFormValues] = useState({
        name: '',
        flag: '',
        regNumber: '',
        sail: true,
        length: '',
        beam: '',
        draft: ''
    })

    const saveForm = async (event) => {

        event.preventDefault();

        const form = event.target


        const isSailboat = form.sail.value === 'yes' ? true : false

        const boatFormInfo = {
            name: form.boatName.value,
            flag: form.flag.value,
            regNumber: form.regNumber.value,
            sail: isSailboat,
            length: form.length.value,
            beam: form.beam.value,
            draft: form.draft.value

        }
        console.log(boatFormInfo)



        try {
            if (isEditMode) {
                await updateBoat(boatInfo._id, boatFormInfo)
            } else {
                await registerBoat(boatFormInfo)
            }

            await onChange();
        } catch (error) {
            alert(error.message)
        }
    }


    useEffect(() => {
        if (boatInfo) {
            console.log('BoatForm mounted in edit mode')
            setIsEditMode(true)
            setFormValues(boatInfo)
        } else {
            console.log('BoatForm mounted in create mode')
        }
    }, [boatInfo])

    return (<>

        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-2/3 ">
                <form onSubmit={saveForm}>
                    <div className="flex justify-center">
                        <div className="flex-col w-1/2 mr-4">
                            <div className="form-group mb-6">
                                <label htmlFor="nameInput" className="form-label inline-block mb-2 text-gray-700">Boat name</label>
                                <input
                                    type="text"
                                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                    id="nameInput"
                                    name="boatName"
                                    defaultValue={formValues.name}
                                    placeholder="Enter boat's name" />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="boatFlagInput" className="form-label inline-block mb-2 text-gray-700">Flag</label>
                                <input type="text"
                                    className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="boatFlagInput"
                                    name="flag"
                                    defaultValue={formValues.flag}
                                    placeholder="Registration flag" />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="regNumberInput" className="form-label inline-block mb-2 text-gray-700">Registration number</label>
                                <input type="text"
                                    className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="regNumberInput"
                                    name="regNumber"
                                    defaultValue={formValues.regNumber}
                                    placeholder="Registration number" />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="sailInput" className="form-label inline-block mb-2 text-gray-700">Type</label>
                                <select className="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="sailInput"
                                    name="sail"
                                    aria-label="Boat type selector"
                                    defaultValue={!isEditMode && formValues.sail === true ? 'yes' : 'no'}
                                    disabled={isEditMode}>
                                    <option value="no">Power</option>
                                    <option value="yes">Sail</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-col w-1/2">
                            <div className="form-group mb-6">
                                <label htmlFor="lengthInput" className="form-label inline-block mb-2 text-gray-700">Length (m)</label>
                                <input type="number" step="any" min="0"
                                    className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="lengthInput"
                                    name="length"
                                    defaultValue={formValues.length}
                                    placeholder="Length in meters" disabled={isEditMode} />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="beamInput" className="form-label inline-block mb-2 text-gray-700">Beam (m)</label>
                                <input type="number" step="any" min="0"
                                    className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="beamInput"
                                    name="beam"
                                    defaultValue={formValues.beam}
                                    placeholder="Beam in meters" disabled={isEditMode} />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="draftInput" className="form-label inline-block mb-2 text-gray-700">Draft (m)</label>
                                <input type="number" step="any" min="0"
                                    className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="draftInput"
                                    name="draft"
                                    defaultValue={formValues.draft}
                                    placeholder="Draft in meters" disabled={isEditMode} />
                            </div>

                        </div>
                    </div>


                    <button type="submit"
                        className="w-full
                                    px-6
                                    py-2.5
                                    bg-midgreen
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out">
                        {isEditMode ? "Save Changes" : "Add boat"}
                    </button>
                </form>

            </div>
        </div>

    </>
    )

}

export default BoatForm