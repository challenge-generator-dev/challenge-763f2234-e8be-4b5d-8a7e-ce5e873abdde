# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/infrastructure/kafka/kafka-producer.service.ts` — La fase "Configuración del entorno y publicación de eventos" (f1) practica KafkaProducerService.produce aqui: este archivo es el ejercicio (blueprint).
- `api/src/application/order-event-publisher.service.ts` — La fase "Configuración del entorno y publicación de eventos" (f1) practica OrderEventPublisher.publish aqui: este archivo es el ejercicio (blueprint).
- `api/src/infrastructure/sse/order-event.controller.ts` — La fase "Consumo de eventos y actualización de la interfaz" (f2) practica OrderEventController.streamOrders aqui: este archivo es el ejercicio (blueprint).
- `client/src/app/core/services/order.service.ts` — La fase "Consumo de eventos y actualización de la interfaz" (f2) practica OrderService.subscribeToOrders aqui: este archivo es el ejercicio (blueprint).
- `client/src/app/features/orders/order-list/order-list.component.ts` — La fase "Consumo de eventos y actualización de la interfaz" (f2) practica OrderListComponent.ngOnInit aqui: este archivo es el ejercicio (blueprint).

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

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced L2

### Brecha de conocimiento
Publicar y consumir eventos en un topic Kafka y mostrarlos en tiempo real

### Misión / candidato
Mostrar en vivo el estado de las ordenes

### Reto
- Tema: Consumo de eventos en tiempo real con Kafka
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de un sistema de eventos en tiempo real con Kafka y Angular
- Tiempo estimado: 12 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del entorno y publicación de eventos — objetivo: Configurar el entorno de desarrollo y publicar eventos en un topic Kafka. — entregable (NO resolver): Entorno de desarrollo configurado y eventos publicados en Kafka.
- Fase 2: Consumo de eventos y actualización de la interfaz — objetivo: Consumir eventos de Kafka y mostrarlos en la interfaz de usuario en tiempo real. — entregable (NO resolver): Interfaz de usuario que muestra los eventos recibidos de Kafka en tiempo real.
- Fase 3: Optimización y manejo de errores — objetivo: Optimizar el consumo de eventos y manejar posibles errores. — entregable (NO resolver): Sistema optimizado y robusto que consume eventos de Kafka y muestra el estado de las órdenes en tiempo real, manejando posibles errores.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.4.22",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/swagger": "8.1.1",
    "@nestjs/testing": "10.4.22",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "jest": "30.5.2",
    "kafkajs": "2.2.4",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: api/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/domain/order-event.ts ===
export class OrderEvent {
  constructor(
    public readonly orderId: string,
    public readonly status: string,
    public readonly timestamp: Date,
  ) {
    if (!orderId || orderId.trim().length === 0) {
      throw new Error('orderId is required');
    }
    if (!status || status.trim().length === 0) {
      throw new Error('status is required');
    }
    if (!timestamp) {
      throw new Error('timestamp is required');
    }
  }
}

export type OrderEventDto = {
  orderId: string;
  status: string;
  timestamp: Date;
};

// === ARCHIVO: api/src/infrastructure/kafka/kafka-producer.service.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
// TODO(reto): Implementar la publicación de eventos en Kafka
import { Injectable } from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';
import { OrderEvent } from '../../domain/order-event';

@Injectable()
export class KafkaProducerService {
  private producer: Producer;

  constructor() {
    const kafka = new Kafka({
      clientId: 'order-service',
      brokers: [process.env.KAFKA_BROKERS || 'localhost:9092'],
    });
    this.producer = kafka.producer();
  }

  async connect(): Promise<void> {
    throw new Error('TODO(reto): connect');
  }

  async disconnect(): Promise<void> {
    throw new Error('TODO(reto): disconnect');
  }

  async publishOrderEvent(topic: string, event: OrderEvent): Promise<void> {
    throw new Error('TODO(reto): publishOrderEvent');
  }
}

