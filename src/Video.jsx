import React, { useState } from "react";
import "./video.css";

const videos = [
  { 
    id: "1", 
    title: "Never Gonna Give You Up", 
    description: "Enjoy Rick Astley's timeless classic that became a legendary meme!", 
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    id: "2", 
    title: "Funny Kangaroo Compilation", 
    description: "A hilarious video featuring a strong kangaroo and funny reactions!", 
    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" 
  },
  { 
    id: "3", 
    title: "Animal Drumming Live", 
    description: "Watch Animal from The Muppets shred the drums in this energetic performance!", 
    url: "https://www.youtube.com/embed/tgbNymZ7vqY" 
  },
];

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="video-container">
      <h1 className="video-title">🎥 Our Video Gallery</h1>
      <p className="video-intro">
        Discover an amazing selection of videos, from classic music hits to hilarious animal moments. 
        Click on any video to watch it in full screen!
      </p>
      
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video.url)}>
            <img
              src={`https://img.youtube.com/vi/${video.url.split("/embed/")[1]}/hqdefault.jpg`}
              alt={video.title}
              className="thumbnail"
            />
            <h3>{video.title}</h3>
            <p className="video-description">{video.description}</p>
            <button className="watch-button">Watch Now</button>
          </div>
        ))}
      </div>

      {/* Full-Screen Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-wrapper">
            <iframe
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
