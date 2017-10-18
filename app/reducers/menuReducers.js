import { MENU} from './../constants/index'
const initialState = {
    isOpen: false,
    selectedItem: 'base'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MENU.TOGGLE_MENU:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case MENU.SET_ACTIVE_STATE:
            return {
                ...state,
                selectedItem: action.activeState
            };
        default:
            return state
    }
}
