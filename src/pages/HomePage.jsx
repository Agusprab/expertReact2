import { useEffect } from "react";
import Header from "../components/Header"
import ThreadList from "../components/ThreadList";
import Banner from "../components/Banner";
import ThreadInput from "../components/ThreadInput";
import { CategoryThreads } from "../components/CategoryThreads";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { asyncAddThread, asyncToggleLikeThread, asyncToggleDislikeThread, 
    asyncToggleNeutralLikeThread, asyncToggleNeutralDislikeThread } from "../states/threads/action";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
function HomePage() {
    const dispatch = useDispatch(); 
    const users = useSelector((states) => states.users);
    const threads = useSelector((states) => states.threads);
    const authUser = useSelector((states) => states.authUser); 
    const leaderboards = useSelector((states) => states.leaderboards);
    const [category, setCategory] = useState('')
 
 
    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
       
    }, [dispatch]);
    
    const filterData = threads.filter(thread => thread.category.includes(category));
 
 
    function onAddThread({ title, category, body }) {
        dispatch(asyncAddThread({ title, category, body }));
       
    }

    function onLike(id){
        dispatch(asyncToggleLikeThread(id));
    }

    function onDislike(id){
        dispatch(asyncToggleDislikeThread(id));
    }

    function onNeutralLike(id){
        dispatch(asyncToggleNeutralLikeThread(id));
    }
    
    function onNeutralDislike(id){
        dispatch(asyncToggleNeutralDislikeThread(id));
    }
    function onChangeCategory(category){
       setCategory(category);
    }
    
    const threadList = threads.map((thread) =>({
        ...thread,
        user: users?.find((user) => user.id === thread?.ownerId),
        authUser: authUser?.id,
    }));
        
    const FilterThread = filterData.map((thread) =>({
        ...thread,
        user: users?.find((user) => user.id === thread?.ownerId),
        authUser: authUser?.id,
    }));

 
    
    return (
        
        <div>
            <Header authUser={authUser}/>
            <Banner/>
            <div className="container mb-5">
                <div className="row justify-content-center pt-4 gx-5">
                    <div className="col-lg-3 col-12" >
                       <CategoryThreads threads={threads} leaderboards={leaderboards} onChangeCategory={onChangeCategory}/>
                       <ThreadInput addThread={onAddThread} />
                    </div>
                    <div className="col-lg-9 col-12 mt-lg-0 mt-5">
                        <ThreadList threads={category ? FilterThread : threadList} like={onLike} dislike={onDislike} neutralLike={onNeutralLike} neutralDislike={onNeutralDislike}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;