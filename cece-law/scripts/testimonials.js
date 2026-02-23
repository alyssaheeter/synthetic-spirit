import { checkCompliance } from './compliance.js';

/**
 * Rewrites raw testimonials to comply with ethics rules.
 * Mutes hyperbole, removes guarantees, and corrects obvious grammar.
 */
export function rewriteTestimonial(rawText, author) {
    let text = rawText;

    // 1. Remove Guarantees & Exaggerated Celebrations
    text = text.replace(/he got me off/gi, 'he helped me resolve my case');
    text = text.replace(/guaranteed acquittal/gi, 'thorough defense preparation');
    text = text.replace(/best lawyer ever/gi, 'highly professional attorney');
    text = text.replace(/the only lawyer who can win/gi, 'a dedicated advocate');
    text = text.replace(/i was guaranteed to win/gi, 'i felt confident in my defense');
    text = text.replace(/we won/gi, 'we reached a favorable outcome');

    // 2. Grammar/Punctuation basic fixes
    text = text.replace(/\s+/g, ' ').trim();
    text = text.replace(/\s+([.,!?])/g, '$1'); // Fix spaces before punctuation

    // 3. Throw through the compliance filter to ensure nothing slipped through
    checkCompliance(text, `Testimonial from ${author}`);

    // Return formatted object
    return {
        author: author,
        text: text,
        disclaimer: "Prior results do not guarantee a similar outcome. Every case is unique."
    };
}
