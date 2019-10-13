/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

interface CardProps {
  name: string;
  image: string;
}

interface CardState {
  name: string;
  image: string;
}

export default class Card extends React.Component<CardProps, CardState> {
  public static defaultProps = {
    pokeName: "ditto"
  };
  state: CardState = {
    name: "Ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  };

  render() {
    const { name, image } = this.props;
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          width: 328px;
          height: 182px;
          background-color: #c4c4c4;
          border: 1px solid black;
          border-radius: 15px;
        `}
      >
        <img
          src={image}
          css={css`
            width: 151px;
            height: 151px;
          `}
        />
        <h1
          css={css`
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          Name: {name}
        </h1>
      </div>
    );
  }
}
