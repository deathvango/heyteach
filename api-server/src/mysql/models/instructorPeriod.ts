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
import Instructor from "./instructor";
const uuid = require("uuid/v4");

@Table
export default class InstructorPeriod extends Model<InstructorPeriod> {
  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Instructor)
  @Column(DataType.UUID)
  instructorId?: string;

  @BelongsTo(() => Instructor)
  instructor?: Instructor;

  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Period)
  @Column(DataType.UUID)
  periodId?: string;

  @BelongsTo(() => Period)
  period?: Period;

  @Column(DataType.DATE)
  inactivatedAt?: Date;
}
