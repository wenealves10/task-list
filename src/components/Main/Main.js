import React from 'react';
import './Main.css';

const initialState = {
  newList: '',
};

export default class Main extends React.Component {
  state = {
    newList: '',
    list: [],
  }

  handleChange = (e) => {
    this.setState({
      newList: e.target.value,
    });
  }

  handleClick = () => {
    const list = [...this.state.list];
    if (this.state.newList.length > 3) {
      list.push(this.state.newList);
      console.log(list);
      console.log('State:', this.state.list);
      this.setState({ list, newList: initialState.newList });
    }
  }

  render() {
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input type="text" onChange={this.handleChange} value={this.state.newList} />
          <button type="submit" onClick={this.handleClick}>Adicionar</button>
        </form>
      </div>
    );
  }
}
