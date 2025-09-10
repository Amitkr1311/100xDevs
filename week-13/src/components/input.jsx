export const Input = ({
    type,
    onClick,
    placeholder
}) => {
    return <span onClick={onClick} className= {`inline-block text-center py-1 px-2 border border-gray-500 focus:border-blue-400 rounded-xl 
    font-semibold mb-6  
    "bg-blue-500 text-white"`}>
        <input type={type} placeholder={placeholder} onClick={onClick} className="w-full bg-transparent text-white placeholder-gray-400 placeholder:text-sm placeholder:italic focus:outline-none"></input>
    </span>
}