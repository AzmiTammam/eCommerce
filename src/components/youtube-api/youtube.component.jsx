import React from 'react';
import YoutubeFetch from './youtube';

class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        };
    }

    async componentDidMount() {
        const url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=1&playlistId=PL3WCgw5_iBX6zBNibX3c9GOB9WTL_qQf9&key=AIzaSyB67B_szVr6uSIUounQ8IR2xsErKFv1pBU';

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ videos: data.items });
    }
    render() {
        const { videos } = this.state;
        const renderedVideos = videos.map((video, index) => {
            return <YoutubeFetch key={video.id} />;
        });
        return (
            <div className='YouTubeFullDiv'>               
                <div className='YouAPI'>{renderedVideos}</div>

            </div>
        );
    }
}
export default Youtube;