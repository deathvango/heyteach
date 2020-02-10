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
import Category from "./category";
import Lesson from "./lesson";
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
  courseId!: string;

  @BelongsTo(() => Course)
  course?: Course;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column(DataType.UUID)
  categoryId!: string;

  @BelongsTo(() => Category)
  category?: Category;

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

  @HasMany(() => Lesson)
  lessons?: Lesson[];
}
