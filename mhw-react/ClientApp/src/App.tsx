import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ArmorData } from './components/ArmorData';

import './custom.css'

export default class App extends React.Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
        {
            //<Route exact path='/' component={Home} />
            //<Route path='/counter' component={Counter} />
            //<Route path='/fetch-data' component={FetchData} />
            //<Route path='/armor-data' component={ArmorData} />
        }
        <Route exact path='/' component={ArmorData} />
      </Layout>
    );
  }
}

        // Note: Try moving routes to another file