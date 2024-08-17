import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops, link }) => {
  const openInNewTab =
    link !== "#market" &&
    link !== "#about-us" &&
    link !== "#blogs" &&
    link !== "#transactions";
  return (
    <li className={`mx-7 cursor-pointer ${classprops}`}>
      <a
        href={link}
        target={openInNewTab ? "_blank" : ""}
        rel={openInNewTab ? "noopener noreferrer" : ""}
        className="hover:text-blue-500"
      >
        {title}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.7] flex-initial justify-center items-center">
        <navbar id="home"></navbar>
        <img
          src={logo}
          alt="logo"
          className="w-60 cursor-pointer"
          id="logo"
        />
      </div>
      <ul className="text-BLACK text-arial font-bold md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          {
            title: "Market",
            link: "#market",
          },
          {
            title: "Transactions",
            link: "#transactions",
            target: "_blank",
          },
          {
            title: "Blogs",
            link: "#blogs",
            target: "_blank",
          },
         
          {
            title: "Tutorials",
            link: "https://support.metamask.io/hc/en-us/articles/360045901112",
            target: "_blank",
          },
          {
            title: "Contact Us",
            link: "#about-us",
          },
        ].map((item, index) => (
          <NavBarItem
            key={item.title + index}
            title={item.title}
            link={item.link}
          />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={30}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={30}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              {
                title: "Market",
                link: "#market",
              },
              {
                title: "Transactions",
                link: "#transactions",
              },
              {
                title: "Blogs",
                link: "#blogs",
              },
              
              {
              title: "Tutorials",
              link: "https://support.metamask.io/hc/en-us/articles/360045901112",
              },
              {
              title: "Contact Us",
              link: "#about-us",
              },
              ].map((item, index) => (
              <NavBarItem
              key={item.title + index}
              title={item.title}
              link={item.link}
              classprops="text-xl my-5"
              />
              ))}
              </ul>
              )}
              </div>
              </nav>
              );
              };
              
              export default Navbar;
