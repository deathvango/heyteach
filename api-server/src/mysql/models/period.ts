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
  HasMany,
  BelongsToMany
} from "sequelize-typescript";
import User from "./user";
import Address from "./address";
import Person from "./person";
import Course from "./course";
import Student from "./student";
import Instructor from "./instructor";
import StudentPeriod from "./studentPeriod";
import InstructorPeriod from "./instructorPeriod";
const uuid = require("uuid/v4");

@Table
export default class Period extends Model<Period> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Course)
  @Column(DataType.UUID)
  courseId?: string;

  @BelongsTo(() => Course)
  course?: Course;

  @BelongsToMany(
    () => Student,
    () => StudentPeriod
  )
  students?: Student[];

  @BelongsToMany(
    () => Instructor,
    () => InstructorPeriod
  )
  instructors?: Instructor[];
}
