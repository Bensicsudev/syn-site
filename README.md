# ARKORA STUDIO — Projeto completo V2

Este projeto é a evolução da V1: **preserva a estrutura e as seções existentes** e adiciona arquivos reais de imagem SVG, prévias de portfólio, ajustes de responsividade e configuração centralizada de contato.

## 1. Abrir no VS Code
1. Extraia a pasta `ARKORA_STUDIO_Projeto_Completo` do ZIP.
2. VS Code → **Arquivo > Abrir Pasta...** → selecione a pasta extraída.
3. Abra `index.html` usando **Live Server** (extensão) ou diretamente no Chrome.
4. Edite o site com o servidor aberto e veja as mudanças. Não é preciso instalar Node ou dependências.

## 2. Mapa dos arquivos

```text
ARKORA_STUDIO_Projeto_Completo/
├── index.html                  # Textos, estrutura, imagens e seções
├── css/
│   └── style.css               # Visual + regras desktop, tablet e celular
├── js/
│   ├── config.js               # WhatsApp/e-mail do estúdio (PREENCHER)
│   └── script.js               # Menu responsivo, ano e contato
├── assets/
│   └── images/
│       ├── logo-arkora.svg     # Conceito de logotipo editável
│       ├── favicon.svg         # Ícone da aba do navegador
│       ├── hero-interface.svg   # Imagem da primeira seção
│       ├── projeto-brownies.svg # Mockup do portfólio conceitual
│       ├── projeto-clinica.svg  # Mockup do portfólio conceitual
│       ├── projeto-automotivo.svg # Mockup do portfólio conceitual
│       └── og-cover.svg        # Arte para compartilhamento (requer URL absoluta em produção)
└── README.md
```

**Sobre as imagens:** todos os arquivos SVG são artes vetoriais originais incluídas dentro da pasta. Funcionam sem internet e podem ser abertos em um navegador, no Figma ou num editor SVG. O logo é uma proposta ilustrativa; o nome ARKORA ainda é provisório. As imagens do portfólio são **exemplos conceituais**, não projetos de clientes reais. SVGs podem ser trocados por PNG/JPG/WEBP futuramente, ajustando `src` no HTML.

## 3. Configurar contato (obrigatório antes de publicar)
Abra `js/config.js` e digite **seu próprio** WhatsApp (55 + DDD + telefone, apenas dígitos) **ou** e-mail. O botão de orçamento será ativado automaticamente. Se nenhum contato foi preenchido, ficará desativado propositalmente: assim não direciona clientes para endereço fictício.

## 4. Breakpoints e testes
- **Desktop:** acima de 1000 px; teste 1440 × 900 e 1280 × 800.
- **Tablet:** 741–1000 px; teste 768 × 1024 e 820 × 1180.
- **Celular:** até 740 px; teste 390 × 844, 375 × 812 e 320 × 568.
- Chrome → F12 → **Alternar barra de ferramentas do dispositivo** (`Ctrl+Shift+M`).
- Teste o menu, âncoras, leitura dos textos, imagens e contato ativado.

## 5. Como mudar sem perder o código
Rode no terminal do VS Code:

```bash
git init
git add .
git commit -m "ARKORA v2: site responsivo e assets locais"
```

Depois de cada melhoria, faça outro commit. Antes de mudanças grandes, crie uma branch, por exemplo: `git switch -c melhoria/portfolio`.

**Antes de publicar:** confirme nome comercial e marca; substitua os contatos; use projetos reais apenas quando existirem; insira dados e páginas jurídicas adequadas; revise SEO (incluindo URL absoluta de `og:image`); ajuste hospedagem e domínio. Não há formulário de envio de dados nem scripts terceiros nesta versão.
