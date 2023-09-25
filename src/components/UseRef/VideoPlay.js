import React, { useRef } from "react";

export default function VideoPlay() {
  const videoRef = useRef(null);
  const src=`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`;

  const handlePlay=()=>{
    console.log(videoRef);
    console.log('video playing...');
    videoRef.current.play();
  }
  const handlePause=()=>{
    console.log(videoRef);
    console.log('video paused...');
    videoRef.current.pause();
  }

  const handleToggleVideo=()=>{
    videoRef.current.paused?handlePlay():handlePause();
  }
  return (
    <>
      <div>
        <h4>UseRef DOM Access : video play/pause</h4>
        <video ref={videoRef} src={src} onClick={handleToggleVideo} height={200} width={400} muted/>
      </div>
    </>
  );
}
