const TESTNET_MOCK_SERVER = 'http://39.100.93.109';
const CONST = require('../src/CONST');
const util = require('../src/util');

function isHash(hash) {
  return util.isHexString(hash) && hash.length === 66;
}

module.exports = {
  TESTNET_MOCK_SERVER,
  TESTNET_NETWORK_ID: CONST.TESTNET_ID,
  ZERO_HASH: CONST.ZERO_HASH,
  isHash,
};
