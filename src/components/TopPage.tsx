import React, { useState } from 'react'

import { Form } from 'semantic-ui-react'
import { Problem } from "./Strategies";
import Strategies from './Strategies'
import json from '../contests.json';

const TopPage = () => {
  const [contestURL, setContesetURL] = useState('');
  const [problems, setProblems] = useState<Problem[]>([]);

  return (
    <>
      <Form style={{ marginTop: '5em' }}>
        <Form.Input
          fluid={true}
          label={'contest URL'}
          placeholder={'https://atcoder.jp/contests/abc303'}
          value={contestURL}
          onChange={(e: any) => setContesetURL(e.target.value)}
        />
        <Form.Button
          color="instagram"
          onClick={() => {
            if (contestURL === '') {
              alert('contest URL が空です');
              return;
            }
            let ok: boolean = false;
            for (let i = 0; i < json.length; i++) {
              console.log(json[i].id);
              if (json[i].id === contestURL) {
                console.log(json[i]);
                setProblems(json[i].problems);
                ok = true;
                break;
              }
            }
            if (!ok) {
              alert('これをみて色々察してください\n a');
            }
          }}
        >
          Go
        </Form.Button>
      </Form>
      <Strategies problems={problems} />
    </>
  )
}

export default TopPage
