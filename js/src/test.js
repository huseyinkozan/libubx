/**
 * Copyright (C) 2016 Swift Navigation Inc.
 * Contact: Swift Navigation <dev@swiftnav.com>
 *
 * This source is subject to the license found in the file 'LICENSE' which must
 * be distributed together with this source. All other rights reserved.
 *
 * THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
 * EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
 */

// test
const fs = require('fs');
const ubx = require('./msg');
var binaryStream = fs.createReadStream('test_data/13ubx/ubx/base.ubx');
ubx.dispatch(binaryStream, function (err, decoded, raw) {
  if (decoded.ubx.msgClass == 0x01 && decoded.fields) {
    console.log(decoded);
  }
});
