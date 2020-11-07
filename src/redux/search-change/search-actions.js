import SearchActionType from './search-types'

export const setSearchField = txt => ({
    type: SearchActionType.CHANGE_SEARCH_FIELD,
    payload: txt
})



