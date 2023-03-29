export function ButtonAdmin({
    handle = function(){},
    className = "",
    children
}) {
    return <div
        className={`bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg cursor-pointer px-5 py-2 ${className}`}
        onClick={handle}
    >
        {children}
    </div>
}