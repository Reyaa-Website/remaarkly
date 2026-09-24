import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

// POST: Public submission endpoint (Contact or Demo Request)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      type, 
      name, 
      email, 
      phone, 
      company, 
      message, 
      productInterest, 
      monthlyVolume, 
      country 
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const submissionType = type === 'demo' ? 'demo' : 'contact';

    const submission = await prisma.formSubmission.create({
      data: {
        type: submissionType,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        company: company ? company.trim() : null,
        message: message ? message.trim() : null,
        productInterest: productInterest || 'PetRoute',
        monthlyVolume: monthlyVolume || null,
        country: country || null,
        isRead: false,
      },
    });

    return NextResponse.json(
      { success: true, submissionId: submission.id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Submission creation error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission. Please try again.' },
      { status: 500 }
    );
  }
}

// GET: Protected Admin list submissions endpoint
export async function GET(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); // "all", "contact", "demo"
    const readStatus = searchParams.get('status'); // "all", "unread", "read"
    const search = searchParams.get('search')?.trim();

    const where: any = {};

    if (type && type !== 'all') {
      where.type = type;
    }

    if (readStatus === 'unread') {
      where.isRead = false;
    } else if (readStatus === 'read') {
      where.isRead = true;
    }

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { email: { contains: search } },
        { company: { contains: search } },
        { message: { contains: search } },
      ];
    }

    const submissions = await prisma.formSubmission.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    // Also get quick stats
    const totalCount = await prisma.formSubmission.count();
    const unreadCount = await prisma.formSubmission.count({ where: { isRead: false } });
    const demoCount = await prisma.formSubmission.count({ where: { type: 'demo' } });
    const contactCount = await prisma.formSubmission.count({ where: { type: 'contact' } });

    return NextResponse.json({
      submissions,
      stats: {
        total: totalCount,
        unread: unreadCount,
        demo: demoCount,
        contact: contactCount,
      },
    });
  } catch (error: any) {
    console.error('Fetch submissions error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch form submissions' },
      { status: 500 }
    );
  }
}
