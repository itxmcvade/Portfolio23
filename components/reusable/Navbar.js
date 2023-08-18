import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { NavLinks } from "../../data/data";
import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  const [isBottomPosition, setIsBottomPosition] = useState(false);

  // --------Profile Image-------
  const handleProfileClick = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsBottomPosition(screenWidth <= 890);
    };

    // Initial call and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-start md:px-5">
      <div
        onClick={handleProfileClick}
        className="flex cursor-pointer flex-row  items-center justify-center space-x-3"
      >
        <Image
          width={60}
          height={60}
          loading="lazy"
          src="/images/Navpic2.png"
          alt="profile-image"
          className="w-[60px] rounded-full border-none bg-primary dark:bg-hoverBlack"
        />
        <h3 className="hidden md:flex">Isaiah</h3>
      </div>

      <div className="flex w-full items-center justify-center lg:relative">
        <nav
          className={`fixed z-10 cursor-pointer flex-row items-center  overflow-hidden rounded-full border bg-white bg-opacity-95 px-1 py-4 shadow-xl backdrop-blur-sm dark:border-slate-100/10 dark:bg-black dark:bg-opacity-75 lg:left-1/2 lg:flex lg:-translate-x-1/2  ${
            isBottomPosition ? "bottom-5" : "top-8"
          }`}
        >
          <ul className="flex space-x-0 lg:space-x-2">
            {NavLinks.map((link, index) => (
              <li key={link.name} className="group relative">
                <Link
                  className={`px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-primary md:px-6 md:text-base ${
                    router.asPath.startsWith(link.href) && link.href !== "/"
                      ? "text-black dark:text-primary"
                      : router.asPath === link.href
                      ? "text-black dark:text-primary"
                      : "text-secondary dark:text-secondary"
                  }`}
                  href={link.href}
                >
                  {link.name}
                  {(router.asPath.startsWith(link.href) && link.href !== "/") ||
                  router.asPath === link.href ? (
                    <motion.div
                      className="underline"
                      layoutId="underline"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    ></motion.div>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>

    // <div className="flex flex-row items-center  md:px-5">
    //   <div
    //     onClick={handleProfileClick}
    //     className="flex cursor-pointer flex-row items-center space-x-3"
    //   >
    //     <Image
    //       width={60}
    //       height={60}
    //       loading="lazy"
    //       src="/images/nav-profile.png"
    //       alt="profile-image"
    //       className="w-[60px] rounded-full border-none bg-primary dark:bg-hoverBlack"
    //     />{" "}
    //     <h3 className="hidden md:flex">Isaiah</h3>
    //   </div>
    //   <div className="flex w-full items-center justify-center lg:relative">
    //     <nav
    //       className={`fixed z-10 cursor-pointer flex-row items-center  overflow-hidden rounded-full border bg-white bg-opacity-95 px-1 py-4 shadow-xl backdrop-blur-sm backdrop-filter dark:border-slate-100/10 dark:bg-black dark:bg-opacity-75 lg:left-1/2 lg:flex lg:-translate-x-1/2 lg:transform  ${
    //         isBottomPosition ? "bottom-5" : "top-8"
    //       }`}
    //     >
    //       <ul className="flex space-x-0 lg:space-x-2">
    //         {NavLinks.map((link, index) => (
    //           <li key={link.name} className="group relative">
    //             <Link
    //               className={`px-3 text-sm font-medium tracking-wide transition duration-300 ease-in-out dark:hover:text-primary md:px-6 md:text-base ${
    //                 router.asPath.startsWith(link.href) && link.href !== "/"
    //                   ? "text-black dark:text-primary"
    //                   : router.asPath === link.href
    //                   ? "text-black dark:text-primary"
    //                   : "text-secondary dark:text-secondary"
    //               }`}
    //               href={link.href}
    //             >
    //               {link.name}
    //               {(router.asPath.startsWith(link.href) && link.href !== "/") ||
    //               router.asPath === link.href ? (
    //                 <motion.div
    //                   className="underline"
    //                   layoutId="underline"
    //                   initial={{ scaleY: 0 }}
    //                   animate={{ scaleY: 1 }}
    //                   exit={{ scaleY: 0 }}
    //                   transition={{ duration: 0.4, ease: "easeInOut" }}
    //                 ></motion.div>
    //               ) : null}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  );
};

export default Navbar;
