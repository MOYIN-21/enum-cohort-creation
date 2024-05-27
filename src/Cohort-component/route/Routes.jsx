import Layout from "../layout/Layout";
import Cohorts from "../pages/Cohort";
import CohortCreated from "../pages/CohortCreated";
import HomePage from "../pages/HomePage";
import Instructors from "../pages/Instructors";
import Learners from "../pages/Learners";
import Organizations from "../pages/organizations";
import Programs from "../pages/Programs";
import ResourcesLibraryPage from "../pages/ResourcesLibraryPage";
import Schedule from "../pages/Schedule";
import WorkSpacePage from "../pages/WorkSpacePage";
import MobileCohortCtreated from "../resueableomponents/MobileCohortCtreated";

export const ROUTES = [
    {
        path: '',
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <HomePage/>
            }, 
            {
                path: "/homepage",
                element: <HomePage/>
            },      
            {
                path: '/workspace',
                element: <WorkSpacePage/>,
                children:[
                    {
                        path: "",
                        element: <Cohorts/>
                    },
                    {
                        path: "/workspace/cohort",
                        element: <Cohorts/>
                    },
                    {
                        path: '/workspace/learner',
                        element: <Learners/>,
                    },
                    {
                        path: '/workspace/instructors',
                        element: <Instructors/>
                    },
                    {
                        path: '/workspace/programs',
                        element: <Programs/>
                    },
                ]
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
                path: '/organization',
                element: <Organizations/>
            },
            
            {
                path: '/cohortcreated',
                element: <CohortCreated/>
            },
            {
                path: '/mobil ecohortcreated',
                element: <MobileCohortCtreated/>
            },
        ]
    
    },
]