import {
  Model,
  Column,
  BelongsToMany,
  Scopes,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  PrimaryKey,
  Default,
  IsUUID,
  Length,
  Unique,
  Index
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

  @Column({
    type: DataType.STRING(50),
    comment: ""
  })
  firstName!: string;

  @Column(DataType.STRING(50))
  lastName!: string;

  @Unique
  @Index("IX_Users_username")
  @Column(DataType.STRING(50))
  username!: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;
}
