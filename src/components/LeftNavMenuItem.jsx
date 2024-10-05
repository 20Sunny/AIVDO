/**
 * The LeftNavMenuItem component in JavaScript React renders a menu item with text, icon, custom class,
 * and an onClick action.
 * @returns The `LeftNavMenuItem` component is being returned. It is a functional component that
 * renders a styled menu item with text, an icon, and an optional action. The component accepts props
 * such as `text`, `icon`, `className`, and `action`, and renders them accordingly.
 */
import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
    return (
        <div
            className={
                "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
                className
            }
            onClick={action}
        >
            <span className="text-xl mr-5">{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavMenuItem;
