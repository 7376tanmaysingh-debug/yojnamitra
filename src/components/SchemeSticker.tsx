import React from 'react';
import { SchemeSticker as SchemeStickerType, StickerTheme } from '../types';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface SchemeStickerProps {
  sticker: SchemeStickerType;
  variant?: 'card' | 'modal' | 'compact';
  className?: string;
}

const themeStyles: Record<
  StickerTheme,
  {
    border: string;
    bg: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconBorder: string;
    ring: string;
    glow: string;
    accentLine: string;
  }
> = {
  emerald: {
    border: 'border-emerald-300/90',
    bg: 'bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/50',
    text: 'text-emerald-950',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    iconBg: 'bg-emerald-100/90',
    iconBorder: 'border-emerald-300',
    ring: 'ring-emerald-500/20',
    glow: 'shadow-emerald-900/10',
    accentLine: 'bg-emerald-500',
  },
  indigo: {
    border: 'border-indigo-300/90',
    bg: 'bg-gradient-to-br from-indigo-50 via-violet-50/60 to-indigo-100/50',
    text: 'text-indigo-950',
    badgeBg: 'bg-indigo-600',
    badgeText: 'text-white',
    iconBg: 'bg-indigo-100/90',
    iconBorder: 'border-indigo-300',
    ring: 'ring-indigo-500/20',
    glow: 'shadow-indigo-900/10',
    accentLine: 'bg-indigo-500',
  },
  amber: {
    border: 'border-amber-300/90',
    bg: 'bg-gradient-to-br from-amber-50 via-yellow-50/60 to-orange-100/50',
    text: 'text-amber-950',
    badgeBg: 'bg-amber-600',
    badgeText: 'text-white',
    iconBg: 'bg-amber-100/90',
    iconBorder: 'border-amber-300',
    ring: 'ring-amber-500/20',
    glow: 'shadow-amber-900/10',
    accentLine: 'bg-amber-500',
  },
  rose: {
    border: 'border-rose-300/90',
    bg: 'bg-gradient-to-br from-rose-50 via-pink-50/60 to-rose-100/50',
    text: 'text-rose-950',
    badgeBg: 'bg-rose-600',
    badgeText: 'text-white',
    iconBg: 'bg-rose-100/90',
    iconBorder: 'border-rose-300',
    ring: 'ring-rose-500/20',
    glow: 'shadow-rose-900/10',
    accentLine: 'bg-rose-500',
  },
  blue: {
    border: 'border-blue-300/90',
    bg: 'bg-gradient-to-br from-blue-50 via-sky-50/60 to-indigo-100/50',
    text: 'text-blue-950',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    iconBg: 'bg-blue-100/90',
    iconBorder: 'border-blue-300',
    ring: 'ring-blue-500/20',
    glow: 'shadow-blue-900/10',
    accentLine: 'bg-blue-500',
  },
  purple: {
    border: 'border-purple-300/90',
    bg: 'bg-gradient-to-br from-purple-50 via-fuchsia-50/60 to-purple-100/50',
    text: 'text-purple-950',
    badgeBg: 'bg-purple-600',
    badgeText: 'text-white',
    iconBg: 'bg-purple-100/90',
    iconBorder: 'border-purple-300',
    ring: 'ring-purple-500/20',
    glow: 'shadow-purple-900/10',
    accentLine: 'bg-purple-500',
  },
  teal: {
    border: 'border-teal-300/90',
    bg: 'bg-gradient-to-br from-teal-50 via-emerald-50/60 to-teal-100/50',
    text: 'text-teal-950',
    badgeBg: 'bg-teal-600',
    badgeText: 'text-white',
    iconBg: 'bg-teal-100/90',
    iconBorder: 'border-teal-300',
    ring: 'ring-teal-500/20',
    glow: 'shadow-teal-900/10',
    accentLine: 'bg-teal-500',
  },
  cyan: {
    border: 'border-cyan-300/90',
    bg: 'bg-gradient-to-br from-cyan-50 via-sky-50/60 to-cyan-100/50',
    text: 'text-cyan-950',
    badgeBg: 'bg-cyan-600',
    badgeText: 'text-white',
    iconBg: 'bg-cyan-100/90',
    iconBorder: 'border-cyan-300',
    ring: 'ring-cyan-500/20',
    glow: 'shadow-cyan-900/10',
    accentLine: 'bg-cyan-500',
  },
  orange: {
    border: 'border-orange-300/90',
    bg: 'bg-gradient-to-br from-orange-50 via-amber-50/60 to-orange-100/50',
    text: 'text-orange-950',
    badgeBg: 'bg-orange-600',
    badgeText: 'text-white',
    iconBg: 'bg-orange-100/90',
    iconBorder: 'border-orange-300',
    ring: 'ring-orange-500/20',
    glow: 'shadow-orange-900/10',
    accentLine: 'bg-orange-500',
  },
};

