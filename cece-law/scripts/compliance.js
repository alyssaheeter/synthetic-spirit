export const BANNED_PHRASES = [
    { pattern: /\bbest lawyer\b/i, reason: "Superlative implying comparative superiority" },
    { pattern: /\bguaranteed?\b/i, reason: "Implies a promised outcome" },
    { pattern: /\bwe win\b/i, reason: "Implies comparative superiority or promise" },
    { pattern: /\$\d+/i, reason: "Reference to specific case dollar amount" },
    { pattern: /\bonly lawyer who can\b/i, reason: "Unverifiable hyperbolic superlative" },
    { pattern: /\bpromise\b/i, reason: "Cannot promise outcomes in criminal defense" }
];

/**
 * Throws an error if the text contains any non-compliant phrases.
 */
export function checkCompliance(rawText, context) {
    // Exclude disclaimers
    const safeText = rawText.replace(/do not guarantee/gi, '').replace(/cannot guarantee/gi, '');

    for (const rule of BANNED_PHRASES) {
        if (rule.pattern.test(safeText)) {
            throw new Error(`Compliance Violation in [${context}]: Found prohibited language matching "${rule.pattern}". Reason: ${rule.reason}`);
        }
    }
}
