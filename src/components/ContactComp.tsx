"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full l py-8 mx-auto">
      <div className="flex gap-6  ">
        {/* Contact Information */}
        <div className="bg-[#0A3141] flex-1 p-8">
          <h2 className="text-[28px] border-b-[1px]  pb-8 border-b-[#ffc1154d] font-[600] font-poppins text-white mb-8">
            Contact Information
          </h2>

          <div className="bg-white p-6 rounded mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#FFC215]/20 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-[#FFC215]" />
              </div>
              <div>
                <p className="text-gray-500 text-[15px]">Contact Number</p>
                <p className="text-gray-800 font-[700] text-[20px]">+234 (0)1234 567890</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#FFC215]/20 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-[#FFC215]" />
              </div>
              <div>
                <p className="text-gray-500 text-[15px]">Email Us</p>
                <a
                  href="mailto:support@everytravel.com"
                  className="text-gray-800 font-[700] text-[20px] hover:text-[#0A7C95] transition-colors"
                >
                  support@everytravel.com
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded mb-8 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-[#FFC215]/20 flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-[#FFC215]" />
              </div>
              <div>
                <p className="text-gray-500 text-[15px]">Address</p>
                <p className="text-gray-800 font-[700] text-[20px]">Portharcourt</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-auto mb-3 flex gap-2 items-center">
            <p className="text-white text-[18px] ">Follow us:</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 flex-[1.7] md:col-span-2 bg-white">
          <h2 className="text-3xl font-poppins text-[40px] font-[700] text-gray-900 mb-8">
            Send Us A Message
          </h2>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-[#0A7C95] focus:ring-[#0A7C95] text-[18px] placeholder:text-[18px] p-6 "
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-[#0A7C95] focus:ring-[#0A7C95] text-[18px] placeholder:text-[18px] p-6 "
              />
            </div>

            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-300 focus:border-[#0A7C95] focus:ring-[#0A7C95] text-[18px] placeholder:text-[18px] p-6 "
            />

            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#0A7C95] focus:ring-[#0A7C95] text-[18px] placeholder:text-[18px] p-6 "
            />

            <Textarea
              name="message"
              placeholder="Write Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[150px] border-gray-300 focus:border-[#0A7C95] focus:ring-[#0A7C95] text-[18px] placeholder:text-[18px] p-6 "
            />

            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#076476] hover:text-[#076476] hover:bg-[#FFC215] text-white px-6 py-5 rounded-3xl mt-6 font-[700] text-[16px] transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
