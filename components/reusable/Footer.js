import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SocialIcons } from "../../data/data";
import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleBuyClick = () => {
    router.push(`/products/noirfolio`);
  };

  const handleSubscribe = async (email) => {
    const url = "";
    const apiKey = "";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: email,
          double_optin: false, // Set to true if you want to send a confirmation email
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User subscribed successfully:", data);
      } else {
        console.error("Error subscribing user:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // --------Dark/Light Theme Toggle-------
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div>
          <HiOutlineMoon
            onClick={() => setTheme("light")}
            className="theme-toggle-btn"
          />
        </div>
      );
    } else {
      return (
        <HiOutlineSun
          className="theme-toggle-btn"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="mb-10 mt-28 flex flex-col rounded-2xl border bg-hoverGray p-8  dark:border-slate-100/10 dark:bg-hoverBlack md:mx-5 md:mt-32 lg:mb-10  lg:p-12 ">
      {/* ------------Newsletter------------ */}
      
    

      <div className="flex flex-col items-center justify-center  md:space-y-5 lg:md:space-y-0 lg:flex-row lg:justify-between">
        
          
          <h3 className="description">©2023 Isaiah</h3>
        </div>

        <div className="order-1 mb-3 flex flex-row  items-center md:order-2 md:mb-0">
          {/* --------Social Icons-------- */}
          <div className=" flex flex-row items-center justify-center space-x-3 py-2 ">
            {SocialIcons.map((icon) => (
              <icon.Icon
                key={icon.url}
                className="social-icons"
                onClick={() => window.open(icon.url, "_blank")}
              />
            ))}
          </div>
          <div className="h-6 w-1 border-r p-1 dark:border-slate-100/10"></div>
          {/* -----------Toggle Button----------- */}
          <div className="pl-2"> {renderThemeChanger()}</div>
        </div>
      </div>
    
  );
};

export default Footer;
