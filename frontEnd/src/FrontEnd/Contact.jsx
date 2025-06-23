import React, { useState } from 'react';
import { Mail, ClipboardCopy, ClipboardCheck } from 'lucide-react';

function Contact() {
  const email = 'oriasjunerey23@gmail.com'; // Replace with your email
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <section id='contact' className="scroll-mt-20 min-h-[40vh] flex items-center justify-center bg-gray-800 text-white px-4">
      <div className="bg-gray-700 rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-400">Feel free to email me or copy the address below:</p>

        <div className="flex items-center justify-center gap-3 bg-gray-600 rounded-lg px-4 py-2">
          <Mail className="w-5 h-5 text-blue-400" />
          <span className="text-sm sm:text-base">{email}</span>
          <button onClick={handleCopy} className="ml-2">
            {copied ? (
              <ClipboardCheck className="w-5 h-5 text-green-400" />
            ) : (
              <ClipboardCopy className="w-5 h-5 text-white hover:text-blue-400 transition" />
            )}
          </button>
        </div>

        {copied && <p className="text-green-400 text-sm">Email copied to clipboard!</p>}
      </div>
    </section>
  );
}

export default Contact;
