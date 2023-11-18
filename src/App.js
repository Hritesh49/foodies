import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import { Login, Loginaction } from './component/login';
import Landing from './component/landing';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} action={Loginaction} />
      <Route path='/landing' element={<Landing />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
