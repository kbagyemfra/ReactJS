import React from "react";
import { Link } from "react-scroll";

const Info = (props) => {
  const {
    id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headline,
    subtitle,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
    darkText,
    goTo,
  } = props;

  const styleContainer = {
    background: `${lightBg ? "#f9f9f9" : "#010606"}`,
  };

  const styleRows = {
    gridTemplateAreas: `"${imgStart ? "col1 col2" : "col2 col1"}"`,
    // gridTemplateAreas: `"col1 col2"`,
  };
  const styleHead = { color: `${lightText ? "#f9f9f9" : "#010606"}` };
  const styleSubtitle = { color: `${darkText ? "#010606" : "#fff"}` };

  return (
    <>
      <div className="info-container" id={id} style={styleContainer}>
        <div className="info-wrapper">
          <div className="row-1" style={styleRows}>
            {/* Col-1 */}
            <div className="col-1">
              <div className="text-wrapper">
                <h1 className="top">{topLine}</h1>
                <h3 className="head" style={styleHead}>
                  {headline}
                </h3>
                <h5 className="sub" style={styleSubtitle}>
                  {subtitle}
                </h5>

                {/* Btn Wrapper */}
                <div className="btn-wrapper">
                  <Link
                    className="btn-rounded"
                    to={goTo}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                  >
                    {buttonLabel}
                  </Link>
                  {/* <a className="btn-rounded" href={goTo}>
                    {buttonLabel}
                  </a> */}
                </div>
              </div>
            </div>

            {/* Col-2 */}
            <div className="col-2">
              <div className="img-wrapper">
                <img src={img} alt={alt} className="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