// === ARCHIVO: api/src/infrastructure/kafka/kafka-consumer.service.ts ===
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { OrderEvent } from '../../domain/order-event';
import { OrderEventPublisherService } from '../../application/order-event-publisher.service';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private consumer: Consumer;
  private readonly kafka: Kafka;

  constructor(private readonly publisherService: OrderEventPublisherService) {
    this.kafka = new Kafka({
      clientId: 'order-consumer',
      brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
    });
    this.consumer = this.kafka.consumer({ groupId: 'order-group' });
  }

  async onModuleInit(): Promise<void> {
    await this.connect();
    await this.subscribeToTopic();
    await this.startConsuming();
  }

  private async connect(): Promise<void> {
    try {
      await this.consumer.connect();
    } catch (error) {
      console.error('Failed to connect Kafka consumer:', error);
      throw error;
    }
  }

  private async subscribeToTopic(): Promise<void> {
    const topic = process.env.KAFKA_TOPIC || 'orders';
    await this.consumer.subscribe({
      topic,
      fromBeginning: false,
    });
  }

  private async startConsuming(): Promise<void> {
    await this.consumer.run({
      eachMessage: async (payload: EachMessagePayload) => {
        await this.processMessage(payload);
      },
    });
  }

  private async processMessage(payload: EachMessagePayload): Promise<void> {
    try {
      const messageValue = payload.message.value?.toString();
      
      if (!messageValue) {
        console.warn('Received empty message');
        return;
      }

      const eventData = JSON.parse(messageValue);
      
      const orderEvent = new OrderEvent(
        eventData.orderId,
        eventData.status,
        new Date(eventData.timestamp),
      );

      await this.publisherService.publishOrderEvent(orderEvent);
      
      console.log(`Processed order event: ${orderEvent.orderId} - ${orderEvent.status}`);
    } catch (error) {
      console.error('Error processing message:', error);
      this.handleProcessingError(error, payload);
    }
  }

  private handleProcessingError(error: unknown, payload: EachMessagePayload): void {
    const topic = payload.topic;
    const partition = payload.partition;
    const messageOffset = payload.message.offset;
    
    console.error(`Error processing message at ${topic}[${partition}]@${messageOffset}:`, error);
  }

  async onModuleDestroy(): Promise<void> {
    await this.disconnect();
  }

  private async disconnect(): Promise<void> {
    try {
      await this.consumer.disconnect();
      console.log('Kafka consumer disconnected');
    } catch (error) {
      console.error('Error disconnecting Kafka consumer:', error);
      throw error;
    }
  }
}

// === ARCHIVO: api/src/infrastructure/sse/order-event.controller.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
// TODO(reto): Implementar el endpoint SSE para streaming de eventos
import { Controller, Get, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OrderEvent } from '../../domain/order-event';
import { OrderEventPublisherService } from '../../../src/application/order-event-publisher.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrderEventController {
  constructor(private readonly publisherService: OrderEventPublisherService) {}

  @Get('stream')
  @Sse()
  @ApiOperation({ summary: 'Stream de eventos de órdenes en tiempo real' })
  @ApiResponse({
    status: 200,
    description: 'Stream de eventos Server-Sent Events',
  })
  streamOrders(): Observable<MessageEvent> {
    throw new Error('TODO(reto): streamOrders');
  }
}

// === ARCHIVO: api/src/application/order-event-publisher.service.ts ===
import { Injectable } from '@nestjs/common';
import { OrderEvent } from '../domain/order-event';

@Injectable()
export class OrderEventPublisherService {
  // TODO(reto): Implementar la lógica de publicación de eventos de orden
  // Este servicio debe publicar eventos al topic de Kafka y mantener un buffer de eventos para SSE
  // La implementación debe incluir:
  // 1. Publicación de eventos en el topic Kafka configurado
  // 2. Almacenamiento de eventos en memoria para streaming SSE
  // 3. Manejo de errores de publicación
  // 4. Control de backpressure si el buffer crece demasiado
  
