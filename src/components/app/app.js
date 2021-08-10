import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItemPanel from '../add-item-panel/add-item-panel';

import './app.css';

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
    ],
    activeFilter: 'all', //all, active, done
    search: '',
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newTodoData,
      };
    });
  };

  toggleProperty = (propName, id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newItem = {
        ...todoData[idx],
        [propName]: !todoData[idx][propName],
      };

      const newTodoData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newTodoData,
      };
    });
  };

  toggleDone = (id) => {
    this.toggleProperty('done', id);
  };

  toggleImportant = (id) => {
    this.toggleProperty('important', id);
  };

  filterOn = (filter) => {
    this.setState({
      activeFilter: filter,
    });
  };

  searchFilter = (searchText) => {
    this.setState(() => {
      return {
        search: searchText,
      };
    });
  };

  search = (items, search) => {
    if (search === '') {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  render() {
    const { todoData, activeFilter, search } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    let todoDataFiltered = this.search(todoData, search);
    if (activeFilter === 'active') {
      todoDataFiltered = todoDataFiltered.filter((el) => !el.done);
    } else if (activeFilter === 'done') {
      todoDataFiltered = todoDataFiltered.filter((el) => el.done);
    }

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchRequest={this.searchFilter} />
          <ItemStatusFilter
            onAllFilterClick={() => this.filterOn('all')}
            onActiveFilterClick={() => this.filterOn('active')}
            onDoneFilterClick={() => this.filterOn('done')}
            activeFilter={activeFilter}
          />
        </div>

        <TodoList
          todos={todoDataFiltered}
          onDelete={this.deleteItem}
          onToggleDone={this.toggleDone}
          onToggleImportant={this.toggleImportant}
        />
        <AddItemPanel onItemAdd={this.addItem} />
      </div>
    );
  }
}