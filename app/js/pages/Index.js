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

export default class Index extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  getInitialState() {
    return{
      data:[]
    };
  }
  componentDidMount(){
    request.post("http://localhost:8080/shiye/last").send("").end();
  }

  renderItems() {
    const pages = [
      {
        id:1,
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:88888,
        up:8888,
      },
      {
        id:2,
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        id:3,
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        id:4,
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        id:5,
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },
      {
        id:6,
        img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",
        title:"远方 有一个地方 那里种有我们的梦想",
        yuedu:66666,
        up:886666688,
      },

    ];

    return pages.map((item, index) => {
      return (
        <ul data-am-widget="gallery" className="am-gallery am-avg-sm-1 am-gallery-overlay" data-am-gallery="{ pureview: false }" >
        <Link to={"/pages/"+item.id}>
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
        </Container>
      </View>
    );
  }
}
