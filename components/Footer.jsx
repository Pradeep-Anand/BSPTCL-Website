import React from "react";
function Footer() {
  return (
    <div className="relative top-96 bg-slate-950 nightowl-daylight" id="footer">
      <div class="container nightowl-daylight">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-0 border-top nightowl-daylight">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <img src="src/assets/logo.jpg" class=" size-20" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=bih.nic.in.app.transmission">
            <button type="button" class="btn btn-dark bg-slate-50">
              <svg
                className=" size-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span className=" text-red-500 font-bold">
                Download BSPTCL App
              </span>
            </button>
            </a>
            <p class=" inline-block text-gray-200">
              © Copyright 2024, BSPTCL, All Rights are Reserved
            </p>
          </div>
          <div class="col mb-3">
            <h5 class="text-white underline font-bold ">Useful Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="https://www.bsptcl.in/Downloads/OpenAccess.pdf"
                  class="nav-link p-0 text-gray-500 mt-3"
                >
                  Open Access
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://www.bsptcl.in/Training.aspx"
                  class="nav-link p-0  text-gray-500"
                >
                  Training
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://www.bsptcl.in/PhoneDirectory.aspx"
                  class="nav-link p-0  text-gray-500"
                >
                  Phone Directory
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://www.bsptcl.in/UsefulLink.aspx"
                  class="nav-link p-0  text-gray-500"
                >
                  Other Links
                </a>
              </li>
            </ul>
          </div>
          <div class="col mb-3">
            <h5 class="text-white font-bold underline">External Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="https://sldc.bsptcl.co.in/"
                  class="nav-link p-0  text-gray-500 mt-3"
                >
                  SLDC
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://eproc2.bihar.gov.in/EPSV2Web/"
                  class="nav-link p-0  text-gray-500"
                >
                  e-Procurement
                </a>
              </li>
            </ul>
          </div>
          <div class="col mb-3">
            <h5 class="text-white underline font-bold">Contact Details</h5>
            <div className="mt-3">
              <h6 className="mb-2 text-gray-500">BSPTCL Vigilance Cell</h6>
              <div class=" text-white">
              <strong>
                <p>Contact No. : 7763817975</p>
                <p>Email cvo.trans@bsptcl.bihar.gov.in</p>
              </strong>
              </div>
              <br></br>
              <h6 className="mb-2 text-gray-500">Departmental Grievance Redressal Cell</h6>
              <div class="text-white">
              <strong>
                <p>Contact No. : 7763817975</p>
                <p>Email dgrcell@bsptcl.bihar.gov.in</p>
              </strong>
            </div>
            <br></br>
            <h6 className="mb-2 text-gray-500">GST & CIN DETAILS</h6>
            <div class="text-white">
              <strong>
                <p>GST No. :- 10AAFCB2393H1Z1</p>
                <p>CIN No. :- U74110BR2012SGC018889</p>
              </strong>
            </div>
            </div>
            <div/>
          </div>
          <div class="col mb-3">
            <h5 class="text-white underline font-bold">Contact Us</h5>
            <div class="text-gray-500 mt-3">
              Bihar State Power Transmission Company Limited 4th Floor, Vidyut
              Bhawan Bailey Road, Patna-1
            </div>

            <div class="text-gray-500">Phone No. : 0612-2504442</div>
            <div class="text-gray-500">Fax : 0612-2504305</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;