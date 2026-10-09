# Landing Page: Consultório de Psicologia

Desafio técnico de Front-End do processo seletivo da **Linked Empresa Júnior**.

**Candidato:** Bruno Resende

## Sobre o projeto

Implementação de uma landing page para um consultório de psicologia e psicoterapia,
a partir de um layout pronto no Figma. O objetivo é reproduzir o design com fidelidade
(cores, tipografia, espaçamentos e componentes), com foco em HTML semântico,
responsividade e acessibilidade básica.

A página tem sete seções: cabeçalho com navegação, hero, nossos serviços,
horário de atendimento, feedbacks, contato (endereço, mapa e formulário) e rodapé.

[Layout no Figma](https://www.figma.com/design/An7g0BLsFgcrifdUfg0x3w/Landing-page-Psicologos?node-id=0-1)

## Como rodar

O projeto é estático e não precisa de build nem de servidor para ser visualizado:

```bash
git clone https://github.com/<usuario>/linked-ps-web-bruno-resende.git
cd linked-ps-web-bruno-resende
```

Depois, basta abrir o arquivo `index.html` no navegador.

> O CSS compilado (`dist/output.css`) está versionado justamente para que isso funcione
> sem nenhuma etapa de instalação. As instruções de desenvolvimento (recompilar o CSS)
> serão adicionadas aqui quando o Tailwind for configurado.

## Tecnologias

- **HTML5** para a marcação semântica
- **CSS3** com **Tailwind CSS**, usado via CLI e não por CDN
- **JavaScript (Vanilla)**, sem bibliotecas ou frameworks de componentes

## Decisões técnicas

Esta seção é atualizada ao longo do desenvolvimento.

### Tailwind via CLI, com o CSS compilado versionado

O edital exige que o projeto funcione apenas abrindo o `index.html`. O CDN do Tailwind
depende de internet e compila o CSS no navegador a cada carregamento, o que piora a
performance. Por isso optei pelo Tailwind CLI, que gera um arquivo estático.

Como consequência, o `dist/output.css` é commitado, e não ignorado como seria o padrão
num projeto com pipeline de build. O `node_modules/` continua no `.gitignore`.

### Fontes locais, não via CDN

Pelo mesmo motivo, as fontes são servidas de `assets/fonts/` via `@font-face`, e não por
`<link>` para o Google Fonts. Assim a tipografia se mantém fiel ao Figma mesmo offline.

### Design tokens no tema do Tailwind

Cores, fontes, tamanhos e espaçamentos extraídos do Figma são declarados como tokens no
tema do Tailwind, em vez de valores soltos repetidos no HTML. Componentes que se repetem
(botões, cabeçalho de seção, cards) são extraídos para classes próprias, para manter a
marcação legível.

## Resolução de ambiguidades do layout

O Figma apresenta apenas a versão desktop. As decisões abaixo cobrem o que não está
especificado no design e serão detalhadas conforme forem implementadas:

- **Layout mobile:** como cada seção se reorganiza em telas menores
- **Menu mobile:** a navegação não cabe em telas pequenas e vira um menu recolhível
- **Mapa:** imagem estática com link para o Google Maps, em vez de `iframe`, para não
  depender de conexão nem de cookies de terceiros
- **Formulário:** estático, conforme permitido no edital. Validação em JavaScript e
  mensagem de confirmação, sem envio real de dados
