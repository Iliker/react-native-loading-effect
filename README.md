# react-native-loading-effect
![Demo](https://github.com/Iliker/react-native-loading-effect/blob/master/demo.png)

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

- **`isVisible`** _(Bool)_ - isRequired.
- **`size`** _(String)_ - size of the indicator. Small has a height of 20, large has a height of 36.
- **`color`** _(Number)_ - color of the indicator. Default gray.
- **`overlayWidth`** _(Number)_ - overlay width.
- **`overlayHeight`** _(Number)_ - overlay height.
- **`overlayColor`** _(String)_ - overlay color.
- **`text`** _(String)_ - text. Default Loading.
- **`textColor`** _(String)_ - text color.
- **`textFontSize`** _(Number)_ - text font size.
