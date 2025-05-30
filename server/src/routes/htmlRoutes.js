import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

//Define route to serve index.html
//!!! I don't think I need req since this is JavaScript and I'm not using req
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
  console.log(`PATH NAME: ${__dirname}/../../../client/dist/index.html`);
});

//!!! I don't think I need req since this is JavaScript and I'm not using req
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
  console.log(`PATH NAME: ${__dirname}/../../../client/dist/index.html`);
});


export default router;