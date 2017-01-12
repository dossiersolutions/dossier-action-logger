"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActionLogger = createActionLogger;
function createActionLogger(_ref) {
  var ignoredActions = _ref.ignoredActions;

  return function (store) {
    return function (next) {
      return function (action) {
        var result = next(action);

        if (ignoredActions.indexOf(action.type) == -1) {
          var nextState = store.getState();

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
    };
  };
}