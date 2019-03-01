/* eslint-disable */
/*
### Simple components
 - 1 dom element

### Compound components
 - more than one dom element

###  Complex components
 - more than one package.
*/

/*
  White Label Component Library --> DS
  White Label Component Library --> DS --> Product
  White Label Component Library --> DS --> Product --> Consumer
*/

/*
  Take a component and configure it for use once
  <Button styles={(baseStyles, props) => {...styles}} />

  Take a component and configure its use in a particualr scope.
  <AKApp>
    <AKButton>
    <AKButton2>
    <AKButton3>
  </AKApp>

  Take a component with an existing theme, customise that theme
  in my own application.
  <App>
    {JiraTheme} => (<AkButton>)
    {JiraTheme} => (<AkButton>)
    {JiraTheme} => (<AkButton>)
  </App>

  Take a component with an existing theme, and only customise parts of that theme in my own application.
  <App>
    <Button { ...AKTheme, ...SomeofJiraTheme } />
    <Button { ...AKTheme, ...SomeofJiraTheme } />
    <Button { ...AKTheme, ...SomeofJiraTheme } />
  </App>

  Take a component library, and only customise the styles for a particular set of components.
  <App>
    <JButton>
    <JModalDialog>
    <Select>
  </App>


*/

import React, { useContext } from 'react';
const BlueLabelContext = React.createContext({});
import * as blueComponentTokens from 'blue-component-tokens';

const BlueLabelThemeProvider = ({ mode, children }) => (
  <BlueLabelContext.Provider value={mode}>
    {children}
  </BlueLabelContext.Provider>
);

const WhiteLabelButton = (props) => <button {...props} />;
const BlueLabelButton = (props) => <WhiteLabelButton {...props} />;
const RedLabelButton = (props) => <WhiteLabelButton {...props} />;


const blueLabelButtonTokens = (mode) => {
  return blueComponentTokens.map(i => i[mode]);
}

const BlueLabelButton = (props) => {
  const mode = useContext(BlueLabelContext);
  const tokens = blueLabelButtonTokens(mode);
  const getStyles = (styles, props) => {
    return {
      ...styles,
      backgroundColor: props.isPressed
        ? tokens.defaultBackgroundColor
        : tokens.pressedBackgroundColor,
    };
  };
  <WhiteLabelButton getStyles={getStyles} {...props} />;
}


const defaultRainbowColors = {
  background: 'red',
  text: 'orange',
  border: 'yellow',
  shadow: 'green',
  hilight: 'blue',
  disabled: 'indigo',
  decoration: 'violet',
};

const RainbowContext = React.createContext(defaultRainbowColors);

const oceanTheme = {
  background: 'blue',
  text: 'blue',
  border: 'blue',
  shadow: 'blue',
  hilight: 'blue',
  disabled: 'blue',
  decoration: 'blue',
}

const RainbowButtonContext = React.createContext();

const RainbowLabelButton = (props) => {
  const palette = useContext(RainbowContext);
  const buttonOverrides = useContext(RainbowButtonContext);
  const backgroundColor = palette?.Button?.backgroundColor || palette.backgroundColor;
  const getStyles = (styles, props) => {
    return {
      ...styles,
      backgroundColor,
      color: props.hilighted ? palette.hilighted : palette.text,
    };
  };
  <WhiteLabelButton getStyles={getStyles} {...props} />;
}

const AppOne = () => (
  <RainbowLabelButton>ooooooh Rainbow</RainbowLabelButton>
);

const AppTwo = () => (
  <RainbowContext value={{
    background: 'green',
    text: 'green',
    border: 'green',
    shadow: 'green',
    hilight: 'green',
    disabled: 'green',
    decoration: 'green',
  }}>
    <RainbowLabelButton>So Green Right Now</RainbowLabelButton>
  </RainbowContext>
);

const AppThree = () => (
  <RainbowContext value={oceanTheme}>
    <RainbowLabelButton>Swimming in the ocean</RainbowLabelButton>
  </RainbowContext>
);

const OneComponentThatNeedsPurpleBackground = () => {
  const rainbowTheme = useContext(RainbowContext);
  return (
    <RainbowContext.Provider value={{ ...rainbowTheme, Button: { backgroundColor: 'purple' } }}>
      <RainbowButton>I have a Purple background now</RainbowButton>
      <RainbowModal />
    </RainbowContext.Provider>
  );
};


const WhiteLabelModal = ({ Button, ...props }) => (
  <div>
    <Button>Click Me</Button>
  </div>
);
const BlueLabelModal = (props) => (
  <WhiteLabelModal Button={BlueLabelButton} {...props} />
);
const RedLabelModal = (props) => (
  <WhiteLabelModal Button={RedLabelButton} {...props} />
);

const WhiteLabelOnboarding = ({ Modal, ...props }) => (
  <div>
    <Modal>Click Me</Modal>
  </div>
);
const BlueLabelOnboarding = (props) => (
  <WhiteLabelOnboarding Modal={BlueLabelModal} {...props} />
);
const RedLabelOnboarding = (props) => (
  <WhiteLabelOnboarding Modal={RedLabelModal} {...props} />
);




<BlueLabelThemeProvider mode="dark">
  <BlueLabelOnboarding />
</BlueLabelThemeProvider>
