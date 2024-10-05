/**
 * The Loader component in this JavaScript React code renders a loading animation with three bars.
 * @returns The Loader component is being returned, which is a React functional component rendering a
 * loading animation with three bars.
 */
import React from "react";

const Loader = () => {
    return (
        <div class="load-bar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    );
};

export default Loader;
