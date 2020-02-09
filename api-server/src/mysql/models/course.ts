import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  PrimaryKey,
  Default,
  IsUUID,
  Unique,
  AllowNull,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import Category from "./category";
const uuid = require("uuid/v4");

@Table
export default class Course extends Model<Course> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  name!: string;

  @Column(DataType.STRING(255))
  description?: string;
}
