/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react'

interface CounterProps {}

interface CounterState {
  count: number;
}

export default class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = { count: 0 }
  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })  

  render () {
    const { count } = this.state;
    return (
      <div css={css`
        display: flex;
        flex-direction: column;
        width: 100px;
      `}>
        <div>{count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}