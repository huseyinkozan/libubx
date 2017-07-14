var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message UBX-NAV-SAT (0x01 0x05).
 */

var NavSat = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "NAV-SAT";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};

NavSat.prototype = Object.create(UBX.prototype);
NavSat.prototype.constructor = NavSat;

var numSvs = new Parser()
  .uint8('gnssId')
  .uint8('svId')
  .uint8('cno')
  .int8('elev') // TODO: Could be wrong, need to double check.
  .int16le('azim')
  .int16le('prRes')
  .uint8('flagsa')
  .uint8('flagsb')
  .uint8('flagsc')
  .uint8('flagsd');

NavSat.prototype.parser = new Parser()
  .uint32le('iTOW')
  .uint8('version')
  .uint8('numSvs')
  .uint8('reserved1a')
  .uint8('reserved1b')
  .array('svs', {
      type: numSvs,
      length: 'numSvs'
  });

NavSat.prototype.fieldSpec = [];
NavSat.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
NavSat.prototype.fieldSpec.push(['version', 'writeUInt8', 1]);
NavSat.prototype.fieldSpec.push(['numSvs', 'writeUInt8', 1]);
NavSat.prototype.fieldSpec.push(['reserved1a', 'writeUInt8', 1]);
NavSat.prototype.fieldSpec.push(['reserved1b', 'writeUInt8', 1]);

module.exports = NavSat;