export const SchemeSticker: React.FC<SchemeStickerProps> = ({
  sticker,
  variant = 'card',
  className = '',
}) => {
  const styles = themeStyles[sticker.theme] || themeStyles.emerald;

  if (variant === 'compact') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[11px] font-semibold tracking-tight shadow-2xs ${styles.bg} ${styles.border} ${styles.text} ${className}`}
      >
        <span className="text-xs leading-none select-none">{sticker.emoji}</span>
        <span className="truncate">{sticker.badge}</span>
      </span>
    );
  }

  if (variant === 'modal') {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border p-3.5 shadow-sm transition-transform ${styles.bg} ${styles.border} ${styles.ring} ring-1 ${className}`}
      >
        {/* Holographic light reflection sheen */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/30 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center gap-3">
          {/* Die-cut circular seal */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner border shrink-0 ${styles.iconBg} ${styles.iconBorder} ring-2 ring-white/80`}
          >
            <span className="transform hover:scale-110 transition-transform select-none">
              {sticker.emoji}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${styles.badgeBg} ${styles.badgeText} shadow-xs inline-flex items-center gap-1`}
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>{sticker.badge}</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium flex items-center gap-0.5">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>Official Entitlement Sticker</span>
              </span>
            </div>
            <p className={`text-sm font-bold leading-tight ${styles.text}`}>
              {sticker.title}
            </p>
            <p className="text-xs text-slate-600 line-clamp-1 mt-0.5 font-medium">
              {sticker.tagline}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default: 'card' variant - Cool tactile sticker badge
  return (
    <div
      className={`group/sticker relative overflow-hidden rounded-lg border px-3 py-2 transition-all duration-300 transform -rotate-[0.8deg] hover:rotate-0 hover:shadow-md ${styles.bg} ${styles.border} ${styles.ring} ring-1 shadow-xs ${className}`}
    >
      {/* Glossy diagonal sheen reflection */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover/sticker:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Decorative tiny corner notch / die-cut stamp indicator */}
      <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-white/50 border-b border-l border-slate-200/50 rounded-bl-sm pointer-events-none" />

      <div className="flex items-center gap-2.5">
        {/* Tactile Emoji Seal with dual-ring */}
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shadow-2xs border shrink-0 ${styles.iconBg} ${styles.iconBorder} ring-1 ring-white/90 select-none group-hover/sticker:scale-105 transition-transform`}
        >
          {sticker.emoji}
        </div>

        {/* Sticker Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 leading-none mb-1">
            <span
              className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${styles.badgeBg} ${styles.badgeText} shadow-2xs inline-block`}
            >
              {sticker.badge}
            </span>
          </div>

          <div className={`text-xs font-bold leading-snug truncate ${styles.text}`}>
            {sticker.title}
          </div>

          <div className="text-[10px] text-slate-600 truncate font-medium mt-0.5">
            {sticker.tagline}
          </div>
        </div>
      </div>
    </div>
  );
};
