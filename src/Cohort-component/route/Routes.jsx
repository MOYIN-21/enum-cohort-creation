import Layout from "../layout/Layout";
import Cohorts from "../pages/Cohort";
import HomePage from "../pages/HomePage";
import Instructors from "../pages/Instructors";
import Learners from "../pages/Learners";
import Organizations from "../pages/organizations";
import Programs from "../pages/Programs";
import ResourcesLibraryPage from "../pages/ResourcesLibraryPage";
import Schedule from "../pages/Schedule";
import WorkSpacePage from "../pages/WorkSpacePage";

export const ROUTES = [
    {
        path: '',
        element: <Layout/>,
        children:[
            {
                path: "/homepage",
                element: <HomePage/>
            },      
            {
                path: '/workspace',
                element: <WorkSpacePage/>,
            },
            {
                path: "/resourceslibrarypage",
                element:<ResourcesLibraryPage/>,
            },
            {
                path: "/schedule",
                element: <Schedule/>
            },
            {
                path: "/cohort",
                element: <Cohorts/>
            },
            {
                path: '/organization',
                element: <Organizations/>
            },
            {
                path: '/learner',
                element: <Learners/>,
            },
            {
                path: '/instructors',
                element: <Instructors/>
            },
            {
                path: '/programs',
                element: <Programs/>
            }
        ]
    },
]