import React from 'react'
import {Dimensions, TouchableHighlight, View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {ButtonGroup, List} from 'react-native-elements';

import {connect} from 'react-redux'
import {fetchData} from './../actions/index'
import HistoryItem from './../components/history/HistoryItem'

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        height: window.height,
        flex: 1
    },
    pageTitle: {
        textAlign: 'center',
        marginTop: 20
    }
});

const history = [
    {
        category: 'credit',
        shopName: 'Эльдорадо',
        bonusType: 'default',
        amount: 267.3,

    },
    {
        category: 'credit',
        shopName: 'Эльдорадо',
        bonusType: 'default',
        amount: 267.3,
    },
    {
        category: 'credit',
        shopName: 'Эльдорадо',
        bonusType: 'default',
        amount: 267.3,
    },
    {
        category: 'credit',
        shopName: 'Эльдорадо',
        bonusType: 'default',
        amount: 267.3,
    },
    {
        category: 'credit',
        shopName: 'Эльдорадо',
        bonusType: 'default',
        amount: 267.3,
    }
];

const HistoryContainer = (props) => {

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20 }}>
                <ButtonGroup
                    textStyle={{ fontSize: 13 }}
                    onPress={this.updateIndex}
                    selectedIndex={0}
                    buttons={["Текущий месяц", "Все"]}
                />
            </View>

            <ScrollView scrollsToTop={false}>

                <Text style={styles.pageTitle}>История начислений и списаний бонусов</Text>

                <List>
                    {history.map((item, index) => (
                        <HistoryItem
                            category={item.category}
                            shopName={item.shopName}
                            bonusType={item.bonusType}
                            amount={item.amount}
                        />
                    ))}
                </List>

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
)(HistoryContainer);