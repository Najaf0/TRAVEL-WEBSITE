import { Link } from "react-router-dom";
const Ressorts = () => {
  return (
    <>
      {" "}
      <section className="ressort-sec">
        <div className="txt-box">
          <p className="fs-2">TRAVEL</p>
          <p className="fs-1 ">ACCOMODATIONS</p>
        </div>
        <div className="txt-box-2">
          <p className="fs-2">OUR RESSORTS</p>
        </div>
        <div className="container px-4 text-center">
          <div className="row gx-5 column-10">
            <div className="col">
              <div className="p-3 img-1">
                <img
                  src="https://images.unsplash.com/photo-1455906876003-298dd8c44ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                  className="rounded float-start"
                  alt="..."
                />
              </div>
            </div>
            <div className="col">
              <div className="p-3 txt-2">
                <h1>Robusta Resort</h1>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
              <div className="button-sec">
                <button type="button" class="btn btn-outline-warning btn-2">
                  <Link to={"/room"}>Room Details</Link>
                </button>
                <button type="button" class="btn btn-warning">
                  <Link to={"/booking"}>Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ressort-sec-2">
        <div className="container px-4 text-center">
          <div className="row gx-5 column-10">
            <div className="col">
              <div className="p-3 img-1">
                <img
                  src="https://images.unsplash.com/photo-1489368066883-369c64aa01bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                  className="rounded float-start"
                  alt="..."
                />
              </div>
            </div>
            <div className="col">
              <div className="p-3 txt-2">
                <h1>Treek resort</h1>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
              <div className="button-sec">
                <button type="button" class="btn btn-outline-warning btn-2">
                  <Link to={"/room"}>Room Details</Link>
                </button>
                <button type="button" class="btn btn-warning">
                  <Link to={"/booking"}>Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ressort-sec-3">
        <div className="container px-4 text-center">
          <div className="row gx-5 column-10">
            <div className="col">
              <div className="p-3 img-1">
                <img
                  src="https://images.unsplash.com/photo-1610350241356-5b6f7bb60d67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                  className="rounded float-start"
                  alt="..."
                />
              </div>
            </div>
            <div className="col">
              <div className="p-3 txt-2">
                <h1>Alpha Ressort</h1>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
              <div className="button-sec">
                <button type="button" class="btn btn-outline-warning btn-2">
                  <Link to={"/room"}>Room Details</Link>
                </button>
                <button type="button" class="btn btn-warning">
                  <Link to={"/booking"}>Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Ressorts;
