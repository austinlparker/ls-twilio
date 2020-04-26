import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/tracing';
import { WebTracerProvider } from '@opentelemetry/web';
import { DocumentLoad } from '@opentelemetry/plugin-document-load';
import { ZoneContextManager } from '@opentelemetry/context-zone';

const provider = new WebTracerProvider({
  plugins: [
    new DocumentLoad(),
  ],
});
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

provider.register({
  contextManager: new ZoneContextManager(),
});

const tracer = provider.getTracer('frontend');

window.addEventListener('load', prepareClickEvent);
