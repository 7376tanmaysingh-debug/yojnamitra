import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
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
  FileCheck2,
  TrendingUp,
  Award
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { loginWithGoogle, loginWithEmail, sendMobileOtp, verifyMobileOtp } = useAuth();
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'mobile' | 'google' | 'email'>('mobile');

  // Mobile OTP state
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
          text: `[Govt of India / JanKalyan] Your secure login verification OTP is ${res.otp}. Valid for 10 minutes. Do not share with anyone.`,
        });
      }
      setTimeout(() => otpInputRefs.current[0]?.focus(), 100);
    } else {
      setError(res.error || 'Failed to dispatch verification OTP.');
    }
  };

  // Handle OTP digit typing
  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) {
      // Paste handling
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
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setError(res.error || 'Invalid OTP code.');
    }
  };

  // 1-Click auto-fill from simulated SMS
  const autoFillTestOtp = () => {
    if (simulatedSms?.code) {
      setOtpDigits(simulatedSms.code.split(''));
      setError(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Top Security & National Banner */}
      <div className="border-b border-slate-800 bg-slate-950/70 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-200">{t.civicPortalTitle}</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">{t.civicSubtitle}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector in top bar */}
            <LanguageSelector variant="dark" />

            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.securedBadge}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Login Content */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 flex-1">
        {/* Left Column: Branding, Mission & Welfare Badges */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-semibold">
            <Landmark className="w-4 h-4 text-emerald-400" />
            <span>{t.officialPortal}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
              {t.appName}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-emerald-400 font-serif">
              {t.schemeFinder}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t.heroDescription}
          </p>

          {/* Key Portal Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">{t.pillar1Title}</span>
                <span className="text-slate-400">{t.pillar1Desc}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 shrink-0">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">{t.pillar2Title}</span>
                <span className="text-slate-400">{t.pillar2Desc}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 shrink-0">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">{t.pillar3Title}</span>
                <span className="text-slate-400">{t.pillar3Desc}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/80 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">{t.pillar4Title}</span>
                <span className="text-slate-400">{t.pillar4Desc}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Secured Login Card */}
        <div className="w-full lg:w-5/12 max-w-md">
          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Card Header with Language Switcher */}
            <div className="bg-slate-950 text-white p-5 border-b border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.authGatewayTitle}</span>
                </span>
                <LanguageSelector variant="dark" />
              </div>
              <h2 className="text-lg font-bold font-serif text-white">
                {t.signInToAccess}
              </h2>
              <p className="text-xs text-slate-400">
                {t.authSubtext}
              </p>
            </div>

            {/* Authentication Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('mobile');
                  setError(null);
                }}
                className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'mobile'
                    ? 'border-emerald-600 text-emerald-800 bg-white font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
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
                    ? 'border-emerald-600 text-emerald-800 bg-white font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
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
                <span>{t.tabGoogle}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('email');
                  setError(null);
                }}
                className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'email'
                    ? 'border-emerald-600 text-emerald-800 bg-white font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>{t.tabEmail}</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-6 space-y-4">
              {/* Error Alert */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* 1. Mobile & OTP Login Tab */}
              {activeTab === 'mobile' && (
                <div className="space-y-4">
                  {/* Simulated SMS Alert Banner when code sent */}
                  {simulatedSms && otpSent && (
                    <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl space-y-1 text-xs text-emerald-950 animate-in fade-in">
                      <div className="flex items-center justify-between font-bold text-emerald-800">
                        <span className="flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>{t.smsReceivedSimulated}</span>
                        </span>
                        <button
                          type="button"
                          onClick={autoFillTestOtp}
                          className="text-[11px] bg-emerald-700 hover:bg-emerald-800 text-white px-2 py-0.5 rounded cursor-pointer transition-colors"
                        >
                          {t.autoFill}: {simulatedSms.code}
                        </button>
                      </div>
                      <p className="text-[11px] text-emerald-900 font-mono leading-relaxed">
                        {simulatedSms.text}
                      </p>
                    </div>
                  )}

                  {!otpSent ? (
                    <form onSubmit={handleSendOtp} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.fullNameLabel}
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder={t.fullNamePlaceholder}
                            className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.mobileLabel}
                        </label>
                        <div className="flex rounded-lg border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
                          <span className="bg-slate-100 px-3 py-2.5 text-xs font-semibold text-slate-600 border-r border-slate-300 flex items-center">
                            🇮🇳 +91
                          </span>
                          <input
                            type="tel"
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                            placeholder="98765 43210"
                            className="flex-1 text-xs px-3 py-2.5 text-slate-900 font-mono tracking-wider focus:outline-none"
                            required
                          />
                        </div>
                        <span className="text-[11px] text-slate-500 mt-1 block">
                          {t.mobileHelper}
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={loading || phone.length < 10}
                        className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>{t.sendingOtp}</span>
                          </>
                        ) : (
                          <>
                            <span>{t.requestOtpBtn}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    /* Step 2: 6 Digit Boxes */
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">
                          {t.enterDigitsSentTo} <strong className="text-slate-900">{maskedPhone}</strong>
                        </span>
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="text-emerald-700 hover:underline font-semibold"
                        >
                          Edit
                        </button>
                      </div>

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
                            className="w-10 sm:w-11 h-12 text-center text-lg font-bold text-slate-900 font-mono border-2 border-slate-200 rounded-lg focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 focus:outline-none transition-all"
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
                            className="text-emerald-700 font-bold hover:underline"
                          >
                            {t.resendCode}
                          </button>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={loading || otpDigits.some((d) => !d)}
                        className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
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

              {/* 2. Google Sign-In Tab */}
              {activeTab === 'google' && (
                <div className="space-y-4 text-center py-2">
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                    {t.googleText}
                  </p>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800">{t.detectedAccount}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                        Ready
                      </span>
                    </div>
                    <p className="font-mono text-slate-600 text-[11px]">
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
                    className="w-full py-2.5 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xs"
                  >
                    {loading ? (
                      <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
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

              {/* 3. Email & Password Tab */}
              {activeTab === 'email' && (
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.emailLabel}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@gmail.com"
                        className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.passwordLabel}
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full text-xs pl-9 pr-10 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-emerald-600" />
                      <span>{t.rememberDevice}</span>
                    </label>
                    <span className="text-slate-400">Default: GovScheme@2026</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !email || !password}
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
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

              {/* 1-Click Fast Track Demo Login Button */}
              <div className="pt-2 border-t border-slate-100 text-center">
                <button
                  type="button"
                  onClick={() => loginWithGoogle('8418tanmaysingh@gmail.com', 'Tanmay Singh')}
                  className="w-full py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.oneClickLogin}</span>
                </button>
              </div>
            </div>

            {/* Security Guarantee Footer */}
            <div className="bg-slate-50 p-3.5 border-t border-slate-200 text-center text-[11px] text-slate-500">
              <div className="flex items-center justify-center gap-1.5 text-slate-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.securityFooter}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Public Service Civic Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-4 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Landmark className="w-4 h-4 text-emerald-400" />
            <span className="font-serif font-bold">{t.appName} {t.schemeFinder}</span>
          </div>

          <div className="flex items-center flex-wrap gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>{t.tollFreePMJAY}</span>
            </span>
            <span>·</span>
            <span>{t.freeServiceNotice}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
