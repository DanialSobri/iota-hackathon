import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { Client } from '@iota/sdk';
import * as process from 'process';

@Injectable()
export class AppService {
  private client: Client;

  constructor() {
    this.client = new Client({
      nodes: [process.env.IOTA_NODE_URL || 'https://api.testnet.iota.cafe'],
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async submitClaim(body: { description: string; photos: string[]; location: string }): Promise<{ message: string; iotaProof?: any }> {
    // TODO: Integrate IOTA SDK notarization here
    // Simulate notarization result
    return {
      message: 'Claim submitted and notarized (simulated)',
      iotaProof: { tangleHash: 'SIMULATED_HASH', timestamp: Date.now() },
    };
  }

  async createNotarization(body: { documentHash: string; stateMetadata: string; updatableMetadata: string; immutableDescription: string; deleteLock: number }): Promise<any> {
    // The response is now hardcoded as currentl;y unable to integrate with sdk to return value
    return { id: '0xbb238c0a9683c5d63f7ba98ca61e1c4a1a0d6698709fb9b64e6e3f7f56da8e4e', status: 'success' };
  }

  async readNotarization(objectId: string): Promise<any> {
    try {
      const output = await this.client.getOutput(objectId);
      if (!output) {
        return { objectId, error: 'Output not found or empty' };
      }
      return { objectId, data: output };
    } catch (error) {
      return { objectId, error: error.message };
    }
  }
}
