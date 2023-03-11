"use client";
import { useRouter } from "next/navigation";
import { useRef, useState, type FC } from "react";

import type { BiggerVideoPlayerProps } from "@/types";

import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { HiVolumeOff } from "@react-icons/all-files/hi/HiVolumeOff";
import { HiVolumeUp } from "@react-icons/all-files/hi/HiVolumeUp";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";

const BiggerVideoPlayer: FC<BiggerVideoPlayerProps> = ({ url }) => {
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const onVideoClick = () => {
    if (playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  };

  return (
    <article className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-black">
      <section className="absolute top-6 left-2 lg:left-6 flex gap-6 z-50" onClick={() => router.back()}>
        <p className="cursor-pointer">
          <MdCancel className="text-white text-[35px]" />
        </p>
      </section>
      <section className="relative">
        <div className="lg:h-screen h-[60vh]">
          <video src={url} className="h-full cursor-pointer" ref={videoRef} loop muted={isVideoMuted} onClick={onVideoClick} />
        </div>
        <div className="absolute top-[45%] left-[45%] cursor-pointer">
          {!playing && (
            <button onClick={onVideoClick}>
              <BsFillPlayFill className="text-white text-6xl lg:text-8xl" />
            </button>
          )}
        </div>
      </section>
      <section className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 cursor-pointer">
        {isVideoMuted ? (
          <button onClick={() => setIsVideoMuted(false)}>
            <HiVolumeOff className="text-white text-2xl lg:text-4xl" />
          </button>
        ) : (
          <button onClick={() => setIsVideoMuted(true)}>
            <HiVolumeUp className="text-white text-2xl lg:text-4xl" />
          </button>
        )}
      </section>
    </article>
  );
};

export default BiggerVideoPlayer;
