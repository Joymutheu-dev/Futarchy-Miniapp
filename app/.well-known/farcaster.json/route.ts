import { NextResponse } from 'next/server';

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const farcasterConfig = {
    accountAssociation: {
      header: '',
      payload: '',
      signature: '',
    },
    frame: {
      version: '1',
      name: 'Futarchy Follower Booster',
      iconUrl: `${appUrl}/images/icon.png`,
      homeUrl: `${appUrl}`,
      imageUrl: `${appUrl}/images/feed.png`,
      screenshotUrls: [],
      tags: ['farcaster', 'futarchy', 'social', 'prediction-market'],
      primaryCategory: 'social',
      buttonTitle: 'Launch Futarchy App',
      splashImageUrl: `${appUrl}/images/splash.png`,
    },
  };

  return NextResponse.json(farcasterConfig, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}