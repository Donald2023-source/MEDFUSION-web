import img from "@/public/auth.png";
import Image from "next/image";
import logo from "@/public/Logom.png";
import { ShieldCheckIcon, DatabaseIcon, LockIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* LEFT SIDE: Form Section */}
     

      {/* RIGHT SIDE: Visual Banner Section */}
      <div className="hidden lg:flex flex-1 relative w-full h-full overflow-hidden bg-gray-900">
        {/* Background Image with Dark Gradient Overlay */}
        <Image
          className="absolute inset-0 h-full object-cover w-full opacity-40 mix-blend-overlay"
          src={img}
          alt="auth background"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/60 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-12 xl:p-16">
          {/* Top Logo */}
          <div className="flex justify-end">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="MedFusion Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Banner Content */}
          <div className="space-y-8">
            <h2 className="text-3xl xl:text-4xl font-bold text-white tracking-tight">
              One patient. One record. Everywhere.
            </h2>

            {/* Feature Cards Stack */}
            <div className="space-y-4 max-w-lg">
              {/* Card 1 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-lg">
                <div className="p-3 rounded-xl bg-white/10 text-blue-300">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Bank-grade security</h4>
                  <p className="text-gray-300 text-xs">Encrypted records with full audit trails.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-lg">
                <div className="p-3 rounded-xl bg-white/10 text-blue-300">
                  <DatabaseIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">One lifelong record</h4>
                  <p className="text-gray-300 text-xs">Every visit, lab and prescription in one place.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-lg">
                <div className="p-3 rounded-xl bg-white/10 text-blue-300">
                  <LockIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">You control access</h4>
                  <p className="text-gray-300 text-xs">Consent-based sharing with any provider.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}