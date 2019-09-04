import React, { Component } from 'react'
import {Container,NavbarToggler,Form,FormGroup,Navbar,NavbarBrand,Button,Input,NavItem,Nav} from 'reactstrap'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SpotifyActions from "../../redux/action/SpotifyActions";
import {Link} from 'react-router-dom'




export default class Navi extends Component {
    render() {
        return (
            <div>
                <Container fluid >
                <Navbar>
                   <NavbarBrand>
                    <FontAwesomeIcon icon={faMusic} color="green" size="md"/> 
                    SpotifyJS Generator
                   </NavbarBrand>
                   <NavbarToggler aria-controls="basic-navbar-nav" />
                
                   <Nav className="ml-auto" navbar>
                       <NavItem>
                           <Link to="/">Home</Link>
                       </NavItem>
                      <NavItem>
                        <Link to="/artist">Artist</Link>
                      </NavItem>
                      <NavItem>
                       <Link to="/playlist">PlayList</Link>
                      </NavItem>
                   </Nav>
                           
                </Navbar>
                </Container>
            </div>
        )
    }
}


  
