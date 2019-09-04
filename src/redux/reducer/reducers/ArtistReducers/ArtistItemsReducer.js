import * as spotifyActionTypes from '../../../action/Types/SpotifyActionType'
import InitialState from '../../InitialState'


export default function ArtistItemsReducer(state=InitialState.Artists,action){
    
    switch(action.type){
        case spotifyActionTypes.GET_ARTIST_ITEMS:
            return action.payload.artists.items

        default:
            return state
    }
}