import { AddTodoForm, mapStateToProps, mapDispatchToProps } from '../containers/AddTodoForm';
import { addTodo } from '../actions';

describe('AddTodoFormContainer', () => {
  describe('AddTodoForm component', () => {
    // Write these tests on your own
    // You already know how!
  });

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      const mockState = {
        todos: [{ text: 'Learn Redux!', id: 1 }],
        filter: 'SHOW_ALL'
      };
      const expected = {
        todos: [{ text: 'Learn Redux!', id: 1 }]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addtodo action when handleSubmit is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addTodo('Learn Redux!', 1);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleSubmit('Learn Redux!', 1);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});