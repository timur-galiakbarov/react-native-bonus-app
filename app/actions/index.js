import { FETCHING_DATA } from './../constants/index';

export {MenuActions} from './menuActions.js';

export function fetchData() {
    return {
        type: FETCHING_DATA
    }
}