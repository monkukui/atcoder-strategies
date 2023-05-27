import React, { useState } from 'react'
import './App.css'

import TopPage from './components/TopPage'
import HowToUse from './components/HowToUse'

import {
  Button,
  Container,
  Header,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      inverted
      style={{
        fontSize: '3.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '2em',
      }}
    >
      At
      <span style={{ color: 'rgb(229, 115, 110)' }}>C</span>
      oder Strategies
    </Header>
    <Header.Subheader
      as="h2"
      style={{
        fontSize: '1.2em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    >
    </Header.Subheader>
  </Container>
)

const App = () => {
  const [fixed, setFixed] = useState(false)
  const [page, setPage] = useState('top')
  const showFixedMenu = () => {
    setFixed(true)
  }
  const hideFixedMenu = () => {
    setFixed(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
          <Segment
            textAlign="center"
            inverted
            style={{
              minHeight: page === 'top' ? 400 : 40,
              padding: '0.2em 0em',
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item
                  as="a"
                  active={page === 'top'}
                  onClick={() => {
                    setPage('top')
                  }}
                >
                  Top
                </Menu.Item>
                <Menu.Item
                  as="a"
                  active={page === 'howtouse'}
                  onClick={() => {
                    setPage('howtouse')
                  }}
                >
                  How to use
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                    href="https://github.com/monkukui/atcoder-strategies/tree/main"
                  >
                    GitHub
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            {page === 'top' ? <HomepageHeading /> : null}
          </Segment>
        </Visibility>
        <Container style={{ width: '70%' }}>
          {page === 'top' ? <TopPage /> : null}
          {page === 'howtouse' ? <HowToUse /> : null}
        </Container>
        <Segment
          inverted={true}
          vertical={true}
          style={{ padding: '1em 0em', marginTop: '10em' }}
        >
          <Container textAlign="center">
            <p>AtCoder Strategies 2023</p>
          </Container>
        </Segment>
      </header>
    </div>
  )
}

export default App
