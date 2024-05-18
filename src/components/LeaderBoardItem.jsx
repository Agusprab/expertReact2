import PropTypes from 'prop-types';

function LeaderBoardItem({leaderboard,forMobile}) {
    return(
    <>
         
            <div className="d-flex flex-row" key={leaderboard.user.id}>
                <div className='m-1' >
                            <img src={leaderboard.user.avatar} className="rounded-circle" height="25" width="25" alt="Avatar"/>
                </div>
                <div className='m-1'>
                          {forMobile && <p className="fw-light fs-6">{leaderboard.user.name}</p>}
                            {forMobile === false && <p className="fw-light fs-6">{(leaderboard.user.name.length > 20) ? leaderboard.user.name.slice(0, 20) + '...' : leaderboard.user.name}</p>}
                </div>
                <div className='ms-auto p-2'>{leaderboard.score}</div>   
            </div>
    </>
    )
}

LeaderBoardItem.propTypes = {
    leaderboard: PropTypes.object.isRequired,
    forMobile: PropTypes.bool
}

export default LeaderBoardItem