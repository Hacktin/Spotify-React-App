import * as spotifyActionTypes from '../../../action/Types/SpotifyActionType'
import InitialState from '../../InitialState'


export default function PlayListItemReducer(state=InitialState.PlayLists,action){
    
    switch(action.type){
        case spotifyActionTypes.GET_PLAYLIST_ITEMS_FROM_ARTIST:
            return action.payload.playlists.items

        default:
            return state
    }
}