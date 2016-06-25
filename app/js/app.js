import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  state = {
    active_items_id:0,
    items:[{key:0,title:"最新",to:"/"},{key:1,title:"真空维修",to:"/weixiu"},{key:2,title:"真空销售",to:"/xiaoshou"},{key:3,title:"二手设备",to:"/ershou"},{key:4,title:"液压产品",to:"/yeya"}]
  }

  navbar_items(){
    return this.state.items.map((items,index)=>{
      return (
        <li className={this.state.active_items_id == items.key && "active"} key={items.key} onClick={(e)=>this.setState({active_items_id:items.key})}>
          <Link to={items.to} className="">
              <span className="am-navbar-label ">{items.title}</span>
          </Link>
        </li>
        );
    });
  }

  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;
    const {
      router
    } = this.context;
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>
        <div data-am-widget="navbar" className="am-navbar am-cf am-navbar-wechat" id="">
          <ul className="am-navbar-nav am-cf am-avg-sm-5">
            {this.navbar_items()}
          </ul>
      </div>
      </Container>
    );
  }
}

// Pages
import Index from './pages/Index';
import Page from './pages/Page';
import Weixiu from './pages/weixiu';
import Xiaoshou from './pages/xiaoshou';
import Ershou from './pages/ershou';
import Yeya from './pages/yeya';

// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/pages/:page" component={Page} />
      <Route path="/weixiu" component={Weixiu} />
      <Route path="/xiaoshou" component={Xiaoshou} />
      <Route path="/ershou" component={Ershou} />
      <Route path="/yeya" component={Yeya} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
