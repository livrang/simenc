import * as crypto from "crypto-js";
export {crypto};

    export function SHA1(Data:any){
        return crypto.SHA1(Data).toString()
    }
    export function SHA256(Data:any){
        return crypto.SHA256(Data).toString()
    }
    export function SHA512(Data : any){
        return crypto.SHA512(Data).toString()
    }
    export function MD5(Data : any){
        return crypto.MD5(Data).toString();
    }
    export function hash(Data : any){
        return crypto.SHA256(Data).toString();
    }
    export function random(length:any,type:any){
        var str = ""
        var length;
        var type;
        if(length !== undefined){
            length = length
        }else{
            length = 8;
        }

        if(type !== undefined){
            type = type;
        }else{
            type = "number";
        }
        if(type == "number"){
            for(var i = 0;i < length;++i){
                str += Math.round(Math.random() * 9);
            }
        }
        if(type == "string"){
            for(var i = 0;i < length;++i){
                str += String.fromCharCode(Math.round((Math.random()*(122-49)+49)));
            }
        }
        return str;
    }
    export function AES(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString());
    }
    export function DES(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString());
    }
    export function TripleDES(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString())
    }
    export function RC4(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString())
    }
    export function RC4Drop(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString())
    }
    export function Rabbit(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString())
    }
    export function RabbitLegacy(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString())
    }
    export function encrypt(Data:any,key:any){
        return crypto.AES.encrypt(Data,crypto.enc.Utf8.parse(key).toString())
    }

    export function decAES(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function decDES(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function decTripleDES(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function decRC4(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function decRC4Drop(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function decRabbit(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function decRabbitLegacy(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function decrypt(Data:any,key:any){
        return crypto.AES.decrypt(Data.toString(),crypto.enc.Utf8.parse(key).toString()).toString(crypto.enc.Utf8)
    }
    export function change(Data:string,Key:string){
        var dtacd = [];
        for(var i = 0;i<Data.length;++i){
            dtacd.push(Number(Data.charCodeAt(i)));
        }
        var sumdt = [];
        if(dtacd.length > Key.length){
            var count = 0;
            for(var i = 0;i<dtacd.length;++i){
                sumdt.push(String.fromCharCode(dtacd[i] + Number(Key.charCodeAt(count))))
                ++count;
                if(count > Key.length - 1){
                    count = 0
                }
            }
        }
        return sumdt.join("");
    }
    function revchange(Data:string,Key:string){
        var dtacd = [];
        for(var i = 0;i<Data.length;++i){
            dtacd.push(Number(Data.charCodeAt(i)));
        }
        var sumdt = [];
        if(dtacd.length > Key.length){
            var count = 0;
            for(var i = 0;i<dtacd.length;++i){
                sumdt.push(String.fromCharCode(Math.abs(dtacd[i] - Number(Key.charCodeAt(count)))))
                ++count;
                if(count > Key.length - 1){
                    count = 0
                }
            }
        }
        return sumdt.join()
    }