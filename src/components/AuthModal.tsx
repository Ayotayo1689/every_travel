"use client";

import type React from "react";

import { X } from "lucide-react";
import { useState } from "react";
import { AppleIcon, FacebookIcon, GoogleIcon } from "@/assets/icons/Icons";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/features/modalSlice";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: string;
}

export default function AuthModal({
  isOpen,
  onClose,
  modalType,
}: AuthModalProps) {
  const [signupStep, setSignupStep] = useState(1);
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-xs transition-opacity">
      <div
        className=" w-[600px] max-h-[80vh] overflow-auto   rounded-lg bg-white p-6 shadow-xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex  items-center justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-[#f5f3f3] p-1.5 hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {modalType === "login" ? (
          <LoginForm />
        ) : (
          <SignupForm
            step={signupStep}
            setStep={setSignupStep}
            email={email}
            setEmail={setEmail}
          />
        )}
      </div>
    </div>
  );
}

function LoginForm() {
  const dispatch = useDispatch();

  return (
    <div className="px-4">
      <h2 className="text-2xl font-poppins font-[700] text-center text-[#000] mb-4">
        Login to Your EveryTravel Account
      </h2>
      <p className="text-center mb-10 text-gray-600 ">
        Log in to manage your bookings, access exclusive deals, and explore
        amazing travel options.
      </p>

      <form className="space-y-6">
        <div>
          <input
            type="email"
            className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
            placeholder="Enter your email address"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
            placeholder="Create password"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8C1.5 8 3.5 3 8 3C12.5 3 14.5 8 14.5 8C14.5 8 12.5 13 8 13C3.5 13 1.5 8 1.5 8Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center mb-12 mt-4   justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-[#076476] focus:ring-[#076476]"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-[#076476] hover:underline">
            Forgot password
          </a>
        </div>

        <button
          type="submit"
          className="w-full  py-3 rounded-full font-[700] text-[16px] bg-[#076476] px-5  text-white hover:text-[#076476] hover:bg-[#ffce44]"
        >
          Login
        </button>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 flex-shrink text-gray-500 text-sm">
            or login with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="flex items-center justify-center rounded-full border border-gray-300 p-5 hover:bg-gray-50"
          >
            <GoogleIcon />
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-full border border-gray-300 p-5 hover:bg-gray-50"
          >
            <AppleIcon />
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-full border border-gray-300 p-5 hover:bg-gray-50"
          >
            <FacebookIcon />
          </button>
        </div>
      </form>

      <div className="mt-6 mb-8 text-center text-sm">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => dispatch(openModal({ type: "signup" }))}
            className="text-[#076476] hover:underline font-medium"
          >
            Create account
          </button>
        </p>
      </div>
    </div>
  );
}

function SignupForm({
  step,
  setStep,
  email,
  setEmail,
}: {
  step: number;
  setStep: (step: number) => void;
  email: string;
  setEmail: (email: string) => void;
}) {
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBackToSignup = () => {
    setStep(1);
  };
  const dispatch = useDispatch();

  return (
    <div className="px-4 ">
      {step === 1 && (
        <>
          <h2 className="text-[24px] font-[700] font-poppins text-center  mb-2">
            Create Your EveryTravel Account
          </h2>
          <p className="text-center text-[18px] text-gray-600 mb-8">
            Sign up to enjoy member-only rewards
          </p>

          <form className="space-y-6" onSubmit={handleContinue}>
            <div>
              <input
                type="text"
                className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
                placeholder="Last name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-2">
              <div className="w-1/3">
                <select className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none">
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+33">+33</option>
                </select>
              </div>
              <div className="w-2/3">
                <input
                  type="tel"
                  className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
                placeholder="Create password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8C1.5 8 3.5 3 8 3C12.5 3 14.5 8 14.5 8C14.5 8 12.5 13 8 13C3.5 13 1.5 8 1.5 8Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded border border-gray-300 px-4 py-3 focus:border-[#076476] focus:outline-none"
                placeholder="Confirm password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8C1.5 8 3.5 3 8 3C12.5 3 14.5 8 14.5 8C14.5 8 12.5 13 8 13C3.5 13 1.5 8 1.5 8Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#076476] focus:ring-[#076476]"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-[#076476] hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#076476] hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full  py-3 rounded-full font-[700] text-[16px] bg-[#076476] px-5  text-white hover:text-[#076476] hover:bg-[#ffce44]"
            >
              Proceed
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 flex-shrink text-gray-500 text-sm">
                or login with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="flex items-center justify-center rounded-full border border-gray-300 p-5 hover:bg-gray-50"
              >
                <GoogleIcon />
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded-full border border-gray-300 p-5 hover:bg-gray-50"
              >
                <AppleIcon />
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded-full border border-gray-300 p-5 hover:bg-gray-50"
              >
                <FacebookIcon />
              </button>
            </div>

            <div className="mt-6 mb-8 text-center text-sm">
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => dispatch(openModal({ type: "login" }))}
                  className="text-[#076476] hover:underline font-medium"
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-poppins font-[700] text-center text-[#000] mb-4">
            Verify Your Email Address
          </h2>
          <p className="text-center mb-10 text-gray-600 ">
            We've sent a 6-digit verification code to{" "}
            {email || "johndoe@gmail.com"}
            <br />
            Enter the code below to complete your sign-up.
          </p>

          <form className="space-y-6" onSubmit={handleContinue}>
            <div className="flex justify-center gap-2">
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup>
                  <InputOTPSlot
                    className="w-16 h-16 text-2xl font-[400]"
                    index={0}
                  />
                </InputOTPGroup>

                <InputOTPGroup>
                  <InputOTPSlot
                    className="w-16 h-16 text-2xl font-[400]"
                    index={1}
                  />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot
                    className="w-16 h-16 text-2xl font-[400]"
                    index={2}
                  />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot
                    className="w-16 h-16 text-2xl font-[400]"
                    index={3}
                  />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot
                    className="w-16 h-16 text-2xl font-[400]"
                    index={4}
                  />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot
                    className="w-16 h-16 text-2xl font-[400]"
                    index={5}
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="text-center my-16">
              <p className="text-sm text-gray-600">
                Didn't get the code?{" "}
                <button
                  type="button"
                  className="text-[#076476] hover:underline"
                >
                  RESEND
                </button>{" "}
                in 60secs
              </p>
            </div>

            <button
              type="submit"
              className="w-full  py-3 rounded-full font-[700] text-[16px] bg-[#076476] px-5  text-white hover:text-[#076476] hover:bg-[#ffce44]"
            >
              Verify email
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleBackToSignup}
                className="text-sm text-[#076476] hover:underline"
              >
                Back to sign up
              </button>
            </div>
          </form>
        </>
      )}

      {step === 3 && (
        <>
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#000] mb-4">
              You're all set
            </h2>
            <p className="text-black text-[16px] mb-6">
              Welcome to EveryTravel. Start exploring hotels, booking rides, and
              <br />
              planning your next trip with ease.
            </p>

            <button
              type="button"
              className="py-3 rounded-full font-[700] text-[16px] bg-[#076476] px-5  text-white hover:text-[#076476] hover:bg-[#ffce44]"
            >
              Get Started
            </button>
          </div>
        </>
      )}
    </div>
  );
}
