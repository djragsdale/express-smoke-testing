#!/usr/bin/env node
'use strict';

const app = require('./app');

const PORT = process.env.PORT || '3000';
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
