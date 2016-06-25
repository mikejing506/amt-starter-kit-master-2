import React from 'react';
import {
  View
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';
import request from 'superagent';
import marked from 'marked';
import NotFound from './NotFound';

class Page extends React.Component {

  getInitialState() {
    return{
      data:[]
    };
  }
  componentDidMount(){
    request.post("http://localhost:8080/shiye/pages/"+this.props.params.page).send("").end((err,res)=>{
      if (!err) {
        this.setState({data:res.body});
      }
    });
  }


  render_comment(){
    return this.state.data.comment.map((items,index)=>{
      return (
        <div>
          <img src={items.avatar} className="am-comment-avatar" style={{width:"46",height:"46"}} />
          <div className="am-comment-main">
            <header className="am-comment-hd">
              <div className="am-comment-meta">
                <a href="" className="am-comment-author">某人</a>
                评论于 <time datetime="2013-07-27T04:54:29-07:00" title="2013年7月27日 下午7:54 格林尼治标准时间+0800">2014-7-12 15:30</time>
              </div>
            </header>

            <div className="am-comment-bd">
              ...
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <View>
        <article data-am-widget="paragraph" className="am-paragraph am-paragraph-default" data-am-paragraph="{ tableScrollable: true, pureview: true }">
        {marked(this.state.data.context.toString())}
        </article>
        <hr />
        {this.render_comment()}
      </View>
    );
  }
}

export default Page;
