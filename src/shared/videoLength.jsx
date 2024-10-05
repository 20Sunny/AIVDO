/**
 * The VideoLength component in JavaScript React displays the length of a video in hours, minutes, and
 * seconds.
 * @returns The VideoLength component is returning a span element with a className of "absolute
 * bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md". Inside the span element, the
 * videoLengthInSeconds variable is being displayed. The videoLengthInSeconds variable is calculated
 * using the moment library to format the time prop passed to the component in seconds as "H:mm:ss".
 */
import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoLengthInSeconds = moment()
        ?.startOf("day")
        ?.seconds(time)
        ?.format("H:mm:ss");
    return (
        <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {videoLengthInSeconds}
        </span>
    );
};

export default VideoLength;
