//Next
import Image from "next/image";

const BannerImageMain = () => {
  return (
    <>
      <Image
        src="/img/Windows11-Logo.avif"
        alt="Microsoft 11 Logo"
        width={5000}
        height={5000}
        className="w-full"
      />
      <div className="absolute top-0 left-0 my-[3.1%] mx-[10%] md:my-[6%] md:mx-[8%] lg:my-[7%] xl:my-[10%] w-[38%]">
        <h1 className="text-white text-sm md:text-xl xl:text-4xl font-black">
          Projetado para a vida hoje e amanhã
        </h1>
        <p className="text-white text-sm md:text-[14px] mt-[3%] mb-[5%] xl:text-[16px]">
          A próxima geração de jogos. Seus objetivos. Amigos e família. O
          Windows 11 foi feito para aproximá-lo de tudo o que você mais gosta.
        </p>
        <button className="text-left text-white cursor-pointer mt-[5%] md:mt-1">
          <span className="bg-[#0067B8] py-3 px-4 rounded-md hover:bg-blue-600">
            Veja se o seu PC está pronto
          </span>
        </button>
      </div>
    </>
  );
};

export default BannerImageMain;
