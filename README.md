# Futarchy-Miniapp
A Farcaster Mini App that uses futarchy-based prediction markets to boost follower growth. Users predict follower counts for accounts and share engaging predictions to increase visibility on Farcaster.

## Features

- Predict follower growth for accounts using a Farcaster Frame.
- Stake tokens on predictions via a smart contract on base 
- Generate dynamic shareable images for viral casts.
- Engage users with gamified prediction markets to drive follower growth.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- [Neynar API Key]for Farcaster integration
- [Base Minikit Project ID]
- A wallet for smart contract interactions
- [Cloudflared] for local testing

## Setup

1. **Clone this Repository**:
   
2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_URL=http://localhost:3000
   NEXT_PUBLIC_MINIKIT_PROJECT_ID=your-minikit-project-id
   NEYNAR_API_KEY=your-neynar-api-key
   JWT_SECRET=your-jwt-secret
   REDIS_URL=your-redis-url
   REDIS_TOKEN=your-redis-token
   ```
  

   4 . **Run Locally**:
   ```bash
   npm run dev
   ```
   

5. **Test with Farcaster**:
   Expose the local server using `cloudflared` or `ngrok`:
   ```bash
   cloudflared tunnel --url http://localhost:3000
   ```
   Test the generated URL in [Warpcast’s Embed tool](https://warpcast.com).





