import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

class SubmitClaimDto {
  readonly description: string;
  readonly photos: string[]; // base64 or URLs
  readonly location: string;
}

@ApiTags('Claims')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/claim/submit')
  @ApiOperation({ summary: 'Submit new accident claim with photos & location metadata' })
  @ApiBody({ schema: { properties: { description: { type: 'string' }, photos: { type: 'array', items: { type: 'string' } }, location: { type: 'string' } } } })
  @ApiResponse({ status: 201, description: 'Claim submitted and notarized (simulated)' })
  async submitClaim(@Body() body: SubmitClaimDto): Promise<{ message: string; iotaProof?: any }> {
    return this.appService.submitClaim(body);
  }
}
