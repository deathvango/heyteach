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
  AllowNull,
  BelongsTo,
  HasOne
} from "sequelize-typescript";
import Person from "./person";
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

  @HasOne(() => Person)
  person!: Person;
}
