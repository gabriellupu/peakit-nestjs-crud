import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) repo) {
        super(repo);
    }
}

// @ts-ignore
// TODO - temporary hack to fix
// https://github.com/nestjsx/crud/issues/98
UsersService.prototype.getJoinType = function getJoinType(relationType: string) {
    switch (relationType) {
        case 'many-to-one':
        case 'one-to-many':
            return 'leftJoin';

        default:
            return 'leftJoin';
    }
};