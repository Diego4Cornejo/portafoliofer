# Portafolio de Influencer (Astro + Tailwind) — listo para GitHub Pages

Landing rápida, estática y con métricas actualizables por **GitHub Actions**.

## 🚀 Stack
- [Astro](https://astro.build/) (SSG) + Tailwind
- Chart.js por CDN (ligero, sólo para el gráfico de vistas)
- `public/data/metrics.json` como fuente de datos
- Workflow de GitHub Actions para actualizar métricas y desplegar a GitHub Pages

## 📦 Cómo usar
1. **Crea un repo** en tu cuenta (p. ej. `influencer-portfolio`).
2. Sube este proyecto y asegúrate que la rama por defecto sea **main**.
3. En **Settings → Pages**, selecciona **Build and deployment → GitHub Actions**.
4. (Opcional) En **Settings → Secrets and variables → Actions → New repository secret**, crea:
   - `IG_TOKEN`
   - `TT_TOKEN`
   - `YT_KEY`
5. Cada _push_ a `main` o el cron (**cada 12 horas**) ejecutará:
   - `scripts/fetch-metrics.js` (por ahora escribe datos de ejemplo)
   - `astro build` y publicará a GitHub Pages.

> **Nota:** El `astro.config.mjs` ajusta `base` automáticamente cuando se construye en GitHub Actions, por lo que funcionará tanto con dominio propio como con `user.github.io/repo`.

## ✏️ Personalización rápida
- Edita CTA y WhatsApp en `src/components/Hero.astro` y `src/components/Footer.astro`.
- Cambia textos, servicios y testimonios en sus respectivos componentes.
- Reemplaza imágenes por las tuyas (puedes dejarlas remotas o subirlas a `public/`).
- Cambia colores globales en `src/styles/global.css` (o usa variables CSS).

## 🧪 Local
```bash
npm install
npm run dev
```

## 🛠️ Producción
```bash
npm run build
# El workflow se encarga de publicar a Pages
```

## 🔒 Tokens y APIs
No se exponen tokens en el front. `fetch-metrics.js` usa **secrets** y escribe `public/data/metrics.json`. Luego, el sitio consume ese JSON de forma estática.

## 🧩 TODO (si quieres llevarlo más lejos)
- Formulario de brief con servicio externo (Formspree / Netlify Forms) o funciones serverless (migrando a Vercel/Netlify).
- Dashboard privado de campañas.
- Sección de prensa con logos e imágenes reales.
- i18n (ES/EN).

---

Hecho con cariño 💙. Si necesitas que lo deje con tu branding y copies finales, dime tu **nombre público, color principal, email y WhatsApp**.