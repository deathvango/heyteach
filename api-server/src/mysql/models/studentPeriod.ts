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
import Period from "./period";
import Student from "./student";
const uuid = require("uuid/v4");

@Table
export default class StudentPeriod extends Model<StudentPeriod> {
  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Student)
  @Column(DataType.UUID)
  studentId!: string;

  @BelongsTo(() => Student)
  student!: Student;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Period)
  @Column(DataType.UUID)
  periodId!: string;

  @BelongsTo(() => Period)
  period!: Period;

  @Column(DataType.DATE)
  inactivatedAt?: Date;
}
