// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video ={ props.videos[0] } />
//     </div>
//     <div className="col-md-5">

//       <VideoList videos={ props.videos } />
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      current: window.exampleVideoData[0]
    };

    // this.changeVideo = (idx) => {
    //   this.setState({
    //     current: this.state.videos[idx]
    //   });
    // };
  }

  changeVideo(idx) {
    this.setState({
      current: this.state.videos[idx]
    });
  }

  render() {  
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={ this.state.current } />
        </div>
        <div className="col-md-5">

          <VideoList videos={ this.state.videos } changeState={ this.changeVideo.bind(this) }/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
