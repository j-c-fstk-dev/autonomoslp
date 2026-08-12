<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Landing pages para profissionais autônomos

O mesmo código gera uma landing page pública para cada profissão. O perfil é
definido durante o build pela variável `VITE_ACTIVE_PROFILE`.

## Rodar localmente

**Pré-requisito:** Node.js.

1. Instale as dependências: `npm install`.
2. Copie `.env.example` para `.env.local`.
3. Defina o perfil desejado em `.env.local`:
   ```env
   VITE_ACTIVE_PROFILE=pedreiro
   VITE_WHATSAPP_PHONE=5511999999999
   ```
   Valores aceitos: `pedreiro`, `eletricista` e `encanador`.
   Use `VITE_WHATSAPP_PHONE` com DDI e DDD, somente números, para receber as conversas iniciadas pelo site.
4. Execute `npm run dev`.

Se a variável estiver ausente ou for inválida, o site usa `pedreiro` como
perfil padrão. O painel de demonstração aparece somente em desenvolvimento;
ele não é exibido no build de produção.

## Publicar os três sites a partir da `main`

Crie um projeto de deploy para cada domínio, todos apontando para a mesma
branch `main`. Em cada projeto, configure uma variável de ambiente de build:

| Site | `VITE_ACTIVE_PROFILE` |
| --- | --- |
| Pedreiro | `pedreiro` |
| Eletricista | `eletricista` |
| Encanador | `encanador` |

Use `npm run build` como comando de build e publique a pasta `dist`. Como a
variável é lida no build, alterá-la exige um novo deploy. Para o projeto de
pedreiro, configure também `VITE_WHATSAPP_PHONE` com o número que receberá as
conversas.
