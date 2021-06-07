import React, { useState, useEffect } from 'react';
// import youtube from './APIs/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import useVideos from './hooks/useVideos';

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('liverpool');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // useEffect(() => {
  //   onTermSubmit('Liverpool');
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   console.log(response);

  //   setVideos(response.data.items);
  // setSelectedVideo(response.data.items[0]);

  // };

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);

  //   console.log('From the App!', video);
  // };

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video) => setSelectedVideo(video)}
              allVideo={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

//KEY: AIzaSyDCKM1La2qbNQTczHLUXPNzB5TI7DXttDA
