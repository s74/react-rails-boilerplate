import {UPDATE_RECORD} from '_app/actions/_types';
import {API_URL} from '_app/config';

const updateRecord = (id, value) => {
  let url = `${API_URL}/v1/records/${id}`;
  let data = {record: {title: value}};
  return {
    type: UPDATE_RECORD,
    payload: fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => { return result; })
  };
};

export default updateRecord;
