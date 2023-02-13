import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className=" bg-success py-5">
      <div className=" d-flex justify-content-between container align-items-center flex-column gap-5 flex-md-row gap-md-0">
        <div className=" text-white-50 fw-bold">React Project</div>
        <div className=" d-flex gap-3 text-white">
          <RiTwitterFill size={20} />
          <RiFacebookBoxFill size={20} />
          <RiGithubFill size={20} />
        </div>
        <div>
          <p className=" text-white-50">
            Copyright @ Lorem ipsum dolor sit amet.
          </p>
          <form class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <a
              href="mailto:swamhtetaungg@gmail.com"
              class="btn btn-secondary"
              type="button"
              id="button-addon2">
              Subscribe
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
