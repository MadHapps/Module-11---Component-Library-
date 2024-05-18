import "./Tooltip.css"
import { FaInbox } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



export default function Tooltip() {

    return (
        <div className="tooltip-wrapper">
            <FaInbox className="tooltip-symbol" />
            <h4 className="tooltip-title">Archive Notes</h4>
            <p className="tooltip-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ratione.
            </p>
            <IoClose className="tooltip-close" />
        </div>
    )
}