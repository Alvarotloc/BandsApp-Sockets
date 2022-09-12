import { useMemo, useState, useEffect } from "react";
import { io } from "socket.io-client";
import type { useSocketInterface } from '../interfaces/index';

export const useSocket = (serverPath: string):useSocketInterface => {
  const socket = useMemo(
    () =>
      io(serverPath, {
        transports: ["websocket"],
      }),
    [serverPath]
  );

  const [online, setOnline] = useState<boolean>(false);

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

  return {
    socket,
    online
  };
};
