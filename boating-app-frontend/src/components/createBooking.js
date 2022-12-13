// get rid of this compo when merged to booking form
// import { useState } from "react";

// import createBooking from "../logic/createBooking";


// function BookingCreation({ onCreate, boats, ports }) {

//     const [startDate, setStartDate] = useState()
//     const [endDate, setEndDate] = useState()



//     const createNewBooking = async (event) => {
//         event.preventDefault();

//         const form = event.target

//         const bookingInfo = {
//             startDate,
//             endDate,
//             portId: form.port.value,
//             boatId: form.boat.value,
//         }

//         try {
//             await createBooking(bookingInfo)
//             await onCreate()

//         } catch (error) {
//             alert(error.message)
//         }

//     }



//     return (
//         <div className="flex justify-center">
//             <div className="block p-6 rounded-lg shadow-lg bg-white w-2/3 ">
//                 <form onSubmit={createNewBooking} >
//                     <div className="flex justify-center">
//                         <div className="flex-col w-1/2 mr-4">
//                             <div className="form-group mb-6">
//                                 <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
//                                     <input type="date"
//                                         className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                         placeholder="Select a date" data-mdb-toggle="datepicker"
//                                         onChange={(e) => { setStartDate(e.target.value) }} />
//                                     <label htmlFor="floatingInput" className="text-gray-700">Select arrival date</label>
//                                 </div>
//                             </div>
//                             <div className="form-group mb-6">
//                                 <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
//                                     <input type="date"
//                                         className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                         placeholder="Select a date" data-mdb-toggle="datepicker"
//                                         onChange={(e) => { setEndDate(e.target.value) }} />
//                                     <label htmlFor="floatingInput" className="text-gray-700">Select departure date</label>
//                                 </div>
//                             </div>
//                             <div className="form-group mb-6">
//                                 <label htmlFor="portInput" className="form-label inline-block mb-2 text-gray-700">Where would you like to stay?</label>
//                                 <select className="form-select appearance-none block
//                                 w-full px-3 py-1.5 text-base font-normal
//                                 text-gray-700  bg-white bg-clip-padding bg-no-repeat
//                                 border border-solid border-gray-300 rounded transition
//                                 ease-in-out  m-0
//                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                     id="portInput"
//                                     name="port"
//                                     aria-label="Port selector"
//                                     defaultValue={"no"}>
//                                     {ports.map(port => (
//                                         <option key={port._id} value={port._id}> {port.name}</option>)
//                                     )}
//                                 </select>
//                             </div>
//                             <div className="form-group mb-6">
//                                 <label htmlFor="userBoatInput" className="form-label inline-block mb-2 text-gray-700">Which boat are you travelling with?</label>
//                                 <select className="form-select appearance-none
//                                 block w-full
//                                 px-3  py-1.5
//                                 text-base  font-normal
//                                 text-gray-700 bg-white bg-clip-padding bg-no-repeat
//                                 border border-solid border-gray-300  rounded   transition
//                                 ease-in-out m-0
//                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                     id="userBoatInput"
//                                     name="boat"
//                                     aria-label="Boat selector">
//                                     {boats.map(boat => (
//                                         <option key={boat._id} value={boat._id}> {boat.name}</option>)
//                                     )}
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="flex-col w-1/2"></div>
//                     </div>

//                     <button type="submit"
//                         className="w-full
//                                 px-6
//                                 py-2.5
//                                 bg-midgreen
//                                 text-white
//                                 font-medium
//                                 text-xs
//                                 leading-tight
//                                 uppercase
//                                 rounded
//                                 shadow-md
//                                 hover:bg-blue-700 hover:shadow-lg
//                                 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//                                 active:bg-blue-800 active:shadow-lg
//                                 transition
//                                 duration-150
//                                 ease-in-out">
//                         Confirm booking
//                     </button>
//                 </form>

//             </div >
//         </div >

//     )

// }
// export default BookingCreation

