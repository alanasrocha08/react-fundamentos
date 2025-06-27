# Fundamentos de React

## 11_gerenciamento-de-states

States (ou Estado) é uma funcionalidade especial de um componente que representa informações que podem mudar ao longo do tempo e que, normalmente, afetam o que é exibido na interface.

Exemplos:

- Contador de likes
- Carrinho de compras
- Captura de formulário
- Filtros
- Alternância de temas/cores
- Seleção de itens

O uso de states permite ao React atualizar a inteface automaticamente sempre que os dados mudarem, sem a necessidade de manipular o DOM manualmente.

## 10_manipulando-eventos

No react, nódeclaramos explicitamente o que queremos que o componente faça attravés de props de eventos.

Estas props aceitam uma callback na sintaxe de arrow function, ou então uma chamada (apenas o nome, sem parênteses) de una função externa.

## 09_props-com-dados-dinamicos

- Utilização de props para enviar dados dinâmicos para um componente
- Configuração de array de dados com definição de tipo
- Refatoração de componentes criando o ListaCursos com o map de Artigo dentro

## 08_props

Prps (abreviação de properties/propriedades) são paraâmetros que um componente pode receber.

Elas funcionam como argumentos de uma função, que podem receber dados de um componente pai para um compponente filho.

Props basicamente são uma forma de comunicação entre componentes.

- Criação de props e definição de tipos para as props
- Desestruturação de props
- Manipulação de props opcionais
- Renderizaçãos condicional

## 07_tailwindcss

Tailwind CSS é um framework CSS utilitário que permite criar interfaces modernas de forma rápida e eficiente, utilizando classes pré-definidas diretamente no HTML. Em vez de escrever CSS personalizado para cada componente, você compõe estilos aplicando múltiplas classes utilitárias, como espaçamento, cores, tipografia, layout e efeitos visuais

- Utility-First: Oferece centenas de classes utilitárias para estilizar elementos sem sair do HTML, como bg-blue-500, p-4, flex, text-center, entre outras

- Design Responsivo: Facilita a criação de layouts que funcionam em qualquer dispositivo, usando modificadores como md:, lg:, etc., para adaptar estilos conforme o tamanho da tela.

- Altamente Personalizável: Permite personalizar temas, cores, espaçamentos e mais através do arquivo tailwind.config.js.

- Rápida Prototipação: Acelera o desenvolvimento, já que não é necessário criar novas classes CSS para cada elemento.

- Integração com Ferramentas: Compatível com extensões para editores de código, como o Tailwind CSS IntelliSense para VS Code, que sugere classes enquanto você digita.

- Diretivas Especiais: Utiliza diretivas como @tailwind, @layer e @apply para organizar e compor estilos em arquivos CSS, facilitando a manutenção e reuso de estilos personalizados

## 06_styles-components

Styled Components é uma biblioteca (lib) muito usada com projetos React que permite escrever estilos CSS dentro do JavaScript usando a própria sintaxe do CSS. Os estilos ficam acoplados ao componente em que foram declarados.

### Instalação

- npm install styled-components
- npm install --save-dev @types/styled-components
- Extensãao vscode-styled-components

Ao trabalhar Styled Components você pode crisr regras com qualquer seletor e usar lógica JavaScript dentro de string.

## 05_modulos-css

-Módulos CSS (CSS Modules) são uma maneira de escrever CSS em arquivos separados de extensão `.module.css` em que cada classe e estilo fica isoladp para um único componente. Há um **acoplamento** entre o módulo e seu componente, permitindo um escopo bem definido sobre os estilos.

- Criação de módulospara cada componente (exceto Rodape)
- Importação do módulo (chamado de styles ou estilos)
- Aplicação das classes usando className={}
- Reorganização de componentes e seus módulos em pastas
- Instalação da extensão CSS Modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline applicando via style e escrevendo CSS In JS (objeto com propriedades CSS)
- CSS inline criando um objeto do tipo CSSProperties e passando-o para o style do componente

## 03_componentes-filhos-ou-interno

- Criação de um componente filho (Menu) e importação/ uso no pai (Cabecalho)
- Criação de um componente filho (Artigo) e importação/ uso no pa (Conteudo)
- Instalação da extensão ES7+ React

## 02_criando-e-organizando-componentes

- Separação de trechos do App em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxe-JSX-no-App

- Construção de um componente único (App.tsx) usando elementos HTML e fragmento React
- Referência sobre componêntes e JSX: https://react.dev/reference/react-dom/components
- Instalação da extensão React Developer Tools

## 00_projeto-zerado

- Remoção do CSS
- Remoção da pasta assets
- Simplificação do componente App.tsx e main.tsx
