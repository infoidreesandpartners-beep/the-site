const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

function AnimSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className={className}>
      {children}
    </motion.div>);

}

export default function Contact() {
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const offices = [
  {
    city: isAr ? 'مصر' : 'Egypt',
    flag: '🇪🇬',
    label: isAr ? 'المقر الرئيسي' : 'Headquarters',
    address: isAr ? 'مكتب افتراضي — مصر' : 'Virtual Office — Egypt',
    phone: '+201121175157',
    email: 'info@idreesandpartners.cn.mt',
    hours: '24/7'
  }];

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', inquiry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.integrations.Core.SendEmail({
      to: 'info@idreesandpartners.cn.mt',
      subject: `New Inquiry from ${formData.name} — ${formData.inquiry || 'General'}`,
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || '—'}\nCompany: ${formData.company || '—'}\nInquiry Type: ${formData.inquiry || '—'}\n\nMessage:\n${formData.message}`
    });
    setSubmitted(true);
  };

  return (
    <div dir={isAr ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/75" />
        </div>
        <div className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.contact_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h1 className="font-serif-display text-white text-5xl lg:text-7xl">{tr.contact_title}</h1>
            <p className="text-white/50 text-lg mt-4">{tr.contact_subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Form + Offices */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#c9a96e]" />
                  <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.contact_form_label}</span>
                </div>
                <h2 className="font-serif-display text-[#0a1628] text-3xl lg:text-4xl mb-8">{tr.contact_form_title}</h2>

                {submitted ?
                <div className="py-16 bg-[#f5f0e8]/50 border border-[#c9a96e]/20 px-8">
                    <div className="flex items-center gap-4 mb-6">
                      <CheckCircle size={40} className="text-[#c9a96e] flex-shrink-0" />
                      <div className="w-px h-10 bg-[#c9a96e]/30" />
                      <div>
                        <h3 className="font-serif-display text-[#0a1628] text-2xl">{tr.contact_success_title}</h3>
                        <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mt-0.5">
                          {isAr ? 'إدريس وشركاه' : 'Idrees & Partners'}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#0a1628]/70 text-sm leading-relaxed mb-4">
                      {isAr ? `عزيزي ${formData.name}،` : `Dear ${formData.name},`}
                    </p>
                    <p className="text-[#0a1628]/70 text-sm leading-relaxed mb-4">{tr.contact_success_p1}</p>
                    <p className="text-[#0a1628]/70 text-sm leading-relaxed mb-6">{tr.contact_success_p2}</p>
                    <p className="text-[#0a1628]/50 text-sm">
                      {tr.contact_success_sign}<br />
                      <span className="font-medium text-[#0a1628]/70">{tr.contact_success_firm}</span>
                    </p>
                  </div> :

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[#0a1628]/70 text-sm mb-2 block">{tr.contact_name} *</label>
                        <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border-[#0a1628]/10 focus:border-[#c9a96e] rounded-none h-12" placeholder={tr.contact_name_ph} />
                      </div>
                      <div>
                        <label className="text-[#0a1628]/70 text-sm mb-2 block">{tr.contact_email} *</label>
                        <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border-[#0a1628]/10 focus:border-[#c9a96e] rounded-none h-12" placeholder={tr.contact_email_ph} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[#0a1628]/70 text-sm mb-2 block">{tr.contact_phone}</label>
                        <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-[#0a1628]/10 focus:border-[#c9a96e] rounded-none h-12" placeholder="+20..." />
                      </div>
                      <div>
                        <label className="text-[#0a1628]/70 text-sm mb-2 block">{tr.contact_company}</label>
                        <Input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="border-[#0a1628]/10 focus:border-[#c9a96e] rounded-none h-12" placeholder={tr.contact_company_ph} />
                      </div>
                    </div>
                    <div>
                      <label className="text-[#0a1628]/70 text-sm mb-2 block">{tr.contact_inquiry}</label>
                      <Select value={formData.inquiry} onValueChange={(v) => setFormData({ ...formData, inquiry: v })}>
                        <SelectTrigger className="border-[#0a1628]/10 focus:border-[#c9a96e] rounded-none h-12">
                          <SelectValue placeholder={tr.contact_inquiry_ph} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="outsourcing">{tr.inq_outsourcing}</SelectItem>
                          <SelectItem value="corporate">{tr.inq_corporate}</SelectItem>
                          <SelectItem value="dispute">{tr.inq_dispute}</SelectItem>
                          <SelectItem value="partnership">{tr.inq_partnership}</SelectItem>
                          <SelectItem value="career">{tr.inq_career}</SelectItem>
                          <SelectItem value="other">{tr.inq_other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-[#0a1628]/70 text-sm mb-2 block">{tr.contact_message} *</label>
                      <Textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="border-[#0a1628]/10 focus:border-[#c9a96e] rounded-none min-h-[150px]" placeholder={tr.contact_message_ph} />
                    </div>
                    <Button type="submit" className="bg-[#c9a96e] hover:bg-[#dfc59b] text-[#0a1628] rounded-none h-12 px-10 text-sm tracking-[0.15em] uppercase font-medium">
                      <Send size={16} className="mr-2" />
                      {tr.contact_send}
                    </Button>
                  </form>
                }
              </AnimSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimSection>
                <div className="space-y-6">
                  {offices.map((office) =>
                  <div key={office.city} className="p-6 bg-[#f5f0e8]/50 border-l-2 border-[#c9a96e]">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{office.flag}</span>
                        <div>
                          <h3 className="font-serif-display text-[#0a1628] text-lg hidden">{office.city}</h3>
                          <span className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase hidden">{office.label}</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-[#0a1628]/50">
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} className="text-[#c9a96e] flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-[#c9a96e] flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-[#c9a96e] flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-8 p-6 bg-[#0a1628] text-center">
                  <Globe size={24} className="text-[#c9a96e] mx-auto mb-3" />
                  <p className="text-white/70 text-sm">
                    {tr.contact_global} <span className="text-[#c9a96e] font-medium">{tr.contact_global_accent}</span> {tr.contact_global_end}
                  </p>
                </div>
              </AnimSection>
            </div>
          </div>
        </div>
      </section>
    </div>);

}