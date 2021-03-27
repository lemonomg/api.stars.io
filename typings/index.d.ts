import 'egg';
import 'egg-redis';

declare module 'egg' {
    interface Application {
        redis;
    }
}