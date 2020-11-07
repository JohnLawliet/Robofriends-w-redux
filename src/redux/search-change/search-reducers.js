import SearchActionType from './search-types'

const INITIAL_STATE = {
    searchfield: ''
}

const searchReducer = (state=INITIAL_STATE, action={}) => {
    switch(action.type){
        case SearchActionType.CHANGE_SEARCH_FIELD :
            return {
                ...state,
                searchfield: action.payload
            }
        default: 
            return state
    }    
}

export default searchReducer
