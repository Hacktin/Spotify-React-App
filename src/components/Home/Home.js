import React, { Component } from 'react'
import {Container,Jumbotron} from 'reactstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
     <Container fluid>
        <Jumbotron>
          <h1>Spotify PlayList and Artist Generator</h1>
          <hr></hr>
          
          <h4>Options</h4>
          <ul>
            <li><a href="/artist">Artist</a></li>
            <li><a href="/playlist">PlayList</a></li>
          </ul>
        </Jumbotron>
      </Container>
            </div>
        )
    }
}
