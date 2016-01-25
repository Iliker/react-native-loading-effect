'use strict';

var React = require('react-native');
var ProgressBar = require('ProgressBarAndroid');

var {
  StyleSheet,
  ActivityIndicatorIOS,
  View,
  Text,
  Platform,
  ProgressBarAndroid,
} = React;

var LoadingEffectMixin = {

  getInitialState() {
    return {
      isVisible: false,
    };
  },

  showLoadingEffect() {
    this.setState({
      isVisible: true,
    });
  },

  dismissLoadingEffect() {
    this.setState({
      isVisible: false,
    });
  },
};

var LoadingEffect = React.createClass({

  statics: {
    Mixin: LoadingEffectMixin,
  },

  propTypes: {
    isVisible: React.PropTypes.bool.isRequired,
    size: React.PropTypes.string,
    color: React.PropTypes.string,
    overlayWidth: React.PropTypes.number,
    overlayHeight: React.PropTypes.number,
    overlayColor: React.PropTypes.string,
    text: React.PropTypes.string,
    textColor: React.PropTypes.string,
    textFontSize: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      isDismissible: false,
      overlayWidth: 80,
      overlayHeight: 80,
      overlayColor: 'rgba(0,0,0,0.6)',
      size: (Platform.OS === 'ios') ? 'large' : 'SmallInverse',
      color: (Platform.OS === 'ios') ? 'gray' : 'white',
      text: 'Loading',
      textColor: '#eeeeee',
      textFontSize: 14,
    };
  },

  render() {
    let customStyles = StyleSheet.create({
      overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: this.props.overlayColor,
        width: this.props.overlayWidth,
        height: this.props.overlayHeight,
      },

      text: {
        color: this.props.textColor,
        fontSize: this.props.textFontSize,
        marginTop: 8,
      },
    });

    if (!this.props.isVisible) {
      return (<View />);
    } else {
      return (
          <View style={styles.container}>
            <View style={customStyles.overlay}>
              {(Platform.OS === 'ios') ?
                  <ActivityIndicatorIOS color={this.props.color} size={this.props.size} /> :
                  <ProgressBarAndroid styleAttr={this.props.size} color={this.props.color}/>}
              <Text style={customStyles.text}>{this.props.text}</Text>
            </View>
          </View>
      );
    };
  },
});

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

module.exports = LoadingEffect;
