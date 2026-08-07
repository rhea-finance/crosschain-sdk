# @rhea-finance/crosschain-sdk

Lightweight entry points for the RHEA Perps, Swap Aggregation, and Lending SDKs.

## Installation

```bash
pnpm add @rhea-finance/crosschain-sdk
```

## On-demand imports

```ts
import { PerpsClient } from "@rhea-finance/crosschain-sdk/perps";
import { SwapClient } from "@rhea-finance/crosschain-sdk/aggregation";
import { batchViews } from "@rhea-finance/crosschain-sdk/lending";
```

Each entry point is built independently and keeps its upstream SDK external.
Importing one subpath does not add the other two SDKs to your application bundle.

## Online documentation

- [Cross-chain Perps SDK](https://www.npmjs.com/package/@rhea-finance/crosschain-perps-sdk)
- [Cross-chain Aggregation SDK](https://www.npmjs.com/package/@rhea-finance/cross-chain-aggregation-dex)
- [Cross-chain Lending SDK](https://www.npmjs.com/package/@rhea-finance/cross-chain-sdk)
