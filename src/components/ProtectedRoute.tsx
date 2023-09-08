
import {useSelector} from 'react-redux';
import { AppState } from '../redux/store';
import { AuthState } from '../redux/authReducer';

function ProtectedRoute(props:any){

    const auth = useSelector<AppState>((reduxState)=>reduxState.auth)
    return (
        <div></div>
    );
}

export default ProtectedRoute;