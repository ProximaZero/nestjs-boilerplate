import { Get, Controller, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as PDFDocument from 'pdfkit';

@ApiTags('pdf')
@Controller('pdf')
export class PdfController {
  @Get('teste')
  async example(@Res() res) {
    const pdf = new PDFDocument();
    pdf.fontSize(25).text('Teste de PDF', 100, 80);

    pdf.pipe(res);
    pdf.end();

  }
}
