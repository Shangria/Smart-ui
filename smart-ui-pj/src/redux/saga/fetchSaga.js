import { put, call , takeEvery} from 'redux-saga/effects'
import { allPostsWriteAction  , allPostsFetchAction} from '../actions';
import { FETCH_ALL_POSTS } from '../types';


                const fetchAll=()=> {
                fetch("http://wdev.smart-ui.pro/wp-json/wp/v2/posts") 
                        .then((response) => {
                        return response.json();
                        }) 
                }  
        function*  allPostsWorker(){
                yield 1 ;
                // console.log('hello');
                // console.log('hello');
                // console.log('hello');
                // console.log('hello');
                // console.log('hello');
                // const data = yield call(fetchAll)
                // const json = yield call(()=> new Promise( res => res(data.json())));
                // yield put(allPostsWriteAction );
        }


export function* allPostsWatcher(){
 yield   takeEvery(allPostsFetchAction,  allPostsWorker)  
}
