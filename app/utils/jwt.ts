import { sign, verify } from 'jsonwebtoken'
import { readFileSync } from "fs";
import { join } from "path";
// import {  } from "";

class Jwt {
    private data;
    constructor(data) {
        this.data = data
    }
    /**
     * 生成token
     */
    generateToken() {
        const data = this.data
        const created = Math.floor(Date.now() / 1000);
        const cert = readFileSync(join(__dirname, '../../private_key.pem'));
        const token = sign({ data, exp: created + 60 * 30 }, cert, { algorithm: "RS256" });
        return token
    }
    /**
     * 校验token
     */
    verifyToken() {
        const token = this.data
        const cert = readFileSync(join(__dirname, '../../private_key.pem'));
        let res;
        try {
            const result = verify(token, cert, { algorithms: ['RS256'] }) as any || {}
            const { exp = 0 } = result, current = Math.floor(Date.now() / 1000)
            if (current <= exp) {
                res = result.data || {}
            }
        } catch (error) {
            res = 0
        }
        return res
    }
}

export default Jwt