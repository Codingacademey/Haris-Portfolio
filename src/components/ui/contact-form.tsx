"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'success' | 'error';
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message
      const whatsappMessage = `Hello Haris! I'm interested in your AI/ML services.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message: ${formData.message}

Looking forward to discussing this with you!`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/923437354889?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      setStatus({ type: 'success', message: 'Redirecting to WhatsApp... Your message is ready to send!' });
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus({ type: 'idle', message: '' });
      }, 3000);
      
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to open WhatsApp. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-400 mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your AI/ML project? Let's connect and explore the possibilities together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-black/50 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-blue-600/20">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">codingacademey1@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-black/50 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-green-600/20">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">03437354889</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-black/50 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-purple-600/20">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400"> Gulberg Lahore , Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* AI/ML Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">AI/ML Services</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Machine Learning',
                  'Deep Learning',
                  'Computer Vision',
                  'NLP',
                  'Data Analysis',
                  'Predictive Modeling',
                  'Neural Networks',
                  'AI Consulting'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                  >
                    <span className="text-sm text-gray-300">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-black/50 border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 pointer-events-none"
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 relative z-20 pointer-events-auto"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 pointer-events-none"
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 relative z-20 pointer-events-auto"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 pointer-events-none"
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 relative z-20 pointer-events-auto"
                    placeholder="AI/ML Project Discussion"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 pointer-events-none"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none relative z-20 pointer-events-auto"
                    placeholder="Tell me about your AI/ML project, goals, and how I can help..."
                  />
                </motion.div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex items-center space-x-2 p-4 rounded-lg",
                      status.type === 'success' 
                        ? "bg-green-600/20 border border-green-500/30 text-green-400"
                        : "bg-red-600/20 border border-red-500/30 text-red-400"
                    )}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Opening WhatsApp...</span>
                      </motion.div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="h-5 w-5" />
                        <span>Send via WhatsApp</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export { ContactForm };
