import React from 'react'
import {Dimensions, TouchableHighlight, View, Text, StyleSheet, Image, ScrollView} from 'react-native'

import {connect} from 'react-redux'
import {fetchData} from './../actions/index'
import {Actions} from "react-native-router-flux";

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: window.height,
        flex: 1,
        padding: 10
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        marginTop: 15
    },
    filterArea: {
        /*Фильтр (Закладки|Все)*/
        marginTop: 5,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 10
    },
    filterItem: {
        paddingRight: 6,
        paddingLeft: 6
    },
    filterItemText: {
        color: '#0066CC'
    },
    networkArea: {
        marginTop: 15
    }
});

const StoreContainer = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.filterArea}>
                <TouchableHighlight style={styles.filterItem}>
                    <Text style={styles.filterItemText}>Текущий месяц</Text>
                </TouchableHighlight>
                <Text style={styles.filterItem}>|</Text>
                <TouchableHighlight style={styles.filterItem}>
                    <Text style={styles.filterItemText}>Все</Text>
                </TouchableHighlight>
            </View>

            <ScrollView scrollsToTop={false} style={styles.menuContainer}>

                <Text>StoreContainer</Text>

            </ScrollView>

        </View>
    )
};

function mapStateToProps(state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreContainer);