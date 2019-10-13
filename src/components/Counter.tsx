/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react'

interface CounterProps {
  pokeName: string;
}

interface CounterState {
  count: number;
  url: string;
}

export default class Counter extends React.Component<CounterProps, CounterState> {
  public static defaultProps = {
    pokeName: "ditto",
};
  state: CounterState = { count: 0, url: "" }
  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })  
  getPokemonSprite = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const actualData = await response.json();
    console.log(response)
    return actualData.sprites.front_default;
  }

  async componentDidMount() {
    const url = await this.getPokemonSprite(this.props.pokeName);
    this.setState({url});
  }

  render () {
    const { count, url } = this.state;
    return (
      <div css={css`
        display: flex;
        flex-direction: column;
        width: 100px;
        background-color: ${count > 5 ? "blue" : "yellow"};
      `}>
        <img alt={`sprite of ${this.props.pokeName}`} src={url}/>
        <div>{count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}