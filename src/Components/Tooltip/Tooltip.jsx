/* eslint-disable react/prop-types */
import "./Tooltip.css";
import { IoClose } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { mix } from "polished";

export default function Tooltip({ title, color, style, Icon, children }) {
    // Calculate the font and icon color based on the background color
    const fontColor = style === "light" ? mix(0.2, color, "#ffffff") : mix(0.2, color, "#000000");

    return (
        <div
            className="tooltip-wrapper"
            style={{
                "--tooltip-bg-color": color,
                "--tooltip-font-color": fontColor,
                backgroundColor: color,
                color: fontColor,
            }}
        >
            {Icon ? <Icon className="tooltip-symbol" /> : <MdInfoOutline className="tooltip-symbol" />}
            <h4 className="tooltip-title">{title}</h4>
            <p className="tooltip-body">
                {children}
            </p>
            <IoClose className="tooltip-close" />
        </div>
    );
}