  async publishOrderEvent(event: OrderEvent): Promise<void> {
    // TODO(reto): Implementar publicación a Kafka
    // 1. Obtener el topic de las variables de entorno (KAFKA_TOPIC_ORDERS)
    // 2. Usar KafkaProducerService para publicar el evento
    // 3. Manejar errores de conexión/publicación
    // 4. Registrar el evento en el buffer para SSE
    throw new Error('Method not implemented');
  }

  getRecentEvents(limit: number = 100): OrderEvent[] {
    // TODO(reto): Retornar los eventos más recientes del buffer
    // Debe mantener el orden cronológico y limitar la cantidad
    throw new Error('Method not implemented');
  }

  addToBuffer(event: OrderEvent): void {
    // TODO(reto): Agregar evento al buffer en memoria
    // Considerar límites de tamaño para evitar memory leaks
    throw new Error('Method not implemented');
  }
}

// === ARCHIVO: api/src/infrastructure/sse/order-event.controller.spec.ts ===
import { Test, TestingModule } from '@nestjs/testing';
import { OrderEventController } from './order-event.controller';
import { OrderEventPublisherService } from '../../application/order-event-publisher.service';
import { Observable, of } from 'rxjs';
import { MessageEvent } from '@nestjs/common';
import { OrderEvent } from '../../domain/order-event';

