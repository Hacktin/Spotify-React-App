import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SpotifyActions from "../../redux/action/SpotifyActions";
import { Table,Container,Button,Form,FormGroup,Input } from "reactstrap";


class MusicianInfo extends Component {

  getMusicianInfo=(e)=>{
    const musician=e.target.elements.q.value

    this.props.actions.GetArtist(musician)
    this.props.actions.GetArtistItems(musician)

    e.preventDefault()
  }

  
  
 
  render() {
    return (
      <div> 
        <Container fluid>
       <Form onSubmit={this.getMusicianInfo}>
        <FormGroup>
           <Input type="text" className="mr-sm-2" name="q" />
        </FormGroup>
        <FormGroup><Button>Search</Button></FormGroup>
        </Form>
        </Container>
       <Container fluid>
        <Table dark responsive size="sm">
         <thead>
           <tr>
             <th>Name</th>
             <th>Photo</th>
             <th>Popularity</th>
             
           </tr>
         </thead>
         <tbody>
        
           
           {
             this.props.items.map(item=>(
               <tr key={item.id}>
                 <td><a href={item.external_urls.spotify}>{item.name}</a></td>
                 <td>
                 {item.images.map(image=>(
                   <img key={image.id} src={image.url} width="50px;" height="50px;"/>
                 ))}
                 </td>
                 <td>{item.popularity}</td>
               </tr>
            
             ))
           }
            
             
           
           
         </tbody>
        </Table>
        </Container>
      </div>
    );
  }
}

function MapStateToProp(state) {
  return {
    items: state.ArtistItemsReducer,
    artists: state.ArtistReducer
  };
}

function MapDispatchToProp(dispatch) {
  return {
    actions: {
      GetArtistItems: bindActionCreators(
        SpotifyActions.GetArtistItems,
        dispatch
      ),
      GetArtist: bindActionCreators(SpotifyActions.GetArtist, dispatch)
    }
  };
}

export default connect(
  MapStateToProp,
  MapDispatchToProp
)(MusicianInfo);
