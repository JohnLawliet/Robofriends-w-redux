import RobotActionType from './robot-types'

export const requestRobots = () => (dispatch) => {
    dispatch({ type: RobotActionType.SEARCH_ROBOTS_START })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(
            users => dispatch({ 
            type: RobotActionType.SEARCH_ROBOTS_SUCCESS,
            payload: users
            })
        )
        .catch(
            error => dispatch({
            type: RobotActionType.SEARCH_ROBOTS_FAILURE,
            payload: error
            })
        )
}
