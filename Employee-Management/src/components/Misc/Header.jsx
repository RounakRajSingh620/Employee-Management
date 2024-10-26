
const Header = () => {
    return (
        <div className="flex items-end justify-between ">
            <h1 className="text-2xl font-medium"> Hello,
                <br />
                <span className="text-3xl font-semibold">Raunak✌️</span>
            </h1>
            <button className="px-5 py-2 text-lg text-white bg-red-600 rounded-sm">Log Out</button>
        </div>
    )
}

export default Header