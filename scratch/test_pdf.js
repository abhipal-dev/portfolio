const fs = require('fs');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

async function testPdf(htmlFile, pdfFile) {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer "--print-to-pdf=${pdfFile}" "file:///${htmlFile.replace(/\\/g, '/')}"`;
  execSync(cmd);
  const bytes = fs.readFileSync(pdfFile);
  const doc = await PDFDocument.load(bytes);
  console.log(`${pdfFile} Page count:`, doc.getPageCount());
  return doc.getPageCount();
}

testPdf('D:\\Abhishek\\public\\resume.html', 'D:\\Abhishek\\public\\Abhishek_Pal_Resume.pdf');
