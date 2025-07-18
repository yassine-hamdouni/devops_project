import http from 'k6/http';

import { check, sleep } from 'k6';



export const options = {

  vus: 5,

  duration: '10s',

};



export default function () {

  const res = http.get('http://localhost:8085/api/users/1'); // ⚠️ adapte à ton URL réelle

  check(res, {

    'status is 200': (r) => r.status === 200,

  });

  sleep(1);

}
