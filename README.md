# MarmoreFlex — Loja Black Friday (Revestimento Epóxi Autonivelante)

Funil de produto único com a estrutura e os componentes da loja Bruttus, na identidade da MarmoreFlex
(petróleo + laranja, com os acentos Black Friday preto + dourado que o site atual já usa).
Site 100% estático (HTML/CSS/JS, sem build e sem banco de dados). Pode ser publicado na Vercel a partir da raiz.

## Estrutura
```
index.html        Página do produto (funil)
politicas.html    Fale conosco, rastreio, garantia, troca, reembolso, privacidade e termos (textos do site atual)
banners.html      Gerador de banners Black Friday (HTML → PNG)
brand/            Logo original (marmoreflex-logo-horizontal*.webp) e favicon.png
css/styles.css    Visual base (tokens de cor da MarmoreFlex no topo)
css/v2.css        Componentes: compra segura, seleção, avaliações, vídeos, modais, ajustes de celular
css/mf.css        Identidade MarmoreFlex: header branco, Black Friday, seletor de cor, tamanhos, calculadora
js/config.js      ⭐ O que você edita no dia a dia: preços, tamanhos, checkout, cores, FAQ, avaliações, vídeos
js/app.js         Monta a página a partir do config
images/           produto/ (galeria), descricao/, cores/ (bolinhas), previews/ (prévia no ambiente),
                  avaliacoes/ (fotos das avaliações), posters/ (capas dos vídeos), banners/ (gerados)
media/            Vídeos de depoimento do site atual
tools/serve.ps1   Servidor local (preview + "Salvar no site" dos banners). Não vai para a Vercel.
```

## Cores (tokens do site atual, convertidos de OKLCH)
| Uso | Cor |
|---|---|
| Petróleo principal (`--primary`, preços, seleção) | `#0f3d52` |
| Petróleo escuro (`--brand-dark`, rodapé e banners) | `#071d28` |
| Laranja dos botões (`--cta` / hover) | `#f97316` / `#ea6a0c` |
| Dourado das estrelas (`--gold`) | `#c9a227` |
| Fundo · superfície · borda | `#f6f9fa` · `#e8f1f5` · `#d2e2ea` |
| Black Friday (barra do topo, selos, % de desconto) | preto `#0b0b0c` + dourado `#d4af37` |

Fontes: Barlow Condensed (títulos) e Inter (texto), as mesmas do site atual.

## Ordem do funil
Barra de contagem → header (Compra segura) → galeria com miniaturas e lightbox + caixa de compra
(selo verificado no título, pessoas vendo agora, cor com prévia no ambiente → tamanhos com desconto e preço por m²
→ preço → frete → seleção → Comprar agora) → benefícios → descrição (banner BF, faixa de specs, banners originais,
onde aplicar, calculadora de área, kit, comparativo, especificações, o que vem na embalagem, garantia)
→ pagamento seguro → avaliações (vídeos, fotos reais, filtro por estrela, escrever, busca, ordenação)
→ CTA final → FAQ → selos → mapa → rodapé. Barra fixa no celular leva até os tamanhos.

## Checkout (mesmos links do site atual)
| Tamanho | Preço | Link |
|---|---|---|
| 2kg (até 10 m²) | R$ 149,00 → R$ 79,90 | https://checkout.marmoreflex.com.br/VCCL1O8SD8W4 |
| 5kg (até 25 m²) | R$ 245,00 → R$ 129,90 | https://checkout.marmoreflex.com.br/VCCL1O8SD7OU |
| 10kg (até 50 m²) | R$ 429,00 → R$ 229,90 | https://checkout.marmoreflex.com.br/VCCL1O8SD7OT |
| 18kg (até 90 m²) | R$ 719,00 → R$ 379,90 | https://checkout.marmoreflex.com.br/VCCL1O8SD7OV |

- O link é o mesmo para todas as cores (como no site atual): a cor aparece só na tela, o checkout não a recebe.
- Popup "Confirmar pedido": o adicional "Leve o próximo tamanho" troca o pedido para o tamanho seguinte
  (2kg→5kg +R$ 50,00 · 5kg→10kg +R$ 100,00 · 10kg→18kg +R$ 150,00), usando o link que já existe desse tamanho.
- Parâmetros `utm_*`, `src`, `sck`, `fbclid` e `gclid` da URL são repassados ao checkout, como no site atual.

## Pixels (os mesmos do site atual)
- Meta Pixel `1000741552362305`: PageView ao abrir (index e políticas) e InitiateCheckout no clique de
  **Finalizar pagamento**, com os mesmos parâmetros de antes (`content_name` "MarmoreFlex 5kg", `value`, `BRL`).
- Microsoft Clarity `ykej4va3ss`.
- UTMify (`latest.js` com `data-utmify-prevent-xcod-sck` e `data-utmify-prevent-subids`).

## O que mudou em relação ao site atual
- Removidos: popup de saída com cupom MARMORE15 e o aviso de "fulano comprou".
- Textos corrigidos para não se contradizerem: rendimento no FAQ (5 m² por quilo), itens do kit no FAQ,
  antiderrapante, "22 cores" nas especificações (antes "7 opções") e prazo de frete (texto da página de rastreio).
- Cor de 6 avaliações ajustada para bater com o texto e com a lista de cores (Preto Grafite, Bege e Branco liso;
  "Branco Gelo" não existe na loja). Nenhuma avaliação nova; as 2 ilustrativas continuam marcadas como ilustrativas.

## Banners
Rode o servidor local, abra `http://localhost:8095/banners.html` e clique em **Salvar no site** (atualiza `images/banners/`) ou **Baixar PNG**.
```
powershell -ExecutionPolicy Bypass -File tools\serve.ps1 -Root . -Port 8095
```
