import { RiApps2AddLine } from "react-icons/ri";
import { RiChatSmile3Line } from "react-icons/ri";
import { SiDarkreader } from "react-icons/si";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { LiaUserSolid } from "react-icons/lia";
import { RxEyeClosed } from "react-icons/rx";
import { RxDrawingPin } from "react-icons/rx";
import { TbHelpSquareRounded } from "react-icons/tb";


const Routes = () => {
    const routes: Route[] = [
        {
            name: 'Discuss',
            path: '/',
            icon: HiOutlineLockClosed
        },
        {
            name: 'Reader Setup',
            path: '/chatbot',
            icon: LiaUserSolid 
        }, {
            name: 'Brand Setup',
            path: '/reader',
            icon: RxEyeClosed 
        }, {
            name: 'Trust Bucket',
            path: '/brand',
            icon: RxDrawingPin
        },{
            name: 'Subscription',
            path: '/subscription',
            icon : GoArrowUpRight
        },{
            name: 'Help',
            path: '/help',
            icon: TbHelpSquareRounded
        }
    ];

    return routes;
}

export default Routes;
