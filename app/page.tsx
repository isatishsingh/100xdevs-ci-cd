"use client";

import { useState, useEffect } from "react";

interface Confetti {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2"];

export default function BirthdayWish() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [wishes, setWishes] = useState<string[]>([
    "🎉 Wishing you an amazing year ahead!",
    "🎂 Happy Birthday, Aashish!",
    "🎈 May all your dreams come true",
    "🌟 Another year older, another year wiser",
    "🎊 You're awesome! Have a fantastic day!",
  ]);
  const [newWish, setNewWish] = useState("");

  useEffect(() => {
    // Generate confetti on page load
    const generateConfetti = () => {
      const newConfetti: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setConfetti(newConfetti);
    };

    generateConfetti();

    // Add more confetti every 3 seconds
    const interval = setInterval(generateConfetti, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.trim()) {
      setWishes([...wishes, newWish]);
      setNewWish("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Confetti Background */}
      <div className="fixed inset-0 pointer-events-none">
        {confetti.map((conf) => (
          <div
            key={conf.id}
            className="animate-confetti absolute w-2 h-2 rounded-full"
            style={{
              left: `${conf.left}%`,
              backgroundColor: conf.color,
              animation: `confetti-fall ${conf.duration}s linear`,
              animationDelay: `${conf.delay}s`,
              top: "-10px",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20 px-4">
        {/* Decorative Balloons */}
        <div className="absolute top-10 left-5 text-5xl animate-float">🎈</div>
        <div className="absolute top-20 right-10 text-5xl animate-float" style={{ animationDelay: "1s" }}>
          🎈
        </div>
        <div className="absolute bottom-32 left-10 text-5xl animate-float" style={{ animationDelay: "2s" }}>
          🎁
        </div>
        <div className="absolute bottom-40 right-5 text-5xl animate-float" style={{ animationDelay: "1.5s" }}>
          🎉
        </div>

        {/* Main Greeting */}
        <div className="text-center mb-12 animate-bounce-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-rainbow">
            Happy Birthday!
          </h1>
          <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Aashish Singh
          </p>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold">
            🎂 Today is your special day! 🎂
          </p>
        </div>

        {/* Celebration Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-md">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center animate-slide-in-up shadow-lg">
            <p className="text-4xl font-bold text-blue-500">366</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Days Celebrated</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center animate-slide-in-up shadow-lg" style={{ animationDelay: "0.1s" }}>
            <p className="text-4xl font-bold text-purple-500">∞</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Memories Made</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center animate-slide-in-up shadow-lg" style={{ animationDelay: "0.2s" }}>
            <p className="text-4xl font-bold text-pink-500">💫</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Wishes</p>
          </div>
        </div>

        {/* Wishes Section */}
        <div className="w-full max-w-2xl">
          {/* Add Wish Form */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Share Your Wishes 💌</h2>
            <form onSubmit={handleWishSubmit} className="flex gap-3">
              <input
                type="text"
                value={newWish}
                onChange={(e) => setNewWish(e.target.value)}
                placeholder="Write your birthday wish here..."
                className="flex-1 px-4 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg transition-all transform hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>

          {/* Wishes Display */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Wishes from Everyone ✨
            </h3>
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-700 dark:text-gray-200 text-lg">{wish}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Party Face */}
        <div className="text-8xl mt-12 animate-bounce">
          🥳
        </div>
      </main>
    </div>
  );
}
