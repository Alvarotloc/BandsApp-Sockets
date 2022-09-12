import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import { BandNamesApp } from './BandNamesApp';
ReactDOMClient.createRoot(document.getElementById('root')!).render(<BandNamesApp />);