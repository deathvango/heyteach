import {
  Model,
  Column,
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
import Course from "./course";
import Student from "./student";
import Instructor from "./instructor";
import Period from "./period";
import StudentLesson from "./studentLesson";
import InstructorLesson from "./instructorLesson";
const uuid = require("uuid/v4");

@Table
export default class Lesson extends Model<Lesson> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Period)
  @Column(DataType.UUID)
  periodId?: string;

  @BelongsTo(() => Period)
  period?: Course;

  @BelongsToMany(
    () => Student,
    () => StudentLesson
  )
  students?: Student[];

  @BelongsToMany(
    () => Instructor,
    () => InstructorLesson
  )
  instructors?: Instructor[];
}
