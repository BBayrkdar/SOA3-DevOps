import { ReportPort } from '../../../application/ports/ReportPort'

export class PdfAdapter implements ReportPort {
  async renderMarkdownToPdf(markdown: string, outPath: string){
    console.log(`[PDF] write to ${outPath}\n${markdown}`)
  }
}
