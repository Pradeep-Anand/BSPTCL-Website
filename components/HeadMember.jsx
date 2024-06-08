import React from "react";
function HeadMember() {
  return (
    <div class=" ml-10 mr-10 mb-0 inline-block relative top-80" id="headmember">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="head-img card" id="nitish">
            <img
              src="/src/assets/head/nitish-kumar.jpg"
              class="card-img-top size-52"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title font-bold">Shri Nitish Kumar</h5>
              <p class="card-text">Hon'ble Chief Minister, Bihar</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="head-img card" id="bijendra">
            <img
              src="/src/assets/head/brijendra-yadav.jpg"
              class="card-img-top size-52"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title font-bold">Sri Bijendra Pd. Yadav</h5>
              <p class="card-text">Hon'ble Minister, Bihar</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="head-img card" id="sanjeev">
            <img
              src="/src/assets/head/sanjeev-hans.jpg"
              class="card-img-top size-52"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title font-bold">Shri Sanjeev Hans, IAS</h5>
              <p class="card-text">Chairman-cum-MD, BSPHCL</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="head-img card" id="aditya">
            <img
              src="/src/assets/head/aditya-prakash.jpg"
              class="card-img-top size-52"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title font-bold">Dr. Aditya Prakash, IAS</h5>
              <p class="card-text">Managing Director, BSPTCL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeadMember;