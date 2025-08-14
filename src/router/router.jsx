import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layout/DashboardLayout";
import AddProjects from "../pages/Dashboard/AddProjects/AddProjects";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'projects',
                Component: Projects
            },
            {
                path: 'blog',
                Component: Blog
            },
            {
                path: 'contact',
                Component: Contact,
                loader: ()=> fetch('/contact.json')
            }
        ]
    },
    {
        path: '/my-dashboard',
        Component: DashboardLayout,
        children: [
            {
                path: '/my-dashboard/add-projects',
                Component: AddProjects
            }
        ]
    }
])