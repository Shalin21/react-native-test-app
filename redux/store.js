//import createStore and applyMiddleware for creating our store and enhancing our dispatcher
import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import reducer from './reducer';
//import your action creators used by dispatchers to alter your global state.
import { fetchData, fetchDataFulfilled, fetchDataRejected } from './reducer';

export const getPhotos= () => {
    return dispatch => {
        //Dispatch the fetchData action creator before retrieving to set our loading state to true.
        dispatch(fetchData(true));
        //Then get the data.
     fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
        .then(res=> res.json())
        .then(images => {dispatch(fetchDataFulfilled(images))})
        .catch(errors => {fdispatch(etchDataRejected(errors))})
    }
}

//Export our store as a default epxport 
export default createStore(reducer, applyMiddleware(thunk));
