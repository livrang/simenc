"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.change = exports.decrypt = exports.decRabbitLegacy = exports.decRabbit = exports.decRC4Drop = exports.decRC4 = exports.decTripleDES = exports.decDES = exports.decAES = exports.encrypt = exports.RabbitLegacy = exports.Rabbit = exports.RC4Drop = exports.RC4 = exports.TripleDES = exports.DES = exports.AES = exports.random = exports.hash = exports.MD5 = exports.SHA512 = exports.SHA256 = exports.SHA1 = exports.crypto = void 0;
var crypto = __importStar(require("crypto-js"));
exports.crypto = crypto;
function SHA1(Data) {
    return crypto.SHA1(Data).toString();
}
exports.SHA1 = SHA1;
function SHA256(Data) {
    return crypto.SHA256(Data).toString();
}
exports.SHA256 = SHA256;
function SHA512(Data) {
    return crypto.SHA512(Data).toString();
}
exports.SHA512 = SHA512;
function MD5(Data) {
    return crypto.MD5(Data).toString();
}
exports.MD5 = MD5;
function hash(Data) {
    return crypto.SHA256(Data).toString();
}
exports.hash = hash;
function random(length, type) {
    var str = "";
    var length;
    var type;
    if (length !== undefined) {
        length = length;
    }
    else {
        length = 8;
    }
    if (type !== undefined) {
        type = type;
    }
    else {
        type = "number";
    }
    if (type == "number") {
        for (var i = 0; i < length; ++i) {
            str += Math.round(Math.random() * 9);
        }
    }
    if (type == "string") {
        for (var i = 0; i < length; ++i) {
            str += String.fromCharCode(Math.round((Math.random() * (122 - 49) + 49)));
        }
    }
    return str;
}
exports.random = random;
function AES(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.AES = AES;
function DES(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.DES = DES;
function TripleDES(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.TripleDES = TripleDES;
function RC4(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.RC4 = RC4;
function RC4Drop(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.RC4Drop = RC4Drop;
function Rabbit(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.Rabbit = Rabbit;
function RabbitLegacy(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.RabbitLegacy = RabbitLegacy;
function encrypt(Data, key) {
    return crypto.AES.encrypt(Data, crypto.enc.Utf8.parse(key).toString());
}
exports.encrypt = encrypt;
function decAES(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decAES = decAES;
function decDES(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decDES = decDES;
function decTripleDES(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decTripleDES = decTripleDES;
function decRC4(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decRC4 = decRC4;
function decRC4Drop(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decRC4Drop = decRC4Drop;
function decRabbit(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decRabbit = decRabbit;
function decRabbitLegacy(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decRabbitLegacy = decRabbitLegacy;
function decrypt(Data, key) {
    return crypto.AES.decrypt(Data.toString(), crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8);
}
exports.decrypt = decrypt;
function change(Data, Key) {
    var dtacd = [];
    for (var i = 0; i < Data.length; ++i) {
        dtacd.push(Number(Data.charCodeAt(i)));
    }
    var sumdt = [];
    if (dtacd.length > Key.length) {
        var count = 0;
        for (var i = 0; i < dtacd.length; ++i) {
            sumdt.push(String.fromCharCode(dtacd[i] + Number(Key.charCodeAt(count))));
            ++count;
            if (count > Key.length - 1) {
                count = 0;
            }
        }
    }
    return sumdt.join("");
}
exports.change = change;
function revchange(Data, Key) {
    var dtacd = [];
    for (var i = 0; i < Data.length; ++i) {
        dtacd.push(Number(Data.charCodeAt(i)));
    }
    var sumdt = [];
    if (dtacd.length > Key.length) {
        var count = 0;
        for (var i = 0; i < dtacd.length; ++i) {
            sumdt.push(String.fromCharCode(Math.abs(dtacd[i] - Number(Key.charCodeAt(count)))));
            ++count;
            if (count > Key.length - 1) {
                count = 0;
            }
        }
    }
    return sumdt.join();
}
//# sourceMappingURL=index.js.map