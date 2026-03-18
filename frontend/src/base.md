Crie uma landing page HTML de página única (single-page) para a empresa 
"Vistamed Produtos Hospitalares". O arquivo deve ser um único index.html 
com CSS e JavaScript embutidos (sem dependências externas, exceto Google Fonts).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 IDENTIDADE VISUAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logo: "Vistamed" — "Vista" em verde escuro, "med" em verde médio
Ícone: olho estilizado em tons de verde
Subtítulo da marca: "PRODUTOS HOSPITALARES" (caixa alta, espaçado)

Paleta de cores (usar como variáveis CSS):
  --green-dark:  #2D5A3D  → títulos, navbar, botões primários
  --green-mid:   #6B9E6E  → destaques, hover, "med" da logo
  --green-light: #EEF4EE  → fundos de seção alternada, badges
  --espresso:    #2C1E0F  → footer, seção CTA escura
  --charcoal:    #333333  → texto corrido
  --offwhite:    #F8FAF8  → fundo geral da página
  --white:       #ffffff  → cards, navbar

Fonte: Inter (Google Fonts) — pesos 300, 400, 600, 700, 900

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏗️ ESTRUTURA DA PÁGINA (em ordem)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. NAVBAR (sticky, topo)
   - Logo textual "Vistamed" + subtítulo "PRODUTOS HOSPITALARES"
   - Links de navegação: Produtos | Diferenciais | Contato
   - Botão CTA: "Fale Conosco" → âncora #contato
   - Em mobile (≤768px): ocultar links, exibir botão hambúrguer (☰)
   - Menu mobile deslizável com JS puro (toggle class "open")
   - Fechar menu ao clicar fora ou em qualquer link

2. HERO SECTION
   - Fundo: gradiente linear de --green-dark para --green-mid
   - Badge: "🏥 Referência em Saúde"
   - Título H1 (grande, bold): "Excelência em Materiais Cirúrgicos e Hospitalares"
     (destacar "Materiais Cirúrgicos" em cor clara #a8d5a8)
   - Subtítulo: descrição dos produtos e serviços
   - Dois botões: "Ver Produtos" (branco) e "Solicitar Orçamento" (outline)
   - Card decorativo à direita: ícone de olho 👁️ + texto "Tecnologia Ocular Avançada"
     com fundo glassmorphism (rgba branco + backdrop-filter blur)
   - Em mobile: layout empilhado, botões em coluna e largura 100%

3. BARRA DE ESTATÍSTICAS
   - Fundo branco, 4 itens lado a lado com separadores verticais
   - Itens: "500+ Produtos Disponíveis" | "100% Materiais Certificados" 
            | "24h Entrega Rápida" | "ANVISA Regularizado"
   - Em mobile (≤480px): grid 2x2

4. SEÇÃO PRODUTOS (id="produtos")
   - Fundo: --offwhite
   - Tag badge: "NOSSOS PRODUTOS"
   - Título: "Linha Completa Hospitalar"
   - Grid responsivo de 4 cards (auto-fit, minmax 240px):
     • 🔬 Materiais Cirúrgicos
     • 🏥 Produtos Hospitalares  
     • 👁️ Lentes Intraoculares (monofocal, bifocal, trifocal, cirurgia de catarata)
     • 🧴 Materiais Estéreis (campos cirúrgicos, luvas, compressas, kits descartáveis)
   - Cards: borda superior colorida (--green-mid), hover com translateY(-6px) e sombra

5. SEÇÃO DIFERENCIAIS (id="diferenciais")
   - Fundo: --green-light
   - Tag badge: "POR QUE A VISTAMED?"
   - Título: "Nossos Diferenciais"
   - Grid de 4 itens centralizados:
     • ✅ Qualidade Garantida — padrões ANVISA
     • 🚚 Entrega Ágil — logística com rastreamento
     • 🤝 Suporte Especializado — equipe técnica
     • 💼 Amplo Portfólio — marcas nacionais e importadas
   - Ícones em círculo com fundo --green-dark

6. SEÇÃO CTA (call-to-action)
   - Fundo: gradiente escuro de --espresso
   - Título: "Pronto para equipar sua clínica?"
   - Subtítulo + botão "Solicitar Orçamento Agora" (--green-mid)

7. SEÇÃO CONTATO (id="contato")
   - Fundo branco
   - Layout 2 colunas (em mobile: 1 coluna)
   - Coluna esquerda: título, texto, 3 infos de contato com ícones
     📞 (92) 99999-9999
     📧 contato@vistamed.com.br
     📍 Manaus, Amazonas — Brasil
   - Coluna direita: formulário com campos:
     Nome | E-mail | Telefone/WhatsApp | Textarea | Botão "Enviar Mensagem"
   - Input focus com borda --green-mid

8. FOOTER
   - Fundo --espresso, texto claro
   - "© 2026 Vistamed Produtos Hospitalares. Todos os direitos reservados."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 RESPONSIVIDADE (obrigatório)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Usar clamp() para tipografia e espaçamentos fluidos.
Breakpoints:
  ≤ 1024px → grid de produtos e diferenciais: 2 colunas
  ≤ 768px  → navbar vira hambúrguer, hero empilhado, contato em 1 coluna
  ≤ 480px  → tudo em 1 coluna, stats em 2x2, botões hero em 100%
  ≤ 360px  → stats em coluna única

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️ REQUISITOS TÉCNICOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- HTML5 semântico (nav, section, footer)
- CSS com variáveis (custom properties) no :root
- scroll-behavior: smooth no html
- overflow-x: hidden no body
- Transições suaves (0.2s) em todos os elementos interativos
- JavaScript puro (vanilla) apenas para o menu mobile
- Nenhum framework CSS (sem Bootstrap, Tailwind, etc.)
- Arquivo único: index.html com tudo embutido
- Compatível com Chrome, Firefox, Safari e Edge
- Sem imagens externas (usar emojis como ícones visuais)
