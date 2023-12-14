import { RiHomeLine } from "react-icons/ri";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { BiAlbum } from "react-icons/bi";
import { IoIosRadio } from "react-icons/io";

const MenuList = [
  {
    id: 1,
    icon: <RiHomeLine />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiSolidMicrophoneAlt />,
    name: "Artist",
  },
  {
    id: 3,
    icon: <BiAlbum />,
    name: "Albums",
  },
  {
    id: 4,
    icon: <IoIosRadio />,
    name: "Radio",
  },
];

export { MenuList };
