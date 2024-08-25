# htmlparser

## Feature

- Parsing HTML attributes
- Download the results of parsing HTML attributes as a JSON-formatted file
- Download the results of parsing HTML attributes as a CSV-formatted file

## Architecture

![arch](./docs/architecture.png)

### Backend

[htmlparser-backend](https://github.com/superneko160/htmlparser-backend)

## SetUp and Build

```bash
cd htmlparser
bun run build
```

## Run

```bash
bun run dev
```

## Access

```
http://localhost:5173
```

## Lint

```bash
bun lint
```

## Format

```bash
bun format
```

## Test

```bash
npm test
```

> [!CAUTION]
> When I run the test on Bun(```bun test```), I get an error, but it is not caused by the code.
> [oven-sh/bun#10275](https://github.com/oven-sh/bun/issues/10275)

## Stacks

| Category | Technology |
| ---- | ---- |
| Language | TypeScript |
| Package manager | Bun |
| Library | React |
| Platform | Cloudflare Pages |
| Testing Framework | Vitest |
| Formatter / Linter | Biome |
| Development environment | Docker |
