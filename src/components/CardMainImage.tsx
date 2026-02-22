//Next
import Image from "next/image";

//Interface
interface cardMainImageProps {
  img: string;
  textTitle: string;
  textDesc: string;
  textButton: string;
}

const CardMainImage = ({
  img,
  textTitle,
  textDesc,
  textButton,
}: cardMainImageProps) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#F2F2F2]">
        <Image
          src={`/img/${img}`}
          alt={`${img} Logo`}
          width={1000}
          height={1000}
        />
      </div>
      <div className="bg-white flex flex-col gap-4 p-6 h-80 justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="font-black text-2xl">{textTitle}</h1>
          <p>{textDesc}</p>
        </div>
        <button className="text-left text-white cursor-pointer">
          <span className="bg-[#0067B8] py-3 px-4 rounded-md hover:bg-blue-600">
            {textButton}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardMainImage;
