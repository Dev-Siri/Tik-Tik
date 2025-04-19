"use client";
import Link from "next/link";
import { useRef, useState } from "react";

import { BsFillPauseFill } from "@react-icons/all-files/bs/BsFillPauseFill";
import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { HiVolumeOff } from "@react-icons/all-files/hi/HiVolumeOff";
import { HiVolumeUp } from "@react-icons/all-files/hi/HiVolumeUp";

interface Props {
  url: string;
  postId: string;
}

export default function VideoPlayer({ url, postId }: Props) {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  };

  return (
    <section className="lg:ml-20 flex gap-4 relative">
      <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="rounded-3xl">
        <Link href={`/detail/${postId}`}>
          <video
            src={url}
            loop
            ref={videoRef}
            muted={isVideoMuted}
            className="lg:w-[600px] w-[200px] h-[300px] md:h-[400px] lg:h-[530px] rounded-2xl cursor-pointer bg-gray-100"
          />
        </Link>
        {isHover && (
          <div className="absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
            {playing ? (
              <button onClick={onVideoPress}>
                <BsFillPauseFill className="text-black text-2xl lg:text-4xl" />
              </button>
            ) : (
              <button onClick={onVideoPress}>
                <BsFillPlayFill className="text-black text-2xl lg:text-4xl" />
              </button>
            )}
            {isVideoMuted ? (
              <button onClick={() => setIsVideoMuted(false)}>
                <HiVolumeOff className="text-black text-2xl lg:text-4xl" />
              </button>
            ) : (
              <button onClick={() => setIsVideoMuted(true)}>
                <HiVolumeUp className="text-black text-2xl lg:text-4xl" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
