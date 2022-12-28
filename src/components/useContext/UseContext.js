import React, {useContext, createContext} from 'react';
import { Button, View } from 'react-native';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes);

function useContext() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <View>
      <ThemedButton />
    </View>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <Button style={{ background: theme.background, color: theme.foreground }} title='I am styled by theme context!'/>
  );
}
export default useContext;