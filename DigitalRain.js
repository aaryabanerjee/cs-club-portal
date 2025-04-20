import React, { useEffect, useRef } from 'react';
import './DigitalRain.css';

const DigitalRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital rain effect
    const columns = canvas.width / 20; // Number of columns based on font size
    const drops = Array(Math.floor(columns)).fill(1); // Y-coordinate of each drop
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'.split('');

    const draw = () => {
      // Add a semi-transparent black layer to create a fading effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.fillStyle = '#0F0'; // Matrix green
      ctx.font = '15px monospace';

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Draw the character
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top when it reaches the bottom
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(draw);
    };

    // Start the animation
    draw();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="digital-rain" />;
};

export default DigitalRain;