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
import {Button, Icon} from 'react-native-elements'

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

class MenuComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            fontLoaded: false
        };
    }

    componentDidMount() {
        Font.loadAsync({
            'Material Icons': require('../../assets/icons/MaterialIcons.ttf')
        }).then(() => {
            this.setState({fontLoaded: true});
        });
    }

    render() {
        const menuWidth = this.props.menuWidth;

        const styles = StyleSheet.create({
            menuContainer: {
                flex: 1,
                width: menuWidth,
                height: window.height,
                backgroundColor: '#384555',
                padding: 20,
            },
            avatarContainer: {
                marginBottom: 20,
                marginTop: 20,
            },
            avatar: {
                width: 48,
                height: 48,
                borderRadius: 24,
                flex: 1,
            },
            name: {
                position: 'absolute',
                left: 60,
                top: 8,
                color: "#FFFFFF",
                fontWeight: 'bold'
            },
            menuItem: {
                marginRight: 40,
                marginLeft: 0,
                marginTop: 10,
                marginBottom: 5,
                paddingTop: 10,
                paddingLeft: 10,
                paddingBottom: 10,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#445161',
                width: menuWidth - 40,
                flexDirection: 'row'
            },
            menuItemActive: {
                marginRight: 40,
                marginLeft: 0,
                marginTop: 10,
                marginBottom: 5,
                paddingTop: 10,
                paddingLeft: 10,
                paddingBottom: 10,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#445161',
                backgroundColor: '#2e3a46',
                width: menuWidth - 40,
                flexDirection: 'row'
            },
            itemText: {
                fontSize: 16,
                fontWeight: '300',
                color: '#f2faff',
                paddingLeft: 10,
            }
        });

        const onItemSelected = this.props.onItemSelected;
        const selectedItem = this.props.selectedItem;
        const getItemStyles = (state)=> {
            if (selectedItem == state)
                return styles.menuItemActive;
            else
                return styles.menuItem
        };

        if (this.state.fontLoaded) {
            return (
                <ScrollView scrollsToTop={false} style={styles.menuContainer}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{ uri }}
                        />
                        <Text style={styles.name}>Тимур {"\n"}Галиакбаров</Text>
                    </View>


                    <TouchableOpacity onPress={() => onItemSelected('base')}>
                        <View style={getItemStyles('base')}>
                            <Icon
                                name='view-list'
                                size={16}
                                color='#f2faff'/>
                            <Text
                                style={styles.itemText}>
                                Бонусы
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onItemSelected('history')}>
                        <View style={getItemStyles('history')}>
                            <Icon
                                name='history'
                                size={16}
                                color='#f2faff'/>
                            <Text
                                style={styles.itemText}>
                                История
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onItemSelected('settings')}>
                        <View style={getItemStyles('settings')}>
                            <Icon
                                name='settings'
                                size={16}
                                color='#f2faff'/>
                            <Text
                                style={styles.itemText}>
                                Настройки
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onItemSelected('logout')}>
                        <View style={getItemStyles('logout')}>
                            <Icon
                                name='person-outline'
                                size={16}
                                color='#f2faff'/>
                            <Text
                                style={styles.itemText}>
                                Выход
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            )
        } else {
            return (
                <Text>Loading...</Text>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
        selectedItem: state.menu.selectedItem
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuComponent);