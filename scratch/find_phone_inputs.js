const fs = require('fs');
const files = ['index.html', 'privacy.html', 'terms.html', 'thankyou.html'];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('name="phone"') || l.includes('type="tel"') || l.toLowerCase().includes('phone number')) {
      console.log(`${f}:${i + 1} -> ${l.trim()}`);
    }
  });
});

