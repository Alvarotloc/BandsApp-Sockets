import { FC, useState, useEffect } from 'react';
import { IBanda } from "../interfaces"
import { ListRow } from "./"

export const BandList:FC<{bands: IBanda[]}> = ({bands}):JSX.Element => {
    const [bandas, setBandas] = useState<IBanda[]>([]);
    useEffect(() => {
        setBandas(bands)
    },[bands])

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
                {bandas.length > 0 && bandas.map(band => {
                    return <ListRow key={band.id} nombre={band.nombre}/>
                })}
            </tbody>
        </table>
    </>
  )
}
