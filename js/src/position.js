/**
 * Copyright (C) 2016 Swift Navigation Inc.
 * Copyright (C) 2016 u-blox AG
 * Contact: Swift Navigation <dev@swiftnav.com>
 *
 * This source is subject to the license found in the file 'LICENSE' which must
 * be distributed together with this source. All other rights reserved.
 *
 * THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
 * EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
 */

var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

var NavPosEcef = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "NAV-POSECEF";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};
NavPosEcef.prototype = Object.create(UBX.prototype);
NavPosEcef.prototype.constructor = NavPosEcef;
NavPosEcef.prototype.parser = new Parser()
  .uint32le('iTOW')
  .int32le('ecefX')
  .int32le('ecefY')
  .int32le('ecefZ')
  .uint32le('pAcc');
NavPosEcef.prototype.fieldSpec = [];
NavPosEcef.prototype.fieldSpec.push(['iTOW', 'writeBit4', 4]);
NavPosEcef.prototype.fieldSpec.push(['ecefX', 'writeFloatLE', 4]);
NavPosEcef.prototype.fieldSpec.push(['ecefY', 'writeFloatLE', 4]);
NavPosEcef.prototype.fieldSpec.push(['ecefZ', 'writeFloatLE', 4]);
NavPosEcef.prototype.fieldSpec.push(['pAcc', 'writeBit4', 4]);

module.exports = {
  0x01: {
    0x01: NavPosEcef
  }
};
