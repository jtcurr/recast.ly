var searchYouTube = (options, callback) => {
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      order: 'rating',
      type: 'video',
      videoDefinition: 'high',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: function(data) {
      console.log('Videos Recieved!', data);
      callback(data.items);
      window.youtubeVids = data.items;
    },
    error: function(data) {
      console.log('ERROR', data);
    } 
  });

};
window.searchYouTube = searchYouTube;