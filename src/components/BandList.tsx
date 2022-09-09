import { FC } from "react"
import { ListRow } from "./"

export const BandList:FC = ():JSX.Element => {
  return (
    <>
        <h2 className="font-semibold text-3xl mb-5">Listado de Bandas</h2>
        <table className="w-full">
            <thead className="border-b-2 border-black">
                <tr>
                    <th className="text-center">
                        Votar
                    </th>
                    <th className="text-center">
                        Nombre
                    </th>
                    <th className="text-center">
                        Votos
                    </th>
                    <th className="text-center">
                        Borrar
                    </th>
                </tr>
            </thead>
            <tbody>
                <ListRow />
            </tbody>
        </table>
    </>
  )
}
