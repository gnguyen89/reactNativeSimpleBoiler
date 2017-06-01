import React, { PropTypes } from 'react';
import { View, TextInput } from 'react-native';

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#232950',
    backgroundColor: 'white',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
};

export default function InputNoLabel({ placeholder, value, onChangeText, passwordInput }) {
  const { containerStyle, inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={passwordInput}
        autoCapitalize="none"
      />
    </View>
  );
}

InputNoLabel.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  passwordInput: PropTypes.bool,
};

