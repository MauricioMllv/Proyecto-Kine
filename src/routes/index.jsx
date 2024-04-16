import {
    createBrowserRouter,
    RouterProvider, 
} from "react-router-dom";

import Home from '../views/Home';
import Contact from '../views/Contact';
import AboutUs from '../views/About';
import Appointment from '../views/Appointment';
import FAQ from '../views/FAQ';
import News from '../views/News';
import AllNews from '../views/AllNews';
import Error404 from '../views/Error404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/agendartuhora',
        element: <Appointment />
    },
    {
        path: '/preguntas',
        element: <FAQ />
    },
    {
        path: '/noticias',
        element: <News />
    },
    {
        path: '/todasnoticias',
        element: <AllNews />
    }

]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;