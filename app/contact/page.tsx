// app/contact/page.js

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

// A reusable component for social media links
const SocialLink = ({ href, icon: Icon, "aria-label": ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

// A reusable component for contact information items
const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 p-3 rounded-full bg-secondary text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground">{children}</p>
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question, a project idea, or just want to say hello? I'd love
          to hear from you.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Info & Socials */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            <ContactInfoItem icon={Mail} title="Email">
              <a
                href="mailto:contact@yourdomain.com"
                className="hover:text-primary transition-colors"
              >
                contact@yourdomain.com
              </a>
            </ContactInfoItem>
            <ContactInfoItem icon={Phone} title="Phone">
              <a
                href="tel:+1234567890"
                className="hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </ContactInfoItem>
            <ContactInfoItem icon={MapPin} title="Location">
              San Francisco, CA
            </ContactInfoItem>
          </div>
          <div className="pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Share2 className="h-5 w-5 text-primary" />
              Find me on Social Media
            </h3>
            <div className="flex items-center gap-4">
              {/* Add your actual social media links here */}
              <SocialLink
                href="#"
                aria-label="GitHub"
                icon={() => (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )}
              />
              <SocialLink
                href="#"
                aria-label="Twitter"
                icon={() => (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                )}
              />
              <SocialLink
                href="#"
                aria-label="LinkedIn"
                icon={() => (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                )}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-8 bg-card rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-muted-foreground"
              >
                Full Name
              </label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-muted-foreground"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Please type your message here..."
                rows={6}
                required
              />
            </div>
            <Button type="submit" className="w-full text-lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
