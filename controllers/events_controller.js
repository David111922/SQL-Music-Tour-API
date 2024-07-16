/// DEPENDENCIES 
const { Op } = require('sequelize');
const express = require('express');
const events = express.Router();
const { Event } = require('../models');

// FIND ALL BANDS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create route
events.post('/', async (req, res) => {
    try {
      const newEvent = await Event.create(req.body);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Update route
  events.put('/:id', async (req, res) => {
    try {
      const [updated] = await Event.update(req.body, {
        where: { id: req.params.id }
      });
      if (!updated) {
        return res.status(404).json({ error: 'Event not found' });
      }
      const updatedEvent = await Event.findByPk(req.params.id);
      res.json(updatedEvent);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Delete route
  events.delete('/:id', async (req, res) => {
    try {
      const deleted = await Event.destroy({
        where: { id: req.params.id }
      });
      if (!deleted) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = events;










// EXPORT
module.exports = events;

