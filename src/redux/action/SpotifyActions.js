import * as actionTypes from "./Types/SpotifyActionType";
import axios from "axios";

export function GetArtistItemSuccess(Artists) {
  return {
    type: actionTypes.GET_ARTIST_ITEMS,
    payload: Artists
  };
}

export function GetArtistSuccess(Artists) {
  return {
    type: actionTypes.GET_ARTIST,
    payload: Artists
  };
}

export function GetPlayListFromArtistSuccess(PlayLists){
  return{
    type:actionTypes.GET_PLAYLIST_FROM_ARTIST,
    payload:PlayLists
  }
}

export function GetPlayListItemsFromArtistSuccess(PlayLists){
  return{
    type:actionTypes.GET_PLAYLIST_ITEMS_FROM_ARTIST,
    payload:PlayLists
  }
}

export function GETRequest(musician = "",type="") {
  let url = "https://api.spotify.com/v1/search?q=" + musician + "&type="+type;
  const auth_token =
   " " //You should take your access token from back-end system(NodeJS)

  const config = {
    headers: {
      Authorization: "Bearer " + auth_token
    }
  };

  return axios.get(url, config);
}

export function GetArtistItems(musician) {
  return function(dispatch) {
    return GETRequest(musician,"artist").then(response => {
      dispatch(GetArtistItemSuccess(response.data));
    });
  };
}

export function GetArtist(musician) {
  return function(dispatch) {
    return GETRequest(musician,"artist").then(response => {
      dispatch(GetArtistSuccess(response.data));
    });
  };
}

export function GetPlayList(musician){
  return function(dispatch) {
    return GETRequest(musician,"playlist").then(response => {
      dispatch(GetPlayListFromArtistSuccess(response.data));
    });
  };
}
export function GetPlayListItems(musician){
  return function(dispatch) {
    return GETRequest(musician,"playlist").then(response => {
      dispatch(GetPlayListItemsFromArtistSuccess(response.data));
      console.log(response.data.playlists.items)
      
    });
  };
}

