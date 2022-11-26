const bin2dec = (binstr) => { return (parseInt(binstr, 2).toString(10)); }
const bin2hex = (binstr) => { return (parseInt(binstr, 2).toString(16)).toUpperCase(); }

const dec2bin = (decstr) => { return (parseInt(decstr, 10).toString(2)); }
const dec2hex = (decstr) => { return (parseInt(decstr, 10).toString(16)).toUpperCase(); }

const hex2bin = (decstr) => { return (parseInt(decstr, 16).toString(2)); }
const hex2dec = (decstr) => { return (parseInt(decstr, 16).toString(10)); }

export default { bin2dec, bin2hex, dec2bin, dec2hex, hex2bin, hex2dec };