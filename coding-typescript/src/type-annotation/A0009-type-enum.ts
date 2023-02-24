enum Themes {
  light,
  dark,
}

function chooseTheme(theme: Themes): void {
  console.log(Themes[theme]);
}
chooseTheme(Themes.dark);
