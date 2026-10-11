import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
const root = resolve('dist');
const base = process.argv[2] || '/';
if (!/^\/(?:[\w-]+\/)*$/.test(base)) throw new Error('Preview base must start and end with /, e.g. /kapylabs/');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png' };
http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    if (base !== '/' && url.pathname === base.slice(0, -1)) { res.writeHead(301, { Location: base + url.search }).end(); return; }
    if (!url.pathname.startsWith(base)) { res.writeHead(404).end('Not found'); return; }
    let path = resolve(root, '.' + '/' + url.pathname.slice(base.length));
    if (path !== root && !path.startsWith(root + '\\') && !path.startsWith(root + '/')) { res.writeHead(403).end(); return; }
    if ((await stat(path)).isDirectory()) {
      if (!url.pathname.endsWith('/')) { res.writeHead(301, { Location: url.pathname + '/' + url.search }).end(); return; }
      path = resolve(path, 'index.html');
    }
    const content = await readFile(path);
    res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' }); res.end(content);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:4173${base}`));
