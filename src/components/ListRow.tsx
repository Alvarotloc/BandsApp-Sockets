import React, { FC } from "react";
import { IBanda } from "../interfaces";
import { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

export const ListRow: FC<{
  band: IBanda;
  bands: IBanda[];
  setBands: Function;
}> = ({ band, bands, setBands }): JSX.Element => {
  const { id, nombre, votos } = band;

  const { socket } = useContext(SocketContext);

  const cambioNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoNombre = e.target.value;
    setBands(
      bands.map((band) => {
        if (band.id === id) {
          band.nombre = nuevoNombre;
        }
        return band;
      })
    );
  };

  const onPerdioFoco = () => {
    socket.emit("cambiar-banda", { id, nombre });
  };

  const votar = () => {
    socket.emit("votar-banda", id);
  };

  const borrarBanda = () => {
    socket.emit("borrar-banda", id);
  };
  return (
    <tr>
      <td className="lg:p-2">
        <button
          onClick={votar}
          className="py-2 w-full text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer"
        >
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
        <button
          onClick={borrarBanda}
          className="py-2 w-full text-white rounded-md bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};
