# Skymaps Aviation (Demo)

Repo preparado para publicar una demo Expo con:
- Pantalla inicio (tarjetas)
- Aeródromos: LEIG, Bellvei, Gurb
- Ficha aeródromo con mapa y visor PDF (WebView)
- Sección "Reglas y Procedimientos VFR" (texto)

## Cómo usar (resumen rápido)
1. Sube tus PDFs en `assets/pdfs/` (nombres exactos según data/aerodromos.json).
2. En expo.dev importa este repo o en tu equipo clona y ejecuta:
   - `npm install`
   - `npx expo start`

## Observaciones
- Si usas la importación de Expo (expo.dev) podrás abrir la app desde Expo Go sin usar LAN entre Chromebook y Linux.
- Si un PDF no carga, súbelo a `assets/pdfs/` y refresca.
