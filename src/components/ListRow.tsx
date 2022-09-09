export const ListRow = ():JSX.Element => {
  return (
    <tr>
        <td className="p-2">
            <button className="py-2 w-full text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer">+1</button>
        </td>
        <td className="p-2">
            <input type="text" placeholder="visible" className="border-2 rounded-md py-2 pl-2 border-gray-400 w-full" />
        </td>
        <td className="p-2">
            <h3 className="text-3xl font-medium text-center">15</h3>
        </td>
        <td className="p-2">
            <button className="py-2 w-full text-white rounded-md bg-red-500 hover:bg-red-600 transition-colors cursor-pointer">Borrar</button>
        </td>
    </tr>
  )
}
