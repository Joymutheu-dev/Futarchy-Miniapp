import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const prediction = searchParams.get('prediction') || '100 followers';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'white',
          background: 'purple',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <p>I predict {prediction} on Farcaster!</p>
        <p>#FutarchyMiniApp</p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      headers: {
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}