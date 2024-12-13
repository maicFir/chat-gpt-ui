import ClooseIcon from "./Cloose";
import ChatGptIcon from "./ChatGpt";
import MoreIcon from "./More";
import LinkIcon from "./Link";
import GiftIcon from "./Gift";
import LanguageIcon from "./Language";
import SayIcon from "./Say";
import Loading from "./Loading";

export type IconType = {
    width: number;
    height: number;
    className: string;
    onClick: () => void;
    color: string
}

export {
    ClooseIcon,
    ChatGptIcon,
    MoreIcon,
    LinkIcon,
    GiftIcon,
    LanguageIcon,
    SayIcon,
    Loading
}