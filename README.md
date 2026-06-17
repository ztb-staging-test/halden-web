# halden-web

The Halden Freight Analytics customer dashboard: live shipments, delivery rate and
exceptions across a shipper's carriers. React + TypeScript on Vite, reading from
[halden-shipments-api](../halden-shipments-api).

> Demo repository. Halden Freight Analytics is a fictional company used to test
> ZeroTB's compliance engine.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173, proxies /api to localhost:8000
npm run build
```

The browser never holds an API key: in production the CDN edge proxies `/api` and
attaches the dashboard's key server side.

## License

MIT. Written for this demo; scaffold follows Vite's `react-ts` template
(https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts, MIT).
