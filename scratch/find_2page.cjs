const fs = require('fs');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function testOne(fontSize, lineHeight, marginMm) {
  let html = fs.readFileSync('public/resume.html', 'utf8');
  
  // Replace styles
  html = html.replace(/font-size:\s*[\d\.]+pt;/g, `font-size: ${fontSize}pt;`);
  html = html.replace(/line-height:\s*[\d\.]+;/g, `line-height: ${lineHeight};`);
  html = html.replace(/margin:\s*10mm 14mm 10mm 14mm;/g, `margin: ${marginMm}mm 13mm ${marginMm}mm 13mm;`);
  
  fs.writeFileSync('public/test_render.html', html);
  const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer "--print-to-pdf=D:\\Abhishek\\public\\test_render.pdf" "file:///D:/Abhishek/public/test_render.html"`;
  execSync(cmd);
  
  const bytes = fs.readFileSync('public/test_render.pdf');
  const doc = PDFDocument.load(bytes);
  return doc.then(d => {
    console.log(`fontSize: ${fontSize}pt, lineH: ${lineHeight}, margin: ${marginMm}mm => Page count: ${d.getPageCount()}`);
    return d.getPageCount();
  });
}

async function main() {
  for (let f of [8.4, 8.2, 8.0, 7.8]) {
    for (let lh of [1.28, 1.25, 1.22]) {
      const p = await testOne(f, lh, 8);
      if (p === 2) {
        console.log(`Found 2 pages! f=${f}, lh=${lh}`);
        return;
      }
    }
  }
}

main();
