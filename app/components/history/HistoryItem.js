import React from 'react';
import Expo, {Font} from 'expo';
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {Button, Icon} from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
    },
    wrapper: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class HistoryItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.iconStyle}>
                        <Icon
                            name='add-circle'
                            size={18}
                            color='#008A20'/>
                    </View>
                    <View style={styles.date}>
                        <Text>18.10.2017</Text>
                        <Text>11:54</Text>
                    </View>
                    <Text>Loading...</Text>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryItem);