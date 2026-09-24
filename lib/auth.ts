import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { prisma } from './prisma';

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'remaarkly_fallback_admin_secret_key_2026_super_safe'
);

export const AUTH_COOKIE_NAME = 'remaarkly_admin_token';

export interface AdminSession {
  id: string;
  email: string;
  name?: string;
  role: string;
}

export async function signAdminToken(payload: AdminSession): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET);
}

export async function verifyAdminToken(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as AdminSession;
  } catch {
    return null;
  }
}

export async function getCurrentAdmin(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    if (!token) return null;

    const session = await verifyAdminToken(token);
    if (!session?.email) return null;

    // Verify admin still exists in database
    const admin = await prisma.adminUser.findUnique({
      where: { email: session.email },
      select: { id: true, email: true, name: true, role: true },
    });

    if (!admin) return null;

    return {
      id: admin.id,
      email: admin.email,
      name: admin.name || undefined,
      role: admin.role,
    };
  } catch (error) {
    console.error('Error getting current admin session:', error);
    return null;
  }
}
