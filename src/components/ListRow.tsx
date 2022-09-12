import React, { FC } from "react";
import { IBanda } from "../interfaces";

export const ListRow: FC<{
  band: IBanda;
  bands: IBanda[];
  setBands: Function;
  votar : Function;
  borrarBanda:Function;
  cambiarBanda : Function;
}> = ({ band, bands, setBands, votar, borrarBanda, cambiarBanda }): JSX.Element => {
  const { id, nombre, votos } = band;
  const cambioNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoNombre = e.target.value;
    setBands(bands.map((band) => {
        if(band.id === id){
            band.nombre = nuevoNombre;
        }
        return band;
    }))
  };
  const onPerdioFoco = () => {
    cambiarBanda(id,nombre);
  }
  return (
    <tr>
      <td className="lg:p-2">
        <button onClick={() => votar(id)} className="py-2 w-full text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer">
          +1
        </button>
      </td>
      <td className="p-2">
        <input
          type="text"
          placeholder="visible"
          value={nombre}
          onChange={(e) => cambioNombre(e)}
          onBlur={onPerdioFoco}
          className="border-2 rounded-md py-2 pl-2 border-gray-400 w-full"
        />
      </td>
      <td className="p-2">
        <h3 className="text-3xl font-medium text-center">{votos}</h3>
      </td>
      <td className="lg:p-2">
        <button onClick={() => borrarBanda(id)} className="py-2 w-full text-white rounded-md bg-red-500 hover:bg-red-600 transition-colors cursor-pointer">
          Borrar
        </button>
      </td>
    </tr>
  );
};
