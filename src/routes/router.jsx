import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Contact from "../components/Contact";

const router = createBrowserRouter([
    {
path:'/',
element:<HomeLayout></HomeLayout>, 
children: [
    {
path: '/contact',
element:<Contact></Contact>
    }
]

    }
]);

export default router;
