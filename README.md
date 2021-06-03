# <b>Simenc</b>

<a href="https://www.npmjs.com/package/simenc"><img src="https://img.shields.io/badge/npm-v1.0.0-blue"></a> <a href="https://github.com/livrang/"><img src="https://img.shields.io/badge/github-livrang-green"></a> <a href="https://www.npmjs.com/package/simenc"><img src="https://img.shields.io/badge/npm-lmodules-red"></a>
## Installation

Install it from [**npm**](https://www.npmjs.com/package/simenc) package manager using this command in cmd  : 
```bash
npm i simenc
```
It also contains typescript files. So if you want to use them install it locally use : 
```bash
npm init
npm i --save simenc
```
## Unique Features

> Simple to use

> Fast and user friendly

> See examples to know why it is best ? 

> best for beginners

## Usage
In <a href="https://www.javascript.com/">**Javascript**</a> <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="18px">
```js
var sim = require("simenc")
var {encrypt,decrypt} = sim //write all things you need in {}
//by default encryption and decryption type is AES

var data = "it is data."
var key = "it is a key."

var encdata = encrypt(data,key)

console.log(encdata.toString())	//console encrypted data
console.log(decrypt(encdata,key)) //console decrypted data
```
In <a href="https://www.typescriptlang.org/">**typescript**</a> <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="18px">  :
```ts
import * as sim from "simenc";
var {encrypt,decrypt} = sim;

var data = "it is data."
var key = "it is a key."

var encdata = encrypt(data,key)

console.log(encdata.toString())	//console encrypted data
console.log(decrypt(encdata,key)) //console decrypted 
```
## Limitations
It does not allow you to Utf8 to Utf16 or anything else.The default encoding for data is Utf8. You can't set iv,padding or anything else while encrypting.But whatever, These things does not matter so much ans also they will resolved in future.These are not added because i want beginners to use this and most of the beginners don't know about padding or iv. Also, **it is not only for beginners it is for everyone who want to secure their data.**
## Future
In the future most of other features will be added like : **diffie hellman, changing encoding type, using iv and other properties of encryption**.In the future i will launch a version of it for **python** and **java**.So,keep awaited because we make cryptography easy.
## Docs
It is built using module <a href="https://npmjs.org/packages/crypto-js">Crypto-js</a> but it is more simplified than it. 
#### defaults
	Encryption type : AES
	Decryption type : AES
	Hash type : SHA256
	encoding : Utf8
#### importing and using
to see its installation <a href="#installation">click here!</a>
you can import it like that :
```js
var sim = require("simenc");
console.log(sim.SHA256("this is a text"));
```
but then it will take more time to write code as you hove to use **sim.** before everything you need. So more nice way to do this is to firstly import everything that you need and then use it. For ex :
```js
var sim = require(simenc);
var data = "this is a text";

//imports
var {encrypt,hash,SHA512,random,decrypt,MD5} = sim;

console.log(encrypt(data,hash(data)).toString());
```
When you encrypt the data it outputs the encryted data in form of object. So, to see the data you have to parse it into string using ***.toString()*** . On the other hand when you have to decrypt the data you don't have to use the data pared into string, You must the the encrypted data you got as object.

#### Random
It is used to get the random data which you can use to get salt or any other thing.
Code :
```Js
var sim = require(simenc);
var data = "this is a text";

//imports
var {encrypt,hash,SHA512,random,decrypt,MD5} = sim;

console.log(random(4,"string"));
```
It has *2 parameters (length,type)*. Length can be anything but *type* takes only 3 values **string,number,hashed**.
String : It generates a random string of characters.
Number : It generates a random number.
Hashed : It generates a hashed value of random characters.
>I recommend to generate firstly generate a string of random characters and then hash it.

#### Encryption & Decryption
When you encrypt the data it outputs the encryted data in form of object. So, to see the data you have to parse it into string using ***.toString()*** . On the other hand when you have to decrypt the data you don't have to use the data pared into string, You must use the encrypted data you got as object while decrypting.
###### Types
>AES || DES || TripleDES || RC4 || RC4Drop || Rabbit || RabbitLegacy

Decryption type are also same but you have to add ***dec*** before writing type.

#### Crypto-js
You can use crypto-js directly from this module.
Using
```js
var sim = require("simenc");
var CryptoJS = sim.crypto;

//you can use Cryptojs module now
```
See their <a href="https://cryptojs.gitbook.io/docs/">documentation</a> also.

##Browser Support

It gives support to browser also.
to access it do the following steps:
```bash
npm init
npm i simenc
```
You will see a folder created inside node_modules/simenc named as dist.It contains all files for browser support.

```html
<html>
	<head>
	</head>
	<body>
		<script src="./node_modules/simenc/dist/simenc_browser.js"></script>
		<script>
			var sim = require("simenc");
			var {hash,encrypt,decrypt} = sim;
			console.log(hash("it is a data"));
		</script>
	</body>
</html>
```
## About Us
##### Creators
> <a href=""><b>Mridul Thakur</b></a>
##### License
> [MIT](https://choosealicense.com/licenses/mit/)