import express from 'express';
const router = express.Router();
import * as productCardRepository from '../models/productCard.model.mjs'


// Get all cards
router.get('/cards', async (req, res) => {
  const productCards = await productCardRepository.getAll();
  if (productCards) {
    res.status(200).json(productCards);
  } else {
    res.status(404).json({
      message: 'product-cards are not found'
    });
  }
})

// Get product card
router.get('/card/:id', async (req, res) => {
  const id = req.params.id;
  const productCard = await productCardRepository.getProductCard(id);
  if (productCard) {
    res.status(200).json(productCard);
  } else {
    res.status(404).json({
      message: 'product-card are not found'
    });
  }
})

// Create a card
router.post('/register', async (req, res) => {
  const { title, description, price, imageUrl, user, district, dealType } = req.body;
  const productCard = await productCardRepository.createCard(title, description, price, imageUrl, user, district, dealType);
  res.status(201).json(productCard);
})


// Update the card
router.put('/update/:id', async (req, res) => {
  const { title, description, price, imageUrl, user, district, dealType } = req.body;
  const id = req.params.id;
  const prodcutCard = await productCardRepository.getProductCard(id);
  if (!prodcutCard) {
    res.status.json({ 
      message: `can not find product-card with ${id}`
    });
  }
  const updated = await productCardRepository.updateCard(title, description, price, imageUrl, user, district, dealType);
  res.status(200).json(updated);
})


// Delete the card
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  const productCard = await productCardRepository.getProductCard(id);
  if (!productCard) {
    res.status(404).json({ message: `can not find product-card with ${id}`});
  }
  await productCardRepository.removeCard(id);
  res.sendStatus(204);
})





export default router;
