import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#aa1e23',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#aa1e23',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: 50,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default function ButtonRed({ onPress, children }) {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

ButtonRed.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
};