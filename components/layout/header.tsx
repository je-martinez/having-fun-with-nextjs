import { IconContext } from "react-icons";
import dynamic from "next/dynamic";

export const HeaderLayout = () => {
  const BiSearchAlt = dynamic(
    async () => (await import("react-icons/bi")).BiSearchAlt
  );
  const BsChatSquareTextFill = dynamic(
    async () => (await import("react-icons/bs")).BsChatSquareTextFill
  );
  const GiHamburgerMenu = dynamic(
    async () => (await import("react-icons/gi")).GiHamburgerMenu
  );
  const IoNotificationsSharp = dynamic(
    async () => (await import("react-icons/io5")).IoNotificationsSharp
  );

  return (
    <>
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
            Dashboard
          </h5>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <GiHamburgerMenu />
          </button>
          <div className="flex space-x-4">
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                  <BiSearchAlt className="text" />
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Search here"
                  className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                />
              </div>
            </div>
            <button
              aria-label="search"
              className="w-10 h-10 rounded-xl flex justify-center items-center border  bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
            >
              <IconContext.Provider value={{ className: "text-gray-600" }}>
                <BiSearchAlt />
              </IconContext.Provider>
            </button>
            <button
              aria-label="chat"
              className="w-10 h-10 rounded-xl border flex justify-center items-center bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <BsChatSquareTextFill />
            </button>
            <button
              aria-label="notification"
              className="w-10 h-10 rounded-xl flex justify-center items-center border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <IoNotificationsSharp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
