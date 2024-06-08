import React from "react";
function Notification() {
  return (
    <div class="w-80 m-5 inline-block relative top-96 left-10" id="notice">
      <div class="notice portlet pullRight w-80">
        <h2 class="portletHdr text-2xl text-center text-red-600">Notifications</h2>
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
                    Regularization of Shri Raushan Kumar, AEE vide notification no 820 dated 15.03.2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regularization of Shri Santosh Kumar, JEE vide notification no 773 dated 14.03.2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regularization of Ms. Rimjhim Kumari, JEE vide notification no 779 dated 14.03.2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink"> Regarding approval granted for payment of travelling allowance advance to Shri Bhaskar Prince (DBA) and Shri Vikram Kumar (IT Manager) vide Notification no. 709 dated 07.03.2024</b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding amendment in OO No 608 (Apprenticeship for ITI pass student) dated 29-02-24 vide Letter No 657 dated 04-03-2024{" "}
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding Apprenticeship for ITI pass student
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding salary disbursement to Shri Barun Kumar (E13916), JEE, LM, TD Bodhgaya vide Notification No 119 dated 11-01-2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding EL of Shri Amresh Kumar, AE(Civil) vide Notification no. 89 dated 09.01.2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding penalty order of Mr. Brajesh Kumar,GM cum CE (incharge) , Transmission Zone, Bhagalpur vide Resolution No 3023 dated 14-12-2023
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding conclusion of Department proceeding on Sri Harendra Kumar Singh, ESE(Incharge), DOS
                  </b>
                </a>
              </li>
              <hr></hr>
            </ul>
            <div class="clear"></div>
          </marquee>
        </div>
        <a href="https://www.bsptcl.in/Notifications.aspx" id="anchNotice" title="Read More" class="moreLnk text-red-700">
          View More
        </a>
        <div class="clear"></div>
      </div>
    </div>
  );
}
export default Notification;