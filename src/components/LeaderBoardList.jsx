import LeaderBoardItem from "./LeaderBoardItem"
import PropTypes from 'prop-types';

function LeaderBoardList({leaderboards, forMobile}){

    if(forMobile === true){
        return(
            <>
               <div className="d-flex flex-row" >
                    <div className=''><p className="fw-light fs-6">Pengguna</p></div>
                    <div className=" ms-auto "><p className="fw-light fs-6">Skor</p></div>
                </div>
             {leaderboards.length > 0 && leaderboards.map((leaderboard) => (
                <div key={leaderboard.user.id}>
                    <LeaderBoardItem leaderboard={leaderboard} forMobile={forMobile}/>
                </div>))
                }
            </>
        )
    }

    return(
        <>
           <div className="d-flex flex-row" >
                <div className=''><p className="fw-light fs-6">Pengguna</p></div>
                <div className=" ms-auto "><p className="fw-light fs-6">Skor</p></div>
            </div>
         {leaderboards.length > 0 && leaderboards.slice(0, 7).map((leaderboard) => (
            <div key={leaderboard.user.id}>
                <LeaderBoardItem leaderboard={leaderboard} forMobile={forMobile} />
            </div>))
            }
        </>
    )
}

LeaderBoardList.propTypes = {
    leaderboards: PropTypes.array,
    forMobile: PropTypes.bool
}


export default LeaderBoardList