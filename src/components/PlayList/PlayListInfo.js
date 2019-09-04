import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SpotifyActions from "../../redux/action/SpotifyActions";
import { Table,Container,Button,Form,FormGroup,Input } from "reactstrap";


class PlayListInfo extends Component {

  getPlayListInfo=(e)=>{
    const musician=e.target.elements.q.value

    this.props.actions.GetPlayList(musician)
    this.props.actions.GetPlayListItems(musician)

    e.preventDefault()
  }

  
  
 
  render() {
    return (
      <div> 
        <Container fluid>
       <Form onSubmit={this.getPlayListInfo}>
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
            
             
           </tr>
         </thead>
         <tbody>
        
           
           {
             this.props.items.map(item=>(
               <tr key={item.id}>
                 <td><a href={item.external_urls.spotify}>{item.name}</a></td>
                 <td>
                 {item.images.map(image=>(
                   <img  src={image.url} width="50px;" height="50px;"/>
                 ))}
                 </td>
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
    items: state.PlayListItemReducer,
    playlists: state.PlayListReducer
  };
}

function MapDispatchToProp(dispatch) {
  return {
    actions: {
      GetPlayListItems: bindActionCreators(
        SpotifyActions.GetPlayListItems,
        dispatch
      ),
      GetPlayList: bindActionCreators(SpotifyActions.GetPlayList, dispatch)
    }
  };
}

export default connect(
  MapStateToProp,
  MapDispatchToProp
)(PlayListInfo);
