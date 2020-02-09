import {
  Model,
  Column,
  Table,
  DataType,
  IsUUID,
  ForeignKey,
  BelongsTo,
  AllowNull
} from "sequelize-typescript";
import Student from "./student";
import Lesson from "./lesson";

@Table
export default class StudentLesson extends Model<StudentLesson> {
  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Student)
  @Column(DataType.UUID)
  studentId!: string;

  @BelongsTo(() => Student)
  student!: Student;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Lesson)
  @Column(DataType.UUID)
  lessonId!: string;

  @BelongsTo(() => Lesson)
  lesson!: Lesson;

  @Column(DataType.DATE)
  inactivatedAt?: Date;
}
