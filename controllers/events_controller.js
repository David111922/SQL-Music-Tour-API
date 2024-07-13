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


// EXPORT
module.exports = Events;

