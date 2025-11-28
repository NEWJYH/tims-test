import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';
import { RoleRequestStatus } from 'src/commons/enums/roleRequestStatus.enum';

@InputType()
export class ProcessRoleRequestInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  requestId: number; // 처리할 요청 ID

  @Field(() => RoleRequestStatus)
  status: RoleRequestStatus; // 승인/거절

  @Field(() => Int, { nullable: true })
  @IsInt()
  storeId?: number; // (승인 시) 매장 배정
}
