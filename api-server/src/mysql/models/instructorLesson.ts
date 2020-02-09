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
import Lesson from "./lesson";
import Instructor from "./instructor";

@Table
export default class InstructorLesson extends Model<InstructorLesson> {
  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Instructor)
  @Column(DataType.UUID)
  instructorId?: string;

  @BelongsTo(() => Instructor)
  instructor?: Instructor;

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
