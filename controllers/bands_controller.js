/// DEPENDENCIES 
const { Op } = require('sequelize');
const express = require('express');
const bands = express.Router();
const { Band } = require('../models');

// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})


// EXPORT
module.exports = bands;

