const fs = require('fs');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function check(fontSize, marginMm, sectionGap) {
  let html = fs.readFileSync('public/resume.html', 'utf8');
  html = html.replace(/font-size:\s*9\.3pt/g, `font-size: ${fontSize}pt`);
  html = html.replace(/margin:\s*10mm 14mm 10mm 14mm/g, `margin: ${marginMm}mm 14mm ${marginMm}mm 14mm`);
  html = html.replace(/\.section\s*\{\s*margin-bottom:\s*[\d\.]+px;/g, `.section { margin-bottom: ${sectionGap}px;`);
  fs.writeFileSync('public/temp.html', html);
  
  const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer "--print-to-pdf=D:\\Abhishek\\public\\temp.pdf" "file:///D:/Abhishek/public/temp.html"`;
  execSync(cmd);
  const doc = await PDFDocument.load(fs.readFileSync('public/temp.pdf'));
  console.log(`fontSize: ${fontSize}pt, margin: ${marginMm}mm, gap: ${sectionGap}px => Pages: ${doc.getPageCount()}`);
  return doc.getPageCount();
}

async function run() {
  for (let f of [8.8, 8.5, 8.2, 8.0]) {
    for (let m of [8, 6]) {
      for (let g of [6, 4, 3]) {
        const pages = await check(f, m, g);
        if (pages === 2) {
          console.log(`SUCCESS! Found 2 pages with font: ${f}pt, margin: ${m}mm, gap: ${g}px`);
          return;
        }
      }
    }
  }
}

run();
