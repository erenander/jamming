import React from 'react'

import './Playlist.css'

import Tracklist from '../TrackList/TrackList'

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleNameChange=this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  
    render() {
    return (
        <div className="Playlist">
        <input defaultValue= {'New Playlist'} onChange ={this.handleNameChange}/>
        <Tracklist tracks={this.props.playlistTracks}
                            onRemove={this.props.onRemove}
                            isRemoval = {true}/>
        <button class="Playlist-save"  onClick = {this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist;