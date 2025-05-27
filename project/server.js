import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = createServer(async (req, res) => {
  try {
    // Remove query strings and hash
    const cleanPath = req.url.split(/[?#]/)[0];
    
    // Default to index.html for root path
    let filePath = cleanPath === '/' 
      ? 'index.html'
      : cleanPath.substring(1); // Remove leading slash

    // Join with current directory
    filePath = join(__dirname, filePath);

    const ext = '.' + filePath.split('.').pop();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    const content = await readFile(filePath);
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  } catch (err) {
    console.error(`Error serving ${req.url}:`, err);
    if (err.code === 'ENOENT') {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(500);
      res.end('Internal server error');
    }
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});