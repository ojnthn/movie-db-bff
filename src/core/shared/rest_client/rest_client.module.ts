import { Module } from '@nestjs/common';
import { RestClientService } from './rest_client.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule],
    providers: [RestClientService],
    exports: [RestClientService],
})
export class RestClientModule { }
