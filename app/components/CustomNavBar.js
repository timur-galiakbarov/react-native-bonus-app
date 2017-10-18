import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

import {MenuActions} from './../actions/index';

const styles = StyleSheet.create({
    container: {
        height: (Platform.OS === 'ios') ? 64 : 54,
        flexDirection: 'row',
        paddingTop: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#CCCCCC'
    },
    hamburger: {
        paddingLeft: 15,
        width: 47,
        justifyContent: 'center'
    },
    navBarItem: {
        paddingLeft: 15,
        justifyContent: 'center'
    }
});

class CustomNavBar extends React.Component {

    render() {
        const renderLeft = ()=> {
            return (
                <TouchableOpacity
                    onPress={this.props.toggleMenu}
                    style={[styles.hamburger]}>
                    <Image
                        style={{width: 32, height: 32}}
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-48.png'}}></Image>
                </TouchableOpacity>
            )
        };
        const renderMiddle = ()=> {
            return (
                <View style={styles.navBarItem}>
                    <Text style={{textAlign: 'left', fontSize: 16}}>{ this.props.title }</Text>
                </View>
            )
        };
        return (
            <View style={[styles.container]}>
                { renderLeft() }
                { renderMiddle() }
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu: ()=>{
            dispatch(MenuActions.toggleMenu());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomNavBar);