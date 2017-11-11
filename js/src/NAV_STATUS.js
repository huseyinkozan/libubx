var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message UBX-NAV-STATUS (0x01 0x03).
 */

var NavStatus = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "NAV-STATUS";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};

NavStatus.prototype = Object.create(UBX.prototype);
NavStatus.prototype.constructor = NavStatus;

NavStatus.prototype.parser = new Parser()
  .uint32le('iTOW')
  .uint8('gpsFix')
  .uint8('flags')
  .uint8('fixStat')
  .uint8('flags2')
  .uint32le('ttff')
  .uint32le('msss')
  ;

NavStatus.prototype.fieldSpec = [];
NavStatus.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
NavStatus.prototype.fieldSpec.push(['gpsFix', 'writeUInt8', 1]);
NavStatus.prototype.fieldSpec.push(['flags', 'writeUInt8', 1]);
NavStatus.prototype.fieldSpec.push(['fixStat', 'writeUInt8', 1]);
NavStatus.prototype.fieldSpec.push(['flags2', 'writeUInt8', 1]);
NavStatus.prototype.fieldSpec.push(['ttff', 'writeUInt32LE', 4]);
NavStatus.prototype.fieldSpec.push(['msss', 'writeUInt32LE', 4]);

module.exports = NavStatus;
