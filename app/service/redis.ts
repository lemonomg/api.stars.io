import Redis = require('ioredis');
import { Service } from 'egg'
const redisConfig = [{
    port: 7000,
    host: '127.0.0.1',

}, {
    port: 7003,
    host: '127.0.0.1'
}]
class RedisService extends Service {
    public redis: Redis.Cluster;
    constructor(app) {
        super(app)
        this.redis = new Redis.Cluster(redisConfig)
    }
    async set(key: string, val: string, maxAge = 0) {
        if (!maxAge) {
            maxAge = 24 * 60 * 60 * 1000;
        }
        this.redis.set(key, val)
        this.redis.expire(key, maxAge)
    }
    async get(key: string) {
        if (!key) return null;
        return await this.redis.get(key)
    }
}

export default RedisService