import { FC } from 'react';
import App from './App';
import { SocketProvider } from './contexts/SocketContext';
export const BandNamesApp:FC = ():JSX.Element => {
  return (
    <SocketProvider>
        <App />
    </SocketProvider>
  )
}
