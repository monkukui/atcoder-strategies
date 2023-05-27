import React, { useState, useEffect, useRef } from 'react'

import { Table, Card, Button, Checkbox, Icon } from 'semantic-ui-react'

import getRatingColorStyle from '../utils/getRatingColorStyle'

interface Contest {
  rateChange: string
  place: number
  actualOldRating: number
  actualNewRating: number
  performance: number
  innerPerformance: number
  contestScreenName: string
  contestName: string
  contestNameEn: string
  endTime: string
  optimalOldRating: number
  optimalNewRating: number
  isParticipated: boolean
}

interface Contests {
  contestsByUserID: Contest[]
}

type Props = {
  userID: string
}

const ContestHistory: React.FC<Props> = (props) => {
  const [contest, setContest] = useState<Contest[]>([])
  const currentRating = 1999;
  const optimalRating = 2030;

  return (
    <>
      <div style={{ marginTop: '3em', fontSize: 'calc(6px + 1vmin)' }}>
        <Card
          style={{
            margin: '0 auto',
            marginBottom: '5em',
            width: '70%',
            outlineColor: 'rgb(67, 121, 178)',
          }}
        >
          <Card.Content header="結果" />
          <Table basic="very" style={{ width: '90%', margin: '0 auto' }}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ユーザー名</Table.Cell>
                <Table.Cell>{props.userID}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>実際のレート</Table.Cell>
                <Table.Cell style={getRatingColorStyle(currentRating)}>
                  {currentRating}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>架空のレート</Table.Cell>
                <Table.Cell style={getRatingColorStyle(optimalRating)}>
                  {optimalRating}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>差分</Table.Cell>
                <Table.Cell style={{ fontWeight: 'bold' }}>
                  {optimalRating > currentRating ? (
                    <>+{optimalRating - currentRating}</>
                  ) : (
                    <>-{currentRating - optimalRating}</>
                  )}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Card.Content style={{ marginTop: '2em' }}>
            <Button basic>
              <Icon name="twitter" style={{ color: 'rgb(74, 161, 235)' }} />
              で投稿する
            </Button>
          </Card.Content>
        </Card>
        <Table celled={true} style={{ fontSize: 'calc(6px + 1vmin)' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>日付け</Table.HeaderCell>
              <Table.HeaderCell>コンテスト</Table.HeaderCell>
              <Table.HeaderCell>順位</Table.HeaderCell>
              <Table.HeaderCell>パフォーマンス</Table.HeaderCell>
              <Table.HeaderCell>実際の Rating</Table.HeaderCell>
              <Table.HeaderCell>架空の Rating</Table.HeaderCell>
              <Table.HeaderCell>参加・不参加</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {contest!.map((record, index) => {
              return (
                <Table.Row
                  key={record.endTime}
                  positive={record.isParticipated && record.rateChange !== '-'}
                  negative={
                    !(record.isParticipated && record.rateChange !== '-')
                  }
                >
                  <Table.Cell>{record.endTime}</Table.Cell>
                  <Table.Cell>
                    <a
                      href={'https://' + record.contestScreenName}
                      rel="noreferrer noreferrer"
                      target="_blank"
                    >
                      {record.contestName}
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href={
                        'https://' +
                        record.contestScreenName +
                        '/standings?watching=' +
                        props.userID
                      }
                      rel="noreferrer noreferrer"
                      target="_blank"
                    >
                      {record.place}
                    </a>
                  </Table.Cell>
                  {record.rateChange !== '-' ? (
                    <>
                      <Table.Cell
                        style={getRatingColorStyle(record.performance)}
                      >
                        {record.performance}
                      </Table.Cell>
                      <Table.Cell
                        style={getRatingColorStyle(record.actualNewRating)}
                      >
                        {record.actualNewRating}
                        &nbsp;
                        {record.actualNewRating > record.actualOldRating ? (
                          <>
                            (+{record.actualNewRating - record.actualOldRating})
                          </>
                        ) : (
                          <>
                            (-{record.actualOldRating - record.actualNewRating})
                          </>
                        )}
                      </Table.Cell>
                      {record.isParticipated ? (
                        <>
                          <Table.Cell
                            style={getRatingColorStyle(record.optimalNewRating)}
                          >
                            {record.optimalNewRating}
                            &nbsp;
                            {record.optimalNewRating >
                            record.optimalOldRating ? (
                              <>
                                (+
                                {record.optimalNewRating -
                                  record.optimalOldRating}
                                )
                              </>
                            ) : (
                              <>
                                (-
                                {record.optimalOldRating -
                                  record.optimalNewRating}
                                )
                              </>
                            )}
                          </Table.Cell>
                        </>
                      ) : (
                        <Table.Cell>-</Table.Cell>
                      )}
                    </>
                  ) : (
                    <>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                      <Table.Cell>-</Table.Cell>
                    </>
                  )}
                  <Table.Cell>
                    <Checkbox
                      checked={record.isParticipated}
                      onClick={() => {
                        console.log("hoge");
                      }}
                    />
                  </Table.Cell>
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

export default ContestHistory
