export function addClient(client) {
  return {
    type: 'ADD_CLIENT',
    payload: client,
  };
}
