import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Send email using EmailJS
    emailjs
      .send(
        'service_xlsl1nw', // Replace with your EmailJS Service ID
        'template_jr6kry7', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'QJH08nAqJtIiFVP69' // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 3000);
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setError('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Get In Touch</h2>
          <p className="section-subtitle opacity-0 animate-fade-in-delay-1">Let's collaborate on your next project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in-delay-1">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-white/70 mb-8">
              I'm currently available for freelance work and full-time opportunities.
              Feel free to reach out if you have a project in mind or just want to connect.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-highlight-purple/20">
                  <Mail className="text-highlight-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:devsarkar025@gmail.com" className="text-white/70 hover:text-white transition-colors duration-200">
                    devsarkar025@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-highlight-blue/20">
                  <Phone className="text-highlight-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+917055948312" className="text-white/70 hover:text-white transition-colors duration-200">
                    +91 7055948312
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-highlight-cyan/20">
                  <MapPin className="text-highlight-cyan" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-white/70">
                    Block D, Sector 63, Noida, Uttar Pradesh 201307
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl opacity-0 animate-fade-in-delay-2">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight-purple"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight-purple"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white/70 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight-purple"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/70 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-highlight-purple resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;