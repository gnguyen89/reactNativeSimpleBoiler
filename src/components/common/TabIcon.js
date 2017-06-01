import React, { PropTypes } from 'react';
// import { Text } from 'react-native';

import AccountIcon from '../Icons/AccountIcon';
import ScheduleIcon from '../Icons/ScheduleIcon';

export default function TabIcon({ selected, title }) {
  switch (title) {
    case 'Schedule':
      return <ScheduleIcon height="32" width="32" fill={selected ? '#aa1e23' : 'grey'} />;
    case 'Account':
      return <AccountIcon height="32" width="32" fill={selected ? '#aa1e23' : 'grey'} />;
    default:
      return <AccountIcon height="32" width="32" fill={selected ? '#aa1e23' : 'grey'} />;
  }
}

TabIcon.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

// return (
//     <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
// );