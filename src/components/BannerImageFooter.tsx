//Next
import Image from "next/image";

//Interface
interface bannerImageFooterProps {
  actualBannerImageEnd: number;
}

const BannerImageFooter = ({
  actualBannerImageEnd,
}: bannerImageFooterProps) => {
  return (
    <>
      {actualBannerImageEnd === 0 && (
        <>
          <Image
            src="/img/Sparrow-Desktop.avif"
            alt="Sparrow Desktop Logo"
            width={2000}
            height={2000}
            className="w-full"
          />
          <div className="absolute top-0 left-0 my-[3.1%] mx-[10%] md:my-[6%] md:mx-[8%] lg:my-[7%] xl:my-[14%] w-[34%]">
            <h1 className="text-sm md:text-xl xl:text-3xl font-black">
              Proteção da biodiversidade
            </h1>
            <p className="text-sm md:text-[14px] mt-[3%] mb-[5%] xl:text-[16px]">
              O AI for Good da Microsoft criou o Projeto SPARROW para observar a
              vida selvagem.
            </p>
            <button className="text-left text-white cursor-pointer mt-[5%] md:mt-1">
              <span className="bg-[#0067B8] py-3 px-4 rounded-md hover:bg-blue-600">
                Saiba mais
              </span>
            </button>
          </div>
        </>
      )}
      {actualBannerImageEnd === 1 && (
        <>
          <Image
            src="/img/Olympics.avif"
            alt="Olympics Banner"
            width={2000}
            height={2000}
            className="w-full"
          />
          <div className="absolute top-0 left-0 my-[3.1%] mx-[10%] md:my-[6%] md:mx-[8%] lg:my-[7%] xl:my-[14%] w-[34%]">
            <h1 className="text-white text-sm md:text-xl xl:text-3xl font-black">
              Rumo ao ouro com a IA
            </h1>
            <p className="text-white text-sm md:text-[14px] mt-[3%] mb-[5%] xl:text-[16px]">
              As Olimpíadas Especiais usam o Copilot para ajudar os atletas.
            </p>
            <button className="text-left text-white cursor-pointer mt-[5%] md:mt-1">
              <span className="bg-[#0067B8] py-3 px-4 rounded-md hover:bg-blue-600">
                Confira os detalhes
              </span>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default BannerImageFooter;
