import React from "react";
import "./index.css";
export function Footer() {
  return (
    <div>
      <div className="container-fluid custom-footer">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="p-5">
              <p className="custom-p-left-footer">
                This is a fan-made website. Not affiliated with or endorsed by
                the official Memhash team.
              </p>
              <p className="custom-p-left-footer">© 2024 Memhash Fan Site. All rights reserved.</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-5 d-flex flex-wrap gap-4 custom-div-right-footer">
              <a href="">Liars Bar</a>
              <a href="">Chill Guy Meme</a>
              <a href="">Atlyss</a>
              <a href="">New Arc Line</a>
              <a href="">Light of Motiram</a>
              <a href="">Ballionaire</a>
              <a href="">Miside</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
