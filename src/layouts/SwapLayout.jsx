import { useState } from "react";
import React from "react";
export default function SwapLayout({ children }) {
    const [sent, setSent] = useState(true);
    const [received, setReceived] = useState(false);

    const filteredChildren = React.Children.toArray(children).filter((child) => {
        if (sent && !received) {
            // Render children meant for "Sent"
            return child.props.type === "sent"; 
        } else if (received && !sent) {
            // Render children meant for "Received"
            return child.props.type === "received";
        } else {
            // Default or render nothing
            return null;
        }
    });

    return (
        <section className={`flex flex-col ${sent && !received ? "bg-gray-400" : "bg-gray-600" } rounded-lg gap-2`}>
            <section className="grid grid-cols-3">
                <div className="bg-gray-400 px-2">
                    <button className="text-3xl font-bold hover:bg-gray-600 focus:bg-gray-400" onClick={() => {
                        setSent(true);
                        setReceived(false);
                    }}>
                        Sent
                    </button>
                </div>
                <div className="bg-gray-600 px-2">
                    <button className="text-3xl font-bold hover:bg-gray-400 focus:bg-gray-600" onClick={() => {
                        setSent(false);
                        setReceived(true);
                    }}>
                        Received
                    </button>
                </div>
                <div className="bg-white"></div>
            </section>
            {filteredChildren}
        </section>
    );
}
