export default function InputForm({value, setValue, placeholder, type, required}) {
    return (
        <div className="pb-4">
            <input
                required={required}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type || 'text'}
                placeholder={placeholder}
                className="w-full px-4 py-2  text-gray-700 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
            />
        </div>
    )
}