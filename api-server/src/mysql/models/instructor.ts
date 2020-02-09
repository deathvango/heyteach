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
import Person from "./person";
const uuid = require("uuid/v4");

@Table
export default class Instructor extends Model<Instructor> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Person)
  @Column(DataType.UUID)
  personId!: string;

  @BelongsTo(() => Person)
  person?: Person;
}
