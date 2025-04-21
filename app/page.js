"use client";

import { useState, useRef } from 'react';

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Cantonese Pronunciation Guide</h1>
      <p className="text-center mb-8">
        Learn Cantonese pronunciation with audio examples.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PhraseCard 
          chinese="你好" 
          jyutping="nei5 hou2" 
          english="Hello" 
          audioFile="/audio/hello.mp3" 
        />
        <PhraseCard 
          chinese="早晨" 
          jyutping="zou2 san4" 
          english="Good morning" 
          audioFile="/audio/good-morning.mp3" 
        />
        <PhraseCard 
          chinese="多謝" 
          jyutping="do1 ze6" 
          english="Thank you" 
          audioFile="/audio/thank-you.mp3" 
        />
        <PhraseCard 
          chinese="再見" 
          jyutping="zoi3 gin3" 
          english="Goodbye" 
          audioFile="/audio/goodbye.mp3" 
        />
        <PhraseCard 
          chinese="唔該" 
          jyutping="m4 goi1" 
          english="Please" 
          audioFile="/audio/please.mp3" 
        />
        <PhraseCard 
          chinese="對不起" 
          jyutping="deoi3 bat1 hei2" 
          english="Sorry" 
          audioFile="/audio/sorry.mp3" 
        />
        <PhraseCard 
          chinese="食咗飯未" 
          jyutping="sik6 zo2 faan6 mei6" 
          english="Have you eaten yet?" 
          audioFile="/audio/have-you-eaten-yet.mp3" 
        />
      </div>
    </div>
  );
}

function PhraseCard({ chinese, jyutping, english, audioFile }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback error:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold">{chinese}</h3>
          <p className="text-sm text-gray-500">{jyutping}</p>
          <p className="text-sm">{english}</p>
        </div>
        <button 
          onClick={togglePlayback}
          className="border rounded-full w-8 h-8 flex items-center justify-center"
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>
      <audio 
        ref={audioRef}
        src={audioFile}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
