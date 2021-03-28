import { Service } from 'egg'
import CryptoJS = require('crypto-js')



class CryptService extends Service {
    private key: string
    private iv: string

    constructor(app) {
        super(app)
        this.key = CryptoJS.MD5('1879178791').toString()
        this.iv = CryptoJS.MD5('1879178791187917').toString()

    }
    encrypt(word: string): string {

        let encryptWord = ""
        const CryptoKey = CryptoJS.enc.Utf8.parse(this.key);
        const CryptoIv = CryptoJS.enc.Utf8.parse(this.iv.substr(0, 8))
        // 判断加密字符串是否为 string 
        if (typeof (word) !== "string") {
            word = JSON.stringify(word);
        }
        encryptWord = CryptoJS.TripleDES.encrypt(word, CryptoKey, {
            iv: CryptoIv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString()
        return encryptWord;
    }
    decrypt(word: string): string {
        const CryptoKey = CryptoJS.enc.Utf8.parse(this.key);
        const CryptoIv = CryptoJS.enc.Utf8.parse(this.iv.substr(0, 8))
        const decryptWord = CryptoJS.TripleDES.decrypt(word, CryptoKey, {
            iv: CryptoIv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
        return decryptWord.toString(CryptoJS.enc.Utf8);
    }
}
export default CryptService
