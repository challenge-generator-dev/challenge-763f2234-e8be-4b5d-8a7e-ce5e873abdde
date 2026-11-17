# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de un sistema de eventos en tiempo real con Kafka y Angular**.

| | |
|---|---|
| Tema | Consumo de eventos en tiempo real con Kafka |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 10 |
| Patron arquitectonico | capas estándar (controller-service-repository) |
| Tiempo estimado | 12 horas |

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

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @nestjs/common 10.4.22
- @nestjs/core 10.4.22
- @nestjs/platform-express 10.4.22
- @nestjs/swagger 8.1.1
- @nestjs/testing 10.4.22
- class-transformer 0.5.1
- class-validator 0.15.1
- jest 30.5.2
- kafkajs 2.2.4
- reflect-metadata 0.2.2
- rxjs 7.8.2
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Segui el orden de arranque del mapa de componentes (infraestructura local primero) y corre `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` desde la raiz: mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración del entorno y publicación de eventos**: Entorno de desarrollo configurado y eventos publicados en Kafka.
- **Fase 2 — Consumo de eventos y actualización de la interfaz**: Interfaz de usuario que muestra los eventos recibidos de Kafka en tiempo real.
- **Fase 3 — Optimización y manejo de errores**: Sistema optimizado y robusto que consume eventos de Kafka y muestra el estado de las órdenes en tiempo real, manejando posibles errores.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `api/src/infrastructure/kafka/kafka-producer.service.ts` — La fase "Configuración del entorno y publicación de eventos" (f1) practica KafkaProducerService.produce aqui: este archivo es el ejercicio (blueprint).
- [ ] `api/src/application/order-event-publisher.service.ts` — La fase "Configuración del entorno y publicación de eventos" (f1) practica OrderEventPublisher.publish aqui: este archivo es el ejercicio (blueprint).
- [ ] `api/src/infrastructure/sse/order-event.controller.ts` — La fase "Consumo de eventos y actualización de la interfaz" (f2) practica OrderEventController.streamOrders aqui: este archivo es el ejercicio (blueprint).
- [ ] `client/src/app/core/services/order.service.ts` — La fase "Consumo de eventos y actualización de la interfaz" (f2) practica OrderService.subscribeToOrders aqui: este archivo es el ejercicio (blueprint).
- [ ] `client/src/app/features/orders/order-list/order-list.component.ts` — La fase "Consumo de eventos y actualización de la interfaz" (f2) practica OrderListComponent.ngOnInit aqui: este archivo es el ejercicio (blueprint).

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (29)

- `api/package.json`
- `api/tsconfig.json`
- `api/src/domain/order-event.ts`
- `api/src/infrastructure/kafka/kafka-producer.service.ts`
- `api/src/infrastructure/kafka/kafka-consumer.service.ts`
- `api/src/infrastructure/sse/order-event.controller.ts`
- `api/src/application/order-event-publisher.service.ts`
- `api/src/infrastructure/sse/order-event.controller.spec.ts`
- `api/src/main.ts`
- `api/src/app.module.ts`
- `client/src/app/app.component.ts`
- `client/package.json`
- `client/angular.json`
- `client/tsconfig.json`
- `client/tsconfig.app.json`
- `client/src/index.html`
- `client/src/styles.css`
- `client/src/main.ts`
- `client/src/app/core/services/order.service.ts`
- `client/src/app/features/orders/order-list/order-list.component.ts`
- `client/src/app/features/orders/order-list/order-list.component.html`
- `client/src/app/features/orders/order-list/order-list.component.scss`
- `client/src/app/shared/components/order-status/order-status.component.ts`
- `client/src/app/shared/components/order-status/order-status.component.html`
- `client/src/app/app.routes.ts`
- `client/src/app/app.config.ts`
- `docker-compose.yml`
- `infra-local/README.md`
- `infra-local/kafka/create-topics.sh`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `api` (presente)
- `api/src/domain` (presente)
- `api/src/application` (presente)
- `api/src/infrastructure` (presente)
- `api/src/infrastructure/kafka` (presente)
- `api/src/infrastructure/sse` (presente)
- `client` (presente)
- `client/src/app/core/services` (presente)
- `client/src/app/features/orders` (presente)
- `client/src/app/shared/components` (presente)

## Verificacion

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- Cada componente vive en su carpeta: instala y compila dentro de ella, y no muevas archivos entre componentes.
- Respeta los contratos entre componentes (endpoints, topics) tal como estan declarados en el mapa de componentes.
- El patron es **capas estándar (controller-service-repository)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced L2
- Brecha que el reto ataca: Publicar y consumir eventos en un topic Kafka y mostrarlos en tiempo real
- Mision: Mostrar en vivo el estado de las ordenes

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
