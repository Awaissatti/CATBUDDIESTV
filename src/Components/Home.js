import React from "react";
import "./Home.css";
import TEEL from "./Imgs/logo.png";
import ImgA from "./Imgs/1.webp";
import ImgB from "./Imgs/2.webp";
import ImgC from "./Imgs/3.webp";


export default function () {
  return (
    <div>
      <div className="container-fluid Collectionbg">
        <div className="container ">
          <div className="row ">
            <div className="col-12 text-center">
              <h1 className="text-center text-white COLH pb-3 pt-5">
                Collection One
              </h1>
              <p>
                Based on your ownership of NFTs, you will have higher levels of
                benefits within this investment structure. When you get in on
                our first collection, you will be able to get in on the first
                round of fundraising that invests eighty percent of the funds
                into a hedge fun system. Holders will earn a percentage of the
                benefits, which will be air dropped directly into your account.
              </p>
            </div>
          </div>
        </div>

        <div className="container ColImgs">
          <div className="row ">
            <div className="col-12 col-md-4 text-center ">
              <div className="colb mb-3">
                <img src={ImgA} className="  ImgA"></img>
                <h1 className="text-center text-white COLHH pb-3 pt-5">
                Tier 1
              </h1>
                <h6 className="pt-4">
                  Holders of 1 NFT receive{" "}
                  <span className="pinktxt"> 0.005 percent of benefits</span>.
                </h6>
                
              </div>
            </div>
            <div className="col-12 col-md-4  text-center">
              <div className="colb mb-3">
                <img src={ImgB} className=" ImgB"></img>
                <h1 className="text-center text-white COLHH pb-3 pt-5">
                Tier 2
              </h1>
                <h6 className="pt-4">
                  Holders of 5 NFTs receive{" "}
                  <span className="pinktxt"> 0.030 percent of benefits</span>.
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-4  text-center ">
              <div className="colb mb-3">
                <img src={ImgC} className=" ImgC"></img>
                <h1 className="text-center text-white COLHH pb-3 pt-5">
                Tier 3
              </h1>
                <h6 className="pt-4">
                  Holders of 10 NFT receive{" "}
                  <span className="pinktxt">0.065 percent of benefits</span>.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row py-4 TEERR">
            <div className="col-12 col-md-8">
              <p className="font-weight-bold">
                Example: If in 2 weeks we earn $50 000 total, if you own:
                <br></br>1 NFT: 50 000 x 0.005 % = $2.5<br></br>5 NFT: 50 000 x
                0.030 % = $15<br></br>
                10 NFT: 50 000 x 0.065 % = $32.5<br></br>
                <span className="pinktxt">
                  We are giving back more than 50% of our income back to
                  holders.
                </span>
              </p>
            </div>
            <div className="col-8 col-md-4 TEELImg  d-flex flex-row-reverse">
              <img src={TEEL} className="TEELImg"></img>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
