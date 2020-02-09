import {
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  PrimaryKey,
  AllowNull,
  Index
} from "sequelize-typescript";
const uuid = require("uuid/v4");

@Table
export default class CategoryType extends Model<CategoryType> {
  @PrimaryKey
  @Column(DataType.STRING(10))
  type!: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  name!: string;

  @Column(DataType.STRING(255))
  description!: string;
}
