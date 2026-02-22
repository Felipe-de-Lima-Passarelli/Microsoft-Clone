//Next
import Image from "next/image";

//Interface
interface cardMainIconProps {
  img: string;
  text: string;
}

const CardMainIcon = ({ img, text }: cardMainIconProps) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <Image
        src={`img/${img}`}
        alt="Microsoft Logo"
        width={1000}
        height={1000}
        className="w-[20%] mx-auto"
      />
      <p className="text-[#0067C1] underline text-center">{text}</p>
    </div>
  );
};

export default CardMainIcon;
