export const Button = ({
    disabled,
    children,
    onClick,
}) => {
    return <span onClick={!disabled ? onClick : undefined} className= {`inline-block text-center py-2 px-16 rounded-xl font-semibold
    ${disabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 cursor-pointer text-white"}`}>
        {children}
    </span>
}