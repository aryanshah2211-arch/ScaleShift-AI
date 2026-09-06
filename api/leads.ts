export default async function handler(req: any, res: any) {
  // 1. CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Reject non-POST methods
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Please submit via POST.' });
  }

  try {
    // 2. Parse request payload safely
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Invalid JSON payload in request body.' });
      }
    }

    const {
      name,
      business_name,
      email,
      whatsapp,
      business_description,
      project_type,
      project_description,
      website_url,
    } = body || {};

    // 3. Field validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Please provide your full name.' });
    }

    if (!business_name || typeof business_name !== 'string' || !business_name.trim()) {
      return res.status(400).json({ error: 'Please provide your business or company name.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const rawPhone = typeof whatsapp === 'string' ? whatsapp.replace(/\D/g, '') : '';
    if (!whatsapp || typeof whatsapp !== 'string' || rawPhone.length < 7) {
      return res.status(400).json({ error: 'Please provide a valid WhatsApp phone number.' });
    }

    if (!business_description || typeof business_description !== 'string' || !business_description.trim()) {
      return res.status(400).json({ error: 'Please describe what your business does.' });
    }

    if (!project_type || typeof project_type !== 'string' || !project_type.trim()) {
      return res.status(400).json({ error: 'Please select what you are looking to build.' });
    }

    if (!project_description || typeof project_description !== 'string' || !project_description.trim()) {
      return res.status(400).json({ error: 'Please describe your requirement or problem you want solved.' });
    }

    // 4. Server-side environment variables
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const notificationEmail = process.env.NOTIFICATION_EMAIL?.trim() || 'aryanshah2211@gmail.com';
    const rawFromEmail = process.env.RESEND_FROM_EMAIL?.trim() || 'onboarding@resend.dev';
    // Format from address nicely if just an email address was supplied
    const fromAddress = rawFromEmail.includes('<') ? rawFromEmail : `ScaleShift AI <${rawFromEmail}>`;

    const cleanName = name.trim();
    const cleanBusiness = business_name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanWhatsApp = whatsapp.trim();
    const cleanBusinessDesc = business_description.trim();
    const cleanProjectType = project_type.trim();
    const cleanProjectDesc = project_description.trim();
    const cleanWebsiteUrl = typeof website_url === 'string' && website_url.trim() ? website_url.trim() : '';

    const submissionTime = new Date().toISOString();
    const formattedDateTime = `${new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })} at ${new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })}`;

    const plainText = [
      `NEW SCALESHIFT AI LEAD INQUIRY`,
      `========================================`,
      `Client Name: ${cleanName}`,
      `Business / Company: ${cleanBusiness}`,
      `Email: ${cleanEmail}`,
      `WhatsApp: ${cleanWhatsApp}`,
      `Business Description: ${cleanBusinessDesc}`,
      `Project Type: ${cleanProjectType}`,
      `Requirement Description:`,
      `${cleanProjectDesc}`,
      `Website / Social URL: ${cleanWebsiteUrl || 'Not provided'}`,
      `Submitted: ${formattedDateTime} (${submissionTime})`,
      `========================================`,
    ].join('\n');

    const cleanDigitsOnly = cleanWhatsApp.replace(/\D/g, '');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F9F8F6; margin: 0; padding: 24px; color: #1A1A1A; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(26,26,26,0.15); border-radius: 4px; overflow: hidden; }
            .header { background-color: #2C4A3E; color: #ffffff; padding: 24px 32px; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 600; }
            .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.85); }
            .body-content { padding: 32px; }
            .badge { display: inline-block; padding: 4px 10px; background: rgba(44,74,62,0.1); color: #2C4A3E; font-size: 11px; font-weight: 700; text-transform: uppercase; border-radius: 2px; margin-bottom: 20px; }
            .field-group { margin-bottom: 18px; }
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
              <h1>New ScaleShift AI Lead — ${cleanBusiness}</h1>
              <p>Direct project intake from website contact form</p>
            </div>
            <div class="body-content">
              <span class="badge">Project Type: ${cleanProjectType}</span>

              <div class="field-group">
                <div class="field-label">1. Contact Name</div>
                <div class="field-value">${cleanName}</div>
              </div>

              <div class="field-group">
                <div class="field-label">2. Business / Company</div>
                <div class="field-value">${cleanBusiness}</div>
              </div>

              <div class="field-group">
                <div class="field-label">3. Email Address</div>
                <div class="field-value"><a href="mailto:${cleanEmail}" style="color: #2C4A3E; text-decoration: none;">${cleanEmail}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">4. WhatsApp Number</div>
                <div class="field-value"><a href="https://wa.me/${cleanDigitsOnly}" style="color: #2C4A3E; text-decoration: none;">${cleanWhatsApp}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">5. Business Description</div>
                <div class="field-value">${cleanBusinessDesc}</div>
              </div>

              <div class="field-group">
                <div class="field-label">6. Requirement / Scope</div>
                <div class="box">
                  <p>${cleanProjectDesc}</p>
                </div>
              </div>

              ${
                cleanWebsiteUrl
                  ? `
              <div class="field-group">
                <div class="field-label">7. Website / URL</div>
                <div class="field-value"><a href="${cleanWebsiteUrl}" target="_blank" style="color: #2C4A3E;">${cleanWebsiteUrl}</a></div>
              </div>
              `
                  : ''
              }

              <div class="action-bar">
                ${
                  cleanDigitsOnly
                    ? `<a href="https://wa.me/${cleanDigitsOnly}" class="btn btn-primary">Open WhatsApp Chat</a>`
                    : ''
                }
                <a href="mailto:${cleanEmail}?subject=ScaleShift%20AI%20Project%20Discussion" class="btn btn-secondary">Reply via Email</a>
              </div>
            </div>

            <div class="footer">
              Submitted at: ${formattedDateTime}
            </div>
          </div>
        </body>
      </html>
    `;

    console.log(`[POST /api/leads] Received enquiry from ${cleanName} (${cleanBusiness})`);

    // Check if RESEND_API_KEY is provided
    if (!resendApiKey) {
      console.error('[POST /api/leads] RESEND_API_KEY is not configured in process.env');
      return res.status(500).json({
        success: false,
        error:
          'Server email service is not configured (missing RESEND_API_KEY). Please add RESEND_API_KEY in Vercel environment variables or reach out directly on WhatsApp.',
      });
    }

    // Dispatch via Resend REST API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [notificationEmail],
        reply_to: cleanEmail,
        subject: `New ScaleShift AI Lead — ${cleanBusiness}`,
        text: plainText,
        html: htmlContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error(`[POST /api/leads] Resend API error (${resendResponse.status}):`, errorText);
      return res.status(502).json({
        success: false,
        error:
          'We were unable to deliver your enquiry through our email service at this moment. Please reach out to Aryan directly on WhatsApp for an immediate response.',
      });
    }

    const data = await resendResponse.json();
    console.log(`[POST /api/leads] Email sent successfully to ${notificationEmail}, ID: ${data?.id}`);

    return res.status(200).json({
      success: true,
      message: "Thanks for reaching out. I've received your project details and will get back to you shortly.",
      id: data?.id,
    });
  } catch (error: any) {
    console.error('[POST /api/leads] Unexpected error:', error);
    return res.status(500).json({
      success: false,
      error: 'Unable to process your enquiry at this moment. Please try again or reach out directly on WhatsApp.',
    });
  }
}
