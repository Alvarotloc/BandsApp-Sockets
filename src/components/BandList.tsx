import { FC, useState, useEffect, useContext } from 'react';
import { IBanda } from "../interfaces";
import { ListRow } from "./";
import { SocketContext } from '../contexts/SocketContext';

export const BandList: FC = (): JSX.Element => {
  const [bands, setBands] = useState<IBanda[]>([]);
  const {socket} = useContext(SocketContext);


  useEffect(() => {
        socket.on("current-bands", ({ bands }: { bands: IBanda[] }) => {
      setBands(bands);
    });
    return () => {socket.off('current-bands')};
  }, [socket]);

  return (
    <>
      <h2 className="font-semibold text-3xl mb-5">Listado de Bandas</h2>
      <table className="w-full">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="text-center">Votar</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Votos</th>
            <th className="text-center">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {bands.map((band) => {
            return (
              <ListRow
                key={band.id}
                band={band}
                bands={bands}
                setBands={setBands}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};