describe('OrderEventController', () => {
  let controller: OrderEventController;
  let publisherService: OrderEventPublisherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderEventController],
      providers: [
        {
          provide: OrderEventPublisherService,
          useValue: {
            getRecentEvents: jest.fn().mockReturnValue([
              new OrderEvent('order-1', 'CREATED', new Date()),
              new OrderEvent('order-2', 'PROCESSING', new Date()),
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<OrderEventController>(OrderEventController);
    publisherService = module.get<OrderEventPublisherService>(OrderEventPublisherService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('streamOrders', () => {
    it('should return an Observable of MessageEvent', (done) => {
      const result: Observable<MessageEvent> = controller.streamOrders();
      result.subscribe({
        next: (event) => {
          expect(event.data).toBeDefined();
          const data = JSON.parse(event.data as string);
          expect(data.orderId).toBeDefined();
          expect(data.status).toBeDefined();
          expect(data.timestamp).toBeDefined();
        },
        complete: () => done(),
      });
    });

    it('should emit recent events initially', (done) => {
      const mockEvents = [
        new OrderEvent('order-1', 'CREATED', new Date()),
        new OrderEvent('order-2', 'PROCESSING', new Date()),
      ];
      jest.spyOn(publisherService, 'getRecentEvents').mockReturnValue(mockEvents);

      const result: Observable<MessageEvent> = controller.streamOrders();
      let emittedCount = 0;
      result.subscribe({
        next: (event) => {
          emittedCount++;
          if (emittedCount === mockEvents.length) {
            expect(emittedCount).toBe(mockEvents.length);
            done();
          }
        },
        error: done,
      });
    });
  });
});

// === ARCHIVO: api/src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Order Events API')
    .setDescription('API for streaming order events in real-time')
    .setVersion('1.0')
    .addServer('http://localhost:3000', 'Local development')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

// === ARCHIVO: api/src/app.module.ts ===
import { Module } from '@nestjs/common';
import { OrderEventController } from './infrastructure/sse/order-event.controller';
import { OrderEventPublisherService } from './application/order-event-publisher.service';
import { KafkaProducerService } from './infrastructure/kafka/kafka-producer.service';
import { KafkaConsumerService } from './infrastructure/kafka/kafka-consumer.service';

@Module({
  imports: [],
  controllers: [OrderEventController],
  providers: [
    OrderEventPublisherService,
    KafkaProducerService,
    KafkaConsumerService,
  ],
})
export class AppModule {}

// === ARCHIVO: client/src/app/app.component.ts ===
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {}

// === ARCHIVO: client/package.json ===
{
  "name": "reto-angular",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "ng": "ng",
    "build": "ng build"
  },
  "dependencies": {
    "@angular/animations": "19.2.25",
    "@angular/common": "19.2.25",
    "@angular/compiler": "19.2.25",
    "@angular/core": "19.2.25",
    "@angular/forms": "19.2.25",
    "@angular/platform-browser": "19.2.25",
    "@angular/platform-browser-dynamic": "19.2.25",
    "@angular/router": "19.2.25",
    "rxjs": "7.8.2",
    "tslib": "2.9.1",
    "zone.js": "0.15.1"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "19.2.27",
    "@angular/cli": "19.2.27",
    "@angular/compiler-cli": "19.2.25",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: client/angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "analytics": false
  },
  "newProjectRoot": "projects",
  "projects": {
    "reto": {
      "projectType": "application",
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/reto",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [],
            "styles": [
              "src/styles.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "1MB",
                  "maximumError": "2MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "16kB",
                  "maximumError": "32kB"
                }
              ],
              "outputHashing": "all"
            }
          },
          "defaultConfiguration": "production"
        }
      }
    }
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "strictPropertyInitialization": false,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": false,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: client/tsconfig.app.json ===
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: client/src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Reto</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>

// === ARCHIVO: client/src/styles.css ===
/* estilos globales */

// === ARCHIVO: client/src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// === ARCHIVO: client/src/app/core/services/order.service.ts ===
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderEvent {
  orderId: string;
  status: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiUrl = 'http://localhost:3000/orders/stream';
  private ordersSignal = signal<OrderEvent[]>([]);

  constructor(private http: HttpClient) {}

  get orders() {
    return this.ordersSignal.asReadonly();
  }

  // TODO(reto): Implementar la suscripción a eventos SSE para recibir actualizaciones en tiempo real
  // Requisitos:
  // 1. Conectarse al endpoint SSE usando EventSource o HttpClient con la opción 'observe: "events"'
  // 2. Parsear cada evento recibido y actualizar el signal con la nueva orden
  // 3. Manejar errores de conexión y reconexión automática
  // 4. Limpiar la suscripción cuando el servicio sea destruido
  connectToOrderStream(): void {
    // Implementación pendiente para la fase 2 del reto
  }
}

// === ARCHIVO: client/src/app/features/orders/order-list/order-list.component.ts ===
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../core/services/order.service';
import { OrderStatusComponent } from '../../../shared/components/order-status/order-status.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, OrderStatusComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit, OnDestroy {
  private readonly orderService = inject(OrderService);
  
  // TODO(reto): Implementar la suscripción al stream de órdenes
  // El componente debe:
  // 1. Conectar al stream de eventos cuando se monte el componente
  // 2. Desconectar cuando se destruya el componente
  // 3. Mostrar los eventos de órdenes en tiempo real
  
  ngOnInit(): void {
    // Implementar conexión al stream
  }

  ngOnDestroy(): void {
    // Implementar desconexión del stream
  }
}

// === ARCHIVO: client/src/app/features/orders/order-list/order-list.component.html ===
<section class="order-list">
  <header class="order-list__header">
    <h2 class="order-list__title">Órdenes en Tiempo Real</h2>
    <span class="order-list__subtitle">Estado actualizado de todas las órdenes</span>
  </header>

  <div class="order-list__content">
    @if (orderService.orders().length === 0) {
      <div class="order-list__empty">
        <svg class="order-list__empty-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        <p class="order-list__empty-text">No hay órdenes disponibles</p>
        <p class="order-list__empty-hint">Conectando al stream de eventos...</p>
      </div>
    } @else {
      <ul class="order-list__items">
        @for (order of orderService.orders(); track order.orderId) {
          <li class="order-list__item">
            <div class="order-list__item-main">
              <span class="order-list__item-id">{{ order.orderId }}</span>
              <app-order-status [status]="order.status"></app-order-status>
            </div>
            <time class="order-list__item-timestamp" [attr.datetime]="order.timestamp.toISOString()">
              {{ order.timestamp | date:'medium' }}
            </time>
          </li>
        }
      </ul>
    }
  </div>

  <footer class="order-list__footer">
    <span class="order-list__count">
      Total: {{ orderService.orders().length }} órdenes
    </span>
  </footer>
