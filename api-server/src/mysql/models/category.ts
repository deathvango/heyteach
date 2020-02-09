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
import Person from "./person";
import CategoryType from "./categoryType";
import { ModelAttributeColumnOptions } from "sequelize/types";
const uuid = require("uuid/v4");

@Table
export default class Category extends Model<Category> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING(50),
    unique: "UC_Category_Name_Type"
  })
  name!: string;

  @Column(DataType.STRING(255))
  description?: string;

  @AllowNull(false)
  @ForeignKey(() => CategoryType)
  @Column(<ModelAttributeColumnOptions>{
    type: DataType.STRING(10),
    unique: "UC_Category_Name_Type"
  })
  type!: string;

  @BelongsTo(() => CategoryType)
  categoryType!: CategoryType;
}
