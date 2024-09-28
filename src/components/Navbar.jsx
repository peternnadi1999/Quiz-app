const Navbar =()=>{
    return(

    <>
    <div className="bg-slate-500 w-full p-3">

    <nav className="flex justify-between container">
        <div>
            <h2 className="font-bold">Logo</h2>
        </div>
        <div>
            <button className="outline-none rounded-md text-white  px-3 py-2 bg-gray-800">Connect Wallet</button>
        </div>
    </nav>

    </div>
    </>
    )
}
export default Navbar;