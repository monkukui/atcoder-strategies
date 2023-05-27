import React, { useState, useEffect, useRef } from 'react'

import { Table }  from 'semantic-ui-react'

import enumerateSolvedProblemsCombinations from "../utils/enumerateSolvedProblemCombinations";
import sortByScore from "../utils/sortByScore";

export interface Problem {
  id: string
  score: number
}

export interface SolvedProblems {
  solvedProblemIds: string[]
  sumScore: number
  maxScore: number
}

type Props = {
  problems: Problem[]
}

const Strategies : React.FC<Props> = (props) => {

  const solvedProblemsCombinations = enumerateSolvedProblemsCombinations(props.problems);
  const sortedSolvedProblemsCombinations = sortByScore(solvedProblemsCombinations);

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

        <Table celled={true} style={{ fontSize: 'calc(6px + 1vmin)' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <span style={{ color: 'rgb(229, 115, 110)' }}>
                  解いた問題
                </span>
              </Table.HeaderCell>
              <Table.HeaderCell>点数</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {sortedSolvedProblemsCombinations!.map((record, index) => {
              return (
                <Table.Row
                  key={record.solvedProblemIds.join(',')}
                >
                  <Table.Cell>{record.solvedProblemIds.join(',')}</Table.Cell>
                  <Table.Cell>{record.sumScore}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

export default Strategies
