const INITIAL_STATE = {
  clients: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CLIENT':
      return {...state, clients: state.clients.concat(action.payload)};
    default:
      return state;
  }
}
