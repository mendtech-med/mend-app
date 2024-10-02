import { BsRobot } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgSupport } from "react-icons/cg";
import { AiOutlineApi } from "react-icons/ai";



const Routes = () => {
    const routes: Route[] = [
        {
            name: 'My Agents',
            path: '/agents',
            icon: BsRobot
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: FiSettings
        }, {
            name: 'Support',
            path: '/support',
            icon: CgSupport
        }, {
            name: 'API',
            path: '/api',
            icon: AiOutlineApi
        }, {
            name: 'Logout',
            path: '/logout',
            icon: 'logout'
        },
    ];

    return routes;
}

export default Routes;
