import React from "react";
function Project() {
  return (
    <div class="">
      <div class="card-group m-5 mb-0">
        <div class="card ml-8 my-20 mb-0">
          <img
            src="src/assets/smart-contract.gif"
            class="card-img-top size-44 self-center"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title text-center font-bold text-1xl">
              Ongoing Project
            </h3>
          </div>
        </div>
        <div class="card ml-3 my-20">
          <img
            src="src/assets/last-will.gif"
            class="card-img-top size-44 self-center"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title text-center font-bold text-1xl">
              Project Monitoring System
            </h3>
          </div>
        </div>
        <div class="card ml-3 my-20 mr-10">
          <img
            src="src/assets/inbox.gif"
            class="card-img-top size-44 self-center"
            alt="..."
          />
          <div class="card-body">
            <h3 class="card-title text-center font-bold text-1xl">
              Online Tracking System
            </h3>
          </div>
        </div>
        {/* <div class="card mr-20 my-20">
    <img src="src/assets/procurement.png" class="card-img-top size-44 self-center" alt="..."/>
    <div class="card-body">
      <h3 class="card-title text-center font-bold text-2xl">e-Procurement</h3>
    </div>
  </div> */}
      </div>
    </div>
  );
}

export default Project;
