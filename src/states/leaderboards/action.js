 
const ActionType = {
    RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderBoardActionCreator(leaderboards) {
    return {
        type: ActionType.RECEIVE_LEADERBOARDS,
        payload: {
            leaderboards
        }
    }
}



export {
    ActionType,
    receiveLeaderBoardActionCreator,
    }