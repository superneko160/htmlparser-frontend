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
cd htmlparser
bun run dev
```

## Access

```
http://localhost:5173
```

## Lint

```bash
cd htmlparser
bun lint
```

## Format

```bash
cd htmlparser
bun format
```

## Test

```bash
cd htmlparser
bun test
```

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
