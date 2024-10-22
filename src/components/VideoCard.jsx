/* This code snippet is defining a React functional component called `VideoCard`. This component is
responsible for rendering a video card UI element. Here's a breakdown of what the code is doing: */
import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import '../App.css';

import VideoLength from "../shared/videoLength";

const VideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`} className="vediocardglass md:rounded-xl">
            <div className="flex flex-col mb-4">
                <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                    <img
                        className="h-full w-full object-fill"
                        src={video?.thumbnails[0]?.url}
                        alt={video?.title || "Video thumbnail"}
                    />
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>
                <div className="flex text-white mt-3 px-2.5">
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-fill"
                                src={video?.author?.avatar[0]?.url}
                                alt={video?.author?.title || "Author avatar"}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm font-semibold line-clamp-2">
                            {video?.title}
                        </span>
                        <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}
                        </span>
                        <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                            <span>{`${abbreviateNumber(
                                video?.stats?.views,
                                2
                            )} views`}</span>
                            <span className="flex text-[24px] leading-none font-semibold text-white/[0.7] relative top-[-10px] mx-1">
                                .
                            </span>
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
