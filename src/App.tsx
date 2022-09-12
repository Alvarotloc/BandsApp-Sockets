import { FC, useEffect, useState } from "react";
import { BandList } from "./components";
import { BandAdd } from "./components/BandAdd";
import { IBanda } from "./interfaces";
import { useSocket } from './hooks/useSocket';

const App: FC = (): JSX.Element => {
  const [bands, setBands] = useState<IBanda[]>([]);

  const {online,socket} = useSocket('http://localhost:4000');

  useEffect(() => {
    socket.on("current-bands", ({ bands }: { bands: IBanda[] }) => {
      setBands(bands);
    });
  }, [socket]);

  const votar = (id:string) => {
    socket.emit('votar-banda', id);
  }
  const borrarBanda = (id:string) => {
    socket.emit('borrar-banda',id);
  }
  const cambiarBanda = (id:string,nuevoNombre:string) => {
    socket.emit('cambiar-banda',{id,nuevoNombre});
  }
  const agregarBanda = (nombre:string) => {
    socket.emit('agregar-banda',nombre);
  }
  return (
    <div className="pt-5 px-5 lg:px-20">
      <p className="font-semibold">
        Service status:{" "}
        <span className={online ? "text-green-500" : "text-red-500"}>
          {online ? "Online" : "Offline"}
        </span>
      </p>

      <h1 className="text-4xl my-5 font-bold">BandNames</h1>
      <hr />
      <main className="flex flex-col lg:flex-row mt-5 lg:space-x-10 space-y-5">
        <section className="w-full lg:w-2/4">
          <BandList bands={bands} votar={votar} borrarBanda={borrarBanda} cambiarBanda={cambiarBanda}/>
        </section>
        <section className="w-full lg:w-2/4">
          <BandAdd agregarBanda={agregarBanda}/>
        </section>
      </main>
    </div>
  );
};

export default App;
