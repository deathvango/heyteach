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
  AllowNull
} from "sequelize-typescript";
import User from "./user";
const uuid = require("uuid/v4");

@Scopes(() => ({
  addresses: {
    include: [
      {
        model: Address,
        through: { attributes: [] }
      }
    ]
  }
}))
@Table
export default class Address extends Model<Address> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  lineOne!: string;

  @Column(DataType.STRING(255))
  lineTwo?: string;

  @Column(DataType.STRING(255))
  city?: string;

  @Column(DataType.STRING(2))
  state?: string;

  @Column(DataType.STRING(10))
  zip?: string;
}
