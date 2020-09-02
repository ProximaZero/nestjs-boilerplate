import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';

@Module({
    imports: [],
    exports: [],
    controllers: [
        PdfController,
    ],
    providers: [
    ],
})
export class PdfModule { }
