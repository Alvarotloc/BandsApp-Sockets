import { FC } from "react"

export const BandAdd:FC = ():JSX.Element => {
  return (
    <>
    <h2 className="font-semibold text-3xl mb-12">
        Agregar Banda
    </h2>
    <div className="flex space-x-2 w-full">
    <input type="text" placeholder="Ingrese el nombre de la banda" className="border-2 border-gray-400 rounded-md py-2 pl-2 w-2/3"/>
    <input type="submit" value="Añadir Banda" className="py-2 w-1/3 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer"/>
    </div>
    </>
  )
}
