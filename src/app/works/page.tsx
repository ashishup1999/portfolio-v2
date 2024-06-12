"use client";
import React, { useState } from "react";
import "@/app/works/works.scss";
import Image from "next/image";
import arrowLeft from "@/assets/arrowLeft.svg";
import arrowRight from "@/assets/arrowRight.svg";
import { WORKS } from "@/constants/Common";
import Link from "next/link";

const Works = () => {
  const [wno, setWno] = useState(0);

  return (
    <>
      {wno > 0 && (
        <Image
          id="left-arrow"
          className="arrows"
          src={arrowLeft}
          alt="arrowLeft"
          onClick={() => setWno(wno - 1)}
        />
      )}
      <div id="work-sec">
        <div id="work-view">
          <div id={WORKS[wno]?.id} className="work-platform-wrap">
            <Image src={WORKS[wno]?.img} alt="" />
            <div className="work-platform"></div>
            <span className="work-head">
              <p className="work-title">{WORKS[wno]?.name}</p>
              {WORKS[wno]?.open && (
                <Link className="demo" href={WORKS[wno]?.open} target="_blank">
                  Demo
                </Link>
              )}
              {WORKS[wno]?.ui && (
                <>
                  <p> | </p>
                  <Link
                    className="ui-code"
                    href={WORKS[wno]?.ui}
                    target="_blank"
                  >
                    Code-FE
                  </Link>
                </>
              )}
              {WORKS[wno]?.server && (
                <>
                  <p> | </p>
                  <Link
                    className="server-code"
                    href={WORKS[wno]?.server}
                    target="_blank"
                  >
                    Code-BE
                  </Link>
                </>
              )}
            </span>
            <p
              className="work-desc"
              dangerouslySetInnerHTML={{ __html: WORKS[wno]?.desc }}
            ></p>
          </div>
        </div>
      </div>
      {wno < Object.keys(WORKS)?.length - 1 && (
        <Image
          id="right-arrow"
          className="arrows"
          src={arrowRight}
          alt="arrowLeft"
          onClick={() => setWno(wno + 1)}
        />
      )}
    </>
  );
};

export default Works;
