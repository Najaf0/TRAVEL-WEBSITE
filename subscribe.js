
const Subscribe = () => {
  return (
    <>
      <section className="subscribe-sec">
        <div className="mb-3 subscribe">
          <label for="exampleInputEmail1" className="form-label">
            Subscribe to Our Newsletter
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="email-sec">
          <button type="submit" className="btn btn-4">
            Submit
          </button>
        </div>
      </section>
    </>
  );
};
export default Subscribe;
