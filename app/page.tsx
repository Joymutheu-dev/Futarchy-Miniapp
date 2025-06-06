'use client';
import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/frame-sdk';

export default function FutarchyMiniApp() {
  const [prediction, setPrediction] = useState('100');
  const appUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

  useEffect(() => {
    sdk.actions.ready({ disableNativeGestures: true });
  }, []);

  const handleCast = async () => {
    try {
      await sdk.actions.cast({
        message: `I predict ${prediction} followers! Join the futarchy game! #FutarchyMiniApp ${appUrl}/dynamic-image/prediction?prediction=${prediction}`,
      });
      alert('Prediction casted!');
    } catch (error) {
      console.error('Error casting:', error);
      alert('Failed to cast prediction.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Futarchy Follower Booster</h1>
      <p>Predict how many followers this cast will gain!</p>
      <input
        type="number"
        value={prediction}
        onChange={(e) => setPrediction(e.target.value)}
        placeholder="Enter follower count"
        style={{ padding: '10px', margin: '10px' }}
      />
      <button
        onClick={handleCast}
        style={{ padding: '10px 20px', background: 'purple', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Cast Prediction
      </button>
    </div>
  );
}