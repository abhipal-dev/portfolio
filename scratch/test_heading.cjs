const fs = require('fs');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

let html = fs.readFileSync('public/test_render.html', 'utf8');
html = html.replace(/\.header h1\s*\{\s*font-size:\s*[\d\.]+pt;/, '.header h1 { font-size: 19pt;');
html = html.replace(/\.header \.subtitle\s*\{\s*font-size:\s*[\d\.]+pt;/, '.header .subtitle { font-size: 9.8pt;');
html = html.replace(/\.section-title\s*\{\s*font-size:\s*[\d\.]+pt;/, '.section-title { font-size: 9.8pt;');
html = html.replace(/\.job-title,\s*\.project-title\s*\{\s*font-size:\s*[\d\.]+pt;/, '.job-title, .project-title { font-size: 9.2pt;');

fs.writeFileSync('public/resume_2p.html', html);
const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer "--print-to-pdf=D:\\Abhishek\\public\\resume_2p.pdf" "file:///D:/Abhishek/public/resume_2p.html"`;
execSync(cmd);

PDFDocument.load(fs.readFileSync('public/resume_2p.pdf')).then(d => {
  console.log('resume_2p.pdf Page count:', d.getPageCount());
});
