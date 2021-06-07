import { useEffect, useState } from 'react';
import youtube from '../APIs/youtube';

const useVideos = (defaultSearchVideo) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchVideo);
  }, [defaultSearchVideo]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  //** return inputs for video */
  return [videos, search];
};

export default useVideos;
