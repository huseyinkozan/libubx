
let arg = process.argv[2] || "";
if (arg == "") return console.error("usage : node crc.js 'B5 62 CL ID LL LL DD 00 00'");

function textPacketToBinary(text) {
  return Buffer.from(text.replace(/ /g, ''), 'hex');
}

let _crc = function (bf, len) {
  len = len || buff.length;
  let ck_a = 0, ck_b = 0, i_a = len-2, i_b = len-1;
  for (let i = 2; i < len-2; i++) {
    ck_a = (ck_a + bf[i]) & 0xFF;
    ck_b = (ck_a + ck_b) & 0xFF;
  }
  return "" + ck_a.toString(16).toUpperCase() + " " + ck_b.toString(16).toUpperCase();
};

let buff = textPacketToBinary(arg);

console.log("buff:", buff);
console.log("crc :", _crc(buff));
