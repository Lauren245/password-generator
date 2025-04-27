import { Router } from 'express';
import dotenv from 'dotenv';

import generateWord from '../../services/wordService.js';

dotenv.config();

const router = Router();

router.get('/', async (req, res) => {
  try {
    console.log('inside server route function.');
    const wordData = await generateWord();

    if(!wordData){
      return res.status(404).json('Word data not found');
    }else {
      res.json(wordData);
    }
  }catch(error) {
    console.error('Attempting to fetch word data encountered an error: ', error);
    return res.status(500).json('An unknown error occured.');
  };
});

export default router;