export function createActionLogger({ignoredActions}) {
  return store => next => action => {
    const result = next(action);

    if (ignoredActions.indexOf(action.type) == -1) {
      const nextState = store.getState();

      console.groupCollapsed && console.groupCollapsed(action.type);
      console.info("Dispatching", action);
      console.log("Next state", store.getState());
      console.trace && console.trace("Trace");
      console.groupEnd(action.type);

      if (nextState.error) {
        console.log("Error: ", nexptStatep.error.stack || nextState.error);
      }
    }
    return result;
  };
}
