import React from "react";
import Image from "next/image";
import {CiBookmark, CiShare2} from "react-icons/ci";
import {FaRegComment, FaRetweet} from "react-icons/fa6";
import {FcLike} from "react-icons/fc";

const FeedCard: React.FC = () => {
  return (
    <div className="p-2 border border-b-gray-200 grid grid-cols-12 gap-2 hover:bg-slate-200 transition-all cursor-pointer">
      <div className="col-span-2">
        <div>
          <Image
            className="rounded-full"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFGKfTuc2RM27EPrtzE1wDQLguVA_e59JKyf1di_rcg&s"
            }
            alt="user image"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="col-span-10 text-sm">
        <div className="font-extrabold">Name</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro
          blanditiis tenetur reprehenderit molestias ipsum architecto.
          Reprehenderit facere nulla.
        </p>
        <div className="flex justify-between pr-2 text-lg">
          <div className="hover:bg-slate-100  rounded-full p-[6px]">
            <FaRegComment />
          </div>
          <div className="hover:bg-slate-100 rounded-full p-[6px]">
            <FaRetweet />
          </div>
          <div className="hover:bg-slate-100  rounded-full p-[6px]">
            <FcLike />
          </div>
          <div className="hover:bg-slate-100  rounded-full p-[6px]">
            <CiBookmark />
          </div>
          <div className="hover:bg-slate-100  rounded-full p-[6px]">
            <CiShare2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
