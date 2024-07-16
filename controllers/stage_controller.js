/// DEPENDENCIES 
const { Op } = require('sequelize');
const express = require('express');
const stage = express.Router();
const { Stage } = require('../models');

// FIND ALL STAGES
stage.get('/', async (req, res) => {
    try {
        const foundStage = await Stage.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})


// Create route
stage.post('/', async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(201).json(newStage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update route
stage.put('/:id', async (req, res) => {
  try {
    const [updated] = await Stage.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Stage not found' });
    }
    const updatedStage = await Stage.findByPk(req.params.id);
    res.json(updatedStage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete route
stage.delete('/:id', async (req, res) => {
  try {
    const deleted = await Stage.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Stage not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = stage;


// EXPORT
module.exports = stage;

