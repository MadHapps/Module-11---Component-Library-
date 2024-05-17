/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Testimonial.css";
import { VscQuote } from "react-icons/vsc";

export default function Testimonial({
  name,
  role,
  bgColor,
  bumperColor,
  fontColor,
  portrait,
  children,
}) {

  // Psuedo element updater
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .testimonial-wrapper::before {
        grid-area: ${portrait ? 'empt' : 'none'};
        background-color: ${bumperColor || bgColor || "#FFFFFF" };
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [portrait, bgColor, bumperColor]);

  return (
    <div className={`testimonial-wrapper ${!portrait && 'no-portrait'}`}>
      <div className="testimonial-picture-frame">
        {portrait && <img
          src={portrait}
          alt="joey posing at Lake Tahoe"
        />}
      </div>
      <div
        className="testimonial-info"
        style={{ backgroundColor: bgColor, color: fontColor }}
      >
        {children && portrait &&  <VscQuote className="info-quote-symbol" />}
        <p className="info-quote">{children}</p>
        <p className="info-name">{name}</p>
        <p className="info-role">{role}</p>
      </div>
    </div>
  );
}
