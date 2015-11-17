/**
 * Orders API requests and definitions for Amazon's MWS web services.
 * For information on using, please see examples folder.
 *
 * @author Jakub Gančo, Zdeněk Pečínka
 */

var mws = require('./mws');
var Q = require('q');
module.exports = {

    /**
     * @absract Returns the operational status of the Orders API section.
     * @description he GetServiceStatus operation returns the operational status of the Orders API section of Amazon Marketplace Web Service. Status values are GREEN, GREEN_I, YELLOW, and RED.

     The GetServiceStatus operation has a maximum request quota of two and a restore rate of one request every five minutes. For definitions of throttling terminology, see What you should know about the Orders API section.
     * @param {Object} config Configuration file
     * @param {Boolean} xml flag. If true, returns raw xml although returns object
     * @param {Function} cb Callback function
     * @see http://docs.developer.amazonservices.com/en_US/orders/2013-09-01/MWS_GetServiceStatus.html
     */
    GetServiceStatus: function (config, xml, cb) {
        var defer = Q.defer();
        if (typeof xml == 'function') {
            cb = xml;
            xml = false;
        }
        mws.createRequest({
            'action': 'GetServiceStatus',
            'config': config,
            'parameters': {},
            'type': 'Orders',
            "xml": xml
        }, function (err, data) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(data);
            }
        });
        return defer.promise.nodeify(cb);
    }


};