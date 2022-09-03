import React from "react";
import p1 from "../../assets/a.jpg";
import p2 from "../../assets/b.jpg";
import p4 from "../../assets/d.jpg";
import p5 from "../../assets/e.jpg";
import p6 from "../../assets/f.jpg";
import p7 from "../../assets/g.jpg";
import p8 from "../../assets/h.jpg";
import p9 from "../../assets/i.jpg";
import p10 from "../../assets/j.jpg";
import p11 from "../../assets/k.jpg";
import p12 from "../../assets/l.jpg";
import p13 from "../../assets/m.jpg";
import p14 from "../../assets/n.jpg";
import p15 from "../../assets/o.jpg";
import p17 from "../../assets/q.jpg";
import p18 from "../../assets/r.jpg";
import p19 from "../../assets/s.jpg";
import p20 from "../../assets/t.jpg";

function Picture() {
  return (
    <>
      <div className="mt-5 container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card">
              <img src={p1} className="card-img-top" alt="picture1" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p5} className="card-img-top" alt="picture5" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p8} className="card-img-top" alt="picture8" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p4} className="card-img-top" alt="picture4" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p2} className="card-img-top" alt="picture2" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p6} className="card-img-top" alt="picture6" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p13} className="card-img-top" alt="picture13" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p20} className="card-img-top" alt="picture20" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p9} className="card-img-top" alt="picture9" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p10} className="card-img-top" alt="picture10" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p11} className="card-img-top" alt="picture11" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p12} className="card-img-top" alt="picture12" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p7} className="card-img-top" alt="picture7" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p14} className="card-img-top" alt="picture14" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p17} className="card-img-top" alt="picture17" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p18} className="card-img-top" alt="picture18" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p15} className="card-img-top" alt="picture15" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={p19} className="card-img-top" alt="picture19" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Picture;