import React from "react";
function Slideshow() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="slide carousel slide carousel-fade -z-50 absolute top-0"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img src="src/assets/1.jpeg" class="d-block " alt="..." />
        </div>
        <div class="carousel-item">
          <img src="src/assets/2.jpeg" class="d-block " alt="..." />
        </div>
        <div class="carousel-item">
          <img src="src/assets/3.jpeg" class="d-block " alt="..." />
        </div>
        <div class="carousel-item">
          <img src="src/assets/4.jpeg" class="d-block " alt="..." />
        </div>
        <div class="carousel-item">
          <img src="src/assets/5.jpeg" class="d-block " alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>



















      {/* <div className="awesome" style={{ border: "1px solid red" }}>
    <section id="hero" style={{ top: 50 }}>
      <div
        id="heroCarousel"
        data-bs-interval={8000}
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <ol className="carousel-indicators" id="hero-carousel-indicators">
          <li
            data-bs-target="#heroCarousel"
            data-bs-slide-to={0}
            className=""
          />
          <li
            data-bs-target="#heroCarousel"
            data-bs-slide-to={1}
            className=""
          />
          <li
            data-bs-target="#heroCarousel"
            data-bs-slide-to={2}
            className="active"
            aria-current="true"
          />
          <li
            data-bs-target="#heroCarousel"
            data-bs-slide-to={3}
            className=""
          />
          <li
            data-bs-target="#heroCarousel"
            data-bs-slide-to={4}
            className=""
          />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item video-container" style={{}}>
            <video poster="#" playsInline="" autoPlay="" muted="" loop="">
              <source
                src="https://kseb.in/frontend/assets/video/video01.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mt-5 pt-5">
                    <h2 className="animate__animated animate__fadeInRight">
                      <strong>KSEB</strong>
                    </h2>
                    <h2 className="animate__animated animate__fadeInLeft">
                      Transforming Energy Landscapes
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item video-container">
            <video poster="#" playsInline="" autoPlay="" muted="" loop="">
              <source
                src="https://kseb.in/frontend/assets/video/video02.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mt-5 pt-5">
                    <h2 className="animate__animated animate__fadeInRight">
                      Kerala's Gateway to
                    </h2>
                    <h2 className="animate__animated animate__fadeInLeft">
                      <strong>Reliable and Sustainable Energy</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item video-container active">
            <video poster="#" playsInline="" autoPlay="" muted="" loop="">
              <source
                src="https://kseb.in/frontend/assets/video/video03.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mt-5 pt-5">
                    <h2 className="animate__animated animate__fadeInRight">
                      Steadfastly delivering impeccable services,
                    </h2>
                    <h2 className="animate__animated animate__fadeInLeft">
                      even amid severe natural disasters
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item video-container">
            <video poster="#" playsInline="" autoPlay="" muted="" loop="">
              <source
                src="https://kseb.in/frontend/assets/video/video04.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mt-5 pt-5">
                    <h2 className="animate__animated animate__fadeInRight">
                      Uninterrupted power supply;
                    </h2>
                    <h2 className="animate__animated animate__fadeInLeft">
                      empowering millions of children to study without worries
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item video-container">
            <video poster="#" playsInline="" autoPlay="" muted="" loop="">
              <source
                src="https://kseb.in/frontend/assets/video/video05.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mt-5 pt-5">
                    <h2 className="animate__animated animate__fadeInRight">
                      Explore our Services at <strong>kseb.in</strong>
                    </h2>
                    <h2 className="animate__animated animate__fadeInLeft">
                      Where Energy Meets Excellence
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          />
        </a>
        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  </div> */}
    </div>





  );
}

export default Slideshow;
