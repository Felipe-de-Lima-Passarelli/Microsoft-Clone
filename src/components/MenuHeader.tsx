//Icons
import { IconArrowBigRightFilled } from "@tabler/icons-react";

//Interface
interface menuHeaderProps {
  menuHeader: boolean;
}

const MenuHeader = ({ menuHeader }: menuHeaderProps) => {
  return (
    <>
      {menuHeader && (
        <div className="absolute top-full left-0 right-0 z-10">
          <div className="flex flex-row justify-between text-[8px] md:text-[14px] p-[1%] bg-[#F2F2F2]">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Software</h2>
              <p className="cursor-pointer hover:underline">
                Aplicações Windows
              </p>
              <p className="cursor-pointer hover:underline">OneDrive</p>
              <p className="cursor-pointer hover:underline">Outlook</p>
              <p className="cursor-pointer hover:underline">
                Como migrar do Skype para o Teams
              </p>
              <p className="cursor-pointer hover:underline">OneNote</p>
              <p className="cursor-pointer hover:underline">Microsoft Teams</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">PCs e dispositivos</h2>
              <p className="cursor-pointer hover:underline">Compre o Xbox</p>
              <p className="cursor-pointer hover:underline">
                Acessórios para PC
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Entretenimento</h2>
              <p className="cursor-pointer hover:underline">
                Xbox Game Pass Ultimate
              </p>
              <p className="cursor-pointer hover:underline">Xbox e jogos</p>
              <p className="cursor-pointer hover:underline">Jogos para PC</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Negócios</h2>
              <p className="cursor-pointer hover:underline">IA da Microsoft</p>
              <p className="cursor-pointer hover:underline">
                Segurança da Microsoft
              </p>
              <p className="cursor-pointer hover:underline">Azure</p>
              <p className="cursor-pointer hover:underline">Dynamics 365</p>
              <p className="cursor-pointer hover:underline">
                Microsoft 365 para empresas
              </p>
              <p className="cursor-pointer hover:underline">
                Microsoft Power Platform
              </p>
              <p className="cursor-pointer hover:underline">Windows 365</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Desenvolvedor & it</h2>
              <p className="cursor-pointer hover:underline">
                Desenvolvedor Microsoft
              </p>
              <p className="cursor-pointer hover:underline">Microsoft Learn</p>
              <p className="cursor-pointer hover:underline">
                Suporte para aplicativos de marketplace de IA
              </p>
              <p className="cursor-pointer hover:underline">
                Comunidade Microsoft Tech
              </p>
              <p className="cursor-pointer hover:underline">
                Microsoft Marketplace
              </p>
              <p className="cursor-pointer hover:underline">Visual Studio</p>
              <p className="cursor-pointer hover:underline">
                Marketplace Rewards
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Outros</h2>
              <p className="cursor-pointer hover:underline">
                Microsoft Rewards
              </p>
              <p className="cursor-pointer hover:underline">
                Segurança e downloads gratuitos
              </p>
              <p className="cursor-pointer hover:underline">Educação</p>
              <p className="cursor-pointer hover:underline">Cartões-presente</p>
              <p className="cursor-pointer hover:underline">Licenciamento</p>
            </div>
          </div>
          <div className="bg-[#E6E6E6] p-[0.5%] text-sm flex flex-row items-center gap-2 justify-center">
            <p className="cursor-pointer hover:underline">VER MAPA DO SITE</p>
            <IconArrowBigRightFilled size={20} />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuHeader;
