function Login() {


    return (
        <main className="h-screen w-screen flex flex-row items-center justify-center">
            <div className="w-5/12 h-screen bg-darkblue flex flex-col justify-center items-center">
                <div className="login-form bg-bone flex p-4">
                    <form>
                        <label>User</label>
                        <input></input>
                        <label className="mt-4">Password</label>
                        <input></input>
                    </form>
                </div>
            </div>
            <div className="login-background-image w-7/12 h-screen bg-midblue ">World</div>
        </main>
    )
}

export default Login