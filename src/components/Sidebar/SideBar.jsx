import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaFistRaised, FaAward, FaUsers, FaRupeeSign, FaUserPlus } from "react-icons/fa";
import { MdMessage, MdManageAccounts } from "react-icons/md";
import { BiAnalyse, BiSearch, BiUserCircle } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiOutlineFundProjectionScreen} from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/manager",
    name: "Manager",
    icon: <FaUsers />,
    subRoutes: [
      {
        path: "/AddManager",
        name: "Add Manager ",
        icon: <FaUserPlus />,
      },
      {
        path: "/EditManager",
        name: "Manage Manager",
        icon: <MdManageAccounts />,
      },
    ],
  },
  {
    path: "/Employee",
    name: "Employee",
    icon: <FaUsers />,
    subRoutes: [
      {
        path: "/AddEmployee",
        name: "Add Employee ",
        icon: <FaUserPlus />,
      },
      {
        path: "/EditEmployee",
        name: "Manage Employee",
        icon: <MdManageAccounts />,
      },
    ],
  },
  {
    path: "/ClientDetails",
    name: "Client",
    icon: <BiUserCircle />,
  },
  {
    path: "/Project",
    name: "Project",
    icon: <AiOutlineFundProjectionScreen />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/LeaveReport",
    name: "Leave Report",
    icon: <BiAnalyse />,
  },
  
  {
    path: "/Salary",
    name: "Salary",
    icon: <FaRupeeSign />,
  },
  {
    path: "/HR",
    name: "HR",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/AddHR",
        name: "Add HR ",
        icon: <FaUserPlus />,
      },
      {
        path: "/EditHR",
        name: "Manage HR ",
        icon: <MdManageAccounts />,
      },
    ],
  },
  {
    path: "/AttendanceDetails",
    name: "Attendance Details",
    icon: <FaFistRaised />,
  },
  {
    path: "/Award",
    name: "Award",
    icon: <FaAward />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Dreams
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
