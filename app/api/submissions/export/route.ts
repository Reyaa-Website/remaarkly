import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const submissions = await prisma.formSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const headers = [
      'ID',
      'Type',
      'Name',
      'Email',
      'Phone',
      'Company',
      'Country',
      'Monthly Volume',
      'Product Interest',
      'Message',
      'Status',
      'Date Submitted (UTC)',
    ];

    const escapeCsv = (str: string | null | undefined) => {
      if (!str) return '""';
      const clean = String(str).replace(/"/g, '""');
      return `"${clean}"`;
    };

    const rows = submissions.map((s) => [
      escapeCsv(s.id),
      escapeCsv(s.type.toUpperCase()),
      escapeCsv(s.name),
      escapeCsv(s.email),
      escapeCsv(s.phone),
      escapeCsv(s.company),
      escapeCsv(s.country),
      escapeCsv(s.monthlyVolume),
      escapeCsv(s.productInterest),
      escapeCsv(s.message),
      escapeCsv(s.isRead ? 'Read' : 'Unread'),
      escapeCsv(s.createdAt.toISOString()),
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');

    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `remaarkly_submissions_${timestamp}.csv`;

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error: any) {
    console.error('Export CSV error:', error);
    return NextResponse.json({ error: 'Failed to export CSV' }, { status: 500 });
  }
}
