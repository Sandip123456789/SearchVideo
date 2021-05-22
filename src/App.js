import React from 'react';
import youtube from './APIs/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };

  //** video inside parenthesis is the video object that we fetched from youtube api */
  //** Props from VideoItem */
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log('From the App!', video);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          allVideo={this.state.videos}
        />
      </div>
    );
  }
}

export default App;

//KEY: AIzaSyDCKM1La2qbNQTczHLUXPNzB5TI7DXttDA
