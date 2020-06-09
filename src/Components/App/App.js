import React from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResult';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: 'Hanile Song',
      searchResults: [{ name: 'Tiny Dancer', artist: 'Elton John', 'album': 'Madman Across The Water' }, { name: 'Tiny Dancer', artist: 'Elton John', 'album': 'Madman Across The Water' },
      { name: 'Tiny Dancer', artist: 'Elton John', 'album': 'Madman Across The Water' },
      { name: 'Tiny Dancer', artist: 'Elton John', 'album': 'Madman Across The Water' }],
      playlistTracks: [{ name: 'Haniel', artist: 'Dooncam', 'album': 'Nuevo', id: 1 }, { name: 'Obed', artist: 'Araujo', 'album': 'Mejor', id: 2 }]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    //If the id is new, add the song to the end of the playlist.
    this.state.playlistTracks.push(track);
  }

  removeTrack(track) {
    this.state.playlistTracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack} isRemoval={false} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
