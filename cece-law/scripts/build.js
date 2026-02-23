import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkCompliance } from './compliance.js';
import { pages } from '../src/data/pages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const templatePath = path.join(rootDir, 'src', 'templates', 'layout.html');
const templateStr = fs.readFileSync(templatePath, 'utf-8');

function buildPages() {
    console.log('Starting SSG build process...');
    let hasErrors = false;

    for (const page of pages) {
        try {
            // Run compliance filter on the content
            checkCompliance(page.content, page.path);
            checkCompliance(page.title, `Title of ${page.path}`);
            checkCompliance(page.description, `Description of ${page.path}`);

            // Basic JSON-LD schema builder
            const schema = {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": page.title,
                "description": page.description
            };

            // Replace template variables
            let html = templateStr
                .replace(/{{META_TITLE}}/g, page.title)
                .replace(/{{META_DESCRIPTION}}/g, page.description)
                .replace(/{{SCHEMA_JSON}}/g, JSON.stringify(schema, null, 2))
                .replace(/{{CONTENT}}/g, page.content);

            // Write output
            const outPath = path.join(rootDir, page.path);
            fs.writeFileSync(outPath, html, 'utf-8');
            console.log(`Built ${page.path} successfully.`);
        } catch (error) {
            console.error(`\x1b[31mError building ${page.path}: ${error.message}\x1b[0m`);
            hasErrors = true;
        }
    }

    if (hasErrors) {
        console.error('Build failed due to compliance errors.');
        process.exit(1);
    }

    console.log('Build completed successfully.');
}

buildPages();
