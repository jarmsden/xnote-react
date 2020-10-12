import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Editor from './Editor';
import SideBar from './SideBar';
import 'quill/dist/quill.snow.css';
import '../css/App.css';

const firebase = require('firebase');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        })
        console.log(notes);
        this.setState({ notes: notes})
      });
  }

  selectNote= (note, index) => {
    this.setState({ selectedNoteIndex: index, selectedNote: note});
  }

  noteUpdate = (id, noteObj) => {
    console.log(id, noteObj);
  }

  render() {
    return (
      <div className="app-container">
        <SideBar 
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        {
          this.state.selectedNote ?
            <Editor 
              selectedNote={this.state.selectedNote}
              selectedNoteIndex={this.state.selectedNoteIndex}
              notes={this.state.notes}
              noteUpdate={this.noteUpdate}
            /> : null
        }
      </div>
    )
  }
}