</section>

// === ARCHIVO: client/src/app/features/orders/order-list/order-list.component.scss ===
$color-background: #f8f9fa;
$color-surface: #ffffff;
$color-text-primary: #212529;
$color-text-secondary: #6c757d;
$color-border: #dee2e6;
$color-accent: #0d6efd;
$color-success: #198754;
$color-warning: #ffc107;
$color-danger: #dc3545;
$color-info: #0dcaf0;

$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;

$border-radius-sm: 0.25rem;
$border-radius-md: 0.5rem;
$border-radius-lg: 0.75rem;

$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

$transition-fast: 150ms ease-in-out;
$transition-normal: 250ms ease-in-out;

.order-list {
  display: flex;
  flex-direction: column;
  min-height: 400px;
  background-color: $color-surface;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
  overflow: hidden;

  &__header {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
    padding: $spacing-lg;
    border-bottom: 1px solid $color-border;
    background: linear-gradient(135deg, rgba($color-accent, 0.03) 0%, rgba($color-info, 0.03) 100%);
  }

  &__title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: $color-text-primary;
    line-height: 1.2;
  }

  &__subtitle {
    font-size: 0.875rem;
    color: $color-text-secondary;
  }

  &__content {
    flex: 1;
    padding: $spacing-md;
    overflow-y: auto;
    max-height: 500px;
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: $spacing-xl;
    text-align: center;
    min-height: 300px;
  }

  &__empty-icon {
    width: 64px;
    height: 64px;
    color: $color-border;
    margin-bottom: $spacing-md;
    animation: pulse 2s ease-in-out infinite;
  }

  &__empty-text {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 500;
    color: $color-text-primary;
  }

  &__empty-hint {
    margin: $spacing-sm 0 0;
    font-size: 0.875rem;
    color: $color-text-secondary;
  }

  &__items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
    padding: $spacing-md;
    background-color: $color-background;
    border: 1px solid $color-border;
    border-radius: $border-radius-md;
    transition: all $transition-normal;

    &:hover {
      border-color: $color-accent;
      box-shadow: $shadow-sm;
      transform: translateX(4px);
    }

    &:first-child {
      animation: slideIn 300ms ease-out;
    }
  }

  &__item-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-md;
  }

  &__item-id {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9375rem;
    font-weight: 600;
    color: $color-text-primary;
    background-color: rgba($color-accent, 0.1);
    padding: $spacing-xs $spacing-sm;
    border-radius: $border-radius-sm;
  }

  &__item-timestamp {
    font-size: 0.8125rem;
    color: $color-text-secondary;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: $spacing-md $spacing-lg;
    border-top: 1px solid $color-border;
    background-color: $color-background;
  }

  &__count {
    font-size: 0.875rem;
    font-weight: 500;
    color: $color-text-secondary;
    padding: $spacing-xs $spacing-sm;
    background-color: $color-surface;
    border-radius: $border-radius-sm;
    border: 1px solid $color-border;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// === ARCHIVO: client/src/app/shared/components/order-status/order-status.component.ts ===
import { Component, Input, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderEvent } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.scss'
})
export class OrderStatusComponent {
  @Input({ required: true }) orderEvent!: OrderEvent;

  readonly statusClass = computed(() => {
    const status = this.orderEvent?.status?.toLowerCase() ?? '';
    if (status.includes('complet') || status.includes('success') || status.includes('entreg')) {
      return 'status-completed';
    }
    if (status.includes('pending') || status.includes('process') || status.includes('espera')) {
      return 'status-pending';
    }
    if (status.includes('cancel') || status.includes('fail') || status.includes('error')) {
      return 'status-cancelled';
    }
    return 'status-default';
  });

