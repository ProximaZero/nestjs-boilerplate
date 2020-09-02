import { Get, Controller, Res, Response } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

// @ApiBearerAuth()
@ApiTags('pdf')
@Controller('pdf')
export class PdfController {
    @Get('teste')
    async example(@Res() res) {

        const pdf = new PDFDocument();
        //pdf.fontSize(25).text('Teste de PDF', 100, 80);
        //pdf.addPage().addContent('IOJSADIAJSDIJASIDJ')

        /*
        
        exempla 
        
        const doc = new PDFDocument()
          let filename = req.body.filename
          // Stripping special characters
          filename = encodeURIComponent(filename) + '.pdf'
          // Setting response to 'attachment' (download).
          // If you use 'inline' here it will automatically open the PDF
          res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
          res.setHeader('Content-type', 'application/pdf')
          const content = req.body.content
          doc.y = 300
          doc.text(content, 50, 50)
          doc.pipe(res)
          doc.end()
        
          */

        /*
        EX 2
        
        var PDFDocument = require('pdfkit').default;
        var blobStream = require('blob-stream');
        var ace = require('brace');
        require('brace/mode/javascript');
        require('brace/theme/monokai');
        import './register-files'
        
        var lorem =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, elementum a rhoncus ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae tincidunt ultricies, eros odio dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\nMauris at ante tellus. Vestibulum a metus lectus. Praesent tempor purus a lacus blandit eget gravida ante hendrerit. Cras et eros metus. Sed commodo malesuada eros, vitae interdum augue semper quis. Fusce id magna nunc. Curabitur sollicitudin placerat semper. Cras et mi neque, a dignissim risus. Nulla venenatis porta lacus, vel rhoncus lectus tempor vitae. Duis sagittis venenatis rutrum. Curabitur tempor massa tortor.';
        
        function makePDF(PDFDocument, blobStream, lorem, iframe) {
          // create a document and pipe to a blob
          var doc = new PDFDocument();
          var stream = doc.pipe(blobStream());
        
          doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf')
        
          // draw some text
          doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
        
          // some vector graphics
          doc
            .save()
            .moveTo(100, 150)
            .lineTo(100, 250)
            .lineTo(200, 250)
            .fill('#FF3300');
        
          doc.circle(280, 200, 50).fill('#6600FF');
        
          // an SVG path
          doc
            .scale(0.6)
            .translate(470, 130)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();
        
          // and some justified text wrapped into columns
          doc
            .font('Roboto')
            .text('And here is some wrapped text...', 100, 300)
            .fontSize(13)
            .moveDown()
            .text(lorem, {
              width: 412,
              align: 'justify',
              indent: 30,
              columns: 2,
              height: 300,
              ellipsis: true
            });
        
          doc.addPage();
        
          doc
            .fontSize(25)
            .font('Courier')
            .text('And an image...')  
            .image('images/bee.png')
        
          doc
            .font('Courier-Bold')
            .text('Finish...')
        
          // end and display the document in the iframe to the right
          doc.end();
          stream.on('finish', function() {
            iframe.src = stream.toBlobURL('application/pdf');
          });
        }
        
        var editor = ace.edit('editor');
        editor.setTheme('ace/theme/monokai');
        editor.getSession().setMode('ace/mode/javascript');
        editor.setValue(
          makePDF
            .toString()
            .split('\n')
            .slice(1, -1)
            .join('\n')
            .replace(/^  /gm, '')
        );
        editor
          .getSession()
          .getSelection()
          .clearSelection();
        
        var iframe = document.querySelector('iframe');
        makePDF(PDFDocument, blobStream, lorem, iframe);
        
        editor.getSession().on('change', function() {
          try {
            var fn = new Function(
              'PDFDocument',
              'blobStream',
              'lorem',
              'iframe',
              editor.getValue()
            );
            fn(PDFDocument, blobStream, lorem, iframe);
          } catch (e) {
            console.log(e);
          }
        });
        
        
        */

        pdf.pipe(res);
        pdf.end();

    }
}
