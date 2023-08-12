"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useRef, useState } from "react";

interface Props {
  url: string;
  icons: Record<string, ReactNode>;
}

export default function SideView({ url, icons }: Props) {
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  function onVideoClick() {
    if (playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  }

  return (
    <article className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-black">
      <section className="absolute top-6 left-2 lg:left-6 flex gap-6 z-50" onClick={() => router.back()}>
        <p className="cursor-pointer">{icons["cancel"]}</p>
      </section>
      <section className="relative">
        <div className="lg:h-screen h-[60vh]">
          <video src={url} className="h-full cursor-pointer" ref={videoRef} loop muted={isVideoMuted} onClick={onVideoClick} />
        </div>
        <div className="absolute top-[45%] left-[45%] cursor-pointer">{!playing && <button onClick={onVideoClick}>{icons["play"]}</button>}</div>
      </section>
      <section className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 cursor-pointer">
        {isVideoMuted ? (
          <button onClick={() => setIsVideoMuted(false)}>{icons["muted"]}</button>
        ) : (
          <button onClick={() => setIsVideoMuted(true)}>{icons["volumeUp"]}</button>
        )}
      </section>
    </article>
  );
}
