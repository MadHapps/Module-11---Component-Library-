/* eslint-disable react/prop-types */
import './Badge.css'

export default function Badge({children, color}) {


    return (
        <div className={`badge ${color}`}>
            {children}
        </div>
    )
}