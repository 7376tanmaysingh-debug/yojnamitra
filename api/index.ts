// Vercel Serverless Function entry point for JanKalyan API routes
export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const url = req.url || '';

  // Parse body if string
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  body = body || {};

  // 1. Send OTP
  if (url.includes('/api/auth/send-otp') || url.includes('/auth/send-otp')) {
    const cleanPhone = (body.phone || '').replace(/\D/g, '');
    const last4 = cleanPhone.slice(-4) || '3210';
    const maskedPhone = `+91 ••••• ••${last4}`;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    return res.status(200).json({
      success: true,
      message: `Verification code dispatched to ${maskedPhone}`,
      maskedPhone,
      otp,
      expiresInSeconds: 600,
    });
  }

  // 2. Verify OTP
  if (url.includes('/api/auth/verify-otp') || url.includes('/auth/verify-otp')) {
    const cleanPhone = (body.phone || '9876543210').replace(/\D/g, '');
    const name = body.name || `Citizen ${cleanPhone.slice(-4)}`;

    return res.status(200).json({
      success: true,
      message: 'Mobile identity verified successfully.',
      token: 'jks_m_' + Math.random().toString(36).substring(2) + Date.now().toString(36),
      user: {
        id: 'cit-' + Math.floor(100000 + Math.random() * 900000),
        name,
        phone: `+91 ${cleanPhone.slice(-10, -5)} ${cleanPhone.slice(-5)}`,
        authProvider: 'mobile_otp',
        isAadhaarLinked: true,
        isPhoneVerified: true,
        isEmailVerified: false,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
    });
  }

  // 3. Google Sign-In
  if (url.includes('/api/auth/google') || url.includes('/auth/google')) {
    const targetEmail = (body.email || '8418tanmaysingh@gmail.com').trim().toLowerCase();
    const targetName = body.name || 'Tanmay Singh';

    return res.status(200).json({
      success: true,
      message: 'Signed in with Google successfully.',
      token: 'jks_g_' + Math.random().toString(36).substring(2) + Date.now().toString(36),
      user: {
        id: 'cit-982341',
        name: targetName,
        email: targetEmail,
        phone: '+91 98765 43210',
        authProvider: 'google',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        isAadhaarLinked: true,
        isPhoneVerified: true,
        isEmailVerified: true,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
    });
  }

  // 4. Email Login
  if (url.includes('/api/auth/email/login') || url.includes('/auth/email/login')) {
    const email = (body.email || 'citizen@gov.in').trim().toLowerCase();
    const namePart = email.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    return res.status(200).json({
      success: true,
      message: 'Logged in successfully.',
      token: 'jks_e_' + Math.random().toString(36).substring(2) + Date.now().toString(36),
      user: {
        id: 'cit-' + Math.floor(100000 + Math.random() * 900000),
        name: formattedName || 'Citizen User',
        email,
        authProvider: 'email',
        isAadhaarLinked: false,
        isPhoneVerified: false,
        isEmailVerified: true,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      },
    });
  }

  // 5. Auth status check
  if (url.includes('/api/auth/me') || url.includes('/auth/me')) {
    return res.status(200).json({
      success: true,
      user: {
        id: 'cit-982341',
        name: 'Tanmay Singh',
        email: '8418tanmaysingh@gmail.com',
        phone: '+91 98765 43210',
        authProvider: 'google',
        isAadhaarLinked: true,
        isPhoneVerified: true,
        isEmailVerified: true,
      },
    });
  }

  // Default response for any other api route
  return res.status(200).json({ status: 'ok', service: 'JanKalyan API' });
}
