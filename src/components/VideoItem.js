import React from 'react';
import './VideoItem.css';

//** Here props is resplaced by respective props name */
function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;

// function VideoItem(props) {
//   return (
//     <div
//       onClick={() => props.onVideoSelect(props.video)}
//       className="video-item item"
//     >
//       <img
//         className="ui image"
//         src={props.video.snippet.thumbnails.medium.url}
//         alt=""
//       />
//       <div className="content">
//         <div className="header">{props.video.snippet.title}</div>
//       </div>
//     </div>
//   );
// }
