import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    perps: "src/perps.ts",
    aggregation: "src/aggregation.ts",
    lending: "src/lending.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  treeshake: true,
  outDir: "dist",
  target: "es2020",
  platform: "neutral",
  external: [
    "@rhea-finance/crosschain-perps-sdk",
    "@rhea-finance/cross-chain-aggregation-dex",
    "@rhea-finance/cross-chain-sdk",
  ],
});
