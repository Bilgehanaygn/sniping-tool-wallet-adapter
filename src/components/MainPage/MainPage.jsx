import { useEffect } from 'react';
import { ContextValue } from '../../context/Context';
import { fetchAllCollections } from '../../actions/collections';
import AppBar from '../MyAppBar';
import LeftMain from './LeftMain';
import RightMain from './RightMain/RightMain';
import MiddleMain from './MiddleMain/MiddleMain';
import Loading from '../Loading';
import types from '../../actions/types';

const MainPage = () => {
    const [state,dispatch] = ContextValue();

    const getAllCollections = () => {
        for(let i=0;i<15;i++){
            fetchAllCollections(i*500).then(res=>{
                dispatch({
                    type:types.FETCH_ALL,
                    payload: res.data
                });
            }).catch(err=>{
                console.log(err);
            })
        }
        
    }

    useEffect(async ()=>{
        if(state.loadingDone){
            return;
        }
        await getAllCollections();
        dispatch({
            type: types.LOADING_DONE,
            payload: true
        });
    });


    const styles = {
        mainDiv: {
            backgroundColor:"black",
            width: "100vw",
            height: "90vh",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"start", 
        },
    }

    return (
        state.loadingDone ? 
        <>
            <AppBar/>
            <div style={styles.mainDiv}>
                <div style={{height:"85vh"}}>
                    <LeftMain />
                </div>        
                <MiddleMain/>
                <RightMain/>
            </div>
        </> :
        <Loading/>
        
    )
}

export default MainPage;