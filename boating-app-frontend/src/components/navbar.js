import { useContext } from "react"
import UserContext from "../UserContext"

function Navbar() {

    const { user } = useContext(UserContext)


    return (
        <header className="fixed flex justify-between bg-midblue p-3 w-full text-white text-lg">

            {/* <span id="username-header-span" >Hello {user.name}!</span>
            <button onClick={logoutHandler}><AiOutlineLogout /> </button> */}
            <h2>Hello {user.name}</h2>

        </header >

    )
}
export default Navbar