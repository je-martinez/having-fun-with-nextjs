import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { IMenuItem, MenuItems } from "../../shared/constants/sidebarMenuItems";
import { useEffect } from "react";
import { IconContext } from "react-icons";

export const SidebarLayout = () => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a title="home">
              {/* <img
                src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png"
                className="w-32"
                alt="tailus logo"
              /> */}
            </a>
          </div>

          <div className="mt-8 text-center">
            <img
              src="https://ayalabr.com/wp-content/uploads/2021/06/pic.png"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              FirstName Lastname
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {MenuItems.map((item, index) => (
              <SidebarMenuItem
                key={`menu-item-${index}`}
                icon={item.icon}
                text={item.text}
                path={item.path}
              />
            ))}
            {/* <li>
              <Link href={"/"}>
                <a
                  aria-label="dashboard"
                  className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                >
                  <svg
                    className="-ml-1 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                      className="fill-current text-cyan-400 dark:fill-slate-600"
                    ></path>
                    <path
                      d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                      className="fill-current text-cyan-200 group-hover:text-cyan-300"
                    ></path>
                    <path
                      d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                      className="fill-current group-hover:text-sky-300"
                    ></path>
                  </svg>
                  <span className="-mr-1 font-medium">Home</span>
                </a>
              </Link>
            </li>
            <li>
              <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Other data</span>
              </a>
            </li> */}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

interface SidebarMenuItemProps {}

type IComponentProps = SidebarMenuItemProps & IMenuItem;

const SidebarMenuItem = ({
  icon,
  path,
  text,
  additionalProps,
}: IComponentProps) => {
  const Icon = icon;
  const router = useRouter();
  const { pathname } = router || {};
  const currentRoute = pathname == path;

  useEffect(() => {
    console.log(pathname);
  }, []);

  return (
    <>
      <li>
        <Link href={path}>
          <a
            aria-label="dashboard"
            className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
              currentRoute
                ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                : ""
            }`}
          >
            <IconContext.Provider
              {...(additionalProps || { value: { size: "1.5rem" } })}
            >
              <Icon />
            </IconContext.Provider>
            {/* <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                className="fill-current text-cyan-400 dark:fill-slate-600"
              ></path>
              <path
                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                className="fill-current text-cyan-200 group-hover:text-cyan-300"
              ></path>
              <path
                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                className="fill-current group-hover:text-sky-300"
              ></path>
            </svg> */}
            <span className="-mr-1 font-medium">{text}</span>
          </a>
        </Link>
      </li>
    </>
  );
};
