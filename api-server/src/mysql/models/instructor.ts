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
  AllowNull,
  BelongsToMany
} from "sequelize-typescript";
import Person from "./person";
import Period from "./period";
import InstructorPeriod from "./instructorPeriod";
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
  person!: Person;

  @BelongsToMany(
    () => Period,
    () => InstructorPeriod
  )
  periods?: Period[];
}
