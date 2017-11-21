import { SAMPLE_ACTION, ANOTHER_SAMPLE_ACTION } from './constants';

export function sampleAction(payload) {
  // console.log('A book has been selected ' + book.title);
  /**
   * selectBook is an ActionCreator, it needs to return an action objecct
   * the action object has a type and a payload
   */
  return {
    type: SAMPLE_ACTION,
    payload,
  };
}

export function anotherSampleAction(payload) {
  // console.log('A book has been selected ' + book.title);
  /**
   * selectBook is an ActionCreator, it needs to return an action objecct
   * the action object has a type and a payload
   */
  return {
    type: ANOTHER_SAMPLE_ACTION,
    payload,
  };
}
