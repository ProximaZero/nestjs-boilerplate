import { Get, Controller, Res, Response } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as PDFDocument from 'pdfkit';
import { doc } from 'prettier';
import { Subscriber, Observable } from 'rxjs';


// @ApiBearerAuth()
@ApiTags('pdf')
@Controller('pdf')
export class PdfController {
    @Get('teste')
    async example(@Response() res) {

        const pdf = new PDFDocument();
        pdf.fontSize(25).text('Olha o pdf aqui minha gente ...', 100, 80);

        pdf.pipe(res);
        pdf.end();

    }
}
