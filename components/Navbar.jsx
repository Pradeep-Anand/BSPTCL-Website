import React from "react";
function Navbar() {
  return (
    <div class=" backdrop-blur-lg" >
      <nav class="menu navbar navbar-expand-lg md:ml-auto justify-center nightowl-daylight" id="navsize" >
        <div class="navcontainer-fluid text-blue-200">
          <div class="nav-div navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" >
              <li class="nav-item" id="homeNav">
                <a
                  class="nav-link active mr-3 hover:text-gray-900 font-bold text-white"
                  href="#" id="txt4"
                >
                  Home
                </a>
              </li>
              <li class="nav-item mr-3 dropdown text-white font-bold ">
                <a
                  class="nav-link dropdown-toggle text-white font-bold mr-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" id="txt5"
                >
                  About Us
                </a>
                <ul class="dropdown-menu text-white bg-gray-500 font-bold bg-opacity-45" id="aboutSize">
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700 " href="https://www.bsptcl.in/Vision.aspx" id="txt6">
                      Vision & Mission
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Organizationalchart.aspx" id="txt7">
                      Organizational Structure
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Functions_Duties.aspx"  id="txt8">
                      Functions & Duties
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Achievements.aspx" id="txt9">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/ActRegulations.aspx" id="txt11">
                      Acts & Regulations
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Financials.aspx" id="txt12">
                      Publications
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white font-bold mr-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" id="txt13"
                >
                  Tender
                </a>
                <ul class="dropdown-menu text-white font-bold bg-gray-500 bg-opacity-45" id="tenderSize">
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Tenders.aspx" id="txt14">
                      Active Tenders
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/TenderNoticeDetails.aspx" id="txt15">
                      Cancelled Tenders
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/ArchiveTender.aspx" id="txt16">
                      Archived Tenders
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://eproc2.bihar.gov.in/EPSV2Web/" id="txt17">
                      e-Procurement
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white font-bold mr-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" id="txt18"
                >
                  Project
                </a>
                <ul class="dropdown-menu text-white font-bold bg-gray-500 bg-opacity-45" id="projectSize">
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Ongoingproject.aspx" id="txt19">
                      Ongoing Projects
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://pmisonline.bih.nic.in/BSPTCLPMIS/Login.aspx" id="txt20">
                      Project Monitoring System
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://pmisonline.bih.nic.in/OTS/Login.aspx" id="txt21">
                      Online Tracking System
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white font-bold mr-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" id="txt22"
                >
                  SLDC
                </a>
                <ul class="dropdown-menu text-white font-bold bg-gray-500 bg-opacity-45" id="sldcSize">
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://sldc.bsptcl.co.in/" id="txt23">
                      SLDC Website
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Regulations.aspx" id="txt24">
                      Open Access
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/ViewATCTTCWeb.aspx" id="txt10">
                      ATC/TTC
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/GridCode.aspx" id="txt25">
                      Grid Code of Bihar
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/PowerMap.aspx" id="txt26">
                      Power Map of BSPTCL
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/SLDC.aspx" id="txt27">
                      Important Documents
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/SOP.aspx" id="txt28">
                      SOP
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://eass.bsptcl.co.in/" id="txt29">
                      EASS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://abtonline.bsptcl.co.in:1111/Account/Login/?returnUrl=/" id="txt30">
                      ABT Meter
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://abtonline.bsptcl.co.in:85/" id="txt31">
                      ABT Meter Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link hover:text-gray-900 text-white font-bold mr-3"
                  href="#"
                  id="txt32"
                >
                  Career
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white font-bold mr-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="txt33"
                >
                  Employee Section
                </a>
                <ul class="dropdown-menu bg-gray-500 bg-opacity-45" id="employeeSize">
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/OfficeOrders.aspx" id="txt34">
                      Office Order
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/Transfer_Posting.aspx" id="txt35">
                      Transfer/Posting
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://pay.bsphcl.org/" id="txt36">
                      Pay & Pension Roll System
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://125.16.220.20:8077/Form16" id="txt37">
                      Download Form 16
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/ERP.aspx" id="txt38">
                      ERP
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white font-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="txt41"
                >
                  Login Portal
                </a>
                <ul class="dropdown-menu bg-gray-500 bg-opacity-45" id="loginSize">
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://ess.bihar.gov.in:44300/irj/portal hover:bg-red-700" id="txt42">
                      ESS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://fiori.bihar.gov.in:44300/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-client=500" id="txt43">
                      FLM/FIORI
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="https://www.bsptcl.in/admin/Default.aspx" id="txt44">
                      eSpace
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://pmisonline.bih.nic.in/BSPTCLPMIS/Login.aspx" id="txt45">
                      Project Monitoring System
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white font-bold hover:bg-red-700" href="http://pmisonline.bih.nic.in/OTS/Login.aspx" id="txt46">
                      Project Online Tracking System
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link hover:text-gray-900 text-white font-bold mr-3"
                  href="#"
                  id="txt39"
                >
                  Reports & Accounts
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link hover:text-gray-900 text-white font-bold mr-3"
                  href="#"
                  id="txt40"
                >
                  Tarrif Regulations
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;