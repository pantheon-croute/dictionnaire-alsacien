#!/usr/bin/env node
// veille-server.js — serveur local pour refs.html
// Lance avec : node veille-server.js
// Ouvre ensuite : http://localhost:3738

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT    = 3738;
const DIR     = __dirname;
const PARADIGM = path.join('C:', 'Users', 'kehez', 'reborn', '_paradigm');

const FILES = {
  liked:  { local: path.join(DIR, 'liked.md'),       global: path.join(PARADIGM, 'veille-liked.md') },
  excl:   { local: path.join(DIR, 'exclusions.md'),  global: path.join(PARADIGM, 'veille-exclusions.md') },
};

function today() {
  return new Date().toLocaleDateString('fr-FR', { day:'2-digit', month:'2-digit', year:'numeric' });
}

function read(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function addEntry(filePath, url, tags) {
  if (read(filePath).includes(url)) return;
  fs.appendFileSync(filePath, `- ${url} | ${tags} | ${today()}\n`, 'utf8');
}

function removeEntry(filePath, url) {
  const lines = read(filePath).split('\n').filter(l => !l.includes(url));
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => { try { resolve(JSON.parse(body)); } catch(e) { reject(e); } });
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Serve refs.html
  if (req.method === 'GET' && (req.url === '/' || req.url === '/refs.html')) {
    const html = read(path.join(DIR, 'refs.html'));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  // POST /api/like | /api/excl  → ajoute
  // DELETE /api/like | /api/excl → retire
  if (req.url === '/api/like' || req.url === '/api/excl') {
    try {
      const { url, tags } = await parseBody(req);
      const key = req.url === '/api/like' ? 'liked' : 'excl';
      const { local, global: glob } = FILES[key];

      if (req.method === 'POST') {
        addEntry(local, url, tags);
        addEntry(glob,  url, tags);
      } else if (req.method === 'DELETE') {
        removeEntry(local, url);
        removeEntry(glob,  url);
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch(e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  res.writeHead(404); res.end();
});

server.listen(PORT, () => {
  console.log(`\n  Veille → http://localhost:${PORT}\n`);
});
