import React from 'react';

const Hero = () => {
  return (
    <section className="hero-sec">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-box">
          <h1 className="display-4 txt-1">Travelling Obssession</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <div class="text-center">
            <div className="img">
              <img
                src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                class="rounded"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
