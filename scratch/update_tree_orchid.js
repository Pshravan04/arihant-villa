const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

const oldSrc = 'src="assets/tree-garden.webp" alt="Tree Orchard"';
const newSrc = 'src="assets/tree-orchid.jpg" alt="Tree Orchid"';

const oldComment = '<!-- Highlight 7: Tree Orchard -->';
const newComment = '<!-- Highlight 7: Tree Orchid -->';

if (content.includes(oldSrc)) {
    content = content.replace(oldSrc, newSrc);
    content = content.replace(oldComment, newComment);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully replaced Tree Orchard with Tree Orchid image!');
} else {
    console.error('Old src string not found in index.html');
    process.exit(1);
}

