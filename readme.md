Music Tour Migration App
Table of Contents
Overview
Features
Technologies Used
Installation
Usage
Database Schema
Endpoints
Contributing
License

# OVERVIEW

This app is basically written in javascript It is designed to migrate changes from the app to pgadmin using sequel. the import database is postgresSQL using PgAdmin.
The main purpose of this app is to coordinate and maintain scheduling for bands and events. The server runs on localhost:3000.

## FEATURES

Bands: View and schedule band info.

Events: Schedule and organize events using date times and location.

Stages: Coordinates availability of time and location.

Meet and Greet: Set up meet and greet location and times.

### THECHNOLOGIES USED

Node.js and Express for server and API handling.

PostgresSQL Database

pgAdmin: Database management

Sequelize: Database migrations

Repository: Github..ttps://github.com/David111922/SQL-Music-Tour-API.git

#### DATABASE SCHEMA

Bands

Events

Set-time

Stages

Stage-events

##### ENPOINTS

Project uses express router for route handling

HTTP Method Endpoint Description

GET /bands Retrieve a list of all bands
POST/bands Add a new band
GET /events Retrieve a list of all events
POST/events Add a new event
GET /stages Retrieve a list of all stages
POST/stages Add a new stage
GET /stage-times Retrieve stage schedules
POST/stage-times Add a new stage time
GET /meet-greets Retrieve meet-and-greet schedules
POST/meet-greets Schedule a meet-and-greet

###### LICENSE

MIT License

Copyright (c) 2022 ThriveDX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
