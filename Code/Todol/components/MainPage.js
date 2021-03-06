import React, {Component} from 'react';
import {Portal, Provider} from 'react-native-paper';
import Header from './Header';
import ListView from './ListView';
import {firebaseService} from "../services/firebaseService";
import tasks from '../assets/mock_data/tasks';

export default class MainPage extends Component {
  state = {
    tasks: this.props.navigation.getParam('tasks', []),
    showAll: true,
  };

  _addTask = (section, index, text) => {
    if (!text) return;
    let temp = this.state.tasks;
    temp.splice(findLastIndex(tasks.items, 'section', section) + 1, 0, {
      section: section,
      text: text,
      isImportant: false,
      isSolved: false,
    });
    this.setState({
      tasks: temp,
    });
    firebaseService.syncData(this.state.tasks);

    function findLastIndex(array, searchKey, searchValue) {
      let index = array
        .slice()
        .reverse()
        .findIndex(item => item[searchKey] === searchValue);
      let count = array.length - 1;
      return index >= 0 ? count - index : index;
    }
  };

  _editTask = (section, index, text) => {
    if (!text) {
      this._deleteTask(index);
      return;
    }
    this.setState({
      tasks: this.state.tasks.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            text: text,
          };
        } else {
          return item;
        }
      }),
    });
    firebaseService.syncData(this.state.tasks);
  };

  _deleteTask = index => {
    let temp = this.state.tasks;
    temp.splice(index, 1);
    this.setState({
      tasks: temp,
    });
    firebaseService.syncData(this.state.tasks);
  };

  _setImportantFlag = index => {
    this.setState({
      tasks: this.state.tasks.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            isImportant: !item.isImportant,
          };
        } else {
          return item;
        }
      }),
    });
    firebaseService.syncData(this.state.tasks);
  };

  _setSolveFlag = index => {
    this.setState({
      tasks: this.state.tasks.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            isSolved: !item.isSolved,
          };
        } else {
          return item;
        }
      }),
    });
    firebaseService.syncData(this.state.tasks);
  };

  _setShowFlag = () => {
    this.setState({
      showAll: !this.state.showAll,
    })
  };

  _clearCompletedTasks = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.isSolved),
    });
    firebaseService.syncData(this.state.tasks);
  };

  render() {
    const {tasks, showAll} = this.state;
    return (
      <Provider>
        <Portal>
          <Header
            showAll={showAll}
            setShowFlag={this._setShowFlag}
            clearCompletedTasks={this._clearCompletedTasks}
          />
          <ListView
            tasks={showAll ? tasks : tasks.filter(item => item.isImportant)}
            addTask={this._addTask}
            editTask={this._editTask}
            deleteTask={this._deleteTask}
            setImportantFlag={this._setImportantFlag}
            setSolveFlag={this._setSolveFlag}
          />
        </Portal>
      </Provider>
    )
  }
}

