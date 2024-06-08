import React from "react";
function Extra() {
  return (
    <div className="relative top-96 mr-0 nightowl-light" >
      <div class="row row-cols-1 row-cols-md-4 g-4 pl-10 pr-8 mr-0 bg-cyan-950 pt-4 nightowl-light" >
      <a href="https://www.bsptcl.in/Forms.aspx">
      <div class="col nightowl-light" >
          <div class="card nightowl-light" >
            <img
              src="src/assets/form.gif"
              class="card-img-top size-32 self-center nightowl-light"
              alt="..."
            />
            
            <div class="card-body nightowl-light" >
              <h5 class="card-title text-center font-bold text-2xl" id="forms">
                Forms
              </h5>
            </div>
          </div>
        </div>
      </a>
      <a href="https://www.bsptcl.in/TechnicalInformation.aspx">
      <div class="col">
          <div class="card">
            <img
              src="src/assets/information.gif"
              class="card-img-top size-32 self-center nightowl-light"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center font-bold text-2xl" id="technical">
                Technical Information
              </h5>
            </div>
          </div>
        </div>
      </a>
        
      <a href="http://210.212.23.53/Assets2017/AssetDetails.aspx?P1=1&P2=11&P3=298&P4=3">
        <div class="col">
          <div class="card">
            <img
              src="src/assets/assets.gif"
              class="card-img-top size-32 self-center nightowl-light"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center font-bold text-2xl" id="asset">
                Asset Declaration
              </h5>
            </div>
          </div>
        </div>
        </a>
        
        <a href="https://www.bsptcl.in/Download.aspx">
        <div class="col pb-10">
          <div class="card">
            <img
              src="src/assets/download.gif"
              class="card-img-top size-32 self-center"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center font-bold text-2xl" id="download">
                Download
              </h5>
            </div>
          </div>
        </div>
        </a>
      </div>

      
        
      
    </div>
  );
}
export default Extra;
