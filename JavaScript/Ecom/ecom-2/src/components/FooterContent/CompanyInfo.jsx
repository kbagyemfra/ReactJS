import React from "react";
import { company } from "../../data";

const CompanyInfo = () => {
  return (
    <div className="container mt-5">
      <div className="row text-white justify-content-center mt-3 pb-3">
        <div className="col-12 col-sm-6 col-lg-4 mx-auto">
          <h5 className="text-capitalize fw-bold">Company name</h5>
          <p className="lh-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            provident non fuga perferendis obcaecati quaerat qui? Non voluptate,
            nam odio pariatur quia, nihil excepturi, expedita ipsum quae
            assumenda at natus!
          </p>
        </div>
        {company.map((company) => (
          <div className="col-12 col-sm-6 col-lg-4 mx-auto" key={company.id}>
            <h5 className="text-capitalize fw-bold">{company.title}</h5>
            <ul className="list-inline company-list">
              <li>
                <a href="#">{company.item1}</a>
              </li>
              <li>
                <a href="#">{company.item2}</a>
              </li>{" "}
              <li>
                <a href="#">{company.item3}</a>
              </li>{" "}
              <li>
                <a href="#">{company.item4}</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
