import { PropsWithChildren } from "react";
import CharacterModel from "./Character";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ABHISHEK
              <br />
              <span>BASU</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Graduate</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Researcher</div>
              <div className="landing-h2-2">AI/ML Enthusiast</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI/ML Enthusiast</div>
              <div className="landing-h2-info-1">Researcher</div>
            </h2>
          </div>
        </div>
        {/* Add CharacterModel below intro/info */}
        <CharacterModel />
        {children}
      </div>
    </>
  );
};

export default Landing;