  readonly statusIcon = computed(() => {
    const status = this.orderEvent?.status?.toLowerCase() ?? '';
    if (status.includes('complet') || status.includes('success') || status.includes('entreg')) {
      return '✓';
    }
    if (status.includes('pending') || status.includes('process') || status.includes('espera')) {
      return '⟳';
    }
    if (status.includes('cancel') || status.includes('fail') || status.includes('error')) {
      return '✕';
    }
    return '○';
  });

  readonly formattedTimestamp = computed(() => {
    if (!this.orderEvent?.timestamp) {
      return '';
    }
    const date = new Date(this.orderEvent.timestamp);
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  });

  readonly isRecent = computed(() => {
    if (!this.orderEvent?.timestamp) {
      return false;
    }
    const now = new Date().getTime();
    const eventTime = new Date(this.orderEvent.timestamp).getTime();
    const fiveMinutes = 5 * 60 * 1000;
    return (now - eventTime) < fiveMinutes;
  });
}

// === ARCHIVO: client/src/app/shared/components/order-status/order-status.component.html ===
<article class="order-status" [ngClass]="statusClass()" [class.order-status--recent]="isRecent()">
  <header class="order-status__header">
    <span class="order-status__icon" aria-hidden="true">{{ statusIcon() }}</span>
    <span class="order-status__order-id">Orden: {{ orderEvent.orderId }}</span>
  </header>
  
  <div class="order-status__content">
    <div class="order-status__status-row">
      <span class="order-status__label">Estado:</span>
      <span class="order-status__value">{{ orderEvent.status }}</span>
    </div>
    
    <div class="order-status__timestamp-row">
      <span class="order-status__label">Actualizado:</span>
      <time class="order-status__timestamp" [attr.datetime]="orderEvent.timestamp">
        {{ formattedTimestamp() }}
      </time>
    </div>
  </div>

  <footer class="order-status__footer" *ngIf="isRecent()">
    <span class="order-status__live-indicator" aria-label="Actualización en tiempo real">
      <span class="order-status__live-dot"></span>
      En vivo
    </span>
  </footer>
</article>

// === ARCHIVO: client/src/app/app.routes.ts ===
import { Routes } from '@angular/router';
import { OrderListComponent } from './features/orders/order-list/order-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: OrderListComponent,
    title: 'Órdenes en Tiempo Real'
  },
  {
    path: '**',
    redirectTo: 'orders'
  }
];

// === ARCHIVO: client/src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter([]),
    provideAnimationsAsync(),
  ],
};

// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  kafka:
    image: "apache/kafka:3.8.0"
    ports:
      - "127.0.0.1:9092:9092"
    environment:
      KAFKA_NODE_ID: "1"
      KAFKA_PROCESS_ROLES: "broker,controller"
      KAFKA_LISTENERS: "PLAINTEXT://:9092,CONTROLLER://:9093"
      KAFKA_ADVERTISED_LISTENERS: "PLAINTEXT://localhost:9092"
      KAFKA_CONTROLLER_LISTENER_NAMES: "CONTROLLER"
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: "CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT"
      KAFKA_CONTROLLER_QUORUM_VOTERS: "1@localhost:9093"
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: "1"
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: "1"
      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: "1"
      KAFKA_GROUP_INITIAL_REBALANCE_DELAY_MS: "0"
    healthcheck:
      test: ["CMD-SHELL","/opt/kafka/bin/kafka-broker-api-versions.sh --bootstrap-server localhost:9092 > /dev/null 2>&1"]
      interval: 15s
      timeout: 10s
      retries: 10
      start_period: 30s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| Apache Kafka (KRaft, un nodo) | `apache/kafka:3.8.0` | 9092 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/kafka/create-topics.sh ===
#!/usr/bin/env bash
# Crea los topics en Kafka local (idempotente). Ejecutar con el compose levantado y healthy.
set -euo pipefail

docker compose exec -T kafka /opt/kafka/bin/kafka-topics.sh --bootstrap-server localhost:9092 --create --if-not-exists --topic app-events --partitions 1 --replication-factor 1

```
