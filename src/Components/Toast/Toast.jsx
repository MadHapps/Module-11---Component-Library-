/* eslint-disable react/prop-types */
import "./Toast.css";
import Banner from "../Banners/Banner";

export default function Toast({ condition, title, children }) {
  return (
    <div className="toast">
      <Banner condition={condition} title={title}>
        {children}
      </Banner>
    </div>
  );
}
