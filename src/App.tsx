import { FC, useEffect, useState } from "react";
import { io } from "socket.io-client";

const connectSocketServer = () => {
  const socket = io('http://localhost:4000',{
    transports : ['websocket']
  });
  return socket;
}

const App:FC = ():JSX.Element => {
  const [ socket ] = useState( connectSocketServer() )
  const [ online, setOnline ] = useState<boolean>(false);
  const [ bands, setBands ] = useState([]);

  useEffect(() => {
    setOnline( socket.connected );
  }, [ socket ])

  useEffect( () => {

    socket.on('connect', () => {
      setOnline( true );
    })

  }, [ socket ])

  useEffect( () => {

    socket.on('disconnect', () => {
      setOnline( false );
    })

  }, [ socket ])
  return (
    <div className="pt-5 px-20">
      <p className="font-semibold">Service status: <span className={online ? 'text-green-500' : 'text-red-500'}>{online ? 'Online' : 'Offline'}</span></p>

      <h1 className="text-4xl my-5">BandNames</h1>
      <hr />
      <main className="flex flex-col lg:flex-row mt-5">
        <section className="w-2/4">
          Tabla
        </section>
        <section className="w-2/4">
          agregar
        </section>
      </main>
    </div>
  )
}

export default App