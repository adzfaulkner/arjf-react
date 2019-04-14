import DateO from './DateO';
import moment from 'moment'

export default function(posts, filters) {
  let { year = null, month = null } = filters;

  if (year === null && month === null) {
    return null;
  }

  return DateO(posts, { date: moment([year, month - 1, 1, 0, 0, 0]) });
}