import Arrowdown from "../Assets/Arrowdown.svg"
import Calender from "../Assets/Calendar.svg"
import Closecamera from "../Assets/Closecamera.svg"
import Createclass from "../Assets/Createclass.svg"
import Earning from "../Assets/Earning.svg";
import Element from "../Assets/Element.svg";
import Endcall from "../Assets/Endcall.svg";
import Logout from "../Assets/Logout.svg";
import Message from "../Assets/Message.svg";
import Messageavatar from "../Assets/Messageavatar.png";
import Microphone from "../Assets/Microphone.svg";
import Notificationicon from "../Assets/Notificationicon.svg";
import Overview from "../Assets/Overview.svg";
import Send from "../Assets/Send.svg";
import Setting from "../Assets/Setting.svg";
import Tagcross from "../Assets/Tagcross.svg";
import Useravatar from "../Assets/Useravatar.png";
import Video from "../Assets/Video.svg";
import Videocreate from "../Assets/Videocreate.svg";
import Walletmoney from "../Assets/Walletmoney.svg";

const Image = ({src, className, alt}) => {
    return (
      <figure>
        <img src={src} className={className} alt={alt} loading="lazy" />
      </figure>
    );
};


export {
    Image,
    Arrowdown,
    Message,
    Notificationicon,
    Element,
    Calender,
    Walletmoney,
    Videocreate,
    Video,
    Tagcross,
    Useravatar,
    Setting,
    Send,
    Overview,
    Microphone,
    Messageavatar,
    Logout,
    Endcall,
    Earning,
    Createclass,
    Closecamera
}