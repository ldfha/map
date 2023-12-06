export default function Footer() {

    return (
        <footer className="flex justify-between items-center p-4 bg-gray-50 border-t-2 border-gray-200">
            <button className="flex-1">
                <div className="text-center">
                    <div className="mb-1">🏠</div>
                    <div>Home</div>
                </div>
            </button>
            <button className="flex-1">
                <div className="text-center">
                    <div className="mb-1">📄</div>
                    <div>Posts</div>
                </div>
            </button>
            <button className="flex-1">
                <div className="text-center">
                    <div className="mb-1">🏢</div>
                    <div>Buildings</div>
                </div>
            </button>
            <button className="flex-1">
                <div className="text-center">
                    <div className="mb-1">🔔</div>
                    <div>Notifications</div>
                </div>
            </button>
        </footer>

    )
}