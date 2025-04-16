"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Snippet */}
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Email: [email protected]</p>
            <p className="text-sm">Phone: +1 555-123-4567</p>
            <Button variant="link" className="text-sm mt-2">Contact Page</Button>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mb-2">Connect With Us</h3>
            <div className="flex flex-col">
              <a href="#" className="text-sm hover:underline">
                Follow @AI-HUB on Instagram
              </a>
              <a href="#" className="text-sm hover:underline">
                Like our Facebook @AI-HUB
              </a>
              <a href="#" className="text-sm hover:underline">
                Follow @AI-HUB on X
              </a>
              <a href="#" className="text-sm hover:underline">
                Subscribe to our YouTube @AI-HUB Channel
              </a>
              <a href="#" className="text-sm hover:underline">
                Connect on LinkedIn @AI-HUB
              </a>
            </div>
          </div>

          {/* Standard Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2">Links</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:underline">
                Terms of Use
              </a>
              <a href="#" className="text-sm hover:underline">
                Site Map
              </a>
              <a href="#" className="text-sm hover:underline">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AI-HUB Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
