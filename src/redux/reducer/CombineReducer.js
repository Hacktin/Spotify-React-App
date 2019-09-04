
import {combineReducers} from 'redux'
import ArtistItemsReducer from './reducers/ArtistReducers/ArtistItemsReducer'
import ArtistReducer from './reducers/ArtistReducers/ArtistReducer'
import PlayListReducer from './reducers/PlayListReducers/PlayListReducer'
import PlayListItemReducer from './reducers/PlayListReducers/PlayListItemReducer'

const CombineReducers=combineReducers({
    ArtistItemsReducer,
    ArtistReducer,
    PlayListReducer,
    PlayListItemReducer
})

export default CombineReducers