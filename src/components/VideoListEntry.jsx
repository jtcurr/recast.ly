var VideoListEntry = (props) => {
  var changeVideoState = (e) => {
    var clickedTitle = e.target.innerHTML;
    var idxWeClicked;
    for (var i = 0; i < props.videos.length; i++) {
      if (props.videos[i].snippet.title === clickedTitle) {
        idxWeClicked = i;
      }
    }

    props.changeState(idxWeClicked);

  };
  return (
    <div className="video-list-entry" >
      <div className="media-left media-middle">
        <img className="media-object" src={ props.video.snippet.thumbnails.default.url } alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={ (e) => { changeVideoState(e); } }>{ props.video.snippet.title }</div>
        <div className="video-list-entry-detail">{ props.video.snippet.description }</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;