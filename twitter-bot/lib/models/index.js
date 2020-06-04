'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Donation = exports.User = undefined;

var _datastore = require('@aws-amplify/datastore');

var _schema = require('./schema');

// @ts-check
var _initSchema = (0, _datastore.initSchema)(_schema.schema),
    User = _initSchema.User,
    Donation = _initSchema.Donation;

exports.User = User;
exports.Donation = Donation;