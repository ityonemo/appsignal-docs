class NavigationStore {
  static isSet(menu) {
    return localStorage["navigation_" + menu] !== undefined;
  }

  static fetch(menu) {
    return localStorage["navigation_" + menu] == "true" || false;
  }

 static set(menu, value) {
    localStorage["navigation_" + menu] = value;
  }
}

export default NavigationStore
