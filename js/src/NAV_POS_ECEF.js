var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message NAV_POS_ECEF (0x01 0x01).
 *
 * The position solution message reports absolute Earth Centered Earth Fixed
 * (ECEF) coordinates.
 *
 * Fields in the UBX payload (`ubx.fields`):
 * @field {number} iTOW (unsigned 32-bit int, 4 bytes) GPS Time of Week
 * @field {number} ecefX (float, 8 bytes) ECEF X coordinate
 * @field {number} ecefY (float, 8 bytes) ECEF Y coordinate
 * @field {number} ecefZ (float, 8 bytes) ECEF Z coordinate
 *
 * @param ubx An UBX object with a payload to be decoded.
 */
var NAV_POS_ECEF = 0x01;

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
NavPosEcef.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
NavPosEcef.prototype.fieldSpec.push(['ecefX', 'writeFloatLE', 4]);
NavPosEcef.prototype.fieldSpec.push(['ecefY', 'writeFloatLE', 4]);
NavPosEcef.prototype.fieldSpec.push(['ecefZ', 'writeFloatLE', 4]);
NavPosEcef.prototype.fieldSpec.push(['pAcc', 'writeUInt32LE', 4]);

module.exports = NavPosEcef;