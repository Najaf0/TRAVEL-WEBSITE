import { react, useState } from "react";
// import { useFormInputValidation } from "react-form-input-validation";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [noOfRooms, setNoOfRooms] = useState(1);
  const [adults, setAdults] = useState("");
  const [childrens, setChildrens] = useState("");
  const [availablity, setAvailablity] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = validateForm();
    if (valid) {
      let bookingObj = {
        destination: destination,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        noOfRooms: noOfRooms,
        adults: adults,
        childrens: childrens,
      };
      setAvailablity(bookingObj);
      localStorage.setItem("booking", JSON.stringify(bookingObj));

      let lsObj = localStorage.getItem("booking");

      console.log(
        "🚀 ~ file: booking.js:30 ~ handleSubmit ~ bookingObj",
        lsObj
      );

      navigate("/successfully");
      ///
    }
  };

  const validateForm = () => {
    if (destination === "" || destination === null) {
      setErrors({
        destination: "Destination field is required",
      });

      return false;
    } else {
      setErrors({
        destination: "",
      });
    }
    if (checkInDate === "" || checkInDate === null) {
      setErrors({
        checkInDate: "CheckInDate field is required",
      });
      return false;
    } else {
      setErrors({
        checkInDate: "",
      });
    }
    if (checkOutDate === "" || checkOutDate === null) {
      setErrors({
        checkOutDate: "checkOutDate field is required",
      });
      return false;
    } else {
      setErrors({
        checkOutDate: "",
      });
    }
    if (noOfRooms === "" || noOfRooms === null) {
      setErrors({
        noOfRooms: "noOfRooms field is required",
      });
      return false;
    } else {
      setErrors({
        noOfRooms: "",
      });
      if (adults === "" || adults === null) {
        setErrors({
          adults: "adults field is required",
        });
        return false;
      } else {
        setErrors({
          adults: "",
        });
      }
    }
    if (childrens === "" || childrens === null) {
      setErrors({
        childrens: " childrens field is required",
      });
      return false;
    } else {
      setErrors({
        childrens: "",
      });
    }
    return true;
  };

  return (
    <section className="booking-sec">
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-md-push-5">
                <div className="booking-cta">
                  <h1>Make your reservation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi facere, soluta magnam consectetur molestias itaque ad
                    sint fugit architecto incidunt iste culpa perspiciatis
                    possimus voluptates aliquid consequuntur cumque quasi.
                    Perspiciatis.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-md-pull-7">
                <div className="booking-form">
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="form-group">
                      <span className="form-label">Your Destination</span>
                      <input
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Enter a destination or hotel name"
                      />
                      <label className="error">
                        {errors.destination ? errors.destination : ""}
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check In</span>
                          <input
                            className="form-control"
                            type="date"
                            onChange={(e) => setCheckInDate(e.target.value)}
                            value={checkInDate}
                          />
                          <label className="error">
                            {errors.checkInDate ? errors.checkInDate : ""}
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check out</span>
                          <input
                            className="form-control"
                            type="date"
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            value={checkOutDate}
                          />
                          <label className="error">
                            {errors.checkOutDate ? errors.checkOutDate : ""}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Rooms</span>
                          <select className="form-control">
                            <option
                              {...(noOfRooms === 0 ? "selected" : "")}
                              value={noOfRooms}
                              onChange={(e) => setNoOfRooms}
                            >
                              1
                            </option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Adults</span>
                          <select className="form-control">
                            <option
                              {...(adults === 0 ? "selected" : "")}
                              value={adults}
                              onChange={(e) => setAdults}
                            >
                              1
                            </option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Children</span>
                          <select className="form-control">
                            <option
                              {...(childrens === 0 ? "selected" : "")}
                              value={childrens}
                              onChange={(e) => setChildrens}
                            >
                              0
                            </option>
                            <option>1</option>
                            <option>2</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-btn check">
                      <button type="submit" className="submit-btn">
                        Check availability
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Booking;
