import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Category(props) {
  const [blogs, setblogs] = useState([]);
  const [feature, setfeature] = useState([]);
  useEffect(() => {
    const cate = props.match.params.id;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization ": "JWT fefege...",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Content-Type,Origin,Accept,Authorization",
        "Access-Control-Request-Methods": "POST,GET,OPTIONS",
        "X-CSRFToken": "XCSRF-TOKEN",
      },
    };
    const fetchblog = async () => {
      try {
        /* axios.defaults.headers.common[
          "Authorization"
        ] = `Token ${this.props.token}`;*/
        const res = await axios.post(
          "http://127.0.0.1:8000/category",
          { cate },
          config
        );

        console.log("puup");
        setblogs(res.data);
        console.log(cate);
        console.log(res.data);
      } catch (err) {}
    };
    fetchblog();
  }, [props.match.params.id]);

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
      <div className="nav-scroller py-1 mt-3 mb-3 bg-primary rounded">
        <nav className="nav d-flex justify-content-between ">
          <Link className="p-2 text-white " exact to="world">
            World
          </Link>

          <Link className="p-2 text-white " exact to="technology">
            Technology
          </Link>
          <Link className="p-2 text-white " exact to="design">
            Design
          </Link>
          <Link className="p-2 text-white " exact to="culture">
            Culture
          </Link>
          <Link className="p-2 text-white " exact to="business">
            Business
          </Link>
          <Link className="p-2 text-white " exact to="political">
            Politics
          </Link>
          <Link className="p-2 text-white " exact to="opinion">
            Opinion
          </Link>
          <Link className="p-2 text-white " exact to="science">
            Science
          </Link>
          <Link className="p-2 text-white " exact to="health">
            Health
          </Link>
          <Link className="p-2 text-white " exact to="style">
            Style
          </Link>
          <Link className="p-2 text-white " exact to="travel">
            Travel
          </Link>
          <Link className="p-2 text-white " exact to="computer science">
            Computer Science
          </Link>
        </nav>
      </div>
      {getblogs()}
    </div>
  );
}

export default Category;
