import React from "react";
function Information() {
  return (
    <div class="w-80 mt-10 inline-block relative top-96" id="information">
      <div class="notice portlet pullRight w-80 m-3">
        <h2 class="portletHdr text-2xl text-red-600">USEFUL INFORMATION</h2>
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
            <ul class="listItem" >
            <li class="li-bullet">
                <a href="https://www.bsptcl.in/Noticeboard.aspx?id=62209" class="noIcon text-blue-800">
                
                  <b class="blink">
                    
                    Regarding Apprenticeship for ITI pass student
                    
                  </b>
                </a>
                </li>
              <hr></hr>

              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {""}
                    Regarding Auction of mangoes (from trees in the housing
                    complex) in Transmission Circle Bhagalpur (Sabour) vide
                    Letter no. 80 dated 23.01.2024
                  </b>
                </a>
              </li>
              <hr></hr>

              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding incentive given to TC Patna (East) for organizing
                    plastic free event on the auspicious occasion of Saraswati
                    Puja (Khichdi Bhoj) on 14.02.2024 in the office premises
                    vide OO no. 105 dated 13.02.2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink"> Corrigendum for NIT No 04/PR/BSPTCL/2024</b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding safety warning in light of charging of 400 kv DCDS
                    TL from Buxar Thermal Power Plant to Naubatpur (BGCL) on or
                    after 15.02.2024 at 11am{" "}
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding discharge of duty at present place of posting for
                    the employee provided higher post
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Public Notice regarding Review Petition filed by BSPTCL in
                    case no. 11/2023 dated 05.01.2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Regarding submission of Asset Declaration form for 2024
                  </b>
                </a>
              </li>
              <hr></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    Public Notice regarding safety warning in light of charging
                    of 220 kv double circuit GSS Begusarai -IOCL Barauni
                    transmission line on or after 30.12.2023
                  </b>
                </a>
              </li>
              <hr class=""></hr>
              <li class="li-bullet">
                <a href="" class="noIcon text-blue-800">
                  <b class="blink">
                    {" "}
                    BSPTCL Tariff Petition Additional Information annexure 5
                  </b>
                </a>
              </li>
              <hr></hr>
            </ul>
            <div class="clear"></div>
          </marquee>
        </div>
        <a href="https://www.bsptcl.in/Noticeboard.aspx" id="anchNotice" title="Read More" class="moreLnk text-red-700">
          View More
        </a>
        <div class="clear"></div>
      </div>
    </div>
  );
}
export default Information;