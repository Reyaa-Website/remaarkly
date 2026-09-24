import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';

interface Context {
  params: Promise<{ id: string }>;
}

// PATCH: Toggle or set read status
export async function PATCH(req: NextRequest, { params }: Context) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    const updated = await prisma.formSubmission.update({
      where: { id },
      data: {
        isRead: typeof body.isRead === 'boolean' ? body.isRead : true,
      },
    });

    return NextResponse.json({ success: true, submission: updated });
  } catch (error: any) {
    console.error('Update submission error:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}

// DELETE: Delete a submission
export async function DELETE(req: NextRequest, { params }: Context) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    await prisma.formSubmission.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: 'Submission deleted' });
  } catch (error: any) {
    console.error('Delete submission error:', error);
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    );
  }
}
