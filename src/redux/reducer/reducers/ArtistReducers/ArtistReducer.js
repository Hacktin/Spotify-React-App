import * as spotifyActionTypes from '../../../action/Types/SpotifyActionType'
import InitialState from '../../InitialState'


export default function ArtistReducer(state=InitialState.Artists,action){
    
    switch(action.type){
        case spotifyActionTypes.GET_ARTIST:
            return action.payload.artists

        default:
            return state
    }
}