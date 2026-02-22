"use client";

//Next
import Image from "next/image";
import { useState } from "react";

//ClassName li
const liTailwind: string =
  "inline-block border-b-2 border-transparent hover:border-black";

//Icons
import {
  IconArrowNarrowDown,
  IconSearch,
  IconShoppingCart,
  IconUserPlus,
} from "@tabler/icons-react";

//Components
import MenuHeader from "./MenuHeader";

const Header = () => {
  const [menuHeader, setMenuHeader] = useState<boolean>(false);

  return (
    <header className="relative">
      <MenuHeader menuHeader={menuHeader} />
      <nav className="flex flex-row md:justify-between items-center mx-[8%] py-[1%] text-[10px] md:text-sm gap-2">
        <div>
          <ul className="flex flex-row gap-1 md:gap-6 items-center">
            <li>
              <Image
                src="/img/Logo.png"
                alt="Logo Microsoft"
                width={100}
                height={100}
                className="w-[80%] cursor-pointer"
              />
            </li>
            <li className={liTailwind}>Microsoft 365</li>
            <li className={liTailwind}>Teams</li>
            <li className={liTailwind}>Copilot</li>
            <li className={liTailwind}>Windows</li>
            <li className={liTailwind}>Xbox</li>
            <li className={liTailwind}>Suporte</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row gap-1 md:gap-6 items-center">
            <button
              className="flex flex-row items-center cursor-pointer"
              onClick={() => setMenuHeader(!menuHeader)}
            >
              <li className={liTailwind}>Toda a Microsoft</li>
              <IconArrowNarrowDown />
            </button>
            <button className="flex flex-row gap-1 items-center cursor-pointer">
              <li className={liTailwind}>Pesquisar</li>
              <IconSearch size={20} />
            </button>
            <button className="flex flex-row gap-1 items-center cursor-pointer">
              <li className={liTailwind}>Carrinho</li>
              <IconShoppingCart size={20} />
            </button>
            <button className="flex flex-row gap-1 items-center cursor-pointer">
              <li className="inline-block border-b-2 border-transparent">
                Entrar
              </li>
              <IconUserPlus size={20} />
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
