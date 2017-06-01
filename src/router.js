import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import App from './components/App';
// import { TabIcon } from './components/common';
import colors from './components/Styles/colors';

const styles = {
  tabBarStyle: {
    backgroundColor: 'white',
    borderColor: colors.spaceCadet,
    borderTopWidth: 1,
  },
  navigationBarStyle: {
    backgroundColor: colors.spaceCadet,
  },
  navTitleStyle: {
    color: 'white',
  },
  sceneStyle: {
    paddingTop: 64,
  },
};

export default function RouterComponent() {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="welcome" component={App} initial />
      </Scene>
    </Router>
  );
}
