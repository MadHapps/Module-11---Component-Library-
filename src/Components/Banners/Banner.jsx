/* eslint-disable react/prop-types */
import "./Banner.css";
import {
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from "react-icons/fa6";

export default function Banner({ condition, title, children }) {
  const icon = () => {
    if (condition === "success") {
      return <FaCircleCheck className="banner-icon" />;
    }
    if (condition === "warning") {
      return <FaCircleExclamation className="banner-icon" />;
    }
    if (condition === "error") {
      return <FaCircleXmark className="banner-icon" />;
    }
    if (condition === "neutral" || condition === "") {
      return <FaCircleInfo className="banner-icon" />;
    }
  };

  return (
    <div className={`banner ${condition} ${children && "row-gap"}`}>
      {icon()}
      <h1 className="banner-title">{title}</h1>
      {children && <p className="banner-description">{children}</p>}
    </div>
  );
}
