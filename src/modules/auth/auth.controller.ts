import {
  Controller,
  Body,
  Post,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService, LoginPayload, RegisterPayload } from './';
import { UsersService, User } from './../user';
import { Token } from './token.model';

@Controller('api/auth')
@ApiTags('authentication')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) { }

  @ApiOperation({ operationId: 'login', })
  @Post('login')
  @ApiResponse({ status: 201, description: 'Successful Login', type: Token })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async login(@Body() payload: LoginPayload): Promise<Token> {
    const user = await this.authService.validateUser(payload);
    return await this.authService.createToken(user);
  }

  @ApiOperation({ operationId: 'register', })
  @Post('register')
  @ApiResponse({ status: 201, description: 'Successful Registration', type: Token })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async register(@Body() payload: RegisterPayload): Promise<Token> {
    const user = await this.userService.create(payload);
    return await this.authService.createToken(user);
  }

  @ApiOperation({ operationId: 'getLoggerInUser', })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Get('me')
  @ApiResponse({ status: 200, description: 'Successful Response' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getLoggedInUser(@Request() request): Promise<User> {
    return request.user as User;
  }
}
