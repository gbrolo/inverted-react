import axios from '../axios';
import constants from '../constants';
import { responseFormatter } from "../response";

/**
 * Performs api call to invert text
 * @param {string} text to invert
 */
const requestReverse = (
  text,
) => {
  return responseFormatter(axios.get(
    `${constants.API_BASE_URL}/iecho?text=${text}`
  ));
};

export {
  requestReverse,
}