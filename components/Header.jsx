import React from "react";
import { increase } from "../../Resizer";
import { reset } from "../../Resizer";
import { decrease } from "../../Resizer";
function Header() {
  return (
    <div class="pl-8 backdrop-blur-sm">
      <header class=" inline-block">
        <div class="container flex-col md:flex-row  mt-4">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              class="logo size-28"
              src="/src/assets/logo.jpg"
              alt="BSPTCL Logo"
            ></img>
            <div>
              <p
                className="company-name-hi m-2 text-xl text-white font-light nightowl-daylight"
                id="comhin"
              >
                बिहार स्टेट पावर ट्रांसमिशन कंपनी लिमिटेड
              </p>
              <p
                className=" m-2 text-2xl text-white nightowl-daylight"
                id="comeng"
              >
                Bihar State Power Transmission Company Limited
              </p>
              <p
                className="m-2 text-lg text-white font-normal nightowl-daylight"
                id="com"
              >
                (A Government of Bihar Undertaking)
              </p>
            </div>
          </a>
        </div>
      </header>
      <div class="resize inline-block absolute top-5 right-32">
        <span className="btn  btn-primary mr-3 increase" onClick={increase}>
          <p className=" text-lg">A+</p>{" "}
        </span>
        <span class="btn btn-primary mr-3" onClick={reset}>
          <p className=" text-sm text-">A</p>{" "}
        </span>
        <span class="btn btn-primary" onClick={decrease}>
          <p className=" text-xs">A-</p>{" "}
        </span>
      </div>
    </div>
  );
}
export default Header;