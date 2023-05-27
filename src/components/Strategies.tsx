import React, { useState, useEffect } from 'react'

import { Table, Form }  from 'semantic-ui-react'

import enumerateSolvedProblemCombinations from "../utils/enumerateSolvedProblemCombinations";
import sortByScore from "../utils/sortByScore";

export interface Problem {
  id: string
  score: number
  selected: boolean
  solved: boolean
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

  const [selectedProblems, setSelectedProblems] = useState<Problem[]>(props.problems);
  const [solvedProblemCombinations, setSolvedProblemCombinations] = useState<SolvedProblems[]>(enumerateSolvedProblemCombinations(props.problems));
  useEffect(() => {
    setSelectedProblems(props.problems);
    setSolvedProblemCombinations(enumerateSolvedProblemCombinations(selectedProblems));
  }, [props, selectedProblems]);

  return (
    <>
      <div style={{ marginTop: '3em', fontSize: 'calc(6px + 1vmin)' }}>
        <Table celled={true} style={{ fontSize: 'calc(6px + 1vmin)' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>問題</Table.HeaderCell>
              <Table.HeaderCell>点数</Table.HeaderCell>
              <Table.HeaderCell>すでに解いた</Table.HeaderCell>
              <Table.HeaderCell>解く可能性がある</Table.HeaderCell>
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
                  <Table.Cell>
                    <Form.Checkbox
                        onClick={() => {
                          let v = selectedProblems;
                          v[index].solved = !v[index].solved;
                          setSelectedProblems(v);
                          setSolvedProblemCombinations(enumerateSolvedProblemCombinations(selectedProblems));
                        }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Checkbox
                      defaultChecked
                      onClick={() => {
                        let v = selectedProblems;
                        v[index].selected = !v[index].selected;
                        setSelectedProblems(v);
                        setSolvedProblemCombinations(enumerateSolvedProblemCombinations(selectedProblems));
                      }}
                    />
                  </Table.Cell>
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
            {sortByScore(solvedProblemCombinations)!.map((record, index) => {
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
