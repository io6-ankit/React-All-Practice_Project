import React from "react";
import Customer from "../../assets/Image/Customers.png";
import Project from "../../assets/Image/Project.png";
import Member from "../../assets/Image/Member.png";
import Award from "../../assets/Image/Awards.png";
import "../Styleing/contact.css";
const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {" "}
      {/* main parent */}
      <div className="text-center mb-10">
        {" "}
        {/*start heading*/}
        <h2 className="text-3xl font-semibold">
          Why We <span className="text-green-600">Different with Other?</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We assure to standby the quality of our products with a year round
          supply in combination with skilled labour and technology. Aged rice is
          a healthier option.The process of ageing brings about structural
          changes along with enhanced flavor and texture. Our year-round supply
          ensures, we empower our people, farmers, and the community who help us
          grow.We leverage world-class rice processing technologies to ensure
          customer satisfaction and timely delivery.
        </p>
        {/*end heading*/}
        {/*image start*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {" "}
          {/*grid start*/}
          <div className="data">
            {/* data start */}
            <div
              style={{
                display: "flex",
                height: 80,
                width: 50,
                border: "1px solid black",
              }}
            >
              <img src={Customer} alt="Customers" className="mx-auto mb-2" />
              <div>
                <h3 className="text-xl font-bold">245</h3>
              </div>
              <div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <img src={Project} alt="Projects" className="mx-auto mb-2" />
              <h3 className="text-xl font-bold">358</h3>
              <p className="text-gray-600">Project Clear</p>
            </div>
          </div>
          {/* data end  */}
          {/* grid end */}
        </div>
        <div className="data-2">
          <div style={{ display: "flex" }}>
            <img src={Award} alt="Awards" className="mx-auto mb-2" />
            <h3 className="text-xl font-bold">78</h3>
            <p className="text-gray-600">Winning Awards</p>
          </div>

          <div style={{ display: "flex" }}>
            <img src={Member} alt="Members" className="mx-auto mb-2" />
            <h3 className="text-xl font-bold">128</h3>
            <p className="text-gray-600">Company Member</p>
          </div>
        </div>
      </div>
      {/*image end*/}
      <div className="grid md:grid-cols-2 gap-8 mt-12 text-center">
        <div>
          <h3 className="text-xl font-bold text-green-600">Office Address</h3>
          <p className="text-gray-600">
            #21, C V Raman Road, Alwarpet, Chennai-600018
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            MAP LOCATION
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-600">Factory Address</h3>
          <p className="text-gray-600">
            #56, Kodikal Street, Mathanam South, Poovalur, Lalgudi,
            Tiruchirappalli - 621 712
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            MAP LOCATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
