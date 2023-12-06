import './Header.css'
export default function Header() {
    return (
        // className="flex justify-between items-center p-4 border-b-2 border-gray-200"
        <header >
            <div className="flex-1">
                <input type="search" placeholder="Search" className="Search" />
            </div>
            {/* <div className="ml-4">
                <button className="my_page">
                    <div className="text-center">
                        <div className="mb-1" ></div>
                        <div>My</div>
                    </div>
                </button>
            </div> */}
        </header>

    )
}