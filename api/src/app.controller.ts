import { Controller, Get, Body, Post, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

class SubmitClaimDto {
  readonly description: string;
  readonly photos: string[]; // base64 or URLs
  readonly location: string;
}

class CreateNotarizationDto {
  readonly documentHash: string;
  readonly stateMetadata: string;
  readonly updatableMetadata: string;
  readonly immutableDescription: string;
  readonly deleteLock: number;
}

@ApiTags('Notarization')
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

  @Post('api/notarization/create')
  @ApiOperation({ summary: 'Create a new notarization on IOTA' })
  @ApiBody({ 
    type: CreateNotarizationDto,
    examples: {
      example1: {
        summary: 'Example notarization creation',
        value: {
          documentHash: 'Hello World',
          stateMetadata: 'Test data',
          updatableMetadata: 'Locked notarization',
          immutableDescription: 'Locked notarization',
          deleteLock: 2051218800
        }
      }
    }
  })
  @ApiResponse({ status: 201, description: 'Notarization created', schema: { example: { message: 'Notarization created', txDigest: '...', objectId: '...' } } })
  async createNotarization(@Body() body: CreateNotarizationDto): Promise<any> {
    return this.appService.createNotarization(body);
  }

  @Get('api/notarization/read/:objectId')
  @ApiOperation({ summary: 'Read a notarization from IOTA by objectId' })
  @ApiResponse({ status: 200, description: 'Notarization data', schema: { example: { objectId: '...', data: {} } } })
  async readNotarization(@Param('objectId') objectId: string): Promise<any> {
    return this.appService.readNotarization(objectId);
  }
}
