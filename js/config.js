/* =====================================================================
   MARMOREFLEX — CONFIGURAÇÃO DA LOJA
   Tudo que muda com frequência (preço, checkout, cores, textos, FAQ,
   avaliações) fica aqui. O app.js lê este arquivo e monta a página.
   Textos, preços, links e avaliações vieram do site atual (marmoreflex.com.br).
   ===================================================================== */
window.STORE = {
  brand: {
    name: "MarmoreFlex",
    legalName: "MARMORE FLEX LTDA",
    cnpj: "64.704.756/0001-02",
    address: "Av. Lauro de Gusmão Silveira, 479 Taboão Guarulhos — SP · CEP 07140-010",
    // Link "Ver rota no mapa" do site atual (mantido igual)
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20Lauro%20de%20Gusm%C3%A3o%20Silveira%2C%20479%20-%20Parque%20Industrial%20do%20Jardim%20S%C3%A3o%20Geraldo%2C%20Guarulhos%20-%20SP%2C%2007140-010",
    mapEmbed: "https://maps.google.com/maps?q=Av.%20Lauro%20de%20Gusm%C3%A3o%20Silveira%2C%20479%20-%20Guarulhos%20-%20SP%2C%2007140-010&z=16&output=embed",
    email: "contato@marmoreflex.com.br",
    hours: "Seg à Sex: 9h-18h · Sáb: 9h-13h"
  },

  // Fim da campanha (barra de contagem e banners). Mesma data do contador do site atual.
  offerEndsAt: "2026-11-30T23:59:59-03:00",
  campaignLabel: "BLACK FRIDAY",
  discountLabel: "ATÉ 47% OFF",

  product: {
    name: "Revestimento Epóxi MarmoreFlex",
    title: "Revestimento Epóxi Autonivelante Premium — Efeito Mármore e Alto Brilho | Kit de Aplicação Grátis",
    shortTitle: "MarmoreFlex Epóxi",
    rating: "4,8",
    ratingCount: "407",
    soldCount: "8.500",
    // Distribuição de notas exibida hoje no site (soma 407)
    ratingBars: { 5: 342, 4: 44, 3: 13, 2: 5, 1: 3 },
    images: [
      { src: "images/banners/capa-produto.png", alt: "Revestimento Epóxi MarmoreFlex — Black Friday com frete grátis e kit de aplicação" },
      { src: "images/produto/galeria-01-balde.webp", alt: "Balde de revestimento epóxi autonivelante MarmoreFlex de 5kg" },
      { src: "images/produto/cor-marmore-classico.webp", alt: "Revestimento epóxi MarmoreFlex na cor Mármore Clássico" },
      { src: "images/produto/galeria-05-piso-marmore.webp", alt: "Piso epóxi acabado com efeito mármore e alto brilho refletindo a luz" },
      { src: "images/produto/galeria-06-antes-depois.webp", alt: "Comparativo antes e depois da aplicação do MarmoreFlex sobre piso cerâmico" },
      { src: "images/produto/galeria-02-tamanhos.webp", alt: "Os quatro tamanhos do MarmoreFlex lado a lado: 2kg, 5kg, 10kg e 18kg" },
      { src: "images/produto/galeria-03-kit.webp", alt: "Kit de aplicação MarmoreFlex: desempenadeira de aço inox, rolo desaerador, espátulas e sapatos de pregos" },
      { src: "images/produto/galeria-04-balde-kit.webp", alt: "Balde de 5kg do MarmoreFlex acompanhado do kit de aplicação completo" },
      { src: "images/produto/galeria-07-aplicacao.webp", alt: "Aplicador espalhando o revestimento epóxi autonivelante com desempenadeira" },
      { src: "images/produto/galeria-08-ambiente.webp", alt: "Sala de estar com piso epóxi branco efeito mármore de alto brilho" },
      { src: "images/produto/galeria-10-cores-marmore.jpeg", alt: "Mostruário com doze opções de cores e efeitos de mármore MarmoreFlex" },
      { src: "images/produto/galeria-09-cores.jpeg", alt: "Mostruário das novas cores lisas MarmoreFlex com acabamento brilhante" }
    ]
  },

  /* Cores (mesmas do site atual). preview = foto "Prévia no ambiente".
     swatch = imagem da bolinha (efeito mármore) ou cor sólida (lisas). */
  colorGroups: [
    { id: "marmore", label: "Efeito mármore", colors: [
      { name: "Mármore Clássico", swatch: "images/cores/marmore-classico.jpeg", preview: "images/previews/marmore-classico.webp" },
      { name: "Travertino Romano", swatch: "images/cores/travertino-romano.jpeg", preview: "images/previews/travertino-romano.webp", badge: "Mais vendida" },
      { name: "Marrom Imperador", swatch: "images/cores/marrom-imperador.jpeg", preview: "images/previews/marrom-imperador.webp" },
      { name: "Preto Nero Marquina", swatch: "images/cores/preto-nero-marquina.jpeg", preview: "images/previews/preto-nero-marquina.webp" },
      { name: "Verde Alpi", swatch: "images/cores/verde-alpi.jpeg", preview: "images/previews/verde-alpi.webp" },
      { name: "Vermelho Rubi", swatch: "images/cores/vermelho-rubi.jpeg", preview: "images/previews/vermelho-rubi.webp" },
      { name: "Branco Carrara", swatch: "images/cores/branco-carrara.jpeg", preview: "images/previews/branco-carrara.webp" },
      { name: "Cinza Claro", swatch: "images/cores/cinza-claro.jpeg", preview: "images/previews/cinza-claro.webp" },
      { name: "Cinza Escuro", swatch: "images/cores/cinza-escuro.jpeg", preview: "images/previews/cinza-escuro.webp" },
      { name: "Azul Serenity", swatch: "images/cores/azul-serenity.jpeg", preview: "images/previews/azul-serenity.webp" },
      { name: "Azul Escuro", swatch: "images/cores/azul-escuro.jpeg", preview: "images/previews/azul-escuro.webp" },
      { name: "Amarelo Claro", swatch: "images/cores/amarelo-claro.jpeg", preview: "images/previews/amarelo-claro.webp" }
    ] },
    { id: "lisa", label: "Cores lisas", colors: [
      { name: "Branco (Liso)", label: "Branco", hex: "#F4F3EF", preview: "images/previews/branco-liso.webp" },
      { name: "Cinza Claro (Liso)", label: "Cinza Claro", hex: "#B8BDBF", preview: "images/previews/cinza-claro-liso.webp" },
      { name: "Cinza Escuro (Liso)", label: "Cinza Escuro", hex: "#6E7477", preview: "images/previews/cinza-escuro-liso.webp" },
      { name: "Preto Grafite (Liso)", label: "Preto Grafite", hex: "#2E3133", preview: "images/previews/preto-grafite-liso.webp" },
      { name: "Bege (Liso)", label: "Bege", hex: "#D5BE9B", preview: "images/previews/bege-liso.webp" },
      { name: "Amarelo Claro (Liso)", label: "Amarelo Claro", hex: "#E8D9A0", preview: "images/previews/amarelo-claro-liso.webp" },
      { name: "Azul Serenity (Liso)", label: "Azul Serenity", hex: "#8FA9C4", preview: "images/previews/azul-serenity-liso.webp" },
      { name: "Azul Escuro (Liso)", label: "Azul Escuro", hex: "#123B6D", preview: "images/previews/azul-escuro-liso.webp" },
      { name: "Verde Esmeralda (Liso)", label: "Verde Esmeralda", hex: "#056044", preview: "images/previews/verde-esmeralda-liso.webp" },
      { name: "Vermelho Rubi (Liso)", label: "Vermelho Rubi", hex: "#C0143C", preview: "images/previews/vermelho-rubi-liso.webp" }
    ] }
  ],
  defaultColor: "Mármore Clássico",

  /* Tamanhos (preço em centavos). Preços e links IGUAIS aos do site atual.
     O link é o mesmo para todas as cores (como hoje): a cor aparece só na tela. */
  offers: [
    { id: "2kg", kg: 2, m2: 10, label: "2kg", detail: "Banheiro, lavabo ou área pequena", price: 7990, compareAt: 14900,
      checkoutUrl: "https://checkout.marmoreflex.com.br/VCCL1O8SD8W4" },
    { id: "5kg", kg: 5, m2: 25, label: "5kg", detail: "Um cômodo completo ou cozinha", price: 12990, compareAt: 24500, badge: "Mais vendido",
      checkoutUrl: "https://checkout.marmoreflex.com.br/VCCL1O8SD7OU" },
    { id: "10kg", kg: 10, m2: 50, label: "10kg", detail: "Sala e cozinha ou área comercial pequena", price: 22990, compareAt: 42900,
      checkoutUrl: "https://checkout.marmoreflex.com.br/VCCL1O8SD7OT" },
    { id: "18kg", kg: 18, m2: 90, label: "18kg", detail: "Casa inteira, galpão ou área ampla", price: 37990, compareAt: 71900, badge: "Menor preço por m²",
      checkoutUrl: "https://checkout.marmoreflex.com.br/VCCL1O8SD7OV" }
  ],
  defaultOffer: "5kg",

  /* Adicional do popup "Confirmar pedido" (order bump), sem links novos:
     marcar troca o pedido para o próximo tamanho (mesmo preço e mesmo link
     de checkout desse tamanho). Não aparece no 18kg. */
  upgrade: {
    next: { "2kg": "5kg", "5kg": "10kg", "10kg": "18kg" },
    title: (to, m2) => `Leve o ${to} e cubra até ${m2} m²`,
    detail: (extraM2) => `+${extraM2} m² de cobertura pela diferença de preço · mesmo kit de aplicação grátis`
  },

  /* Popup "Compra segura" — só o que o site atual já informa. */
  security: {
    intro: "Seus dados e seu pagamento protegidos em todas as etapas da compra.",
    items: [
      { icon: "lock", title: "Pagamento Seguro", text: "Suas informações de pagamento são processadas com segurança. Não armazenamos dados do cartão de crédito nem temos acesso aos números do seu cartão." },
      { icon: "shield", title: "Compra Segura", text: "Ambiente seguro para pagamentos online." },
      { icon: "refresh", title: "Satisfação ou Reembolso", text: "Devolução grátis. Até 7 dias a partir do recebimento para trocar ou devolver." },
      { icon: "award", title: "Garantia de 90 dias", text: "Contra defeitos de fabricação, pelo prazo legal, conforme o Código de Defesa do Consumidor." },
      { icon: "truck", title: "Frete Grátis", text: "Envio para todo o Brasil com código de rastreio." },
      { icon: "badge", title: "Empresa registrada", text: "MARMORE FLEX LTDA · CNPJ 64.704.756/0001-02 · Guarulhos — SP." }
    ]
  },

  highlights: [
    "Kit de aplicação e primer inclusos sem custo adicional",
    "Aplica sobre o piso existente sem quebra-quebra",
    "Devolução grátis. Até 7 dias a partir do recebimento",
    "Mais vendido entre os revestimentos epóxi"
  ],

  features: [
    { icon: "hammer", title: "Sem quebra-quebra", text: "Aplica direto sobre cerâmica, porcelanato, concreto e cimento queimado." },
    { icon: "sparkle", title: "Efeito mármore e alto brilho", text: "Acabamento autonivelante, sem emendas e sem rejunte à vista." },
    { icon: "drop", title: "Impermeável e antiderrapante", text: "Resiste a tráfego, impactos e produtos químicos, dentro e fora de casa." },
    { icon: "box", title: "Kit de aplicação e primer inclusos", text: "Desempenadeira, rolo desaerador, espátulas e sapatos de pregos no kit." }
  ],

  specs: [
    ["Tipo", "Revestimento epóxi autonivelante"],
    ["Acabamento", "Alto brilho, efeito mármore ou cor lisa"],
    ["Aplicação", "Sobre cerâmica, porcelanato, ardósia, concreto, cimento queimado, granilite e pedras naturais"],
    ["Uso", "Áreas internas e externas — residências, garagens, áreas comerciais e industriais"],
    ["Ferramentas", "Desempenadeira de aço inox, rolo desaerador e espátulas (todas inclusas no kit)"],
    ["Tempo de secagem", "Aproximadamente 12 a 24 horas"],
    ["Rendimento", "5 m² por quilo"],
    ["Superfície", "Impermeável e antiderrapante"],
    ["Resistência", "Tráfego, impactos e produtos químicos"],
    // Corrigido: o site atual dizia "7 opções", mas oferece 22 cores
    ["Cores disponíveis", "22 opções (12 com efeito mármore e 10 lisas)"],
    ["Limpeza", "Pano úmido com detergente neutro"]
  ],

  box: [
    "01 embalagem de revestimento epóxi no tamanho escolhido",
    "01 primer de aplicação incluso",
    "01 desempenadeira de aço inox com 2 lâminas serrilhadas",
    "01 rolo desaerador",
    "02 espátulas",
    "01 par de sapatos de pregos",
    "Instruções de uso"
  ],

  /* FAQ do site atual. Corrigidos para bater com as especificações e a lista
     da embalagem: rendimento, itens do kit, antiderrapante e prazo de frete. */
  faq: [
    ["Precisa remover o piso antigo?", "Não. Na maioria dos casos a aplicação é feita diretamente sobre o revestimento existente, sem quebra-quebra e sem entulho."],
    ["Posso aplicar sobre cerâmica?", "Sim. A cerâmica é uma das bases mais comuns. Basta limpar bem, desengordurar e aplicar o primer antes do revestimento."],
    ["Posso aplicar sobre porcelanato?", "Sim. No porcelanato esmaltado recomendamos lixar levemente a superfície para criar aderência e aplicar o primer."],
    ["Posso aplicar sobre cimento queimado?", "Sim. Se o cimento estiver muito poroso, aplique duas demãos de primer antes do MarmoreFlex."],
    ["Posso aplicar sobre concreto ou contrapiso?", "Sim, desde que o contrapiso esteja curado, seco, nivelado e sem umidade ascendente."],
    ["Posso aplicar sobre ardósia, granilite ou pedras naturais?", "Sim. Essas bases exigem apenas limpeza profunda, remoção de ceras e a aplicação do primer."],
    ["Posso aplicar sobre piso solto ou trincado?", "Peças soltas devem ser refixadas e trincas preenchidas antes. O revestimento acompanha a base, então ela precisa estar firme."],
    ["Preciso de primer?", "Sim, o primer é essencial para a aderência e já vem incluso no kit de aplicação de todos os pedidos."],
    ["É antiderrapante?", "Sim. A superfície do MarmoreFlex é impermeável e antiderrapante."],
    ["Serve para área externa?", "Sim, em áreas cobertas. Em locais com sol e chuva direta recomendamos a demão extra de verniz com proteção UV."],
    ["Quanto tempo demora para secar?", "Ao toque, entre 6 e 8 horas. Liberado para pisar em 24 horas e para móveis e uso pesado em 72 horas."],
    ["As cores são iguais às das fotos?", "As fotos são reais, mas telas exibem cores de formas diferentes. Pequenas variações de tonalidade são normais."],
    ["O acabamento tem brilho?", "Sim, o acabamento final é de alto brilho, com efeito espelhado semelhante ao mármore polido."],
    ["Quantos quilos eu preciso comprar?", "Cada quilo rende cerca de 5 m². Use a calculadora da página: até 10 m² use 2kg, até 25 m² use 5kg, até 50 m² use 10kg e até 90 m² use 18kg."],
    ["O que vem no kit de aplicação?", "Primer de aplicação, desempenadeira de aço inox com 2 lâminas serrilhadas, rolo desaerador, 2 espátulas, 1 par de sapatos de pregos e as instruções de uso — grátis em todo pedido."],
    ["Preciso comprar mais alguma ferramenta?", "Não. Além do kit incluso, você só precisa de itens simples de limpeza como vassoura, pano e balde."],
    ["Qual é o prazo e o valor do frete?", "O frete é grátis para todo o Brasil. Os pedidos são postados em até 2 dias úteis e, após a postagem, o prazo de entrega varia conforme a região, normalmente entre 3 e 12 dias úteis."],
    ["E se eu não gostar do resultado?", "Você tem 7 dias para solicitar a troca ou o reembolso integral, conforme nossa política de satisfação garantida."]
  ],

  /* Depoimentos em vídeo (mesmos do site atual). */
  videos: [
    { src: "media/depoimento-1.mp4", poster: "images/posters/poster-1.jpg", name: "Ana Cláudia", city: "Guarulhos - SP" },
    { src: "media/depoimento-2.mp4", poster: "images/posters/poster-2.jpg", name: "Marcos Vinícius", city: "Campinas - SP" },
    { src: "media/depoimento-3.mp4", poster: "images/posters/poster-3.jpg", name: "Juliana Rocha", city: "Belo Horizonte - MG" }
  ],

  /* Avaliações do site atual (nenhuma nova). As duas "ilustrativas" continuam
     marcadas como ilustrativas, como no site atual.
     Cor corrigida em 6 avaliações para bater com o texto e com a lista de cores:
     Rogério ("usei o grafite") e Neusa → Preto Grafite (Liso); Marcos Castro
     ("acabamento bege") → Bege (Liso); "Branco Gelo" (não existe) → Branco (Liso). */
  reviews: [
    { name: "Sônia Regina Tavares", city: "São Luís, MA", stars: 5, date: "2026-07-23", color: "Travertino Romano", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-01.webp", text: "Sala e sala de jantar, 44m². Ficou como piso de porcelanato caro. Já indiquei para três amigas." },
    { name: "Carolina Silva", city: "São Paulo, SP", stars: 5, date: "2026-07-20", color: "Mármore Clássico", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-09.webp", text: "Refiz a sala e o corredor sozinha no fim de semana. O brilho ficou igual ao das fotos, parece mármore de verdade." },
    { name: "Antônio Oliveira", city: "Belém, PA", stars: 5, date: "2026-07-19", color: "Cinza Escuro", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-10.webp", text: "Apliquei na minha loja num domingo. Segunda de manhã já estava aberto e o piso escuro ficou espelhado." },
    { name: "Marcos Castro", city: "Feira de Santana, BA", stars: 5, date: "2026-07-18", color: "Bege (Liso)", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-11.webp", text: "Cozinha e sala de jantar prontas. Limpeza ficou muito mais fácil e o acabamento bege deixou a casa clara." },
    { name: "Patrícia Fontes", city: "Campinas, SP", stars: 5, date: "2026-07-21", color: "Mármore Clássico", size: "10kg", photo: "images/avaliacoes/avaliacao-patricia-novo-ambiente.webp", text: "Apliquei na sala e o resultado ficou espelhado de verdade. Visita entra e acha que é mármore importado." },
    { name: "Rogério Matias", city: "Curitiba, PR", stars: 5, date: "2026-07-22", color: "Preto Grafite (Liso)", size: "18kg", photo: "images/avaliacoes/avaliacao-cliente-13.webp", text: "A cozinha ficou outra coisa. Usei o grafite e o brilho não caiu nem depois de dois meses." },
    { name: "Luciana Prado", city: "Goiânia, GO", stars: 5, date: "2026-07-23", color: "Branco Carrara", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-14.webp", text: "Fiz o quarto inteiro sem ajuda de pedreiro. O produto se nivela sozinho mesmo." },
    { name: "Everton Lima", city: "Recife, PE", stars: 5, date: "2026-07-24", color: "Travertino Romano", size: "18kg", photo: "images/avaliacoes/avaliacao-cliente-15.webp", text: "Usei na minha loja. Cliente elogia o chão toda semana, virou cartão de visita." },
    { name: "Sandra Beatriz", city: "Florianópolis, SC", stars: 5, date: "2026-07-25", color: "Branco Carrara", size: "5kg", photo: "images/avaliacoes/avaliacao-cliente-16.webp", text: "O corredor era o ponto feio da casa. Agora é o que mais chama atenção." },
    { name: "Cláudio Ferrari", city: "Ribeirão Preto, SP", stars: 5, date: "2026-07-26", color: "Marrom Imperador", size: "18kg", photo: "images/avaliacoes/avaliacao-cliente-17.webp", text: "Apliquei no espaço gourmet. O marrom ficou impecável e fácil de limpar." },
    { name: "Renata Xavier", city: "Natal, RN", stars: 5, date: "2026-07-27", color: "Branco Carrara", size: "2kg", photo: "images/avaliacoes/avaliacao-cliente-18.webp", text: "No banheiro eu tinha medo de escorregar, mas ficou firme e lindo." },
    { name: "Fábio Nogueira", city: "Porto Alegre, RS", stars: 5, date: "2026-07-28", color: "Azul Escuro", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-19.webp", text: "Escolhi o azul escuro pra sala de jantar e superou a expectativa. Parece pedra natural." },
    { name: "Mariana Coelho", city: "Vitória, ES", stars: 5, date: "2026-07-29", color: "Travertino Romano", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-20.webp", text: "Fiz a varanda gourmet e o acabamento ficou uniforme do começo ao fim." },
    { name: "Aline Barreto", city: "Fortaleza, CE", stars: 5, date: "2026-07-30", color: "Mármore Clássico", size: "18kg", photo: "images/avaliacoes/avaliacao-cliente-21.webp", text: "Coloquei no salão. Além de bonito, aguenta o movimento do dia inteiro." },
    { name: "Diego Ramalho", city: "Brasília, DF", stars: 5, date: "2026-07-31", color: "Cinza Escuro", size: "5kg", photo: "images/avaliacoes/avaliacao-cliente-22.webp", text: "Escritório em casa com cara de escritório de luxo. Secou no tempo que falaram." },
    { name: "Vanessa Klein", city: "Joinville, SC", stars: 5, date: "2026-08-01", color: "Verde Alpi", size: "5kg", photo: "images/avaliacoes/avaliacao-cliente-23.webp", text: "Área de serviço nova sem quebrar nada. Passei por cima do piso antigo mesmo." },
    { name: "Ivan Pellegrini", city: "Bento Gonçalves, RS", stars: 5, date: "2026-07-20", color: "Cinza Claro", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-03.webp", text: "Sala de 50m². O efeito mármore no cinza ficou sofisticado. Recebi elogio até de arquiteta que veio visitar." },
    { name: "Cristiane Abdala", city: "Campo Grande, MS", stars: 5, date: "2026-07-17", color: "Branco Carrara", size: "2kg", photo: "images/avaliacoes/avaliacao-cliente-04.webp", text: "Fiz só o banheiro social por enquanto. O efeito mármore no branco ficou de revista. Vale muito o investimento." },
    { name: "Paulo Sérgio Marchetti", city: "Jundiaí, SP", stars: 5, date: "2026-07-17", color: "Preto Nero Marquina", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-02.webp", text: "Home theater. O piso escuro combinou com a proposta do ambiente e ainda facilitou a limpeza." },
    { name: "Fernando Assunção", city: "Jaboatão dos Guararapes, PE", stars: 5, date: "2026-07-23", color: "Travertino Romano", size: "5kg", photo: "images/avaliacoes/avaliacao-cliente-05.webp", text: "Apartamento alugado, com autorização do dono. Ficou ótimo e valorizou o imóvel dele também." },
    { name: "Terezinha Amorim", city: "Teresina, PI", stars: 5, date: "2026-07-22", color: "Branco Carrara", size: "2kg", photo: "images/avaliacoes/avaliacao-cliente-06.webp", text: "Sala grande, ficou um espelho. Deu certinho, sobrou pouca coisa. Recomendo medir direito antes para não errar o tamanho." },
    { name: "Maristela Alonso", city: "Praia Grande, SP", stars: 5, date: "2026-07-22", color: "Branco Carrara", size: "5kg", photo: "images/avaliacoes/avaliacao-cliente-07.webp", text: "Apartamento de praia. A maresia acabava com qualquer piso. Esse está firme desde o verão passado." },
    { name: "Reginaldo Barbosa", city: "Aracaju, SE", stars: 5, date: "2026-07-21", color: "Cinza Claro", size: "5kg", photo: "images/avaliacoes/avaliacao-cliente-08.webp", text: "Tenho uma barbearia e refiz o piso da loja num domingo. Segunda de manhã abri normalmente. Nenhum dia de faturamento perdido." },
    { name: "Rita de Cássia Moraes", city: "Mossoró, RN", stars: 5, date: "2026-07-21", color: "Amarelo Claro", size: "2kg", text: "Fiz o quartinho de costura. A cor clarinha deixou o ambiente alegre e a limpeza ficou muito mais simples." },
    { name: "Márcio Bettoni", city: "Guarapuava, PR", stars: 5, date: "2026-07-21", color: "Cinza Escuro", size: "5kg", text: "Pet shop. Xixi de cachorro não penetra e o cheiro não fica. Isso sozinho já pagou o investimento." },
    { name: "Genésio Alcântara", city: "Barreiras, BA", stars: 5, date: "2026-07-21", color: "Cinza Claro", size: "10kg", text: "Loja de materiais de construção, área de vendas. Ironia: agora meus clientes perguntam se eu vendo o produto do meu próprio piso." },
    { name: "Neusa Portela", city: "Vitória, ES", stars: 5, date: "2026-07-20", color: "Preto Grafite (Liso)", size: "5kg", text: "Fiz o hall de entrada do prédio, sou síndica. Os condôminos elogiaram tanto que já estamos programando fazer a garagem." },
    { name: "Neide Balbino", city: "Praia Grande, SP", stars: 5, date: "2026-07-20", color: "Mármore Clássico", size: "2kg", text: "Casa de praia, banheiro pequeno. Como pega maresia, queria algo impermeável de verdade. Resolveu." },
    { name: "Gerson Marques", city: "Ji-Paraná, RO", stars: 5, date: "2026-07-20", color: "Cinza Escuro", size: "18kg", text: "Galpão de 90m². O 18kg fechou justo, sem sobra. Se sua área for próxima de 90, compre com uma folga." },
    { name: "Elisângela Moura", city: "Belém, PA", stars: 5, date: "2026-07-19", color: "Mármore Clássico", size: "2kg", text: "Usei no lavabo, que é pequeno. O 2kg foi suficiente e ainda sobrou um pouco. O acabamento brilhante deixou o espaço com cara de hotel." },
    { name: "Milton Sardinha", city: "Macapá, AP", stars: 5, date: "2026-07-19", color: "Cinza Claro", size: "18kg", text: "Galpão de 88m². Achei que ia precisar de mais material, mas fechou. Entrega demorou 11 dias pelo Norte, dentro do prazo informado." },
    { name: "Amauri Pontes", city: "Dourados, MS", stars: 5, date: "2026-07-19", color: "Cinza Claro", size: "5kg", text: "Escritório de contabilidade. Fiz numa sexta à noite, segunda a equipe chegou e nem acreditou que era o mesmo lugar." },
    { name: "Leda Bomfim", city: "Ilhéus, BA", stars: 5, date: "2026-07-19", color: "Mármore Clássico", size: "5kg", text: "Pousada, quarto principal. Os hóspedes fotografam o piso. Virou detalhe de decoração." },
    { name: "Antônio Wilson Prado", city: "Natal, RN", stars: 5, date: "2026-07-18", color: "Amarelo Claro", size: "2kg", text: "Usei numa área pequena da varanda para testar antes de fazer o resto. Gostei tanto que já pedi o 10kg para o restante da casa." },
    { name: "Beatriz Fonseca", city: "Santa Maria, RS", stars: 5, date: "2026-07-18", color: "Mármore Clássico", size: "5kg", text: "Comprei para o consultório odontológico. Passa impressão de limpeza, que no meu ramo é fundamental." },
    { name: "Antônio Marcos Ávila", city: "Palmas, TO", stars: 5, date: "2026-07-18", color: "Cinza Escuro", size: "18kg", text: "Galpão da empresa. Fizemos em dois fins de semana, 85m². Ninguém precisou parar a operação durante a semana." },
    { name: "Berenice Kaufmann", city: "Blumenau, SC", stars: 5, date: "2026-07-18", color: "Branco (Liso)", size: "5kg", text: "Ateliê de artesanato. Cai tinta, cai cola, e sai tudo raspando devagar com espátula. Não penetra." },
    { name: "Iracema Batalha", city: "Codó, MA", stars: 5, date: "2026-07-17", color: "Branco (Liso)", size: "2kg", text: "Banheiro pequeno, primeira experiência com reforma. O passo a passo do site me guiou do começo ao fim." },
    { name: "Vera Lúcia Andrade", city: "Salvador, BA", stars: 5, date: "2026-07-16", color: "Branco (Liso)", size: "10kg", text: "Ambiente ficou muito mais claro. Como não tem as linhas do rejunte, a sala parece bem maior do que realmente é." },
    { name: "Daniela Pires", city: "Osasco, SP", stars: 3, date: "2026-09-18", color: "Cinza Claro", size: "5kg", text: "O pedido atrasou quatro dias e fiquei preocupada porque já tinha marcado a aplicação. No fim chegou tudo certo e o resultado ficou bonito, mas o rastreio poderia atualizar melhor." },
    { name: "Roberto Nascimento", city: "Duque de Caxias, RJ", stars: 3, date: "2026-09-17", color: "Cinza Escuro", size: "10kg", text: "A caixa chegou bem amassada em um dos cantos. Conferi na hora e os potes estavam intactos, sem vazamento. O produto funcionou normalmente, mas a embalagem externa precisa ser mais reforçada." },
    { name: "Célia Martins", city: "Contagem, MG", stars: 3, date: "2026-09-16", color: "Branco Carrara", size: "5kg", text: "Levou mais tempo que o previsto para chegar. O atendimento respondeu e a entrega foi concluída. Depois de aplicado gostei bastante do brilho." },
    { name: "Eduardo Ramos", city: "Londrina, PR", stars: 3, date: "2026-09-15", color: "Mármore Clássico", size: "10kg", text: "A transportadora demorou para movimentar o rastreio e achei que o pedido tinha parado. Chegou com dois dias de atraso, completo e sem avaria no produto." },
    { name: "Mônica Ferreira", city: "Salvador, BA", stars: 3, date: "2026-09-14", color: "Travertino Romano", size: "5kg", text: "A caixa veio amassada e com a fita um pouco solta. Os materiais de dentro estavam bem fechados e consegui aplicar sem problema. Gostei do resultado final." },
    { name: "João Batista Lima", city: "Goiânia, GO", stars: 3, date: "2026-09-13", color: "Preto Nero Marquina", size: "10kg", text: "O produto é bom e cobriu a área informada, mas a entrega demorou além do prazo. Quando chegou, estava tudo completo e o acabamento ficou uniforme." },
    { name: "Sandra Lopes", city: "Recife, PE", stars: 3, date: "2026-09-12", color: "Verde Alpi", size: "5kg", text: "Recebi a caixa com marcas do transporte. Tirei fotos antes de abrir, mas por dentro não havia nada quebrado ou vazando. A aplicação deu certo." },
    { name: "Marcelo Vieira", city: "Sorocaba, SP", stars: 3, date: "2026-09-11", color: "Azul Serenity", size: "10kg", text: "Demorou para chegar e precisei remarcar o profissional. O suporte acompanhou até a entrega e o produto chegou em boas condições." },
    { name: "Luciene Costa", city: "Brasília, DF", stars: 3, date: "2026-09-10", color: "Vermelho Rubi", size: "5kg", text: "A embalagem externa poderia ser mais resistente, porque chegou amassada. Mesmo assim, os componentes estavam protegidos e o piso ficou com bastante brilho." },
    { name: "Rafael Cardoso", city: "Niterói, RJ", stars: 3, date: "2026-09-09", color: "Azul Escuro", size: "5kg", text: "O prazo informado passou em três dias. Recebi depois e estava tudo certo com o kit. Dou três estrelas pelo atraso, porque o produto em si me atendeu." },
    { name: "Márcia Helena", city: "São José dos Campos, SP", stars: 3, date: "2026-09-08", color: "Amarelo Claro", size: "2kg", text: "A caixa chegou apertada e um pouco deformada, mas nenhum pote abriu. Conferi todos os itens e consegui usar normalmente." },
    { name: "Paulo Henrique Dias", city: "Fortaleza, CE", stars: 3, date: "2026-09-07", color: "Mármore Clássico", size: "10kg", text: "Fiquei sem atualização no rastreio por alguns dias. A entrega aconteceu e o material veio completo. O resultado foi bom, só precisam melhorar a comunicação do envio." },
    { name: "Eliane Moreira", city: "Joinville, SC", stars: 3, date: "2026-09-06", color: "Branco Carrara", size: "5kg", text: "Chegou depois do combinado e a caixa estava com uma lateral amassada. O conteúdo não foi afetado e a aplicação ficou bonita." },
    { name: "André Luiz Pereira", city: "Campinas, SP", stars: 2, date: "2026-09-05", color: "Cinza Escuro", size: "10kg", text: "O produto chegou e funcionou, mas o atraso foi grande e precisei mudar todo o cronograma da reforma. A caixa também veio bastante marcada pelo transporte." },
    { name: "Rosângela Alves", city: "Maceió, AL", stars: 2, date: "2026-09-04", color: "Travertino Romano", size: "5kg", text: "A encomenda demorou mais do que eu esperava. Veio completa, porém a embalagem chegou amassada e isso me deixou insegura antes de abrir." },
    { name: "Carlos Mendes", city: "Ribeirão Preto, SP", stars: 2, date: "2026-09-03", color: "Preto Nero Marquina", size: "10kg", text: "Foram vários dias sem atualização e o pedido só chegou depois do prazo. O material estava utilizável, mas a experiência de entrega precisa melhorar muito." },
    { name: "Juliana Freitas", city: "Vitória, ES", stars: 2, date: "2026-09-02", color: "Branco Carrara", size: "5kg", text: "A caixa chegou danificada por fora. Não houve vazamento e consegui aplicar, mas esperava mais cuidado no transporte." },
    { name: "Sérgio Moraes", city: "Cuiabá, MT", stars: 2, date: "2026-09-01", color: "Mármore Clássico", size: "18kg", text: "O resultado ficou bom depois de aplicado, porém a demora na entrega me causou transtorno e faltaram atualizações claras no rastreio." },
    { name: "Adriana Souza", city: "Bauru, SP", stars: 1, date: "2026-08-31", color: "Cinza Claro", size: "5kg", text: "Meu pedido chegou muito depois da data prevista. O produto estava dentro da caixa e sem vazamento, mas perdi a data que tinha reservado para fazer o piso." },
    { name: "Leandro Gomes", city: "Belém, PA", stars: 1, date: "2026-08-30", color: "Azul Escuro", size: "10kg", text: "A caixa chegou bem amassada e molhada por fora. Os potes estavam fechados e o material chegou, mas a condição da embalagem foi ruim." },
    { name: "Maria Aparecida Rocha", city: "Uberlândia, MG", stars: 1, date: "2026-08-29", color: "Branco Carrara", size: "5kg", text: "A entrega atrasou bastante e foi difícil acompanhar pelo rastreio. Recebi o kit completo no final, mas a demora prejudicou minha reforma." },
    { name: "Gabriel Martins", city: "Campinas, SP", stars: 5, date: "2026-09-18", color: "Mármore Clássico", size: "10kg", photo: "images/avaliacoes/avaliacao-cliente-kit-10kg.webp", illustrative: true, text: "Chegou tudo muito bem embalado e o kit veio completo. Produto de qualidade e atendimento excelente." },
    { name: "Ana Luiza Ribeiro", city: "Curitiba, PR", stars: 5, date: "2026-09-20", color: "Branco Carrara", size: "5kg", photo: "images/avaliacoes/avaliacao-cliente-kit-5kg.webp", illustrative: true, text: "Meu pedido chegou certinho, com o balde e todos os acessórios para aplicação. Fiquei muito satisfeita." }
  ]
};
