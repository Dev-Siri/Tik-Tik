"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { SanityAssetDocument } from "@sanity/client";

import useAuthStore from "@/store/authStore";
import { topics } from "@/utils/constants";

import { FaCloudUploadAlt } from "@react-icons/all-files/fa/FaCloudUploadAlt";

export const dynamic = "force-static";

export default function Upload() {
  const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | null>(null);
  const [wrongFileType, setWrongFileType] = useState(false);
  const [category, setCategory] = useState(topics[0].name);
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState("");

  const { userProfile } = useAuthStore();
  const router = useRouter();

  const uploadVideo = async (event: any) => {
    const selectedFile = event?.target?.files[0];
    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (fileTypes.includes(selectedFile.type)) {
      const { default: client } = await import("@/sanity/lib/client");
      const data = await client.assets.upload("file", selectedFile, {
        contentType: selectedFile.type,
        filename: selectedFile.name,
      });

      setVideoAsset(data);
      setLoading(false);
    } else {
      setLoading(false);
      setWrongFileType(true);
    }
  };

  const handlePost = async () => {
    if (!caption || !videoAsset?._id || !category) return;

    const document = {
      _type: "post",
      caption,
      video: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: videoAsset?._id,
        },
      },
      userId: userProfile?._id,
      postedBy: {
        _type: "postedBy",
        _ref: userProfile?._id,
      },
      topic: category,
    } as const;

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
      method: "POST",
      body: JSON.stringify(document),
    });
    router.push("/");
  };

  return (
    <section className="flex w-full h-full absolute left-0 top-[60px] mb-10 pt-10 lg:pt-20 bg-[#F8F8F8] justify-center">
      <article className="bg-white w-[60%] rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-between items-center p-14 pt-6">
        <section>
          <p className="text-2xl font-bold">Upload a Video</p>
          <p className="text-md text-gray-400 mt-1">Post a Video to your account</p>
          <div className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
            {loading ? (
              <p>Uploading...</p>
            ) : (
              <>
                {videoAsset ? (
                  <article>
                    <video src={videoAsset.url} loop controls className="rounded-xl h-[450px] mt-16 bg-black" />
                  </article>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-bold text-xl">
                          <FaCloudUploadAlt className="text-gray-200 text-6xl" />
                        </p>
                        <p className="text-xl font-semibold">Upload Video</p>
                      </div>
                      <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                        MP4, WebM or OGG <br />
                        720x1080 or higher <br />
                        Up to 10 minutes <br />
                        Less than 2GB
                      </p>
                      <p className="bg-[#F51997] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none">Select File</p>
                    </div>
                    <input type="file" name="upload-video" className="w-0 h-0" onChange={uploadVideo} />
                  </label>
                )}
              </>
            )}
            {wrongFileType && <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[250px]">Please select a video file</p>}
          </div>
        </section>
        <section className="flex flex-col gap-3 pb-10">
          <label htmlFor="caption-input" className="text-md font-medium">
            Caption
          </label>
          <input
            type="text"
            id="caption-input"
            value={caption}
            onChange={event => setCaption(event.target.value)}
            className="rounded outline-none text-md border-2 border-gray-200 p-2"
          />
          <label htmlFor="category-input">Choose a Category</label>
          <select
            className="outline-none border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
            onChange={event => setCategory(event.target.value)}
            id="category-input"
          >
            {topics.map(topic => (
              <option value={topic.name} className="outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300" key={topic.name}>
                {topic.name}
              </option>
            ))}
          </select>
          <div className="flex gap-6 mt-10">
            <button className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none" type="button" onClick={() => {}}>
              Discard
            </button>
            <button className="bg-[#F51997] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none" type="button" onClick={handlePost}>
              Post
            </button>
          </div>
        </section>
      </article>
    </section>
  );
}
