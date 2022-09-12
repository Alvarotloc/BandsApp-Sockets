import { FC, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BandList } from "./components";
import { BandAdd } from "./components/BandAdd";
import { IBanda } from "./interfaces";

const connectSocketServer = () => {
  const socket = io("http://localhost:4000", {
    transports: ["websocket"],
  });
  return socket;
};

const App: FC = (): JSX.Element => {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState<boolean>(false);
  const [bands, setBands] = useState<IBanda[]>([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", ({ bands }: { bands: IBanda[] }) => {
      setBands(bands);
    });
  }, [socket]);

  const votar = (id:string) => {
    socket.emit('votar-banda', id);
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
          <BandList bands={bands} votar={votar}/>
        </section>
        <section className="w-full lg:w-2/4">
          <BandAdd />
        </section>
      </main>
    </div>
  );
};

export default App;
