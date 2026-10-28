# Site da Dra. Marina Moura

Site institucional responsivo em Next.js + TypeScript + Tailwind CSS.

## Iniciar

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Produção

```bash
npm run typecheck
npm run build
npm start
```

## Publicar

Envie o projeto para um repositório GitHub e importe na Vercel (framework Next.js). Configure seu domínio.

## Personalizar

- `lib/config.ts`: telefone, Instagram, endereço e links.
- `app/page.tsx`: conteúdo e seções.
- `app/globals.css`: identidade visual e responsividade.
- `public/images/`: fotografias.

O formulário **não envia informações a um servidor**; ele abre o WhatsApp com a mensagem preenchida. Não há integração de agenda nem confirmação automática de consulta.

## Antes de publicar

1. Confirme autorização de uso das fotos da profissional e da clínica.
2. Confirme endereço, telefone, formação e modalidades de atendimento.
3. Acrescente CRM e RQE quando aplicável e confirme conformidade com regras de publicidade médica.
4. Substitua as imagens da clínica recortadas de capturas de tela por fotos originais em alta resolução, se disponíveis.
5. Adicione uma política de privacidade apropriada caso instale analytics, cookies ou formulários com armazenamento.

