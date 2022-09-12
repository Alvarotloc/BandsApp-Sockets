import { FC, useContext } from "react";
import { BandList } from "./components";
import { BandAdd } from "./components/BandAdd";
import { IBanda } from "./interfaces";
import { useSocket } from './hooks/useSocket';
import { SocketContext } from './contexts/SocketContext';

const App: FC = (): JSX.Element => {
  // const [bands, setBands] = useState<IBanda[]>([]);

  const {online} = useContext(SocketContext);
  // const agregarBanda = (nombre:string) => {
  //   socket.emit('agregar-banda',nombre);
  // }
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
          <BandList />
        </section>
        <section className="w-full lg:w-2/4">
          {/* <BandAdd agregarBanda={agregarBanda}/> */}
        </section>
      </main>
    </div>
  );
};

export default App;
