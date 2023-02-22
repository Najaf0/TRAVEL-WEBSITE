import { useState } from "react";
import {Link} from "react-router-dom";

const Room = () => {
  const [honeymoon, setHoneymoon] = useState("");
  const [bedroom, setBedroom] = useState("");
  const handleValidiation = () => {
    if (honeymoon == "") {
      alert("Please Select the type of Your Room ");
    } else if (bedroom == "") {
      alert("Please Select Your Room");
    }
  };

  return (
    <section className="room-sec">
      <div className="wrapper bg-white border color1">
        <div className="alert alert-dismissible fade show " role="alert">
          <div className="h2 font-weight-bold text-center mt-3 text-txt">
            Our Rooms
          </div>
          <div id="boxes">
            <div className="box">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src="https://images.pexels.com/photos/5998132/pexels-photo-5998132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div className="col-sm-8 column">
                  <div className="select-box border bg-white column-1">
                    <div className="text-muted pl-1">Photo Type</div>
                    <select selected="">
                      <option value="honeymoon" onChange={setHoneymoon}>
                        Honeymoon Room
                      </option>
                      <option value="wedding">Wedding Room</option>
                      <option value="guest">Guest Room</option>
                    </select>
                  </div>
                  <div className="select-box border bg-white column-2">
                    <div className="text-muted pl-1">Tag</div>
                    <select selected="">
                      <option value="bedroom" onChange={setBedroom}>
                        Bedroom
                      </option>
                      <option value="wedding1">Waiting Hall</option>
                      <option value="guest1">Hall</option>
                      <option value="guest2">Kitchen</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="btn-section" className="border-top">
            <div className="d-flex align-items-center justify-content-end mt-3">
              <button className="btn btn-cancel mr-3">Cancel</button>
              <button className="btn btn-submit" onClick={handleValidiation}>
              <nav> <Link to ="/sucessfully" > Save </Link></nav>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Room;
