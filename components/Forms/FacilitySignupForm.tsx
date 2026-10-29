import img from "@/public/auth.png";
import Image from "next/image";
import logo from "@/public/Logom.png";
import { ShieldCheckIcon, DatabaseIcon, LockIcon } from "lucide-react";
import Link from "next/link";
export default function FacilitySignupForm() {
  return (
    <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-y-auto">
      <div>
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
          Sign Up
        </h4>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Create your account
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          One record that follows you across every hospital, lab and pharmacy.
        </p>

        {/* Form Fields */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Facility Email
            </label>
            <input
              type="email"
              placeholder="medfusion@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Hospital/Facility Name
            </label>
            <input
              type="text"
              placeholder="Medfusion"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Facility Type
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-gray-800 bg-white shadow-sm appearance-none">
              <option value="Hospital">Hospital</option>
              <option value="Clinic">Clinic</option>
              <option value="Diagnostic Centre">Diagnostic Centre</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              State
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-gray-800 bg-white shadow-sm appearance-none">
              <option value="Lagos State, Nigeria">Lagos state, Nigeria</option>
              <option value="FCT Abuja, Nigeria">FCT Abuja, Nigeria</option>
              <option value="Plateau State, Nigeria">
                Plateau State, Nigeria
              </option>
            </select>
          </div>

          <div className="flex items-center space-x-3 pt-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the{" "}
              <span className="underline cursor-pointer">Terms of Service</span>{" "}
              and consent to secure record sharing.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-[#0047AB] hover:bg-[#003B95] text-white font-medium rounded-xl shadow-md transition-all duration-200 text-sm mt-4"
          >
            Get Started
          </button>
        </form>
      </div>

      <div className="text-center mt-8 text-sm text-gray-600">
        Already Have an Account?{" "}
        <Link
          href="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
