import type { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface IBanda {
    id     : string;
    nombre : string;
    votos  : number;
}

export interface useSocketInterface {
    socket : Socket<DefaultEventsMap,DefaultEventsMap>;
    online : boolean;
}