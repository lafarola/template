# 🚀 Plantilla Base: Vibe Coding

Este repositorio ya está configurado con todas las herramientas modernas que necesitamos para empezar a construir sus herramientas (Dashboards, Scrapers, etc.) sin perder tiempo en configuraciones técnicas.

### El "Stack" Tecnológico (Nuestras Herramientas)

| Capa | Herramienta | ¿Para qué sirve? |
|---|---|---|
| Cerebro / Web | **Next.js 15** | El framework que hace funcionar la web (App Router & TypeScript). |
| Diseño / Estilos | **Tailwind CSS v4** | Para que se vea bonito y moderno rápidamente. |
| Bloques de UI | **shadcn/ui** | Componentes profesionales listos (botones, tarjetas, tablas). |
| Base de Datos | **Supabase** | Donde guardaremos la info (hoteles, tarifas, clientes). |
| Robot / Scraper | **Puppeteer** | Para navegar automáticamente webs de hoteles y extraer precios. |

## 🏁 Primeros Pasos (Getting Started)

1. **Clonar el repositorio**
   Descarga el código y las librerías necesarias en tu computadora.

   ```bash
   git clone <url-de-tu-repo>
   cd template
   npm install
   ```

2. **Conectar la Base de Datos**
   Copia el archivo de ejemplo para crear tu configuración local y pega tus claves de Supabase.

   ```bash
   cp .env.local.example .env.local
   ```

3. **Encender los motores**
   Inicia el servidor de desarrollo.

   ```bash
   npm run dev
   ```

   Ahora abre tu navegador en [http://localhost:3000](http://localhost:3000).

## 🎨 Agregando Componentes de Diseño

Si le pides al Agente (Antigravity) un botón o una tabla, usará estos comandos automáticamente, pero es bueno saber que existen:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add table
# etc.
```

## 📂 Estructura del Proyecto

```
src/
├── app/            # Aquí viven las páginas de tu web (Rutas)
├── components/     # Aquí se guardan los botones, menús y diseños (UI)
│   └── ui/
└── lib/
    ├── utils.ts    # Utilidades de diseño
    └── supabase.ts # La conexión "teléfono rojo" con tu base de datos
```

## 🛠 Comandos Útiles

| Comando | Descripción |
|---|---|
| `npm run dev` | **Modo Construcción:** Inicia el servidor para programar en vivo. |
| `npm run build` | **Modo Producción:** Empaqueta la app para subirla a internet. |
| `npm run start` | Inicia la versión empaquetada (generalmente no lo usarás en local). |
| `npm run lint` | Revisa si hay errores básicos en el código. |
| `npx shadcn@latest init --yes --defaults --force` | Reinicia la plantilla visual del proyecto |
