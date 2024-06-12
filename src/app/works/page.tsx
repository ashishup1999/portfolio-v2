"use client";
import React, { useEffect, useState } from "react";
import "@/app/works/works.scss";
import Image from "next/image";
import arrowLeft from "@/assets/arrowLeft.svg";
import arrowRight from "@/assets/arrowRight.svg";
import { WORKS } from "@/constants/Common";
import Link from "next/link";

const Works = () => {
  const [wno, setWno] = useState(0);

  useEffect(() => {
    const { id } = WORKS[Object.keys(WORKS)[wno]];
    const ele = document.getElementById(id);
    ele?.scrollIntoView();
  }, [wno]);

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
          {Object.keys(WORKS).map((key) => {
            const { id, name, open, img, ui, server, desc } = WORKS[key];
            return (
              <div id={id} key={id} className="work-platform-wrap">
                <Image src={img} alt="" />
                <div className="work-platform"></div>
                <span className="work-head">
                  <p className="work-title">{name}</p>
                  {open && (
                    <Link className="demo" href={open} target="_blank">
                      Demo
                    </Link>
                  )}
                  {ui && (
                    <>
                      <p> | </p>
                      <Link className="ui-code" href={ui} target="_blank">
                        Code-FE
                      </Link>
                    </>
                  )}
                  {server && (
                    <>
                      <p> | </p>
                      <Link
                        className="server-code"
                        href={server}
                        target="_blank"
                      >
                        Code-BE
                      </Link>
                    </>
                  )}
                </span>
                <p
                  className="work-desc"
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></p>
              </div>
            );
          })}
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
