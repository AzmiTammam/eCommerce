import React from "react";
import "./youtube.styles.css";
const API = "AIzaSyBiEmZqE3gVu9UtFpv1QUm6jr7jeu0Y6Ws";
const channelId = "UC5KKmJfmBFDca1hkwKJ53Ng";
const maxResults = 32;
const finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

class YouTube extends React.Component {
    constructor(props){
        super(props);

        this.state={
            error: null,
            data: []
        }
    }

   async componentDidMount(){
    try{
        const response = await fetch(finalUrl);
        const data = await response.json()
        console.log(data)
        const result = data.items[16].id.videoId
        console.log(result)
        this.setState({data: result})
    } catch (err) {
        this.setState({error: err.message})
    }
    }

    render(){
        console.log(this.state.data)
        return (
            <div className="youtube">
              {this.state.error ? <div>{this.state.error}</div> : null}
                <div>
                  <iframe
                    title="Hats Commercial"
                    width="100%"
                    height="700"
                    src={`https://www.youtube.com/embed/${this.state.data}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
            </div>
          );
    }
}



export default YouTube;