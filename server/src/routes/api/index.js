import { Router } from 'express';
import wordRoutes from './wordRoutes.js';

const router = Router();
router.use('/words', wordRoutes);

export default router;