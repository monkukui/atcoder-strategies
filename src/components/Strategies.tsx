import React, { useState, useEffect, useRef } from 'react'

import { Table, Card, Button, Checkbox, Icon } from 'semantic-ui-react'

export interface Problem {
  id: string
  score: number
}

type Props = {
  problems: Problem[]
}


const Strategies : React.FC<Props> = (props) => {
  return (
    <>
      <div style={{ marginTop: '3em', fontSize: 'calc(6px + 1vmin)' }}>
        <Table celled={true} style={{ fontSize: 'calc(6px + 1vmin)' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>問題</Table.HeaderCell>
              <Table.HeaderCell>点数</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {props.problems!.map((record, index) => {
              return (
                <Table.Row
                  key={record.id}
                >
                  <Table.Cell>{record.id}</Table.Cell>
                  <Table.Cell>{record.score}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>

        <Button
          color="instagram"
          onClick={() => {
            console.log("huga");
          }}
        >
          トップヘ
        </Button>
      </div>
    </>
  )
}

export default Strategies
