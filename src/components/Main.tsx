"use client";

//Next
import { useEffect, useState } from "react";

//Components
import CardMainIcon from "./CardMainIcon";
import CardMainImage from "./CardMainImage";
import BannerImageHeader from "./BannerImageHeader";
import BannerImageMain from "./BannerImageMain";
import BannerImageFooter from "./BannerImageFooter";

//Icons
import {
  IconCircle,
  IconCircleFilled,
  IconArrowBadgeLeftFilled,
  IconArrowBadgeRightFilled,
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

const Main = () => {
  const [actualBannerImage, setActualBannerImage] = useState<number>(0);
  const [onPause, setOnPause] = useState<boolean>(true);

  const changeImageBanner = () => {
    setActualBannerImage(actualBannerImage === 0 ? 1 : 0);
  };

  useEffect(() => {
    if (onPause) return;

    const interval = setInterval(() => {
      setActualBannerImage((prev) => (prev === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, [onPause]);

  const [actualBannerImageEnd, setActualBannerImageEnd] = useState<number>(0);
  const [onPauseEnd, setOnPauseEnd] = useState<boolean>(true);

  const changeImageBannerEnd = () => {
    setActualBannerImageEnd(actualBannerImageEnd === 0 ? 1 : 0);
  };

  useEffect(() => {
    if (onPauseEnd) return;

    const intervalEnd = setInterval(() => {
      setActualBannerImageEnd((prev) => (prev === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(intervalEnd);
  }, [onPauseEnd]);

  return (
    <main className="relative min-w-190">
      <BannerImageHeader actualBannerImage={actualBannerImage} />
      <div className="flex flex-row justify-center items-center gap-5">
        <button className="cursor-pointer" onClick={() => setOnPause(!onPause)}>
          {onPause ? (
            <IconPlayerPlayFilled size={25} />
          ) : (
            <IconPlayerPauseFilled size={25} />
          )}
        </button>
        <button className="cursor-pointer" onClick={() => changeImageBanner()}>
          <IconArrowBadgeLeftFilled size={40} />
        </button>
        {actualBannerImage === 0 ? (
          <IconCircleFilled size={15} />
        ) : (
          <IconCircle stroke={2} size={15} />
        )}
        {actualBannerImage === 0 ? (
          <IconCircle stroke={2} size={15} />
        ) : (
          <IconCircleFilled size={15} />
        )}
        <button className="cursor-pointer" onClick={() => changeImageBanner()}>
          <IconArrowBadgeRightFilled size={40} />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-[40%] mx-auto pt-[4%]">
        <CardMainIcon
          img="Microsoft-Logo.svg"
          text="Escolha seu Microsoft 365"
        />
        <CardMainIcon img="Xbox-Logo.svg" text="Compre o Xbox" />
        <CardMainIcon img="Microsoft-Logo.svg" text="Adquira o Windows 11" />
      </div>
      <div className="mx-[10%] py-[4%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardMainImage
            img="Xbox-White.webp"
            textTitle="Xbox Series S"
            textDesc="Desempenho de última geração no menor de todos os Xbox."
            textButton="Comprar Xbox Series S"
          />
          <CardMainImage
            img="Xbox-Black.avif"
            textTitle="Xbox Series S"
            textDesc="O Xbox está ainda mais rápido e poderoso."
            textButton="Comprar Xbox Series S"
          />
          <CardMainImage
            img="Microsoft-Edge.avif"
            textTitle="Microsoft Edge"
            textDesc="Desempenho excepcional com mais privacidade, mais velocidade e mais qualidade durante a navegação."
            textButton="Baixe agora"
          />
          <CardMainImage
            img="Bing-Wallpaper.avif"
            textTitle="Aproxime o mundo com o Papel de Parede do Bing"
            textDesc="Baixe o aplicativo gratuito e aproveite vistas deslumbrantes com um plano de fundo novo todos os dias."
            textButton="Obtenha o papel de parede do bing"
          />
        </div>
        <div className="relative my-[4%]">
          <BannerImageMain />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-[2%]">Para negócios</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardMainImage
              img="Microsoft-Copilot.avif"
              textTitle="Microsft 365 Copilot"
              textDesc="Com a IA no Microsoft 365 para empresas, você poupa tempo e se concentra no que realmente importa."
              textButton="Saiba mais"
            />
            <CardMainImage
              img="Azure.avif"
              textTitle="Inovação ilimitada"
              textDesc="Projete, potencialize e operacionalize sistemas que aprendem e se adaptam – com o Azure."
              textButton="Introdução ao Azure"
            />
            <CardMainImage
              img="Visual-Studio.avif"
              textTitle="Visual Studio 2026"
              textDesc="Desbloqueie seu potencial com o IDE mais popular do mundo para os desenvolvedores profissionais."
              textButton="Baixe o Visuall Studio"
            />
            <CardMainImage
              img="Azure-AI.avif"
              textTitle="Entre na era da IA"
              textDesc="Crie, comunique e codifique com as soluções de IA da Microsoft."
              textButton="Explore as soluções de IA"
            />
          </div>
        </div>
        <div className="relative my-[4%]">
          <BannerImageFooter actualBannerImageEnd={actualBannerImageEnd} />
          <div className="flex flex-row justify-center items-center gap-5">
            <button
              className="cursor-pointer"
              onClick={() => {
                setOnPauseEnd(!onPauseEnd);
              }}
            >
              {onPauseEnd ? (
                <IconPlayerPlayFilled size={25} />
              ) : (
                <IconPlayerPauseFilled size={25} />
              )}
            </button>
            <button
              className="cursor-pointer"
              onClick={() => changeImageBannerEnd()}
            >
              <IconArrowBadgeLeftFilled size={40} />
            </button>
            {actualBannerImageEnd === 0 ? (
              <IconCircleFilled size={15} />
            ) : (
              <IconCircle stroke={2} size={15} />
            )}
            {actualBannerImageEnd === 0 ? (
              <IconCircle stroke={2} size={15} />
            ) : (
              <IconCircleFilled size={15} />
            )}
            <button
              className="cursor-pointer"
              onClick={() => changeImageBannerEnd()}
            >
              <IconArrowBadgeRightFilled size={40} />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <h2>Siga Microsoft</h2>
          <IconBrandFacebook className="cursor-pointer" />
          <IconBrandX className="cursor-pointer" />
          <IconBrandYoutube className="cursor-pointer" />
          <IconBrandInstagram className="cursor-pointer" />
        </div>
        <div className="flex flex-row justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#D9D9D9] px-4 py-2 mt-[1%] rounded-lg shadow-lg hover:bg-white transition"
          >
            ↑ Voltar ao início
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
