const opentelemetry = require("@opentelemetry/api");
const { LogLevel } = require("@opentelemetry/core");
const { NodeTracerProvider } = require("@opentelemetry/node");
const { BatchSpanProcessor } = require("@opentelemetry/tracing");
const { LightstepExporter } = require("lightstep-opentelemetry-exporter");

module.exports = (serviceName) => {
  const lightstepOptions = {
    serviceName: serviceName,
    token: process.env.LIGHTSTEP_KEY
  }
  
  const provider = new NodeTracerProvider({ logLevel: LogLevel.ERROR })
  
  provider.addSpanProcessor(new BatchSpanProcessor(new LightstepExporter(lightstepOptions)))
  
  provider.register();
  return opentelemetry.trace.getTracer(serviceName);
}