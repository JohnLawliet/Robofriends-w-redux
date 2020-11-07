import RobotActionType from './robot-types'

const INITIAL_STATE = {
    error: '',
    robots: [],
    isPending: true
}

const robotReducer = (state=INITIAL_STATE, action={}) => {
    switch(action.type){
        case RobotActionType.SEARCH_ROBOTS_START:
            return {
                ...state,
                isPending: true
            }
        case RobotActionType.SEARCH_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                robots: action.payload,
                error: null
            }
        case RobotActionType.SEARCH_ROBOTS_FAILURE:
            return {
                ...state,
                isPending: false,
                error: action.payload,
                robots: []
            }
        default: 
            return state
    }
}

export default robotReducer

