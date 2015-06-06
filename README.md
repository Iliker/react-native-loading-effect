# react-native-loading-effect

## Install
```shell
npm install react-native-loading-effect --save
```

## Usage
```js
var LoadingEffect = require('react-native-loading-effect');

var YourComponent = React.createClass({
  mixins: [LoadingEffect.Mixin],

  ...
  render() {
    return (
      <View>
        ... 
        <LoadingEffect
          isVisible={this.state.isVisible}
        />  
      </View>
    );  
  }
```

### Showing the LoadingEffect 
```js
  this.showLoadingEffect();
```

### Dismissing the LoadingEffect
```js
  this.dismissLoadingEffect();
```

## Props
