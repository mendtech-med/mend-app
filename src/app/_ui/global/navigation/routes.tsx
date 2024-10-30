import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { LiaUserSolid } from "react-icons/lia";
import { RxEyeClosed } from "react-icons/rx";
import { RxDrawingPin } from "react-icons/rx";
import { TbHelpSquareRounded } from "react-icons/tb";
import { HiMiniPlus } from "react-icons/hi2";
const Routes = () => {
    const routes: Route[] = [
        {
            name: 'Create',
            path: '/',
            icon: HiMiniPlus
        },
        {
            name: 'Discuss',
            path: '/chatbot',
            icon: HiOutlineLockClosed
        },
        {
            name: 'Reader Setup',
            path: '/chatbot',
            icon: LiaUserSolid
        }, {
            name: 'Category Setup',
            path: '/category-setup',
            icon: RxEyeClosed
        }, {
            name: 'Trust Bucket',
            path: '/trust-bucket',
            icon: RxDrawingPin
        }, {
            name: 'Subscription',
            path: '/subscription',
            icon: GoArrowUpRight
        }, {
            name: 'Help',
            path: '/help',
            icon: TbHelpSquareRounded
        }
    ];

    return routes;
}

export default Routes;
