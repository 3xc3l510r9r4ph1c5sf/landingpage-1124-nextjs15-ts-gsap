import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.CODA_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'Token not found in environment variables' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://coda.io/apis/v1/whoami', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({
        status: 'success',
        tokenValid: true,
        user: data,
      });
    } else {
      return NextResponse.json(
        {
          status: 'error',
          tokenValid: false,
          statusCode: response.status,
          statusText: response.statusText,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
