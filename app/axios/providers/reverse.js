import axios from '../axios';
import constants from '../constants';
import { responseFormatter } from "../response";

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