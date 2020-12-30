import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <img
          className="img-responsive  rounded-circle img-fluid  d-flex unlock-item m-auto justify-content-center"
          width="150"
          height="150"
          alt=""
          src="#"
        />
        <h2 className="text-muted mt-3 text-center">Purushottam Gupta</h2>
        <p className="lead mb-2 text-center">
          <Link className="font-weight-hold  " exact to="/profile">
            Know More >>
          </Link>
        </p>
        <h1 className="display-4 text-center">Welcome To G-Blog</h1>
        <p className="lead">These site will give the Most</p>
        <hr className="my-4" />
        <p>
          The best blog of purushottam is available here if you want to enjoy
        </p>
        <Link
          className="btn btn-primary btn-lg "
          exact
          to="/blog"
          role="button"
        >
          Click here
        </Link>
      </div>
    </div>
  );
}

export default Home;
