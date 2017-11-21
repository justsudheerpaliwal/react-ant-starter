import { SAMPLE_ACTION, ANOTHER_SAMPLE_ACTION } from './constants';

/**
 * The state argument is not application State,
 * only the state this reducer is responsible for.
 *
 * For initial app boot, the state will be undefined
 * hence a default value of null is assigned to it
 *
 * never mutate the state
 *
 * @param {Object} state
 * @param {Object} action
 */
export default function (state = null, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.payload;
    case ANOTHER_SAMPLE_ACTION:
      return action.payload;
    default: break;
  }
  return state;
}
