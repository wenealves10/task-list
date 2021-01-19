import React from 'react';
import List from '../List/List';
import Form from '../Form/Form';
import './Main.css';

const initialState = {
  newList: '',
  index: -1,
};

export default class Main extends React.Component {
  state = {
    newList: '',
    list: [],
    index: -1,
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
    let { newList } = this.state;
    const list = [...this.state.list];
    newList = list[index];
    this.setState({ newList });
    this.setState({ index });
  }

  handleDelete = (e, index) => {
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
      console.log(this.state.index);
      if (this.state.index !== -1) {
        list.splice(this.state.index, 1, newList);
        this.setState({ list, newList: initialState.newList, index: initialState.index });
        localStorage.setItem('list', list);
        return;
      }
      list.push(newList);
      console.log(list);
      console.log('State:', this.state.list);
      this.setState({ list, newList: initialState.newList });
      localStorage.setItem('list', list);
    }
  }

  render() {
    const { newList } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          newList={newList}
        />
        <hr />
        <List list={this.state.list} delete={this.handleDelete} edit={this.handleEdit} />
      </div>
    );
  }
}
