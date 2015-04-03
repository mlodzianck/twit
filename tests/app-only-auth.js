var assert = require('assert');

var Twit = require('../lib/twitter');
var config = require('../config3');


describe('App only auth', function () {

    it('creating app only auth twit instance', function (done) {
        var twit = new Twit(config);
        done();
    })
    it('get app rate', function (done) {
        var twit = new Twit(config,
            function () {
                twit.get('application/rate_limit_status', function (err, resp) {
                    assert(resp.resources.lists['/lists/list']);
                    done();

                });
            });

    })
});