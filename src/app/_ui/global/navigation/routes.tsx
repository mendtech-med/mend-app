import { RiApps2AddLine } from "react-icons/ri";
import { RiChatSmile3Line } from "react-icons/ri";
import { SiDarkreader } from "react-icons/si";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";


const Routes = () => {
    const routes: Route[] = [
        {
            name: 'My Blogs',
            path: '/',
            icon: RiApps2AddLine
        },
        {
            name: 'Chatbot',
            path: '/chatbot',
            icon: RiChatSmile3Line
        }, {
            name: 'Reader',
            path: '/reader',
            icon: SiDarkreader
        }, {
            name: 'Brand',
            path: '/brand',
            icon: HiOutlinePuzzlePiece
        }
    ];

    return routes;
}

export default Routes;
