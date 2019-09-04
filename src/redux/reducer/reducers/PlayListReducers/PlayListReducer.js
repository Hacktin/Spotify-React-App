import * as spotifyActionTypes from '../../../action/Types/SpotifyActionType'
import InitialState from '../../InitialState'


export default function PlayListReducer(state=InitialState.PlayLists,action){
    
    switch(action.type){
        case spotifyActionTypes.GET_PLAYLIST_FROM_ARTIST:
            return action.payload.playlists

        default:
            return state
    }
}