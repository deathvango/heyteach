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
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import User from "./user";
import Address from "./address";
const uuid = require("uuid/v4");

@Scopes(() => ({
  people: {
    include: [
      {
        model: Person,
        through: { attributes: [] }
      }
    ]
  }
}))
@Table
export default class Person extends Model<Person> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId?: string;

  @BelongsTo(() => User)
  user?: User;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
    comment: ""
  })
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  lastName!: string;

  @Column(DataType.STRING(50))
  phone?: string;

  @ForeignKey(() => Address)
  addressId?: string;

  @BelongsTo(() => Address)
  address?: Address;

  @AllowNull(false)
  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;
}
