import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';
import request from 'superagent';

export default class Yeya extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  renderItems() {
    const pages = [
      {
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:88888,
        up:8888,
      },
      {
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },

    ];

    return pages.map((item, index) => {
      return (
        <ul data-am-widget="gallery" className="am-gallery am-avg-sm-1 am-gallery-overlay" data-am-gallery="{ pureview: false }" >
        <Link to="/pages/">
        <section className="am-panel am-panel-default">
          <main className="am-panel-bd">
            <div className="am-gallery-item">
              <img src={item.img}  alt="远方 有一个地方 那里种有我们的梦想"/>
                <h3 className="am-gallery-title">{item.title}</h3>
            </div>
          </main>
          <footer className="am-panel-footer">阅读 {item.yuedu} | <span className="am-icon-thumbs-o-up" /> {item.up}</footer>
        </section>
        </Link>
        </ul>
      );
    });
  }

  render() {
    return (
      <View>
        <Container scrollable>
              {this.renderItems()}
              <div data-am-widget="navbar" className="am-navbar am-cf am-navbar-wechat"
      id="">
        <ul className="am-navbar-nav am-cf am-avg-sm-5">
            <li  key="0">
              <Link to="/" className="">
                  <span className="am-navbar-label ">最新</span>
              </Link>
            </li>
            <li key="1">
              <Link to="/weixiu" className="">
                  <span className="am-navbar-label">真空维修</span>
              </Link>
            </li>
            <li key="2">
              <Link to="/xiaoshou" className="">
                  <span className="am-navbar-label">真空销售</span>
              </Link>
            </li>
            <li key="3">
              <Link to="/ershou" className="">
                  <span className="am-navbar-label">二手设备</span>
              </Link>
            </li>
            <li key="4" className="active">
              <Link to="/yeya" className="">
                  <span className="am-navbar-label">液压产品</span>
              </Link>
            </li>
        </ul>
      </div>
        </Container>
      </View>
    );
  }
}
