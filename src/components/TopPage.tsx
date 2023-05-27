import React, { useState } from 'react'

import { Form } from 'semantic-ui-react'
import { Problem } from "./Strategies";
import Strategies from './Strategies'
import json from '../contests.json';

const TopPage = () => {
  const [contestURL, setContesetURL] = useState('https://atcoder.jp/contests/abc303');
  const [problems, setProblems] = useState<Problem[]>([]);
  const [monkukui, setMonkukui] = useState<boolean>(false);

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
              if (json[i].id === contestURL) {
                setProblems(json[i].problems);
                ok = true;
                break;
              }
            }
            if (!ok) {
              setMonkukui(true);
            }
          }}
        >
          Go
        </Form.Button>
      </Form>
      {monkukui && (
        <h1><a href={"https://github.com/monkukui/atcoder-strategies/blob/main/src/contests.json"}>ここ</a>らへんをみて色々察してください</h1>
      )}
      <Strategies problems={problems} />
    </>
  )
}

export default TopPage
