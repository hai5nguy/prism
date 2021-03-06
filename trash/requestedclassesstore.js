'use strict';

var _ 				= require('lodash');
var EventEmitter	= require('events').EventEmitter;
var assign 			= require('object-assign');

var Dispather 		= require('../dispatcher/prismdispatcher');
var ActionTypes 	= require('../constants/actiontypes');


var CategoryStore	= require('./category.store');

var CHANGE_EVENT = 'change';

var _requested = [];

var RequestedClassStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	getAll: function () {
		var categories = CategoryStore.getAll();

		var requested = _requested.slice(0);
		requested.map(function (r) {
			r.category = _.find(categories, { _id: r.categoryId });
		});

		return requested;
	},
	getRequestedById: function (id) {
		return _.find(_requested, { id: id });
	}
});

Dispather.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.CREATE_REQUEST:
			_requested.push(action.request);

			trace([ _requested, 'blah' ]);
			RequestedClassStore.emitChange();
			break;
		default:
			break;
	}
});

module.exports = RequestedClassStore;