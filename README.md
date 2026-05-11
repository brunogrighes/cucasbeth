# 🍰 Cucas Beth — Landing Page

Site institucional artesanal para a **Cucas Beth**, negócio de cucas artesanais da Dona Bete em Porto Alegre–RS.

---

## 🚀 Como usar no VS Code

1. Abra a pasta `cucasbeth/` no VS Code
2. Instale a extensão **Live Server** (ritwickdey.LiveServer)
3. Clique com botão direito em `index.html` → **Open with Live Server**
4. Acesse `http://127.0.0.1:5500`

---

## 🖼️ Adicionando a logo real

No `index.html`, localize o bloco `.hero-logo-wrap` e substitua:

```html
<!-- ANTES (placeholder emoji) -->
<span class="hero-logo-placeholder">🍰</span>

<!-- DEPOIS (logo real) -->
<img src="assets/logo.png" alt="Logo Cucas Beth">
```

---

## 🎨 Personalizando cores

Todas as cores estão como variáveis CSS no topo de `css/style.css`:

```css
:root {
  --vinho: #6B1A2E;
  --vinho-escuro: #3D0D1A;
  --rosa: #C4667A;
  --rosa-claro: #E8A0AC;
  --creme: #FAF3EC;
  /* ... */
}
```
 

 
## 📱 Funcionalidades

- ✅ Navegação fixa com scroll suave
- ✅ Hero animado com call-to-action
- ✅ Faixa de estatísticas
- ✅ Seção de história com linha do tempo
- ✅ Cardápio com todos os sabores e preços
- ✅ Lista de ingredientes (Tradicional e Vegano)
- ✅ Seção "Como funciona" passo a passo
- ✅ Contato + PIX + botão WhatsApp direto
- ✅ Botão WhatsApp flutuante em todas as páginas
- ✅ Animações de entrada ao rolar (IntersectionObserver)
- ✅ Totalmente responsivo (mobile/tablet/desktop)

---

## 📞 Contato da Dona Bete

- **WhatsApp:** (51) 98579-4939
- **Instagram:** @cucasbeth
- **PIX:** 51 985794939
- **Localização:** Porto Alegre – RS
