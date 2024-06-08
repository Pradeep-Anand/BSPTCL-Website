import React from "react";
function Magazine() {
  return (
    <div class="inline-block" >
      <div class="card inline-block">
        <img
          src="src/assets/urjasvini.png"
          class="card-img-top size-52"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">BSPTCL's e-Magazine</h5>
          <p class="card-text">BSPTCL's own e-Magazine - Urjasvini. Read the latest edition now.</p>
          <a href="#" class="btn btn-primary">
            Download e-Magazine
          </a>
        </div>
      </div>
    </div>
  );
}
export default Magazine;
