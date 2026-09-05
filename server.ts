import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

interface LeadEnquiry {
  name: string;
  business_name: string;
  email: string;
  whatsapp: string;
  business_description: string;
  project_type: string;
  project_description: string;
  website_url?: string;
  submitted_at: string;
}

// -------------------------------------------------------------
// SECURE SERVER-SIDE EMAIL DISPATCH
// -------------------------------------------------------------
async function dispatchLeadEmail(lead: LeadEnquiry): Promise<{ delivered: boolean; error?: string }> {
  const targetEmail = process.env.NOTIFICATION_EMAIL?.trim() || 'aryanshah2211@gmail.com';
  const apiKey = process.env.RESEND_API_KEY?.trim();

  const formattedDateTime = `${new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })} at ${new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })} (${lead.submitted_at})`;

  const plainText = [
    `NEW SCALESHIFT AI LEAD`,
    `========================================`,
    `Name: ${lead.name}`,
    `Business Name: ${lead.business_name}`,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.whatsapp}`,
    `Business Description: ${lead.business_description}`,
    `Project Type: ${lead.project_type}`,
    `Project Description:`,
    `${lead.project_description}`,
    `Website/Social Media URL: ${lead.website_url || 'Not provided'}`,
    `Date & Time: ${formattedDateTime}`,
    `========================================`,
  ].join('\n');

  const cleanWhatsAppNumber = lead.whatsapp.replace(/\D/g, '');
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F9F8F6; margin: 0; padding: 24px; color: #1A1A1A; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(26,26,26,0.15); border-radius: 4px; overflow: hidden; }
          .header { background-color: #2C4A3E; color: #ffffff; padding: 24px 32px; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }
          .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.8); }
          .body-content { padding: 32px; }
          .badge { display: inline-block; padding: 4px 10px; background: rgba(44,74,62,0.1); color: #2C4A3E; font-size: 11px; font-weight: 700; text-transform: uppercase; border-radius: 2px; margin-bottom: 20px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em; color: #666666; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #1A1A1A; font-weight: 500; }
          .box { background: #F9F8F6; border: 1px solid rgba(26,26,26,0.1); border-left: 4px solid #2C4A3E; padding: 16px; border-radius: 2px; margin-top: 6px; }
          .box p { margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
          .action-bar { margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(26,26,26,0.1); display: flex; gap: 12px; }
          .btn { display: inline-block; padding: 10px 18px; font-size: 12px; font-weight: 600; text-decoration: none; border-radius: 2px; text-transform: uppercase; letter-spacing: 0.04em; }
          .btn-primary { background: #2C4A3E; color: #ffffff !important; }
          .btn-secondary { background: #F2F0EB; color: #1A1A1A !important; border: 1px solid rgba(26,26,26,0.15); }
          .footer { padding: 16px 32px; background: #F2F0EB; font-size: 12px; font-family: monospace; color: #666666; border-top: 1px solid rgba(26,26,26,0.1); }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New ScaleShift AI Lead — ${lead.business_name}</h1>
            <p>Direct project intake from website enquiry form</p>
          </div>
          <div class="body-content">
            <span class="badge">Project Type: ${lead.project_type}</span>

            <div class="field-group">
              <div class="field-label">1. Contact Name</div>
              <div class="field-value">${lead.name}</div>
            </div>

            <div class="field-group">
              <div class="field-label">2. Business / Company</div>
              <div class="field-value">${lead.business_name}</div>
            </div>

            <div class="field-group">
              <div class="field-label">3. Email Address</div>
              <div class="field-value"><a href="mailto:${lead.email}" style="color: #2C4A3E; text-decoration: none;">${lead.email}</a></div>
            </div>

            <div class="field-group">
              <div class="field-label">4. WhatsApp Number</div>
              <div class="field-value"><a href="https://wa.me/${cleanWhatsAppNumber}" style="color: #2C4A3E; text-decoration: none;">${lead.whatsapp}</a></div>
            </div>

            <div class="field-group">
              <div class="field-label">5. Business Description</div>
              <div class="field-value">${lead.business_description}</div>
            </div>

            <div class="field-group">
              <div class="field-label">6. Requirement / Scope</div>
              <div class="box">
                <p>${lead.project_description}</p>
              </div>
            </div>

            ${
              lead.website_url
                ? `
            <div class="field-group">
              <div class="field-label">7. Website / Social Media URL</div>
              <div class="field-value"><a href="${lead.website_url}" target="_blank" style="color: #2C4A3E;">${lead.website_url}</a></div>
            </div>
            `
                : ''
            }

            <div class="action-bar">
              ${
                cleanWhatsAppNumber
                  ? `<a href="https://wa.me/${cleanWhatsAppNumber}" class="btn btn-primary">Open WhatsApp Chat</a>`
                  : ''
              }
              <a href="mailto:${lead.email}?subject=ScaleShift%20AI%20Project%20Discussion" class="btn btn-secondary">Reply via Email</a>
            </div>
          </div>

          <div class="footer">
            Submitted at: ${formattedDateTime}
          </div>
        </div>
      </body>
    </html>
  `;

  // Always log clear full details to the server console
  console.log(`\n======================================================================`);
  console.log(`📬 NEW SCALESHIFT AI LEAD RECEIVED`);
  console.log(`Recipient: ${targetEmail}`);
  console.log(`Subject: New ScaleShift AI Lead — ${lead.business_name}`);
  console.log(`----------------------------------------------------------------------`);
  console.log(plainText);
  console.log(`======================================================================`);

  if (!apiKey) {
    console.warn(
      `⚠️ NOTICE: RESEND_API_KEY is not configured in environment variables.\n` +
      `Email dispatch to ${targetEmail} cannot be completed.\n` +
      `Please add RESEND_API_KEY="re_..." in Settings / environment variables.`
    );
    return { delivered: false, error: 'RESEND_API_KEY not configured' };
  }

  try {
    const fromAddress = process.env.RESEND_FROM_EMAIL?.trim() || 'ScaleShift AI <onboarding@resend.dev>';
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [targetEmail],
        reply_to: lead.email,
        subject: `New ScaleShift AI Lead — ${lead.business_name}`,
        text: plainText,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`❌ Resend API response error (${res.status}):`, errText);
      return { delivered: false, error: errText };
    }

    const data = await res.json();
    console.log(`✅ Email successfully dispatched via Resend API to ${targetEmail} (ID: ${data.id})`);
    return { delivered: true };
  } catch (error: any) {
    console.error(`❌ Error contacting email service:`, error?.message || error);
    return { delivered: false, error: error?.message || 'Network error' };
  }
}

