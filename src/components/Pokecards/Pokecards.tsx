/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Card from "./Card";

interface PokecardProps {
  pokeInfo: any;
}

interface PokecardState {}

export default class Counter extends React.Component<
  PokecardProps,
  PokecardState
> {
  public static defaultProps = {
    pokeInfo: {}
  };
  //   state: CounterState = { count: 0, url: "" };

  //   getPokemonSprite = async (name: string) => {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  //     const actualData = await response.json();
  //     console.log(response);
  //     return actualData.sprites.front_default;
  //   };

  //   async componentDidMount() {
  //     const url = await this.getPokemonSprite(this.props.pokeName);
  //     this.setState({ url });
  //   }

  parseURL = (url: string) => {
    let parsedURL = url.split("/");
    console.log(parsedURL);
    return parsedURL[parsedURL.length - 2];
  };

  render() {
    const { pokeInfo } = this.props;

    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100vw;
        `}
      >
        {pokeInfo.pokemon &&
          pokeInfo.pokemon.map((element: any) => {
            return (
              <Card
                name={element.pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.parseURL(
                  element.pokemon.url
                )}.png`}
              />
            );
          })}
        {!pokeInfo.pokmon && "No pokemon found"}
      </div>
    );
  }
}
