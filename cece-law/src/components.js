export function Hero({ headline, subheadline, primaryCta, secondaryCta }) {
    return `
    <section class="hero bg" style="padding: var(--space-6) 0 var(--space-6) 0; position: relative; overflow: hidden; background-color: var(--bg);">
      <!-- Matte geometric background simulation -->
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1; background: linear-gradient(45deg, var(--cl-plum-black) 25%, transparent 25%, transparent 75%, var(--cl-plum-black) 75%, var(--cl-plum-black)), linear-gradient(45deg, var(--cl-plum-black) 25%, transparent 25%, transparent 75%, var(--cl-plum-black) 75%, var(--cl-plum-black)); background-size: 40px 40px; background-position: 0 0, 20px 20px;"></div>
      <div class="container" style="position: relative; z-index: 1;">
        <div style="max-width: 800px; padding: var(--space-5); background: rgba(22,22,22,0.85); box-shadow: 0 4px 20px rgba(0,0,0,0.5); backdrop-filter: blur(10px); border-left: 4px solid var(--accent);">
          <h1 class="font-display" style="margin-bottom: var(--space-3);">${headline}</h1>
          ${subheadline ? `<p class="text-muted" style="font-size: 1.15rem; margin-bottom: var(--space-4);">${subheadline}</p>` : ''}
          <div style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
            ${primaryCta ? `<a href="${primaryCta.link}" class="btn">${primaryCta.text}</a>` : ''}
            ${secondaryCta ? `<a href="${secondaryCta.link}" class="btn btn-secondary">${secondaryCta.text}</a>` : ''}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function CredentialBlock() {
    return `
    <section class="bg-elevated" style="padding: var(--space-5) 0;">
      <div class="container">
        <h2 class="font-display" style="margin-bottom: var(--space-4);">Verified Credentials</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-4);">
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">Illinois Bar Admission (1991)</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Authorized to practice law in Illinois since 1991.</p>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">U.S. District Court, N.E. District of IL (1992)</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Admitted to federal court.</p>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">U.S. District Trial Bar (1992)</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Member of the Federal Trial Bar.</p>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">U.S. Court of Appeals 7th Circuit (1992)</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Admitted to appellate practice.</p>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">Former First Chair Felony Prosecutor</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Supervising felony cases in the Trial Division.</p>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">Assistant State's Attorney (1992-2002)</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Ten years prosecutorial experience.</p>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">Founder of Cece Law (2002)</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Established defense practice.</p>
          </div>
          <div style="border-left: 2px solid var(--accent); padding-left: var(--space-3);">
            <strong style="color: var(--text);">Super Lawyers (2019-2026)</strong>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0;">Recognized consecutively for eight years.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function TestimonialBlock(testimonials) {
    // We assume the testimonials have already been passed through the RewriteEngine
    const html = testimonials.map(t => `
    <div class="surface" style="padding: var(--space-4); border-radius: 4px; border: 1px solid var(--border);">
      <p style="font-size: 0.95rem; font-style: italic; margin-bottom: var(--space-3);">"${t.text}"</p>
      <div style="display: flex; align-items: center; gap: var(--space-2);">
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: var(--accent);"></span>
        <strong style="color: var(--accent);">${t.author}</strong>
      </div>
      <p style="font-size: 0.75rem; color: var(--muted); margin-top: var(--space-3); margin-bottom: 0;">${t.disclaimer}</p>
    </div>
  `).join('');

    return `
    <section style="padding: var(--space-5) 0;">
      <div class="container">
        <h2 class="font-display">Client Reviews</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-4);">
          ${html}
        </div>
        <div style="margin-top: var(--space-4); text-align: center;">
          <a href="/contact.html" class="btn">Book a Consultation</a>
        </div>
      </div>
    </section>
  `;
}

export function PracticePageTemplate(data) {
    return `
    ${Hero({
        headline: data.h1,
        subheadline: data.heroSub,
        primaryCta: data.heroCtaPrimary || { text: "Book a Consultation", link: "/contact.html" },
        secondaryCta: data.heroCtaSecondary || { text: "Call Now", link: "tel:+15551234567" }
    })}
    
    <section class="surface">
      <div class="container" style="max-width: 800px;">
        <h2 class="font-display">Immediate Consequences</h2>
        <p class="text-muted">${data.immediateConsequences}</p>
        
        ${data.cdlRisk ? `<h3 class="text-accent" style="margin-top: var(--space-4);">CDL Risk</h3><p class="text-muted">${data.cdlRisk}</p>` : ''}
        
        <h2 class="font-display" style="margin-top: var(--space-5);">Impact on Livelihood</h2>
        <p class="text-muted">${data.livelihoodImpact}</p>
        
        <div style="margin: var(--space-5) 0;">
          <a href="/contact.html" class="btn">${data.midCtaText || 'Schedule Consultation'}</a>
        </div>
      </div>
    </section>

    <section class="bg">
      <div class="container" style="max-width: 800px;">
        <h2 class="font-display">Court Process Overview</h2>
        <p class="text-muted">${data.processOverview}</p>

        ${data.adminProcess ? `<h3 class="text-accent" style="margin-top: var(--space-4);">Administrative vs. Criminal Process</h3><p class="text-muted">${data.adminProcess}</p>` : ''}
        
        <h2 class="font-display" style="margin-top: var(--space-5);">Defense Philosophy</h2>
        <p class="text-muted">${data.defensePhilosophy}</p>
      </div>
    </section>
    
    <section class="bg-elevated">
      <div class="container" style="max-width: 800px;">
        <h2 class="font-display">Frequently Asked Questions</h2>
        ${data.faq.map(q => `
          <details style="margin-bottom: var(--space-3); padding: var(--space-3); border: 1px solid var(--border); border-radius: 4px;">
            <summary style="font-weight: 600; cursor: pointer; color: var(--text);">${q.question}</summary>
            <p class="text-muted" style="margin-top: var(--space-2); margin-bottom: 0;">${q.answer}</p>
          </details>
        `).join('')}
      </div>
    </section>

    <section class="text-center" style="padding-bottom: var(--space-6);">
      <div class="container">
        <h2 class="font-display">Secure Your Defense</h2>
        <p class="text-muted" style="max-width: 600px; margin: 0 auto var(--space-4) auto;">Contact Cece Law today to plan your defense strategy. Prior results do not guarantee outcomes, but early intervention preserves your rights.</p>
        <a href="/contact.html" class="btn">Schedule a Case Review</a>
      </div>
    </section>
  `;
}
