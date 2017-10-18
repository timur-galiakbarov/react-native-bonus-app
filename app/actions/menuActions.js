import {MENU} from './../constants/index';

export const MenuActions = {
    toggleMenu: ()=> {
        return {
            type: MENU.TOGGLE_MENU
        };
    },
    setActiveItem: (activeState)=> {
        return {
            type: MENU.SET_ACTIVE_STATE,
            activeState: activeState
        };
    }
};