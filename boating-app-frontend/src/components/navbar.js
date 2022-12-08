import { useContext } from "react"
import UserContext from "../UserContext"

function Navbar() {

    const { user, setUser } = useContext(UserContext)


    const logoutHandler = () => {
        try {
            setUser(null)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <header className="fixed flex justify-between bg-midblue w-full text-white text-lg">


            <button onClick={logoutHandler}> logout</button>
            <h2>Hello {user.name}</h2>

        </header >

    )
}
export default Navbar