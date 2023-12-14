import { RiHomeLine } from "react-icons/ri";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { BiAlbum } from "react-icons/bi";
import { IoIosRadio } from "react-icons/io";
import { VscLibrary } from "react-icons/vsc";

const MenuList = [
  {
    id: 1,
    icon: <RiHomeLine />,
    name: "Home",
  },
  {
    id: 2,
    icon: <VscLibrary />,
    name: "Your Library",
  },
  {
    id: 3,
    icon: <BiSolidMicrophoneAlt />,
    name: "Artist",
  },
  {
    id: 4,
    icon: <BiAlbum />,
    name: "Albums",
  },
  {
    id: 5,
    icon: <IoIosRadio />,
    name: "Radio",
  },
];

export { MenuList };
