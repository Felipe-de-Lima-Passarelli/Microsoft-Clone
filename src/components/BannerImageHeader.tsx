//Next
import Image from "next/image";

//Interface
interface bannerImageHeaderProps {
  actualBannerImage: number;
}

const BannerImageHeader = ({ actualBannerImage }: bannerImageHeaderProps) => {
  return (
    <>
      {actualBannerImage === 0 && (
        <>
          <Image
            src="/img/Xbox-Game-Pass.avif"
            alt="Xbox Game Pass Banner"
            width={2000}
            height={2000}
            className="w-full"
          />
          <div className="absolute top-0 left-0 my-[3.1%] mx-[10%] md:my-[6%] md:mx-[8%] lg:my-[7%] xl:my-[10%] w-[30%]">
            <h1 className="text-white text-sm md:text-xl xl:text-4xl font-black">
              Xbox Game Pass Ultimate
            </h1>
            <p className="text-white text-sm md:text-[14px] mt-[3%] mb-[5%] xl:text-[16px]">
              Jogue novos títulos desde o primeiro dia. Aproveite centenas de
              jogos de alta qualidade para jogar com amigos no console, no PC ou
              na nuvem.
            </p>
            <button className="text-left text-white cursor-pointer mt-[5%] md:mt-1">
              <span className="bg-[#0067B8] py-3 px-4 rounded-md hover:bg-blue-600">
                Participe agora
              </span>
            </button>
          </div>
        </>
      )}
      {actualBannerImage === 1 && (
        <>
          <Image
            src="/img/Microsoft365.avif"
            alt="Microsoft365 Banner"
            width={2000}
            height={2000}
            className="w-full"
          />
          <div className="absolute top-0 left-0 my-[3.1%] mx-[10%] md:my-[4%] md:mx-[8%] lg:my-[7%] xl:my-[10%] sm:my-[1%] w-[30%]">
            <h1 className="text-sm md:text-xl xl:text-4xl font-black">
              Microsoft 365
            </h1>
            <p className="text-sm md:text-[12px] mt-[3%] mb-[5%] xl:text-[16px]">
              Apresentamos o Microsoft 365 Premium com nossos maiores limites de
              uso e recursos exclusivos do Copilot para usuários avançados de
              IA.
            </p>
            <button className="text-left text-white cursor-pointer mt-[5%] md:mt-1">
              <span className="bg-[#0067B8] md:text-[12px] md:py-3 md:px-4 py-2 px-3 text-[10px] rounded-md hover:bg-blue-600">
                Descubra o Microsoft 365 Premium
              </span>
            </button>
            <p className="mt-[3%] text-[#0067C2] font-semibold cursor-pointer hover:underline sm:text-sm">
              Consulte outras opções para o Microsoft 365 &gt;
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default BannerImageHeader;
