import React from "react";
function About() {
  return (
    <div class="inline-block m-10 relative top-80 scale-x-125 scale-y-125 width" >
      <div class="card w-96 inline-block" >
        <div class="card-body">
          <h5 class="card-title text-xl" id="about">About Us</h5>
          <p class="card-text text-xs" id="aboutTxt">
            Bihar State Power Transmission Company Limited, a subsidiary company
            of Bihar State Power (Holding) Company Limited, is a wholly owned
            corporate entity incorporated under the Companies Act 1956 on 1st
            Nov, 2012 after restructuring of erstwhile Bihar State Electricity
            Board. Presently the company is...
          </p>
          <a href="https://www.bsptcl.in/AboutUs.aspx" class="text-red-700 text-xs" id="abt">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
