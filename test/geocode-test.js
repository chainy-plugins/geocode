"use strict";
// Import
var expect = require('chai').expect,
	joe = require('joe')

// Test
joe.describe('geocode plugin', function(describe,it){
	var Chainy = require('chainy-core').subclass().require('set').addExtension('geocode', require('../'))

	it("should work", function(next){
		Chainy.create()
			.set('Sydney, Australia')
			.geocode()
			.done(function(err, result){
				if (err)  return next(err)
				expect(result, 'coordinates match').to.deep.equal([151.059617, -33.838197])
				return next()
			})
	})
})