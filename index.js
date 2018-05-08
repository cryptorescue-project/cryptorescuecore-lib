'use strict';

var cryptorescuecore = module.exports;

// module information
cryptorescuecore.version = 'v' + require('./package.json').version;
cryptorescuecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of cryptorescuecore-lib found. ' +
      'Please make sure to require cryptorescuecore-lib and check that submodules do' +
      ' not also include their own cryptorescuecore-lib dependency.';
    throw new Error(message);
  }
};
cryptorescuecore.versionGuard(global._cryptorescuecore);
global._cryptorescuecore = cryptorescuecore.version;

// crypto
cryptorescuecore.crypto = {};
cryptorescuecore.crypto.BN = require('./lib/crypto/bn');
cryptorescuecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
cryptorescuecore.crypto.Hash = require('./lib/crypto/hash');
cryptorescuecore.crypto.Random = require('./lib/crypto/random');
cryptorescuecore.crypto.Point = require('./lib/crypto/point');
cryptorescuecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
cryptorescuecore.encoding = {};
cryptorescuecore.encoding.Base58 = require('./lib/encoding/base58');
cryptorescuecore.encoding.Base58Check = require('./lib/encoding/base58check');
cryptorescuecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
cryptorescuecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
cryptorescuecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
cryptorescuecore.util = {};
cryptorescuecore.util.buffer = require('./lib/util/buffer');
cryptorescuecore.util.js = require('./lib/util/js');
cryptorescuecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
cryptorescuecore.errors = require('./lib/errors');

// main cryptorescue library
cryptorescuecore.Address = require('./lib/address');
cryptorescuecore.Block = require('./lib/block');
cryptorescuecore.MerkleBlock = require('./lib/block/merkleblock');
cryptorescuecore.BlockHeader = require('./lib/block/blockheader');
cryptorescuecore.HDPrivateKey = require('./lib/hdprivatekey.js');
cryptorescuecore.HDPublicKey = require('./lib/hdpublickey.js');
cryptorescuecore.Networks = require('./lib/networks');
cryptorescuecore.Opcode = require('./lib/opcode');
cryptorescuecore.PrivateKey = require('./lib/privatekey');
cryptorescuecore.PublicKey = require('./lib/publickey');
cryptorescuecore.Script = require('./lib/script');
cryptorescuecore.Transaction = require('./lib/transaction');
cryptorescuecore.URI = require('./lib/uri');
cryptorescuecore.Unit = require('./lib/unit');

// dependencies, subject to change
cryptorescuecore.deps = {};
cryptorescuecore.deps.bnjs = require('bn.js');
cryptorescuecore.deps.bs58 = require('bs58');
cryptorescuecore.deps.Buffer = Buffer;
cryptorescuecore.deps.elliptic = require('elliptic');
cryptorescuecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
cryptorescuecore.Transaction.sighash = require('./lib/transaction/sighash');
