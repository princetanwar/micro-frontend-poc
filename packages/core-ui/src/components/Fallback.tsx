import * as React from "react";

const Fallback = () => {
    const isDevelopment = process.env.NODE_ENV === "development";

    return (
        <fieldset>
            <legend>MFE</legend>
            <div>
                <p>
                    {isDevelopment ? "Failed to load. Please check if dev-server is running." : 'This page failed to load'}
                </p>
            </div>
        </fieldset>
    )
};

export default Fallback;