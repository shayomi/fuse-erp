import './App.css';
import Purchaseorder from './pages/Purchaseorder';
import Invoice from './pages/Invoice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Invoice /> },
  { path: '/purchase-order', element: <Purchaseorder /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
