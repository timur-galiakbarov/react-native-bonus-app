import React from 'react';
import {Provider} from 'react-redux';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import {Dimensions} from 'react-native';

import configureStore from './configureStore';
const window = Dimensions.get('window');

import BonusesContainer from './app/containers/BonusesContainer.js';
import HistoryContainer from './app/containers/HistoryContainer.js';
import SettingsContainer from './app/containers/SettingsContainer.js';
import StoreContainer from './app/containers/StoreContainer.js';
import CustomNavBar from './app/components/CustomNavBar.js';
import MenuContainer from './app/containers/MenuContainer.js';

const store = configureStore();

export default class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <MenuContainer>
                    <Router hideNavBar={true}>
                        <Stack key="root">
                            <Scene
                                key="base"
                                component={BonusesContainer}
                                initial={true}
                                wrapRouter={true}
                                navBar={CustomNavBar}
                                title="Бонусы"/>
                            <Scene
                                key="storeDetail"
                                component={StoreContainer}
                                wrapRouter={true}
                                navBar={CustomNavBar}
                                title="Магазин"/>
                            <Scene
                                key="history"
                                component={HistoryContainer}
                                wrapRouter={true}
                                navBar={CustomNavBar}
                                title="История"/>
                            <Scene
                                key="settings"
                                component={SettingsContainer}
                                wrapRouter={true}
                                navBar={CustomNavBar}
                                title="Настройки"/>
                        </Stack>
                    </Router>
                </MenuContainer>
            </Provider>
        );
    }
}

/*
 * <CustomNavBar></CustomNavBar>
 <BonusesContainer></BonusesContainer>
 * */