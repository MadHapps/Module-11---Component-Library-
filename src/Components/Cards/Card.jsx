/* eslint-disable react/prop-types */
import "./Card.css";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Card({ Icon, iconColor, title, children }) {

    const DefaultIcon = IoIosInformationCircleOutline

  return (
    <div className="card-wrapper">
      <div
        className="card-icon-wrapper"
        style={{ backgroundColor: `${iconColor}` }}
      >
       {Icon ? <Icon className="card-icon" />
       : <DefaultIcon className="card-icon" />}
      </div>
      <div className="card">
        {title && <h1 className="card-title">{title}</h1>}
        <p className="card-description">{children}</p>
      </div>
    </div>
  );
}
