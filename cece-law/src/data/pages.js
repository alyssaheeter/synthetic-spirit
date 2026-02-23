import { Hero, CredentialBlock, TestimonialBlock, PracticePageTemplate } from '../components.js';
import { rewriteTestimonial } from '../../scripts/testimonials.js';

// Raw testimonials fed through the rewrite engine
const rawTestimonials = [
  { text: "Frank is the best lawyer ever. He got me off my DUI.", author: "J.D." },
  { text: "I was given a guaranteed acquittal and we won my felony trial.", author: "M.S." },
  { text: "The only lawyer who can win. Period.", author: "T.R." }
];

const safeTestimonials = rawTestimonials.map(t => rewriteTestimonial(t.text, t.author));

export const pages = [
  {
    path: 'index.html',
    title: 'Cece Law | Criminal Defense Representation for High-Stakes Cases',
    description: 'Cece Law provides strategic criminal defense for high-stakes cases in Palos Heights and the south suburbs. Former prosecutor delivering disciplined representation.',
    content: `
      \${Hero({
        headline: 'Criminal Defense Representation for High-Stakes Cases',
        subheadline: 'Former Prosecutor Perspective. Disciplined, battle-tested advocacy when your freedom is at risk.',
        primaryCta: { text: 'Book a Consultation', link: '/contact.html' },
        secondaryCta: { text: 'Call Now', link: 'tel:+15551234567' }
      })}
      
      <section class="surface" style="padding: var(--space-6) 0;">
        <div class="container" style="max-width: 800px;">
          <h2 class="font-display">Strategic Defense Philosophy</h2>
          <p class="text-muted">At Cece Law, we reject flashy bravado in favor of stoic authority and relentless preparation. When your freedom is at risk, you need an advocate prepared to endure and protect.</p>
          <a href="/the-arena.html" class="hover-underline text-accent" style="font-weight: 600;">Read The Arena Philosophy &rarr;</a>
        </div>
      </section>

      \${CredentialBlock()}
      \${TestimonialBlock(safeTestimonials)}
      
      <section class="bg" style="padding: var(--space-6) 0;">
        <div class="container" style="text-align: center;">
          <h2 class="font-display">South Suburban Service Areas</h2>
          <p class="text-muted" style="max-width: 600px; margin: 0 auto var(--space-4) auto;">Cece Law represents clients with matters arising in Palos Heights, Bridgeview, Will County, and surrounding courthouses.</p>
          <div style="display: flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap;">
            <a href="/contact.html" class="btn btn-secondary">Contact for Bridgeview</a>
            <a href="/contact.html" class="btn btn-secondary">Contact for Will County</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'dui-defense.html',
    title: 'DUI Defense Lawyer in Bridgeview | Cece Law',
    description: 'Cece Law provides strategic DUI defense in Bridgeview. Former prosecutor delivering disciplined representation without promises.',
    content: PracticePageTemplate({
      h1: "DUI Defense for South Suburban Drivers",
      heroSub: "Former prosecutor insight into field sobriety testing, breathalyzers, and administrative consequences.",
      heroCtaPrimary: { text: "Schedule DUI Consultation", link: "/contact.html" },
      immediateConsequences: "A DUI arrest triggers immediate legal and administrative challenges. Beyond potential jail time and fines, you face the imminent suspension of your driving privileges. Early intervention is critical to challenging the suspension and preserving your options.",
      cdlRisk: "For Commercial Driver's License (CDL) holders, a DUI signifies an existential threat to your livelihood. Strict standards apply to commercial operators, making disciplined defense preparation essential.",
      livelihoodImpact: "The loss of a driver's license can lead to job termination and severe disruption of personal responsibilities. We prepare defenses aimed at protecting your ability to work and live.",
      processOverview: "The DUI process in Illinois involves two distinct tracks: the criminal court case regarding the charges, and the administrative proceeding regarding your driving privileges.",
      adminProcess: "The Statutory Summary Suspension of your driver's license is an automatic administrative penalty. We have strict deadlines to request a hearing to challenge this suspension independently from the criminal proceedings.",
      defensePhilosophy: "Our strategy begins with scrutinizing the initial traffic stop, the administration of field sobriety tests, and the calibration of testing equipment. As a former prosecutor, Frank Cece anticipates state tactics and builds a firewall of defense.",
      midCtaText: "Request DUI Case Review",
      faq: [
        { question: "How long do I have to challenge a license suspension?", answer: "The Statutory Summary Suspension typically takes effect 46 days after notice. A petition to rescind must be filed promptly." },
        { question: "Are outcomes promised in DUI cases?", answer: "No. Every case relies on unique facts, and prior results do not guarantee outcomes." }
      ]
    })
  },
  {
    path: 'the-arena.html',
    title: 'The Man in the Arena | Cece Law Philosophy',
    description: 'The ideological foundation of Cece Law, inspired by Theodore Roosevelt. Criminal defense defined by preparation, endurance, and courage.',
    content: `
      <section class="bg" style="padding: var(--space-6) 0; min-height: 60vh; display: flex; align-items: center;">
        <div class="container" style="max-width: 900px;">
          <h1 class="font-display" style="text-align: center; margin-bottom: var(--space-5);">The Man in the Arena</h1>
          
          <blockquote style="font-family: var(--font-display); font-size: 1.5rem; line-height: 1.6; color: var(--text); border-left: 2px solid var(--accent); margin: 0; padding-left: var(--space-4); margin-bottom: var(--space-5);">
            "It is not the critic who counts; not the man who points out how the strong man stumbles or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, and comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows the great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who know neither victory nor defeat."
          </blockquote>
          
          <div class="surface" style="padding: var(--space-5);">
            <h2 class="font-display">Interpretation for Criminal Defense</h2>
            <p class="text-muted">The courtroom is the ultimate arena. When your freedom is challenged by the machinery of the state, casual bravado fails. What succeeds is relentless preparation, earned authority, and an unwavering commitment to stand between the accused and the prosecution.</p>
            <p class="text-muted">With over thirty years of courtroom experience, including tenure as a First Chair Felony Prosecutor, Frank Cece approaches every defense with the understanding that trials are skirmishes won through endurance and discipline.</p>
            <div style="margin-top: var(--space-4);">
              <a href="/contact.html" class="btn">Join Forces in the Arena</a>
            </div>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'contact.html',
    title: 'Contact Cece Law | Schedule a Consultation',
    description: 'Contact Cece Law to schedule a consultation for your criminal defense matter. Proudly serving the south suburbs of Chicago.',
    content: `
      <section class="bg" style="padding: var(--space-6) 0;">
        <div class="container" style="max-width: 700px;">
          <h1 class="font-display">Contact Cece Law</h1>
          <p class="text-muted" style="margin-bottom: var(--space-5);">Secure disciplined representation. Please provide the details of your case below. Submitting this form does not establish an attorney-client relationship.</p>
          
          <div class="surface" style="padding: var(--space-5); border-radius: 4px; border: 1px solid var(--border);">
            <form id="contactForm" onsubmit="event.preventDefault(); window.location.href='/thank-you.html';">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input type="tel" id="phone" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" required>
              </div>
              <div class="form-group">
                <label for="charge">Reason for Contact / Charge Type</label>
                <input type="text" id="charge">
              </div>
              <div class="form-group">
                <label for="date">Court Date (Optional)</label>
                <input type="date" id="date">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Briefly describe your situation. Do not include highly sensitive details."></textarea>
              </div>
              <button type="submit" class="btn" style="width: 100%;">Request Consultation</button>
            </form>
          </div>
          
          <div style="margin-top: var(--space-5); text-align: center;">
            <h3 class="font-display">Direct Contact</h3>
            <p><a href="tel:+15551234567" class="hover-underline text-accent" style="font-size: 1.25rem;">(555) 123-4567</a></p>
            <p class="text-muted" style="font-size: 0.9rem;">After-Hours Protocol: For immediate emergency assistance, please call and follow the emergency prompts.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'thank-you.html',
    title: 'Thank You | Cece Law',
    description: 'Your inquiry has been received by Cece Law.',
    content: `
      <section class="bg text-center" style="padding: var(--space-6) 0; min-height: 50vh; display: flex; flex-direction: column; justify-content: center;">
        <div class="container" style="max-width: 600px;">
          <h1 class="font-display text-accent">Inquiry Received</h1>
          <p class="text-muted">Thank you for reaching out to Cece Law. Your information has been securely routed to our system.</p>
          <p class="text-muted">An automated acknowledgement will be sent to your email shortly. A member of our team will contact you to discuss next steps. Please remember that submitting this form does not create an attorney-client relationship.</p>
          <div style="margin-top: var(--space-4);">
            <a href="/" class="btn btn-secondary">Return Home</a>
            <a href="tel:+15551234567" class="btn" style="margin-left: var(--space-3);">Call for Urgent Matters</a>
          </div>
        </div>
      </section>
    `
  }
];
