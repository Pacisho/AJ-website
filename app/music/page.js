'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MusicPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [playingSong, setPlayingSong] = useState(null);
  const audioRef = useRef(null);

  const handlePlaySong = (audioSrc) => {
  const globalAudio = document.getElementById('globalAudio');
  if (globalAudio) {
    globalAudio.src = audioSrc;
    globalAudio.play().catch((err) => console.error("ไม่สามารถเล่นเพลงได้:", err));
  }
};


  const songs = [
    {
      id: 1,
      title: "สาวมหาลัย",
      artist: "SL Music",
      image: "/a31.jpg",
      audio: "/m2.mp3",
      category: "pop",
      description: "เพลงใหม่ล่าสุดจากหมู่เรา ฝากติดตาม ผลงานด้วยนะครับ ",
    },
    {
      id: 2,
      title: "สิหมายเจ้าแต่ผู้เดียว",
      artist: "แม็ค วัชรพล Ft. T-REX",
      image: "/a30.jpg",
      audio: "/m1.mp3",
      category: "acoustic",
      description: "เพลงอีสานซึ้งๆ จากศิลปินดัง",
    },
    {
      id: 3,
      title: "วาสนาขี้เหล้า",
      artist: "SL MUSIC",
      image: "/a32.jpg",
      audio: "/m3.mp3",
      category: "rock",
      description: "เพลงใหม่ล่าสุดจากหมู่เรา ฝากติดตาม ผลงานด้วยนะครับ",
    },
  ];

  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: 'bi-music-note-list', color: '#6f00ffff' },
    { id: 'pop', name: 'Pop', icon: 'bi-music-note', color: '#ff0000ff' },
    { id: 'acoustic', name: 'Acoustic', icon: 'bi-headphones', color: '#00a9a5' },
    { id: 'rock', name: 'Rock', icon: 'bi-boombox', color: '#232222ff' },
  ];

  const filteredSongs = activeCategory === 'all'
    ? songs
    : songs.filter(song => song.category === activeCategory);

  // เมื่อเปลี่ยนเพลง ให้เล่นอัตโนมัติ
  useEffect(() => {
    if (audioRef.current && playingSong) {
      audioRef.current.load();
      audioRef.current.play().catch((err) => {
        console.error("ไม่สามารถเล่นเพลงได้:", err);
      });
    }
  }, [playingSong]);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">รายการเพลงของเรา</h1>
        <p className="text-muted">เลือกเพลงตามหมวดหมู่ที่คุณชอบ แล้วฟังได้ทันที</p>

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn d-flex align-items-center gap-2 px-3 py-2 rounded-pill ${
                activeCategory === category.id ? 'text-white' : 'text-dark'
              }`}
              style={{
                background: activeCategory === category.id ? category.color : 'transparent',
                border: `1px solid ${category.color}`,
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`bi ${category.icon}`}></i> {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {filteredSongs.map((song) => (
          <div key={song.id} className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100 rounded-4 overflow-hidden">
              <Image
                src={song.image}
                alt={song.title}
                width={500}
                height={300}
                className="card-img-top"
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body p-4">
                <h5 className="card-title">{song.title}</h5>
                <p className="text-muted mb-2">โดย {song.artist}</p>
                <p className="card-text">{song.description}</p>
                <button
              style={{
             background: 'linear-gradient(135deg, #ff0055ff, #325ab7ff)',
             border: 'none',
             borderRadius: '12px',
             color: 'white',
             fontWeight: '600',
             transition: 'all 0.3s ease'
           }}
             className="w-100 mt-3"
               onClick={() => setPlayingSong(song.audio)}
              >
              <i className="bi bi-play-circle me-2"></i> เล่นเพลง
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Audio Player */}
      {playingSong && (
        <div className="fixed-bottom bg-dark p-3 d-flex justify-content-between align-items-center text-white">
          <span>
            <i className="bi bi-music-note-beamed me-2"></i>
            กำลังเล่น: <code>{playingSong.split('/').pop()}</code>
          </span>
          <audio ref={audioRef} controls className="w-50">
            <source src={playingSong} type="audio/mpeg" />
            เบราว์เซอร์ของคุณไม่รองรับการเล่นเสียง
          </audio>
          <button className="btn btn-outline-light btn-sm" onClick={() => setPlayingSong(null)}>
            ปิด
          </button>
        </div>
      )}
    </div>
  );
}
