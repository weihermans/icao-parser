# @flyvolo/icao-parser

[![license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

Validate **ICAO** / **IATA** airport codes and infer the region from an ICAO prefix. Zero dependencies.

Part of [**VOLO**](https://www.flyvolo.ai)'s open aviation toolkit.

```js
const { isValidICAO, isValidIATA, regionFromICAO, parse } = require("@flyvolo/icao-parser");

isValidICAO("KJFK");      // → true
isValidIATA("JFK");       // → true
regionFromICAO("EGLL");   // → "Northern Europe"
parse("wsss");            // → { code: "WSSS", type: "ICAO", region: "Maritime Southeast Asia" }
```

## API

| Function | Returns |
|---|---|
| `isValidICAO(code)` | `true` for a 4-letter ICAO code |
| `isValidIATA(code)` | `true` for a 3-letter IATA code |
| `regionFromICAO(code)` | human-readable region, or `null` |
| `parse(code)` | `{ code, type: "ICAO"\|"IATA"\|"invalid", region }` |

## About

Built by [VOLO](https://www.flyvolo.ai) — the world's first agent-native private aviation platform. See more open tools and the live charter API at [flyvolo.ai/open-source](https://www.flyvolo.ai/open-source).

## License

MIT © [VOLO Technologies Pte. Ltd.](https://www.flyvolo.ai)
