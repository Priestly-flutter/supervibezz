'use strict';

/**
 * purchase-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::purchase-record.purchase-record');
