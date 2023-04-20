import React from "react";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#233000] py-10 text-white">
        <div className="container mx-auto">
          <div className=" flex flex-col items-center justify-between gap-10 border-b-2 border-dashed border-white pb-10 lg:flex-row lg:gap-0">
            <div className=" lg:min-w-[250px]">
              <h2 className=" text-[32px] sm:text-[48px] lg:max-w-[180px]">
                Food Zero.
              </h2>
            </div>
            <div className="flex w-full flex-col items-center gap-10 md:flex-row md:gap-0 xl:justify-around">
              <div className=" max-w-[210px]">
                <h5 className=" mb-2 text-[22px] md:mb-[55px]">Contact</h5>
                <p className=" text-[18px]">+1+86 852 346 000</p>
                <p className=" mb-1 text-[18px] md:mb-7">info@foodzero.com</p>
                <p className=" text-[18px]">
                  1959 Sepulveda Blvd. Culver City, CA, 90230
                </p>
              </div>
              <div className=" md:min-w-[500px]">
                <h5 className=" mb-5 text-[22px] md:mb-14">
                  Never Miss a Recipe
                </h5>
                <div className="">
                  <div className=" mb-3 flex flex-nowrap">
                    <input
                      type="text"
                      placeholder="Email Addresss"
                      className=" w-full max-w-[300px] border-2 border-white bg-transparent py-4 pl-3 text-[16px] text-white sm:text-[18px] md:max-w-[350px]"
                    />
                    <button className=" text ml-5 bg-[#5E6600] px-3 py-[20px]">
                      Subscribe
                    </button>
                  </div>
                  <p>
                    Join our subscribers and get best recipe delivered each
                    week!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-10">
            <div className=" flex flex-col items-center gap-5  sm:flex-row sm:justify-between sm:gap-0">
              <p className=" text-[18px]">
                © 2020 Zero Inc. All rights Reserved
              </p>
              <div className=" flex items-center gap-7">
                <a
                  target="blank"
                  className=" hover:opacity-60"
                  href="https://www.instagram.com/"
                >
                  <img width={28} src={instagram} alt="Instagram" />
                </a>
                <a
                  target="blank"
                  className=" hover:opacity-60"
                  href="https://twitter.com/"
                >
                  <img width={28} src={twitter} alt="Twitter" />
                </a>
                <a
                  target="blank"
                  className=" hover:opacity-60"
                  href="https://www.facebook.com/"
                >
                  <img width={28} src={facebook} alt="Facebook" />
                </a>
                <a
                  target="blank"
                  className=" hover:opacity-60"
                  href="https://www.youtube.com/"
                >
                  <img width={28} src={youtube} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
