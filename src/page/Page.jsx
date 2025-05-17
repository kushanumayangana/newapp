import React from "react";
import Welcome from "../components/Welcome";
import Test from "../components/Test";
import Phara from "../components/Phara";
import Country from "../components/Country";

const Page = () => {
  return (
    <>
      <div className="App">
        <i>
          <h1>Hello World.</h1>
        </i>

        <Welcome />
        <Test />
        <Phara />
      </div>

      <Country name="Sri Lanka" city="Colombo">
        <br />
        <button className="sm">See More</button>
      </Country>

      <Country name="India" city="Dilli">
        <br />
        <button className="sm">See More</button>
      </Country>

      <Country name="Pakistan" city="Islamabad">
        <br />
        <button className="sm">See More</button>
      </Country>
    </>
  );
};

export default Page;
