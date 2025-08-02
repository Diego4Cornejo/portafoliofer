/**
 * fetch-metrics.js
 * Actualiza public/data/metrics.json usando APIs (opcional).
 * NOTA: Este script es un stub: si no hay tokens, escribe datos de ejemplo.
 * Para producción, conecta Instagram Graph, TikTok e YouTube Data API.
 */

import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public', 'data', 'metrics.json');

function exampleData() {
  const now = new Date().toISOString();
  return {
    updatedAt: now,
    instagram: { followers: 25000, avgViewsFood: 90000, avgViewsOther: 16000, engagement: 4.1 },
    tiktok: { followers: 27000, avgViews: 72000 },
    youtube: { subs: 9000, avgViews: 6500 },
    topHighlights: [
      { title: 'Reel ramen', views: 125000 },
      { title: 'Tour cafeterías', views: 98000 },
      { title: 'Postre viral', views: 112000 }
    ]
  };
}

async function main() {
  // Lee tokens (si existen)
  const IG_TOKEN = process.env.IG_TOKEN;
  const TT_TOKEN = process.env.TT_TOKEN;
  const YT_KEY = process.env.YT_KEY;

  // TODO: si hay tokens, llamar a las APIs reales y construir el JSON.
  // Por ahora, siempre escribimos datos de ejemplo para que el flujo funcione.
  const payload = exampleData();

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2), 'utf-8');
  console.log('metrics.json actualizado');
}

main().catch((e) => {
  console.error('Error actualizando métricas', e);
  process.exit(1);
});