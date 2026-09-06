import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  Phone,
  HelpCircle,
} from 'lucide-react';
import { LeadSubmission } from '../types';
import { BUSINESS_INFO, REQUIREMENT_OPTIONS } from '../data/content';

interface LeadFormProps {
  initialProjectType?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    business_name: '',
    email: '',
    whatsapp: '',
    business_description: '',
    project_type: initialProjectType || 'Website',
    project_description: '',
    website_url: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.business_name.trim()) {
      errs.business_name = 'Please provide your business or company name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const rawDigits = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'WhatsApp number is required for direct communication.';
    } else if (rawDigits.length < 7) {
      errs.whatsapp = 'Please provide a valid phone/WhatsApp number.';
    }

    if (!formData.business_description.trim()) {
      errs.business_description = 'Please describe what your business does.';
    }

    if (!formData.project_type.trim()) {
      errs.project_type = 'Please select a project type.';
    }

    if (!formData.project_description.trim()) {
      errs.project_description = 'Please describe your requirement or the problem you want solved.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let result: any = null;
      try {
        result = await response.json();
      } catch {
        // Response was not JSON
      }

      if (response.ok && result?.success) {
        setIsSuccess(true);
      } else {
        setServerError(
          result?.error ||
            'We were unable to deliver your enquiry through our email service at this moment. Please reach out to Aryan directly on WhatsApp.'
        );
      }
    } catch {
      setServerError(
        'Unable to connect to the server. Please check your connection or reach out directly on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      business_name: '',
      email: '',
      whatsapp: '',
      business_description: '',
      project_type: 'Website',
      project_description: '',
      website_url: '',
    });
    setErrors({});
    setIsSuccess(false);
    setServerError('');
  };

  const handleBackToHome = () => {
    handleReset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#F9F8F6] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#2C4A3E] mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
            <span>Direct Project Inquiry</span>
          </div>

          <h2 className="serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-4">
            Tell Me What You're Trying to Build.
          </h2>

          <p className="sans text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-normal">
            Tell me what you're trying to build, improve or automate. I'll help identify the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Lead Form Container */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-sm border border-[#1A1A1A]/15 p-6 sm:p-8 shadow-xs">
              {isSuccess ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-14 h-14 rounded-full bg-[#2C4A3E]/10 text-[#2C4A3E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="max-w-xl mx-auto">
                    <h3 className="serif text-2xl font-bold text-[#1A1A1A] mb-3">
                      Requirement Received
                    </h3>
                    <p className="sans text-base text-[#1A1A1A]/90 leading-relaxed font-medium">
                      Thanks for reaching out. I've received your project details and will get back to you shortly.
                    </p>
                    <p className="sans text-xs text-[#1A1A1A]/60 mt-2">
                      Your enquiry has been dispatched directly to Aryan Shah. If your project is time-sensitive, feel free to connect directly via WhatsApp.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      id="lead-back-home-btn"
                      onClick={handleBackToHome}
                      className="px-7 py-3 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-[0.98]"
                    >
                      BACK TO HOME
                    </button>

                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white hover:bg-stone-50 border border-[#1A1A1A]/15 text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#2C4A3E]" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {serverError && (
                    <div
                      id="lead-server-error"
                      className="p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-950 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                        <span className="leading-relaxed font-medium">{serverError}</span>
                      </div>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0 font-semibold text-xs px-3.5 py-2 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white transition-colors uppercase tracking-wider shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  )}

                  {/* Row 1: Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                      >
                        1. Your Name <span className="text-[#2C4A3E]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="lead-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Aryan or your name"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors ${
                            errors.name ? 'border-rose-400 bg-rose-50/40' : 'border-[#1A1A1A]/15'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[11px] text-rose-600 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-business"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                      >
                        2. Business / Company <span className="text-[#2C4A3E]">*</span>
                      </label>
                      <input
                        id="lead-business"
                        name="business_name"
                        type="text"
                        required
                        value={formData.business_name}
                        onChange={handleChange}
                        placeholder="Company or Venture Name"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors ${
                          errors.business_name
                            ? 'border-rose-400 bg-rose-50/40'
                            : 'border-[#1A1A1A]/15'
                        }`}
                      />
                      {errors.business_name && (
                        <p className="text-[11px] text-rose-600 mt-1 font-mono">
                          {errors.business_name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="lead-email"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                      >
                        3. Email Address <span className="text-[#2C4A3E]">*</span>
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors ${
                          errors.email ? 'border-rose-400 bg-rose-50/40' : 'border-[#1A1A1A]/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-whatsapp"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                      >
                        4. WhatsApp Number <span className="text-[#2C4A3E]">*</span>
                      </label>
                      <input
                        id="lead-whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+91 98765 43210 (with country code)"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors ${
                          errors.whatsapp ? 'border-rose-400 bg-rose-50/40' : 'border-[#1A1A1A]/15'
                        }`}
                      />
                      {errors.whatsapp && (
                        <p className="text-[11px] text-rose-600 mt-1 font-mono">
                          {errors.whatsapp}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: What does your business do? */}
                  <div>
                    <label
                      htmlFor="lead-business-desc"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                    >
                      5. What does your business do? <span className="text-[#2C4A3E]">*</span>
                    </label>
                    <input
                      id="lead-business-desc"
                      name="business_description"
                      type="text"
                      required
                      value={formData.business_description}
                      onChange={handleChange}
                      placeholder="e.g., Boutique real estate agency, EdTech platform, logistics provider..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors ${
                        errors.business_description
                          ? 'border-rose-400 bg-rose-50/40'
                          : 'border-[#1A1A1A]/15'
                      }`}
                    />
                    {errors.business_description && (
                      <p className="text-[11px] text-rose-600 mt-1 font-mono">
                        {errors.business_description}
                      </p>
                    )}
                  </div>

                  {/* Row 4: What are you looking for? */}
                  <div>
                    <label
                      htmlFor="lead-project-type"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                    >
                      6. What are you looking for? <span className="text-[#2C4A3E]">*</span>
                    </label>
                    <select
                      id="lead-project-type"
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-[#1A1A1A]/15 bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors cursor-pointer"
                    >
                      {REQUIREMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Tell me about your requirement */}
                  <div>
                    <label
                      htmlFor="lead-project-desc"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                    >
                      7. Tell me about your requirement <span className="text-[#2C4A3E]">*</span>
                    </label>
                    <textarea
                      id="lead-project-desc"
                      name="project_description"
                      rows={4}
                      required
                      value={formData.project_description}
                      onChange={handleChange}
                      placeholder="Describe what you want built, current challenges, bottlenecks, or specific goals you are looking to achieve..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors ${
                        errors.project_description
                          ? 'border-rose-400 bg-rose-50/40'
                          : 'border-[#1A1A1A]/15'
                      }`}
                    />
                    {errors.project_description && (
                      <p className="text-[11px] text-rose-600 mt-1 font-mono">
                        {errors.project_description}
                      </p>
                    )}
                  </div>

                  {/* Row 6: Website / Social Media URL (optional) */}
                  <div>
                    <label
                      htmlFor="lead-url"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5"
                    >
                      8. Website / Social Media URL (optional)
                    </label>
                    <input
                      id="lead-url"
                      name="website_url"
                      type="url"
                      value={formData.website_url}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com or LinkedIn/Instagram profile"
                      className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-[#1A1A1A]/15 bg-[#F9F8F6] focus:bg-white text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#2C4A3E] transition-colors"
                    />
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                    <button
                      id="lead-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] disabled:bg-[#2C4A3E]/60 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4A3E]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SENDING REQUIREMENT...</span>
                        </>
                      ) : (
                        <>
                          <span>DISCUSS MY PROJECT</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>

                    {serverError && (
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-[#2C4A3E]/30 bg-white hover:bg-stone-50 text-[#2C4A3E] text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat Directly on WhatsApp</span>
                      </a>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Reach Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-sm bg-white border border-[#1A1A1A]/15 shadow-xs">
              <div className="w-9 h-9 rounded-sm bg-[#2C4A3E]/10 text-[#2C4A3E] flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="serif text-lg font-bold text-[#1A1A1A] mb-1">
                Prefer WhatsApp?
              </h3>
              <p className="sans text-xs text-[#1A1A1A]/70 mb-4 leading-relaxed">
                Skip the form and chat directly with Aryan on WhatsApp. Direct, quick, and informal.
              </p>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#2C4A3E] hover:bg-[#223B32] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-sm bg-white border border-[#1A1A1A]/15 shadow-xs">
              <div className="w-9 h-9 rounded-sm bg-[#F2F0EB] text-[#1A1A1A] flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="serif text-lg font-bold text-[#1A1A1A] mb-1">
                Direct Email
              </h3>
              <p className="sans text-xs text-[#1A1A1A]/70 mb-3 leading-relaxed">
                Send a brief or existing project documentation directly to:
              </p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="font-mono text-xs font-bold text-[#2C4A3E] hover:underline break-all block"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            {/* Trust & Privacy Card */}
            <div className="p-5 rounded-sm bg-[#F2F0EB] border border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/70 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#1A1A1A]">
                <ShieldCheck className="w-4 h-4 text-[#2C4A3E]" />
                <span>Confidentiality Guaranteed</span>
              </div>
              <p className="leading-relaxed">
                All submitted requirements remain completely confidential. No spam, no distribution, and no third-party sales outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
