import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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
}
