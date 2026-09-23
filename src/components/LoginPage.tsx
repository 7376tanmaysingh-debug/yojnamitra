import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { SupportedLanguage } from '../i18n/translations';
import {
  Landmark,
  ShieldCheck,
  Smartphone,
  Mail,
  Lock,
  ArrowRight,
  RefreshCw,
  Eye,
  EyeOff,
  AlertCircle,
  KeyRound,
  User,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Zap,
  Check,
  Globe,
  HelpCircle
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { loginWithGoogle, loginWithEmail, sendMobileOtp, verifyMobileOtp } = useAuth();
  const { language, setLanguage, availableLanguages, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'mobile' | 'google' | 'email'>('mobile');

  // Mobile OTP state (pre-filled with clean sample for instant normal user success)
  const [phone, setPhone] = useState('9876543210');
  const [fullName, setFullName] = useState('Tanmay Singh');
  const [otpSent, setOtpSent] = useState(false);
  const [maskedPhone, setMaskedPhone] = useState('');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [simulatedSms, setSimulatedSms] = useState<{ code: string; text: string } | null>(null);
  const [countdown, setCountdown] = useState(60);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Email state
  const [email, setEmail] = useState('8418tanmaysingh@gmail.com');
  const [password, setPassword] = useState('GovScheme@2026');
  const [showPassword, setShowPassword] = useState(false);

  // Status state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Countdown timer for OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && countdown > 0) {
      timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, countdown]);

  // Handle Send OTP
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);
    setLoading(true);

    const clean = phone.replace(/\D/g, '');
    if (clean.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      setLoading(false);
      return;
    }

    const res = await sendMobileOtp(phone);
    setLoading(false);

    if (res.success && res.maskedPhone) {
      setOtpSent(true);
      setMaskedPhone(res.maskedPhone);
      setCountdown(60);
      setOtpDigits(['', '', '', '', '', '']);
      if (res.otp) {
        setSimulatedSms({
          code: res.otp,
          text: `[JanKalyan OTP] Your login verification code is ${res.otp}. Valid for 10 minutes.`,
        });
      }
      setTimeout(() => otpInputRefs.current[0]?.focus(), 150);
    } else {
      setError(res.error || 'Failed to dispatch verification OTP.');
    }
  };

  // Handle OTP digit typing
  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) {
      const pasted = val.replace(/\D/g, '').slice(0, 6).split('');
      const newDigits = [...otpDigits];
      pasted.forEach((char, i) => {
        if (i < 6) newDigits[i] = char;
      });
      setOtpDigits(newDigits);
      const nextFocus = Math.min(pasted.length, 5);
      otpInputRefs.current[nextFocus]?.focus();
      return;
    }

    const cleanVal = val.replace(/\D/g, '');
    const newDigits = [...otpDigits];
    newDigits[index] = cleanVal;
    setOtpDigits(newDigits);

    if (cleanVal && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Verify OTP
  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);

    const otpCode = otpDigits.join('');
    if (otpCode.length < 6) {
      setError('Please enter the 6-digit verification code.');
      return;
    }

    setLoading(true);
    const res = await verifyMobileOtp(phone, otpCode, fullName);
    setLoading(false);

    if (!res.success) {
      setError(res.error || 'Invalid OTP code. Please check and try again.');
    }
  };

  // 1-Click Auto-Fill & Instant Submit
  const handleAutoFillAndSubmit = async () => {
    if (simulatedSms?.code) {
      const codeDigits = simulatedSms.code.split('');
      setOtpDigits(codeDigits);
      setError(null);
      setLoading(true);
      const res = await verifyMobileOtp(phone, simulatedSms.code, fullName);
      setLoading(false);
      if (!res.success) {
        setError(res.error || 'Invalid OTP code.');
      }
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    const ok = await loginWithGoogle('8418tanmaysingh@gmail.com', 'Tanmay Singh');
    setLoading(false);
    if (!ok) {
      setError('Google Sign-In failed. Please try again.');
    }
  };

  // Handle Email Login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await loginWithEmail(email, password);
    setLoading(false);

    if (!res.success) {
      setError(res.error || 'Invalid email or password.');
    }
  };

  // 1-Click Fast Instant Login
  const handleInstantDemoLogin = async () => {
    setError(null);
    setLoading(true);
    await loginWithGoogle('8418tanmaysingh@gmail.com', 'Tanmay Singh');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800">
      {/* Top Civic Tricolor Banner */}
      <div className="bg-white border-b border-slate-200 shadow-2xs">
        {/* Subtle Indian Tricolor accent line */}
        <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-emerald-600 w-full" />

        <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* Official badge */}
          <div className="flex items-center gap-2 text-slate-700">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="font-semibold text-slate-900">
              {t.civicPortalTitle}
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-slate-600">
              100% Free Official Service (निःशुल्क सेवा)
            </span>
          </div>

          {/* Quick 1-Tap Language Bar */}
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-700 hidden sm:inline" />
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              {availableLanguages.map((lang) => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setLanguage(lang.code as SupportedLanguage)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span>{lang.nativeLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Login Area */}
      <div className="max-w-5xl mx-auto w-full px-4 py-8 sm:py-12 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Left Side: Friendly Welcome & Clarity */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            <Landmark className="w-4 h-4 text-emerald-700" />
            <span>जन कल्याण · JanKalyan</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif leading-tight">
              {t.schemeFinder}
            </h1>
            <p className="text-base sm:text-lg font-medium text-emerald-800">
              Check your eligibility for 28+ government schemes (Scholarships, Skill India, Internships, PM-Kisan & more) in 1 minute.
            </p>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Simple, easy and safe. No passwords to remember. Enter your phone number or log in with 1-click to see schemes you are entitled to.
          </p>

          {/* 3 Simple Human Guarantees */}
          <div className="space-y-2.5 pt-2 max-w-md mx-auto lg:mx-0 text-left">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                ✓
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">100% Free Public Service</span>
                <span className="text-slate-500">Zero fees. No middlemen or agents required.</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                🔒
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Safe & Private</span>
                <span className="text-slate-500">No bank password or sensitive biometric data needed.</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                ₹
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Covers All Key Schemes</span>
                <span className="text-slate-500">PM-Kisan, Ayushman Bharat, Awas, Ladli Behna, SSY & more.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Simple Login Card */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
            {/* 1. FASTEST: 1-Click Instant Login Header Banner */}
            <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 p-4 text-white text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-200 mb-1">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Easiest & Fastest Option</span>
              </div>
              <button
                type="button"
                onClick={handleInstantDemoLogin}
                disabled={loading}
                className="w-full py-2.5 px-4 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                {loading ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-emerald-700" />
                ) : (
                  <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
                )}
                <span>1-Click Direct Login (Tanmay Singh)</span>
              </button>
              <p className="text-[11px] text-emerald-100/90 mt-1.5">
                No typing required — opens full 28+ schemes directory instantly
              </p>
            </div>

            {/* Divider */}
            <div className="relative py-2 text-center bg-slate-50 border-b border-slate-200">
              <span className="bg-slate-50 px-3 text-xs font-semibold text-slate-500">
                — OR LOGIN WITH YOUR DETAILS —
              </span>
            </div>

            {/* Login Tab Switcher (Clear & Big) */}
            <div className="flex border-b border-slate-200 bg-white text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('mobile');
                  setError(null);
                }}
                className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'mobile'
                    ? 'border-emerald-600 text-emerald-900 bg-emerald-50/50 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>{t.tabMobileOtp}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('google');
                  setError(null);
                }}
                className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'google'
                    ? 'border-emerald-600 text-emerald-900 bg-emerald-50/50 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('email');
                  setError(null);
                }}
                className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'email'
                    ? 'border-emerald-600 text-emerald-900 bg-emerald-50/50 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>{t.tabEmail}</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-5 sm:p-6 space-y-4">
              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* 1. Mobile & OTP (Simple, big inputs) */}
              {activeTab === 'mobile' && (
                <div className="space-y-4">
                  {/* If OTP Sent -> Show friendly SMS box */}
                  {otpSent && simulatedSms && (
                    <div className="p-4 bg-emerald-50 border-2 border-emerald-300 rounded-xl space-y-2.5 text-emerald-950 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                        <span className="flex items-center gap-1.5">
                          <Smartphone className="w-4 h-4 text-emerald-700" />
                          <span>SMS Received on {maskedPhone}:</span>
                        </span>
                      </div>

                      <div className="bg-white p-2.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-500 block">Your OTP Code:</span>
                          <span className="text-xl font-black font-mono tracking-widest text-emerald-800">
                            {simulatedSms.code}
                          </span>
                        </div>

                        {/* 1-Tap Auto-fill and submit */}
                        <button
                          type="button"
                          onClick={handleAutoFillAndSubmit}
                          disabled={loading}
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer transition-colors flex items-center gap-1.5"
                        >
                          <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-400" />
                          <span>Auto-Fill & Enter</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {!otpSent ? (
                    <form onSubmit={handleSendOtp} className="space-y-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {t.fullNameLabel}
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full text-sm pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 font-medium bg-slate-50/50"
                            required
                          />
                        </div>
                      </div>

                      {/* Mobile phone number input (large and clean) */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {t.mobileLabel}
                        </label>
                        <div className="flex rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 bg-white">
                          <span className="bg-slate-100 px-3.5 py-3 text-sm font-bold text-slate-700 border-r border-slate-300 flex items-center gap-1 shrink-0">
                            🇮🇳 +91
                          </span>
                          <input
                            type="tel"
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                            placeholder="98765 43210"
                            className="flex-1 text-base px-3 py-3 text-slate-900 font-mono tracking-wider font-semibold focus:outline-none"
                            required
                          />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>We'll send a free 6-digit verification SMS code</span>
                        </p>
                      </div>

                      {/* Big Get OTP Button */}
                      <button
                        type="submit"
                        disabled={loading || phone.length < 10}
                        className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>{t.sendingOtp}</span>
                          </>
                        ) : (
                          <>
                            <span>{t.requestOtpBtn}</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    /* Step 2: Enter 6 Digits */
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">
                          Code sent to <strong className="text-slate-900">{maskedPhone}</strong>
                        </span>
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="text-emerald-700 hover:underline font-bold"
                        >
                          Change Number
                        </button>
                      </div>

                      {/* 6 Big Digits */}
                      <div className="flex justify-between gap-1.5 sm:gap-2">
                        {otpDigits.map((digit, idx) => (
                          <input
                            key={idx}
                            ref={(el) => {
                              otpInputRefs.current[idx] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                            className="w-10 sm:w-12 h-13 text-center text-xl font-black text-slate-900 font-mono border-2 border-slate-300 rounded-xl focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 focus:outline-none transition-all bg-white"
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                        <span>{t.didntReceive}</span>
                        {countdown > 0 ? (
                          <span className="font-mono text-slate-400">{t.resendIn} {countdown}s</span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSendOtp()}
                            className="text-emerald-700 font-bold hover:underline cursor-pointer"
                          >
                            {t.resendCode}
                          </button>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={loading || otpDigits.some((d) => !d)}
                        className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>{t.verifying}</span>
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="w-4 h-4" />
                            <span>{t.verifyAndEnter}</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* 2. Google Sign-In */}
              {activeTab === 'google' && (
                <div className="space-y-4 text-center py-2">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sign in with your Google account for quick access across all devices.
                  </p>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Verified Citizen Account</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                        Ready
                      </span>
                    </div>
                    <p className="font-mono text-slate-700 text-xs font-semibold">
                      8418tanmaysingh@gmail.com
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      Applicant: Tanmay Singh
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full py-3 px-4 bg-white border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xs"
                  >
                    {loading ? (
                      <RefreshCw className="w-4 h-4 animate-spin text-emerald-700" />
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    )}
                    <span>{t.continueWithGoogle}</span>
                  </button>
                </div>
              )}

              {/* 3. Email & Password */}
              {activeTab === 'email' && (
                <form onSubmit={handleEmailLogin} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.emailLabel}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@gmail.com"
                        className="w-full text-xs pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.passwordLabel}
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full text-xs pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 font-medium"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600 pt-0.5">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-emerald-600" />
                      <span>{t.rememberDevice}</span>
                    </label>
                    <span className="text-[11px] text-slate-400">Default: GovScheme@2026</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !email || !password}
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <>
                        <KeyRound className="w-3.5 h-3.5" />
                        <span>{t.signInWithEmail}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Bottom Trust Badge */}
            <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free Government Scheme Portal · No Personal Password Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simple, Clean Civic Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Landmark className="w-4 h-4 text-emerald-700" />
            <span>JanKalyan Welfare Scheme Portal</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-slate-600">
              <PhoneCall className="w-3 h-3 text-emerald-700" />
              <span>Toll-Free Helpline: 14555 / 1551</span>
            </span>
            <span>·</span>
            <span>100% Free Public Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
