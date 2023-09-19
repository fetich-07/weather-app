import React from "react";

export default function Temperature(currentTemperature) {
    console.log(`inside Temp ${currentTemperature}`)
    return (
        <div className="temperature">
            <p className="degree">{`${currentTemperature}`}°</p>
            <svg className="sunImg" width="222" height="222" viewBox="0 0 222 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Icon" d="M111 1V23M111 199V221M23 111H1M48.4553 48.4553L32.8989 32.8989M173.545 48.4553L189.101 32.8989M48.4553 173.59L32.8989 189.146M173.545 173.59L189.101 189.146M221 111H199M166 111C166 141.376 141.376 166 111 166C80.6243 166 56 141.376 56 111C56 80.6243 80.6243 56 111 56C141.376 56 166 80.6243 166 111Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

