import { 
    Dashboard, 
    Users,
    ParkingLot, 
    UserProfile,
} from './pages/index';

import DefaultLayout from './layouts/Default';
import AddNewPost from './pages/AddNewPost';

export default [
    {
        path: "/",
        exact: true,
        layout: <DefaultLayout></DefaultLayout>,
        component: <Dashboard></Dashboard>
    },
    {
        path: "/users",
        exact: true,
        layout: <DefaultLayout></DefaultLayout>,
        component: <Users></Users>
    },
    {
        path: "/parking",
        exact: true,
        layout: <DefaultLayout></DefaultLayout>,
        component: <ParkingLot></ParkingLot>
    },
    {
        path: "/add-new-post",
        exact: true,
        layout: <DefaultLayout></DefaultLayout>,
        component: <AddNewPost></AddNewPost>
    },
    {
        path: "/user-profile",
        exact: true,
        layout: <DefaultLayout></DefaultLayout>,
        component: <UserProfile></UserProfile>
    }
]