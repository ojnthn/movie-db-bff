import { HttpException, HttpStatus } from '@nestjs/common';

export class RestClientException extends HttpException {
  constructor(error: any) {
    super(
      {
        message: 'REST Client request failed',
        details: error?.response?.data ?? error.message,
      },
      error?.response?.status ?? HttpStatus.BAD_GATEWAY,
    );
  }
}
