import React from "react";
function Circular() {
  return (
    <div class="w-80 m-5 inline-block relative top-96" id="circular">
      <div class="notice portlet pullRight w-80">
        <h2 class="portletHdr text-2xl text-center text-red-600">Circulars</h2>
        <div id="divNotice" class="marque" height="100%">
          <marquee
            align="absmiddle"
            height="200"
            direction="up"
            scrollamount="1"
            truespeed="truespeed"
            scrolldelay="45"
            onmouseover="this.stop();"
            onmouseout="this.start();"
          >
            <ul class="listItem">
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding Standard Bidding Documents (SBD)- Rev 17 for
                    turnkey projects for BSPTCL vide OO No-11 dated 08.02.2023
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding Standard Operating Procedure (SOP) for integration
                    of Third Party (RE Generators/Transmission Utilities/Other
                    System Utilities) to SCADA of the Main and Backup Control
                    Centers vide Letter No. 769 dated 02.11.2023
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    2nd revision in Schedule of Rate (SOR) of BSPTCL for the FY
                    2022-23
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding implementation of SOP (Standard Operating
                    Procedure) of intra-state and inter-state shutdown of
                    transmission elements vide Letter no. 557 dated 17.08.2023
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding Standard Bidding Documents (SBD)- Rev 15 for
                    turnkey projects for BSPTCL vide OO No-80 dated 14.08.2023{" "}
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding Standard Bidding Documents (SBD)- Rev 14 for
                    turnkey projects for BSPTCL vide Letter No-1512 dated
                    21.12.2022
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink"> Adoption of Email Usage Policy</b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Adoption of Cyber/IT Security Policy - 2022
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Adoption of Cyber Crisis Management Plan- 2022
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding Standard Bidding Documents (SBD)- Rev 13 for
                    turnkey projects for BSPTCL vide Letter No-1245 dated
                    11.10.2022
                  </b>
                </a>
              </li>
              <hr></hr>
            </ul>

            <div class="clear"></div>
          </marquee>
        </div>
        <a href="https://www.bsptcl.in/Circulars.aspx" id="anchNotice" title="Read More" class="moreLnk text-red-700">
          View More
        </a>
        <div class="clear"></div>
      </div>
    </div>
  );
}
export default Circular;
