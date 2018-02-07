
import {connectWithLifecycle} from 'react-lifecycle-component';
import ApiKeyList from "../../components/api-key/list";
import {ApiKey} from "../../reducer/api-key";
import {_, equals, get, prop} from 'atp-pointfree';
import copy from 'copy-to-clipboard';

export default connectWithLifecycle(
    (state, {userId}) => ({
        userId,
        keys: ApiKey().select.some(get(state), _(equals(userId), prop('userId')))
    }),
    (dispatch, {userId}) => ({
        componentDidMount: () => {
            dispatch(ApiKey().action.collection.get({userId}));
        },
        onDelete: id => () => {
            dispatch(ApiKey().action.delete(id));
        },
        onCreate: () => {
            dispatch(ApiKey().action.create({userId}));
        },
        onCopy: key => () => {
            copy(key);
        }
    })
)(ApiKeyList);
