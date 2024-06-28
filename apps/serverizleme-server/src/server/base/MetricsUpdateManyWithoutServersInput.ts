/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MetricsWhereUniqueInput } from "../../metrics/base/MetricsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MetricsUpdateManyWithoutServersInput {
  @Field(() => [MetricsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MetricsWhereUniqueInput],
  })
  connect?: Array<MetricsWhereUniqueInput>;

  @Field(() => [MetricsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MetricsWhereUniqueInput],
  })
  disconnect?: Array<MetricsWhereUniqueInput>;

  @Field(() => [MetricsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MetricsWhereUniqueInput],
  })
  set?: Array<MetricsWhereUniqueInput>;
}

export { MetricsUpdateManyWithoutServersInput as MetricsUpdateManyWithoutServersInput };
