import {FaSquareXTwitter, FaBookmark} from "react-icons/fa6";
import {FaHome, FaBell, FaSearch} from "react-icons/fa";
import {RiMessage2Line, RiCommunityFill} from "react-icons/ri";
import {SiNgrok} from "react-icons/si";
import {IoListSharp} from "react-icons/io5";
import {IoIosMan} from "react-icons/io";
import {CiCircleMore} from "react-icons/ci";
import FeedCard from "@/components/FeedCard.tsx";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <FaHome />,
  },
  {
    title: "Search",
    icon: <FaSearch />,
  },
  {
    title: "Motifications",
    icon: <FaBell />,
  },
  {
    title: "Messages",
    icon: <RiMessage2Line />,
  },
  {
    title: "Grocks",
    icon: <SiNgrok />,
  },
  {
    title: "Lists",
    icon: <IoListSharp />,
  },
  {
    title: "Bookmarks",
    icon: <FaBookmark />,
  },
  {
    title: "Communities",
    icon: <RiCommunityFill />,
  },
  {
    title: "Premium",
    icon: <FaSquareXTwitter />,
  },
  {
    title: "Profile",
    icon: <IoIosMan />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 h-screen w-screen px-24 ">
        <div className="col-span-1 bg-slate-300 border border-r-black flex flex-col justify-start pt-1 px-2">
          <div className="text-4xl rounded-full hover:bg-slate-400 p-1 cursor-pointer transition-all h-fit w-fit">
            <FaSquareXTwitter />
          </div>
          <ul>
            {sidebarMenuItems.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-start gap-2 hover:bg-slate-400 w-fit px-2 py-1 ms-2 rounded-full cursor-pointer transition-all"
              >
                {item.icon}
                {item.title}
              </li>
            ))}
          </ul>
          <div className="w-100 p-2 rounded-full bg-slate-400 items-center justify-center text-lg text-white font-extrabold text-center cursor-pointer hover:bg-slate-500 mt-3">
            <button>Tweet</button>
          </div>
        </div>
        <div className="col-span-2 bg-slate-300  h-screen overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-1 bg-slate-300 border border-l-black"></div>
      </div>
    </div>
  );
}
