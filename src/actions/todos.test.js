import * as actions from './index';

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    const text = 'Go to the Vault';
    const id = 1;
    const expectedAction = {
      type: 'ADD_TODO',
      text,
      id
    };

    const result = actions.addTodo(text, id);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_TODO', () => {
    const id = 2;
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id
    };
    const result = actions.toggleTodo(id);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_FILTER', () => {
    const filter = 'ALL_TODOS';
    const expectedAction = {
      type: 'SET_FILTER',
      filter: 'ALL_TODOS'
    };
    const result = actions.setFilter(filter);

    expect(result).toEqual(expectedAction);
  });
});