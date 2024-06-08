import React from "react";
function Contact() {
  return (
    <div className="mt-4 ">
      <div class="detail accordion" id="accordionExample">
        <div class="accordion-item bg-slate-950 ">
          <h2 class="accordion-header">
            <button
              class="accordion-button  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              BSPTCL Vigilance Cell
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body ">
              <strong>
                <p>Contact No. : 7763817975</p>
                <p>Email cvo.trans@bsptcl.bihar.gov.in</p>
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item ">
          <h2 class="accordion-header ">
            <button
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Departmental Grievance Redressal Cell
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                <p>Contact No. : 7763817975</p>
                <p>Email dgrcell@bsptcl.bihar.gov.in</p>
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item ">
          <h2 class="accordion-header ">
            <button
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              GST & CIN DETAILS
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                <p>GST No. :- 10AAFCB2393H1Z1</p>
                <p>CIN No. :- U74110BR2012SGC018889</p>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