// -------------------------------------------------------------
// API ROUTES
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'ScaleShift AI Contact Service', timestamp: new Date().toISOString() });
});

// Lead Submission Endpoint (Zero Database - Email Dispatch Only)
app.post('/api/leads', async (req, res) => {
  try {
    const {
      name,
      business_name,
      email,
      whatsapp,
      business_description,
      project_type,
      project_description,
      website_url,
    } = req.body || {};

    // 1. Validate Name
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Please provide your full name.' });
    }

    // 2. Validate Business / Company Name
    if (!business_name || typeof business_name !== 'string' || !business_name.trim()) {
      return res.status(400).json({ error: 'Please provide your business or company name.' });
    }

    // 3. Validate Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // 4. Validate WhatsApp Number
    const rawPhone = typeof whatsapp === 'string' ? whatsapp.replace(/\D/g, '') : '';
    if (!whatsapp || typeof whatsapp !== 'string' || rawPhone.length < 7) {
      return res.status(400).json({ error: 'Please provide a valid WhatsApp phone number.' });
    }

    // 5. Validate Business Description (What does your business do?)
    if (!business_description || typeof business_description !== 'string' || !business_description.trim()) {
      return res.status(400).json({ error: 'Please describe what your business does.' });
    }

    // 6. Validate Project Type
    if (!project_type || typeof project_type !== 'string' || !project_type.trim()) {
      return res.status(400).json({ error: 'Please select what you are looking to build.' });
    }

    // 7. Validate Project Description / Requirement
    if (!project_description || typeof project_description !== 'string' || !project_description.trim()) {
      return res.status(400).json({ error: 'Please describe your requirement or the problem you want solved.' });
    }

    const leadEnquiry: LeadEnquiry = {
      name: name.trim(),
      business_name: business_name.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      business_description: business_description.trim(),
      project_type: project_type.trim(),
      project_description: project_description.trim(),
      website_url: typeof website_url === 'string' && website_url.trim() ? website_url.trim() : undefined,
      submitted_at: new Date().toISOString(),
    };

    // Dispatch email securely from the server
    const emailResult = await dispatchLeadEmail(leadEnquiry);

    if (!emailResult.delivered) {
      console.warn(`[Lead Submission] Email delivery failed: ${emailResult.error}`);
      return res.status(503).json({
        success: false,
        error:
          "We were unable to deliver your enquiry through our email service at this moment. Please reach out to Aryan directly on WhatsApp for an immediate response.",
        canContactWhatsApp: true,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Thanks for reaching out. I've received your project details and will get back to you shortly.",
    });
  } catch (err) {
    console.error('Submission handling error:', err);
    return res.status(500).json({
      error: 'Unable to process your enquiry at this moment. Please try again or reach out directly on WhatsApp.',
    });
  }
});

// -------------------------------------------------------------
// VITE / STATIC SERVING
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ScaleShift AI Server running on port ${PORT}`);
  });
}

startServer();
