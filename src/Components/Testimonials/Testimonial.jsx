/* eslint-disable react/prop-types */
import "./Testimonial.css";
import { VscQuote } from "react-icons/vsc";

export default function Testimonial({ name, role, children }) {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-picture-frame">
        <img
          src="/images/joey-tahoe-cold--small.png"
          alt="joey posing at Lake Tahoe"
        />
      </div>
      <div className="testimonial-info">
        {children && <VscQuote className="info-quote-symbol" />}
        <p className="info-quote">{children}</p>
        <p className="info-name">{name}</p>
        <p className="info-role">{role}</p>
      </div>
    </div>
  );
}
