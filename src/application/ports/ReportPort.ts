export interface ReportPort {
  renderMarkdownToPdf(markdown: string, outPath: string): Promise<void>
}
