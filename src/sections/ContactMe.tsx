import { ContactForm } from "@/components/Form";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const ContactMe = () => {
  return (
    <div className="py-4 mb-2 shadow-md px-6 bg-card">
      <h2 className="lg:text-4xl text-2xl font-semibold mb-8">ContactMe</h2>

      <div className="lg:mx-12">
        <div className="flex list-none gap-8 mb-6">
          <li>
            <a href="">
              <Facebook size={24} />
            </a>
          </li>
          <li>
            <a href="">
              <Instagram size={24} />
            </a>
          </li>
          <li>
            <a href="">
              <Linkedin size={24} />
            </a>
          </li>
          <li>
            <a href="">
              <TwitterIcon size={24} />
            </a>
          </li>
          <li>
            <a href="">
              <Github size={24} />
            </a>
          </li>
        </div>

        <h2 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-500">
          Feel free to contact me in case of any question
        </h2>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
