// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// Navbar component
const Navbar = () => {
  // State variables for active link, toggle for mobile menu, and scroll position
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook to add an event listener for scroll events
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Change navbar background on scroll
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup - removing event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // JSX to render the Navbar
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // Scroll to top when logo is clicked
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Abdelrahman &nbsp;
            <span className="sm:block hidden"> Mohamed</span>
          </p>
        </Link>

        {/* Desktop Navbar Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {/* Check if nav.id is 'linkedin' or 'github', and set href, target, and rel attributes accordingly */}
              <a
                href={
                  nav.id === "linkedin"
                    ? "https://www.linkedin.com/in/abdelrahman-mohamed-080488197/"
                    : nav.id === "github"
                    ? "https://github.com/VVarrior1"
                    : `#${nav.id}`
                }
                target={
                  nav.id === "linkedin" || nav.id === "github"
                    ? "_blank"
                    : "_self"
                }
                rel={
                  nav.id === "linkedin" || nav.id === "github"
                    ? "noopener noreferrer"
                    : ""
                }
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar Toggle and Links */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Menu Toggle Icon */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)} // Toggle mobile menu on icon click
          />

          {/* Mobile Navbar Links */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Close mobile menu on link click
                    setActive(nav.title); // Set active link on click
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Exporting Navbar component for use in other parts of the application
export default Navbar;
