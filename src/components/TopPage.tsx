import React, { useState } from 'react'

import { Form } from 'semantic-ui-react'
import { Problem } from "./Strategies";
import Strategies from './Strategies'

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
            // 1. コンテストサイトから情報を fetch
            // 2. 配点配列を用意
            // 3. useState に代入
            setProblems([
              {
                id: "A",
                score: 100,
              },
              {
                id: "B",
                score: 200,
              },
              {
                id: "C",
                score: 300,
              },
              {
                id: "D",
                score: 400,
              },
              {
                id: "E",
                score: 475,
              },
              {
                id: "F",
                score: 525,
              },
              {
                id: "G",
                score: 550,
              },
              {
                id: "Ex",
                score: 600,
              }
            ])
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
