
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './container/Body/Body'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './container/Ourservice/Services';
import { Outlet } from 'react-router-dom';
import Home from './container/Home/Home';
import About from './container/About/About';
import Contacts from './container/Contacts/Contacts';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path: 'About',
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contacts/>,
      },
    ],
  },
  {
    path: 'services',
    element: <Services />,
  },

  
  
]);

function App() {
  return (
    <div className="App">
       

       <RouterProvider router={appRouter} />
       

       
    </div>
  );
}

export default App;
