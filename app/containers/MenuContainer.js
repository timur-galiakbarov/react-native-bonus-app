import React from 'react'
import {Dimensions, TouchableHighlight, View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import SideMenu from 'react-native-side-menu';
import {Actions} from "react-native-router-flux";

import Menu from './../components/Menu.js';
import {MenuActions} from './../actions/index';

const MenuContainer = (props)=> {
    const onItemSelected = (state)=>{
        Actions[state] ? Actions.replace(state) : undefined;
        props.setMenuState(state);
    };
    const menuComponent = <Menu menuWidth={230} onItemSelected={onItemSelected}/>;

    return (
        <SideMenu openMenuOffset={230}
                  menu={menuComponent}
                  isOpen={props.menu.isOpen}
                  edgeHitWidth={230}
                  onChange={isOpen => props.menu.isOpen = isOpen}>
            {props.children}
        </SideMenu>
    )
};

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMenuState: (state)=>{
            dispatch(MenuActions.setActiveItem(state));
            dispatch(MenuActions.toggleMenu());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);