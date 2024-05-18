import { ActionType } from "./action";
function leaderboardsReducer(leaderboards = [], actions = {}) {

    switch (actions.type) {
        case ActionType.RECEIVE_LEADERBOARDS:
            return actions.payload.leaderboards;
        default:
            return leaderboards;
    }
}

export default leaderboardsReducer