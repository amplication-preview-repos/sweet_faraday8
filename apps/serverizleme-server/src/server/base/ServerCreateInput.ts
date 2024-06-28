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
import { MetricsCreateNestedManyWithoutServersInput } from "./MetricsCreateNestedManyWithoutServersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ServerCreateInput {
  @ApiProperty({
    required: false,
    type: () => MetricsCreateNestedManyWithoutServersInput,
  })
  @ValidateNested()
  @Type(() => MetricsCreateNestedManyWithoutServersInput)
  @IsOptional()
  @Field(() => MetricsCreateNestedManyWithoutServersInput, {
    nullable: true,
  })
  metricsItems?: MetricsCreateNestedManyWithoutServersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { ServerCreateInput as ServerCreateInput };
