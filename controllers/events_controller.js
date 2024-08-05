/// DEPENDENCIES 
const events = require('express').Router()
const { Op } = require('sequelize')
const db = require('../models')
const { Event } = db

// FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [ [ 'start_time', 'ASC' ] ],
            where: {
                event_name: { [Op.like]: `%${req.query.event_name ? req.query.event_name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT - GET
events.get('/:id', async (req, res) => {
  try {
      const foundEvent = await Event.findOne({
          where: { event_id: req.params.id }
      })
      res.status(200).json(foundEvent)
  } catch (error) {
      res.status(500).json(error)
  }
})


// CREATE A NEW EVENT - POST
events.post('/', async (req, res) => {
  try {
      const NewEvent = await Event.create(req.body)
      res.status(201).json({
          message: 'Successfully inserted a new Event!',
          data: NewEvent
      })
  } catch {
      res.status(422).json(error)
  }
})

// UPDATE AN EVENT - PUT
events.put('/:id', async (req, res) => {
  try {
      const updatedEvent = await Event.update(req.body, {
          where: { event_id: req.params.id },
          returning: true
      })
      res.status(202).json({
          message: `Successfully updated ${updatedEvent} Event(s)`
      })
  } catch (error) {
      res.status(500).json(error)
  }
})


 

  
  // DELETE AN EVENT
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
  // EXPORT
  module.exports = events;













