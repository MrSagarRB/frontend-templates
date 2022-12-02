import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";
import logo1 from "../assets/logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Man1 from "../assets/man1.png";

const Home = () => {
  let { user } = useContext(ContextProvider);
  return (
    <div className="h-screen  w-full">
      <div className=" h-[100px] w-full px-[100px] flex items-center  ">
        <img src={logo1} alt="logo" className="h-[100px] " />
        <div className="flex w-full justify-between ml-[100px]  items-center ">
          <nav className="flex gap-[30px]">
            <a href="#">Overview</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Price</a>
          </nav>
          <div className="flex gap-[30px] items-center">
            <button className="flex gap-2">
              <LanguageIcon />
              <p>Language</p>
            </button>
            <button className="border border-black duration-300 hover:bg-purple-400 hover:border-purple-400 hover:text-[#ffff]  px-[40px] py-[10px] rounded-[8px] hover:liner-bg1">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="h-[600px] w-full mt-[30px] px-[50px] ">
        <div className=" w-full h-full flex rounded-br-[300px] rounded-[40px] px-[30px] liner-bg1">
          <div className="text-[#ffff] w-[60%] flex flex-col justify-center ">
            <div className="">
              <p className="text-[80px] leading-[130%] font-[700] headingAnimation">
                {" "}
                <span className="hover:text-yellow-300 duration-500">
                  Develope{" "}
                </span>{" "}
                <span> your</span> <span>skills</span> <br />{" "}
                <span> without</span>{" "}
                <span className="hover:text-yellow-300 duration-500">
                  diligence{" "}
                </span>
              </p>
              <p className="text-[16px] w-[80%] mt-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vestibulum, metus nec venenatis facilisis, eros nibh ornare
                tortor,
              </p>
              <div className="flex gap-[30px] mt-[21px]">
                <button className="border px-[38px] py-[12px] rounded-[8px]">
                  {" "}
                  Get Started
                </button>
                <button className="border px-[38px] py-[12px] rounded-[8px]">
                  Discount
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[40%] h-full relative">
            <img src={Man1} className="absolute bottom-[30px]" />
            <div className="w-[70px] h-[70px] facebook border rounded-full absolute top-[110px] right-[60px] flex items-center justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png"
              />
            </div>
            <div className="w-[70px] h-[70px] whatsapp  border  rounded-full absolute  right-[230px] flex items-center justify-center">
              <img
                className="h-[50px] w-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
              />
            </div>
            <div className="w-[70px] h-[70px] linkdin  border  rounded-full absolute  top-[220px] right-[140px] flex items-center justify-center">
              {" "}
              <img
                className="h-[50px] w-[50px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
