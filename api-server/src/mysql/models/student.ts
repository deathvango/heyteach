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
  ForeignKey,
  BelongsTo,
  AllowNull
} from "sequelize-typescript";
import User from "./user";
import Address from "./address";
import Person from "./person";
const uuid = require("uuid/v4");

@Table
export default class Student extends Model<Student> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Person)
  @Column(DataType.UUID)
  personId?: string;

  @BelongsTo(() => Person)
  person?: Person;
}
