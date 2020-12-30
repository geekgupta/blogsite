import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Blog() {
  const [blogs, setblogs] = useState([]);
  const [feature, setfeature] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/featured");
        setfeature(res.data[0]);
      } catch (err) {}
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchblog = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/");
        setblogs(res.data);
      } catch (err) {}
    };
    fetchblog();
  }, []);

  const capitalized = (word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice([1]);
    }

    return "";
  };

  const getblogs = () => {
    let list = [];
    let result = [];
    blogs.map((blogpost) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {capitalized(blogpost.category)}
            </strong>
            <h3 className="mb-0">{blogpost.title}</h3>
            <div className="mb-1 text-muted">
              {blogpost.month} {blogpost.day}
            </div>
            <p className="card-text mb-auto">{blogpost.excerpt}</p>
            <Link
              exact
              to={`/blog/${blogpost.slug}`}
              className="stretched-link"
            >
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              className="bd-placeholder-img"
              width="200"
              height="200"
              alt=""
              src={blogpost.thumbnail}
              aria-label="Placeholder: Thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="container">
      <div
        className="nav-scroller py-1 mt-3 mb-3 bg-primary rounded"
        style={{ backgroundcolor: "#e3f2fd" }}
      >
        <nav className="nav d-flex justify-content-between ">
          <Link className="p-2 text-white " exact to="category/world">
            World
          </Link>

          <Link className="p-2 text-white " exact to="category/technology">
            Technology
          </Link>
          <Link className="p-2 text-white " exact to="category/design">
            Design
          </Link>
          <Link className="p-2 text-white " exact to="category/culture">
            Culture
          </Link>
          <Link className="p-2 text-white " exact to="category/business">
            Business
          </Link>
          <Link className="p-2 text-white " exact to="category/political">
            Politics
          </Link>
          <Link className="p-2 text-white " exact to="category/opinion">
            Opinion
          </Link>
          <Link className="p-2 text-white " exact to="category/science">
            Science
          </Link>
          <Link className="p-2 text-white " exact to="category/health">
            Health
          </Link>
          <Link className="p-2 text-white " exact to="category/style">
            Style
          </Link>
          <Link className="p-2 text-white " exact to="category/travel">
            Travel
          </Link>
          <Link
            className="p-2 text-white "
            exact
            to="category/computer science"
          >
            Computer Science
          </Link>
        </nav>
      </div>

      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font">{capitalized(feature.title)}</h1>
          <p className="lead my-3">{feature.excerpt}</p>
          <p className="lead mb-0">
            <Link exact to="/blogpost" className="text-white font-weight-bold">
              Continue reading...
            </Link>
          </p>
        </div>
      </div>

      {getblogs()}
    </div>
  );
}

export default Blog;
