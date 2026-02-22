const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-between text-[8px] md:text-[12px] p-[1%] bg-[#F2F2F2] px-[8%] py-[2%] items-start ">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold opacity-70">Novidades</h2>
          <p className="cursor-pointer opacity-70 hover:underline">
            Copilot para organizações
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Copilot para uso pessoal
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft 365
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Explorar os produtos da Microsoft
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Aplicativos do Windows 11
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold opacity-70">Microsoft Store</h2>
          <p className="cursor-pointer opacity-70 hover:underline">
            Perfil da conta
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Centro de Download
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Suporte da Microsoft Store
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Devoluções
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Acompanhamento de pedidos
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold opacity-70">Educação</h2>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft Education
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Dispositivos para educação
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft Teams para Educação
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft 365 Education
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Office Education
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Treinamento e desenvolvimento de educadores
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Ofertas para estudantes e pais
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Azure para estudantes
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold opacity-70">Negócios</h2>
          <p className="cursor-pointer opacity-70 hover:underline">
            IA da Microsoft
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Segurança da Microsoft
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">Azure</p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Dynamics 365
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft 365
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft Advertising
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft 365 Copilot
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft Teams
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold opacity-70">Desenvolvedor & it</h2>
          <p className="cursor-pointer opacity-70 hover:underline">
            Desenvolvedor Microsoft
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft Learn
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Suporte para aplicativos de marketplace de IA
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Comunidade Microsoft Tech
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft Marketplace
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Microsoft Power Platform
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Marketplace Rewards
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Visual Studio
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold opacity-70">Empresa</h2>
          <p className="cursor-pointer opacity-70 hover:underline">Carreiras</p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Sobre a Microsoft
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Notícias da empresa
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Privacidade na Microsoft
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Investidores
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Diversidade e inclusão
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Acessibilidade
          </p>
          <p className="cursor-pointer opacity-70 hover:underline">
            Sustentabilidade
          </p>
        </div>
      </div>
      <p className="text-center bg-[#F2F2F2]">
        © {new Date().getFullYear()} • Projeto desenvolvido por
        <a href="https://github.com/Felipe-de-Lima-Passarelli" target="_blank">
          <span className="font-semibold ml-1">Felipe de Lima Passarelli</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
