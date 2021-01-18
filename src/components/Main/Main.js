import React from 'react';
import List from '../List/List';
import './Main.css';

const initialState = {
  newList: '',
};

export default class Main extends React.Component {
  state = {
    newList: '',
    list: [],
  }

  componentDidMount() {
    let list = localStorage.getItem('list');
    if (list !== null) {
      list = list.length !== 0 ? list.split(',') : [];
      this.setState({ list });
    }
  }

  handleChange = (e) => {
    this.setState({
      newList: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    console.log('Edit', index);
    let { newList } = this.state;
    const list = [...this.state.list];
    newList = list[index];
    this.setState({ newList });
    list.splice(index, 1);
    this.setState({ list });
  }

  handleDelete = (e, index) => {
    console.log('Delete', index);
    const { list } = this.state;
    const newList = [...list];
    newList.splice(index, 1);
    this.setState({ list: newList });
    localStorage.setItem('list', newList);
  }

  handleClick = (e) => {
    e.preventDefault();
    const list = [...this.state.list];
    let { newList } = this.state;
    if (newList.length > 2) {
      newList = newList.trim();
      if (list.indexOf(newList) !== -1) return;
      list.push(newList);
      console.log(list);
      console.log('State:', this.state.list);
      this.setState({ list, newList: initialState.newList });
    }
    localStorage.setItem('list', list);
  }

  render() {
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input type="text" onChange={this.handleChange} value={this.state.newList} />
          <button type="submit" onClick={this.handleClick}>
            <i className="fa fa-plus" />
            {' '}
            Adicionar
          </button>
        </form>
        <hr />
        <List list={this.state.list} delete={this.handleDelete} edit={this.handleEdit} />
      </div>
    );
  }
}
