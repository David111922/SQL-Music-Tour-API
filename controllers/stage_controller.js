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


// EXPORT
module.exports = stage;

