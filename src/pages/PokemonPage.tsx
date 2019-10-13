/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react'
import { Grid, Image, Segment, Header, Label, } from 'semantic-ui-react'


interface PokemonPageProps {
  pokeName: string;
}

interface PokemonPageState {
  pokeName: string;
  fronturl: string;
  name: string;
  height: string;
  id: string;
  weight: string;
  speed: number;
  att: number;
  def: number;
  hp: number;
  sp_att: number;
  sp_def : number;

}

export default class PokemonPage extends React.Component<PokemonPageProps, PokemonPageState> {
  public static defaultProps = {
    pokeName: "bulbasaur",
  };
  state: PokemonPageState = { pokeName: this.props.pokeName, fronturl:"",name:"",height:"",weight:"",id:"",speed:0,att:0,def:0,sp_att:0,sp_def:0,hp:0}
  getPokemonData = async (name: string) => {
    if(name === "" || !name) {
      return null
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const actualData = await response.json();
    console.log(actualData.stats[0])
    return actualData;
  }

  static getDerivedStateFromProps(nextProps:PokemonPageProps, prevState:PokemonPageState) {
    if (nextProps.pokeName !== prevState.pokeName) {
      return { pokeName: nextProps.pokeName } // <- this is setState equivalent
    }
  }
  async componentDidUpdate(prevProps: PokemonPageProps) {
    console.log(prevProps, this.props)
    if(prevProps.pokeName === this.props.pokeName) return;
    const data = await this.getPokemonData(this.state.pokeName);
    if(data !== null)
      this.setState({
        fronturl:data.sprites.front_default,
        name:data.name,
        height:data.height,
        id:data.id,
        weight: data.weight,
        speed: data.stats[0].base_stat,
        sp_def:data.stats[1].base_stat,
        sp_att:data.stats[2].base_stat,
        def:data.stats[3].base_stat,
        att:data.stats[4].base_stat,
        hp:data.stats[5].base_stat,
      });
  }

  render () {
    const { fronturl,name } = this.state;
    return (
        <Grid style={{marginTop:'10px'}}>
          <Grid.Row>
            <Grid.Column width={2}>
             </Grid.Column>
            <Grid.Column width={12}>
              <Segment css={css` 
              display: flex;
              flex-direction: row;;`} color="olive">
                    <Image src={this.state.fronturl} size={"small"}/>
                    <div css={css` 
              display: flex;
              flex-direction: column;;`} >
                      <Header size={"large"}>{this.state.name.toUpperCase()}</Header>
                      <div css={css` 
              display: flex;
              flex-direction: row;
              `}>
                      </div>
                        <div>
                          <p>ID: {this.state.id}</p>
                          <p>Weight: {this.state.weight}</p>
                          <p>Height: {this.state.height}</p>
                        </div>
                    </div>
                    <div css={css` 
              display: flex;
              flex-direction: column;`}>

                      <p>HP:  {this.state.hp}</p>
                      <p>Attack: {this.state.att}</p>
                      <p>Defense: {this.state.def}</p>
                      <p>SP Attack: {this.state.sp_att}</p>
                      <p>SP Defence: {this.state.sp_def}</p>
                      <p>Speed: {this.state.speed}</p>
                    </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
