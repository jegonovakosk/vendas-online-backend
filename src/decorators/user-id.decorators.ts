import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { authorizationloginPayload } from '../utils/base-64-converter';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;

  const loginPayload = authorizationloginPayload(authorization);

  return loginPayload?.id;
});
