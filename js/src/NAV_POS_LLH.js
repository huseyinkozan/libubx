var UBX = require('./ubx');
var Parser = require('binary-parser').Parser;

/**
 * UBX class for message NAV_POS_LLH (0x01 0x02).
 *
 * This message outputs the Geodetic position in the currently selected
 * Ellipsoid. The default is the WGS84 Ellipsoid.
 *
 * Fields in the UBX payload (`ubx.fields`):
 * @field {number} iTOW (unsigned 32-bit int, 4 bytes) GPS Time of Week
 * @field {number} lon (float, 8 bytes) Longitude in degrees. Scaling 1e-7
 * @field {number} lat (float, 8 bytes) Latitude in degrees. Scaling 1e-7
 * @field {number} height (float, 8 bytes) Height above ellipsoid [mm]
 * @field {number} heightMeanSeaLevel (float, 8 bytes) Height above mean sea level [mm]
 * @field {number} hAcc (float, 8 bytes) Horizontal accuracy estimate [mm]
 * @field {number} vAcc (float, 8 bytes) Vertical accuracy estimate [mm]
 *
 * @param ubx An UBX object with a payload to be decoded.
 */
var NAV_POS_LLH = 0x02;

var NavPosLlh = function (ubx) {
  UBX.call(this, ubx);
  this.messageType = "NAV-POSLLH";
  this.fields = this.parser.parse(ubx.payload);
  return this;
};

NavPosLlh.prototype = Object.create(UBX.prototype);
NavPosLlh.prototype.constructor = NavPosLlh;
NavPosLlh.prototype.parser = new Parser()
  .uint32le('iTOW')
  .int32le('lon')
  .int32le('lat')
  .int32le('height')
  .int32le('heightMSL')
  .uint32le('hAcc')
  .uint32le('vAcc');
NavPosLlh.prototype.fieldSpec = [];
NavPosLlh.prototype.fieldSpec.push(['iTOW', 'writeUInt32LE', 4]);
NavPosLlh.prototype.fieldSpec.push(['lon', 'writeFloatLE', 4]);
NavPosLlh.prototype.fieldSpec.push(['lat', 'writeFloatLE', 4]);
NavPosLlh.prototype.fieldSpec.push(['height', 'writeFloatLE', 4]);
NavPosLlh.prototype.fieldSpec.push(['heightMSL', 'writeFloatLE', 4]);
NavPosLlh.prototype.fieldSpec.push(['hAcc', 'writeUInt32LE', 4]);
NavPosLlh.prototype.fieldSpec.push(['vAcc', 'writeUInt32LE', 4]);

module.exports = NavPosLlh;