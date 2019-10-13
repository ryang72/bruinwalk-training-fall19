/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Card from "./Card";

interface PokecardProps {
  pokeInfo: any;
  updateSelected: any;
}

interface PokecardState {}

export default class Counter extends React.Component<
  PokecardProps,
  PokecardState
> {
  public static defaultProps = {
    pokeInfo: {"pokemon": [
      {
        "pokemon": {
          "name": "charizard",
          "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        "slot": 2
      },
      {
        "pokemon": {
          "name": "butterfree",
          "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        "slot": 2
      },
      {
        "pokemon": {
          "name": "pidgey",
          "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        "slot": 2
      }]}
  };

  parseURL = (url: string) => {
    let parsedURL = url.split("/");
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
          height: 500px;
          overflow-y: scroll;
          border: 1px solid black;
          align-items: center;
        `}
      >
        {pokeInfo.pokemon &&
          pokeInfo.pokemon.map((element: any) => {
            return (
              <div onClick={() => this.props.updateSelected(element.pokemon.name)}>
              <Card
                key={element.pokemon.name}
                name={element.pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.parseURL(
                  element.pokemon.url
                )}.png`}
              />
              </div>
            );
          })}
        {!pokeInfo.pokmon && "No pokemon found"}
      </div>
    );
  }
}
