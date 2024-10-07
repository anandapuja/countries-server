# Countries Server

## API Specification

- Local: `http://localhost:3000`

| Endpoint       | HTTP     | Description         |
| -------------- | -------- | ------------------- |
| `/countries`     | `GET`    | Get all countries     |
| `/countries/:id` | `GET`    | Get country by id    |
| `/countries`     | `POST`   | Add new country      |
| `/countries`     | `DELETE` | Delete all countries  |
| `/countries/:id` | `DELETE` | Delete country by id |
| `/countries/:id` | `PATCH`  | Update country by id |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000