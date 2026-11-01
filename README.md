# SYN — Show Yourself Now | Site institucional

Site institucional do **SYN — Show Yourself Now**, estúdio de desenvolvimento web focado em sites e landing pages modernos, responsivos e leves, com possibilidade de expansão para automações e soluções digitais.

A identidade visual utiliza azul-marinho escuro e ciano, com estilo minimalista e tecnológico.

## 1. Abrir no VS Code

1. Abra o VS Code.
2. Acesse **Arquivo > Abrir Pasta...** e selecione a pasta `PROJETO SYN`.
3. Abra `index.html` usando a extensão **Live Server** ou diretamente no navegador.
4. Salve os arquivos após editar e confira as mudanças.

O projeto utiliza **HTML, CSS e JavaScript**, sem necessidade de instalar Node.js ou dependências.

## 2. Organização dos arquivos

```text
PROJETO SYN/
├── index.html                  # Estrutura, textos e seções
├── css/
│   └── style.css               # Identidade visual e responsividade
├── js/
│   ├── config.js               # Configurações de contato
│   └── script.js               # Menu, ano automático e links de contato
├── assets/
│   └── images/                 # Logotipos, ícones e imagens do portfólio
│       ├── logo-syn.png         # Logotipo do SYN
│       ├── favicon.svg          # Ícone da aba do navegador
│       ├── hero-interface.svg   # Ilustração da seção inicial
│       ├── syn-hero-foto.png    # Imagem complementar da seção inicial
│       └── og-cover.svg         # Imagem para compartilhamento
└── README.md                    # Documentação do projeto
```

O mapa acima apresenta os arquivos principais. A pasta de imagens também contém as prévias e ilustrações utilizadas no portfólio.

**Sobre o portfólio:** os projetos conceituais demonstram possibilidades de criação e não devem ser apresentados como trabalhos realizados para clientes reais.

As imagens podem ser substituídas por SVG, PNG, JPG ou WEBP, ajustando os caminhos no HTML ou no CSS conforme necessário.

## 3. Configurar contato

Abra `js/config.js` e preencha os dados de contato do estúdio:

- **WhatsApp:** código do país + DDD + telefone, apenas com dígitos.
- **E-mail:** endereço válido para receber solicitações.
- **Mensagem do WhatsApp:** texto inicial para pedidos de orçamento.

O script utiliza as configurações disponíveis em `window.SYN_CONFIG`.

Quando houver um telefone válido, o botão de orçamento utilizará o WhatsApp. Caso contrário, tentará utilizar o e-mail. Se nenhum contato válido estiver configurado, o botão ficará desativado.

Confira também se o assunto do e-mail e os textos de contato utilizam o nome **SYN**.

## 4. Responsividade e conferência

Referências de tamanho para conferir o layout:

- **Desktop:** 1440 × 900 e 1280 × 800.
- **Tablet:** 768 × 1024 e 820 × 1180.
- **Celular:** 390 × 844, 375 × 812 e 320 × 568.

No Chrome ou Edge, abra as ferramentas de desenvolvimento com `F12` e ative a visualização de dispositivos com `Ctrl+Shift+M`.

Confira:

- Abertura e fechamento do menu.
- Navegação entre as seções.
- Legibilidade dos textos.
- Exibição das imagens.
- Ausência de rolagem horizontal indesejada.
- Funcionamento dos links de contato.
- Navegação por teclado.

## 5. Salvar alterações com Git

O repositório já foi inicializado e conectado ao GitHub.

Depois de editar e salvar os arquivos, confira as alterações:

```bash
git status
git diff
```

Prepare os arquivos, registre uma versão e envie ao GitHub:

```bash
git add .
git commit -m "Descreva a melhoria realizada"
git push
```

Utilize mensagens que expliquem o que mudou, por exemplo:

```bash
git commit -m "Atualiza identidade visual do SYN"
```

Antes de mudanças maiores, crie uma branch:

```bash
git switch -c melhoria/portfolio
```

## 6. Publicação com GitHub Pages

A publicação está configurada para utilizar:

- **Fonte:** Deploy from a branch.
- **Branch:** main.
- **Pasta:** /(root).

As alterações enviadas para a branch `main` iniciam uma nova publicação. O andamento pode ser acompanhado na aba **Actions** do repositório.

O endereço publicado pode ser consultado em **Settings > Pages**.

## 7. Cuidados antes de divulgar

- Preencha e confira os contatos do estúdio.
- Revise os textos e a identidade visual do SYN.
- Identifique os projetos conceituais do portfólio.
- Confira títulos, descrições e imagens de compartilhamento.
- Configure uma URL absoluta para `og:image` em produção.
- Confira os caminhos e as letras maiúsculas e minúsculas dos arquivos.
- Revise o site no computador e no celular.
- Configure o domínio próprio quando estiver disponível.

---

**SYN — Show Yourself Now**

Sites, landing pages e soluções digitais.
