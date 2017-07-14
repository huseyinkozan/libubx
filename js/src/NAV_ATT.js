var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message UBX_NAV_ATT (0x01 0x05).
 */

var NavAtt = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "NAV-ATT";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};

NavAtt.prototype = Object.create(UBX.prototype);
NavAtt.prototype.constructor = NavAtt;
NavAtt.prototype.parser = new Parser()
  .uint32le('iTOW')
  .uint8('version')
  .uint8('reserved1a')
  .uint8('reserved1b')
  .uint8('reserved1c')
  .int32le('roll')
  .int32le('pitch')
  .int32le('heading')
  .uint32le('accRoll')
  .uint32le('accPitch')
  .uint32le('accHeading');

NavAtt.prototype.fieldSpec = [];
NavAtt.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
NavAtt.prototype.fieldSpec.push(['version', 'writeUInt8', 1]);
NavAtt.prototype.fieldSpec.push(['reserved1a', 'writeUInt8', 1]);
NavAtt.prototype.fieldSpec.push(['reserved1b', 'writeUInt8', 1]);
NavAtt.prototype.fieldSpec.push(['reserved1c', 'writeUInt8', 1]);
NavAtt.prototype.fieldSpec.push(['roll', 'writeFloatLE', 4]);
NavAtt.prototype.fieldSpec.push(['pitch', 'writeFloatLE', 4]);
NavAtt.prototype.fieldSpec.push(['heading', 'writeFloatLE', 4]);
NavAtt.prototype.fieldSpec.push(['accRoll', 'writeFloatLE', 4]);
NavAtt.prototype.fieldSpec.push(['accPitch', 'writeFloatLE', 4]);
NavAtt.prototype.fieldSpec.push(['accHeading', 'writeFloatLE', 4]);

module.exports = NavAtt;
