/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MetricsWhereInput } from "./MetricsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MetricsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MetricsWhereInput,
  })
  @ValidateNested()
  @Type(() => MetricsWhereInput)
  @IsOptional()
  @Field(() => MetricsWhereInput, {
    nullable: true,
  })
  every?: MetricsWhereInput;

  @ApiProperty({
    required: false,
    type: () => MetricsWhereInput,
  })
  @ValidateNested()
  @Type(() => MetricsWhereInput)
  @IsOptional()
  @Field(() => MetricsWhereInput, {
    nullable: true,
  })
  some?: MetricsWhereInput;

  @ApiProperty({
    required: false,
    type: () => MetricsWhereInput,
  })
  @ValidateNested()
  @Type(() => MetricsWhereInput)
  @IsOptional()
  @Field(() => MetricsWhereInput, {
    nullable: true,
  })
  none?: MetricsWhereInput;
}
export { MetricsListRelationFilter as MetricsListRelationFilter };
