import { v4 } from 'node-uuid';

export const editAmount = (amount, name) => ({
  type: 'EDIT_AMOUNT',
  name,
  amount
});

export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT'
});
