export function sidebar1() {
    return <div className="flex">
        <div className="transition-all duration-1000 sm:w-96 w-0 h-screen">
            Sidebar
        </div>
        <div className="bg-green-300 w-full h-screen">
            Content
        </div>
    </div>
}