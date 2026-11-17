# Implementación de un sistema de eventos en tiempo real con Kafka y Angular

El sistema debe publicar y consumir eventos en un topic Kafka y mostrarlos en tiempo real en la interfaz de usuario. El objetivo es mostrar el estado de las órdenes actualizándose sin recargar la página. Se utilizará kafkajs para el consumidor de eventos y Server-Sent Events para la comunicación del cliente con el servidor.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Consumo de eventos en tiempo real con Kafka |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 12 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración del entorno y publicación de eventos

**Objetivo:** Configurar el entorno de desarrollo y publicar eventos en un topic Kafka.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Configurar el entorno de desarrollo con Kafka y Angular.
- Crear un topic en Kafka y publicar eventos en él.

**Entregable:** Entorno de desarrollo configurado y eventos publicados en Kafka.

<details>
<summary>Pistas de conocimiento</summary>

- Configuración de Kafka y Angular.
- Uso de kafkajs para publicar eventos.

</details>

### Fase 2: Consumo de eventos y actualización de la interfaz

**Objetivo:** Consumir eventos de Kafka y mostrarlos en la interfaz de usuario en tiempo real.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Consumir eventos de Kafka utilizando kafkajs.
- Enviar los eventos al cliente utilizando Server-Sent Events.
- Actualizar la interfaz de usuario con los eventos recibidos sin recargar la página.

**Entregable:** Interfaz de usuario que muestra los eventos recibidos de Kafka en tiempo real.

<details>
<summary>Pistas de conocimiento</summary>

- Consumo de eventos con kafkajs.
- Uso de Server-Sent Events para la comunicación del cliente con el servidor.
- Actualización de la interfaz de usuario en tiempo real.

</details>

### Fase 3: Optimización y manejo de errores

**Objetivo:** Optimizar el consumo de eventos y manejar posibles errores.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Optimizar el consumo de eventos para mejorar el rendimiento.
- Manejar posibles errores en la publicación y consumo de eventos.
- Garantizar que la interfaz de usuario se actualice correctamente ante errores.

**Entregable:** Sistema optimizado y robusto que consume eventos de Kafka y muestra el estado de las órdenes en tiempo real, manejando posibles errores.

<details>
<summary>Pistas de conocimiento</summary>

- Optimización del consumo de eventos.
- Manejo de errores en la publicación y consumo de eventos.
- Actualización de la interfaz de usuario ante errores.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un evento en el contexto de Kafka y cómo se publica y consume?
- **paraQueSirve**: ¿Para qué sirve consumir eventos de Kafka en tiempo real en una aplicación Angular?
- **comoSeUsa**: ¿Cómo se utiliza kafkajs para consumir eventos de Kafka?
- **erroresComunes**: ¿Cuáles son los errores comunes al publicar y consumir eventos en Kafka y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica la optimización del consumo de eventos y el manejo de errores en una aplicación que consume eventos de Kafka?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo con Kafka y Angular.
- Publicación de eventos en un topic Kafka.
- Consumo de eventos de Kafka utilizando kafkajs.
- Envío de eventos al cliente utilizando Server-Sent Events.
- Actualización de la interfaz de usuario con los eventos recibidos en tiempo real sin recargar la página.
- Optimización del consumo de eventos para mejorar el rendimiento.
- Manejo de posibles errores en la publicación y consumo de eventos.
- Garantía de que la interfaz de usuario se actualice correctamente ante errores.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | Apache Kafka |
| `client` | `client/` | chapter, support | client | Angular | Angular |
| `infra-local` | (raiz) | support | infra | Compose local | Apache Kafka |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `GET /orders/stream`

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
