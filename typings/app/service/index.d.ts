// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportEmail from '../../../app/service/email';
import ExportRedis from '../../../app/service/redis';
import ExportUsers from '../../../app/service/users';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    email: AutoInstanceType<typeof ExportEmail>;
    redis: AutoInstanceType<typeof ExportRedis>;
    users: AutoInstanceType<typeof ExportUsers>;
  }
}
