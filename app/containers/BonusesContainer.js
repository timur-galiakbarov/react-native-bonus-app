import React from 'react'
import {Dimensions, TouchableOpacity, View, StyleSheet, Image, ScrollView, Text} from 'react-native'
import {Actions} from 'react-native-router-flux';
import { ButtonGroup, List, ListItem} from 'react-native-elements';

import {connect} from 'react-redux';
import {fetchData} from './../actions/index';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        height: window.height,
        flex: 1
    }
});

const users = [
    {
        name: 'МВидео',
        avatar_url: 'https://www.digiseller.ru/preview/175852/p1_1434678_47e7313e.png',
        subtitle: 'Стерлитамак',
    },
    {
        name: 'Эльдорадо',
        avatar_url: 'http://e-almet.ru/images/list/list/12378.jpg',
        subtitle: 'Стерлитамак',
    },
    {
        name: 'Apple - сервисный центр',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_Apple.inc.gif',
        subtitle: 'Уфа',
    },
    {
        name: 'Сеть ресторанов - Пражский пивовар',
        avatar_url: 'https://scontent.cdninstagram.com/t51.2885-19/10809570_330105220509791_1476324415_a.jpg',
        subtitle: 'Уфа',
    },
    {
        name: 'Макдональдс',
        avatar_url: 'https://forex01.ru/wp-content/uploads/2017/01/58b5f6a69f47e73a3884562969995208.jpg',
        subtitle: 'Уфа',
    },
];

class BonusesContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            canLoad: false
        };
    }

    componentWillMount() {
        setTimeout(()=> {
            this.setState({
                canLoad: true
            });
        }, 210);
    }

    render() {
        const goToStore = (storeId)=> {
            Actions.push('storeDetail', {
                storeId: storeId
            });
        };

        if (this.state.canLoad) {
            return (
                <View style={styles.container}>
                    <View style={{ marginTop: 20 }}>
                        <ButtonGroup
                            textStyle={{ fontSize: 13 }}
                            onPress={this.updateIndex}
                            selectedIndex={0}
                            buttons={["Закладки", "Все"]}
                        />
                    </View>

                    <View style={styles.container}>
                        <ScrollView scrollsToTop={false}>
                            <List>
                                {users.map((l, i) => (
                                    <ListItem
                                        roundAvatar
                                        avatar={{ uri: l.avatar_url }}
                                        key={i}
                                        onPress={() => goToStore('id1')}
                                        title={l.name}
                                        subtitle={l.subtitle}
                                    />
                                ))}
                            </List>
                        </ScrollView>
                    </View>

                </View>
            )
        } else {
            return (
                <Text>Loading...</Text>
            );
        }
    }
}
;

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
)(BonusesContainer);

/*<Text style={styles.text}>Redux Examples</Text>
 <TouchableHighlight style={styles.button} onPress={() => props.fetchData()}>
 <Text style={styles.buttonText}>Load Data</Text>
 </TouchableHighlight>

 <View style={styles.mainContent}>
 {
 props.appData.isFetching && <Text>Loading</Text>
 }
 {
 props.appData.data.length ? (
 props.appData.data.map((person, i) => {
 return <View key={i}>
 <Text>Name: {person.name}</Text>
 <Text>Age: {person.age}</Text>
 </View>
 })
 ) : null
 }
 </View>*/