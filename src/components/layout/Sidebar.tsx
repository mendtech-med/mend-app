import { NavLink, useNavigate } from 'react-router-dom';
import { LogoSVG } from '../../assets/images/svgs';
import { MdChevronRight } from 'react-icons/md';
import {
  DrawingPinIcon,
  ExitIcon,
  GlobeIcon,
  LockClosedIcon,
  PersonIcon,
  PlusCircledIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';
import { useAuth } from '../../context/authContext';
import toast from 'react-hot-toast';
import { authHandlers } from '../../services/handlers/auth';

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const pages = [
    { name: 'Create', path: '/', icon: <PlusCircledIcon /> },
    { name: 'Discuss', path: '/discuss', icon: <LockClosedIcon /> },
    { name: 'Reader Setup', path: '/reader-setup', icon: <PersonIcon /> },
    { name: 'Category Setup', path: '/category-setup', icon: <GlobeIcon /> },
    { name: 'Trust Bucket', path: '/trust-bucket', icon: <DrawingPinIcon /> },
    // { name: 'Subscription', path: '/subscription', icon: <ArrowRightIcon /> },
    { name: 'Help', path: '/help', icon: <QuestionMarkCircledIcon /> },
  ];

  const handleLogout = async () => {
    try {
      const response = await authHandlers.logout({
        email: user?.email,
        access_token: user?.access_token,
      });
      if (response.success) {
        logout();
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wront');
    }
  };

  return (
    <aside className="w-64 h-screen bg-white text-theme-accent flex flex-col">
      <div className="py-4 justify-center px-12">
        <img src={LogoSVG} alt="Logo" />
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {pages.map((page) => (
            <li key={page.name}>
              <NavLink
                to={page.path}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3 rounded-2xl ${
                    isActive
                      ? 'bg-theme-main text-white'
                      : 'hover:bg-theme-main/20 text-theme-accent hover:text-theme-main'
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg scale-125">{page.icon}</span>
                  <span>{page.name}</span>
                </div>
                <MdChevronRight className="text-lg" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        onClick={handleLogout}
        className={`m-4 flex items-center justify-between p-3 rounded-2xl hover:bg-theme-main/20 text-theme-accent hover:text-theme-main}`}
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg scale-125">
            <ExitIcon />
          </span>
          <span>Log Out</span>
        </div>
      </button>
    </aside>
  );
};

export default Sidebar;
