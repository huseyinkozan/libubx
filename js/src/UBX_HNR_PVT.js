var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message UBX_HNR_PVT (0x01 0x28).
 */
var UbxHnrPvt = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "UBX-HNR-PVT";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};

UbxHnrPvt.prototype = Object.create(UBX.prototype);
UbxHnrPvt.prototype.constructor = UbxHnrPvt;
UbxHnrPvt.prototype.parser = new Parser()
  .uint32le('iTOW')
  .uint16le('year')
  .uint8('month')
  .uint8('day')
  .uint8('hour')
  .uint8('min')
  .uint8('sec')
  .uint8('valid')
  .int32le('nano')
  .uint8('fixType')
  .uint8('flags')
  .uint8('reserved1a')
  .uint8('reserved1b')
  .int32le('lon')
  .int32le('lat')
  .int32le('height')
  .int32le('hMSL')
  .int32le('gSpeed')
  .int32le('speed')
  .int32le('headMot')
  .int32le('headVeh')
  .uint32le('hAcc')
  .uint32le('vAcc')
  .uint32le('sAcc')
  .uint32le('headAcc');

UbxHnrPvt.prototype.fieldSpec = [];
UbxHnrPvt.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['year', 'writeUInt16', 2]);
UbxHnrPvt.prototype.fieldSpec.push(['month', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['day', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['hour', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['min', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['sec', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['valid', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['nano', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['fixType', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['flags', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['reserved1a', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['reserved1b', 'writeUInt8', 1]);
UbxHnrPvt.prototype.fieldSpec.push(['lon', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['lat', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['height', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['hMSL', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['gSpeed', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['speed', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['headMot', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['headVeh', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['hAcc', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['vAcc', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['sAcc', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['headAcc', 'writeFloatLE', 4]);
UbxHnrPvt.prototype.fieldSpec.push(['reserved2', 'writeUInt8', 1]);

module.exports = UbxHnrPvt;