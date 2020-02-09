import {
  Model,
  Column,
  Scopes,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  PrimaryKey,
  Default,
  IsUUID,
  Unique,
  Index,
  NotNull,
  AllowNull
} from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize/types";
const uuid = require("uuid/v4");

@Scopes(() => ({
  users: {
    include: [
      {
        model: User,
        through: { attributes: [] }
      }
    ]
  }
}))
@Table
export default class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
    comment: ""
  })
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  lastName!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(50))
  username!: string;

  @AllowNull(false)
  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;
}
