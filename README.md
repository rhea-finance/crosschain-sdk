# @rhea-finance/crosschain-sdk

RHEA Cross-chain SDK 聚合入口，按子路径分别使用 Perps、Swap Aggregation 和 Lending SDK。

## 安装

```bash
pnpm add @rhea-finance/crosschain-sdk
```

## 按需引用

```ts
import { PerpsClient } from "@rhea-finance/crosschain-sdk/perps";
import { SwapClient } from "@rhea-finance/crosschain-sdk/aggregation";
import { batchViews } from "@rhea-finance/crosschain-sdk/lending";
```

三个入口独立构建，并将上游 SDK 保持为 external；只引用一个子路径时，另外两个不会进入应用依赖图。

## 线上文档

- [Cross-chain Perps SDK](https://www.npmjs.com/package/@rhea-finance/crosschain-perps-sdk)
- [Cross-chain Aggregation SDK](https://www.npmjs.com/package/@rhea-finance/cross-chain-aggregation-dex)
- [Cross-chain Lending SDK](https://www.npmjs.com/package/@rhea-finance/cross-chain-sdk)
