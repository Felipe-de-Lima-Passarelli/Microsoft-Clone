# 💻 Microsoft Homepage Clone — Next.js + Tailwind

Este projeto é um clone da página inicial da Microsoft, desenvolvido com foco em:

- Componentização
- Organização de layout
- Controle de estado
- Responsividade
- Estrutura escalável

O objetivo foi simular uma aplicação real com múltiplos componentes e interações.

---

## 🚀 Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Tabler Icons

---

## 🧠 Conceito do Projeto

O projeto simula a página inicial da Microsoft com:

- Menu dropdown
- Banner rotativo
- Cards de produtos
- Seções institucionais
- Banner promocional
- Rodapé completo

Toda a aplicação foi dividida em componentes reutilizáveis.

---

## 🧩 Estrutura de Componentes

components/
│
├── Header
│ └── MenuHeader
│
├── Main
│ ├── BannerImageHeader
│ ├── BannerImageMain
│ ├── BannerImageFooter
│ ├── CardMainIcon
│ └── CardMainImage
│
└── Footer

Cada componente possui responsabilidade específica.

---

## 🎯 Funcionalidades

- Menu dropdown interativo
- Banner com autoplay
- Banner com pause/play
- Troca manual de banners
- Indicadores de slide
- Grid responsivo
- Cards reutilizáveis
- Scroll suave
- Layout responsivo

---

## 🔄 Controle de Estado

O projeto utiliza useState para controlar:

- Menu aberto/fechado
- Banner ativo
- Autoplay
- Banner final

E useEffect para:

- Intervalos automáticos
- Limpeza de memória
- Controle de autoplay

---

## 💡 Principais aprendizados

- Componentização em larga escala
- Organização de layout complexo
- Controle de estado em múltiplos componentes
- Autoplay com useEffect
- Estrutura escalável
- Responsividade com Tailwind
- Separação de responsabilidades

---

## 📌 Próximos passos

- Melhorar acessibilidade
- Melhorar responsividade mobile
- Adicionar animações
- Melhorar semântica HTML
- Transformar banners em dados dinâmicos

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse:

http://localhost:3000

---

👨‍💻 Autor

Felipe de Lima Passarelli  
Desenvolvedor Front-End focado em evolução contínuo e boas práticas.

GitHub:  
https://github.com/Felipe-de-Lima-Passarelli

---

📄 Licença

Este projeto está sob a licença MIT.
