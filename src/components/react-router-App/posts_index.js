import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts} from "../../actions/index";
import { Link } from 'react-router';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    ListOfPosts() {
        console.log(this.props.posts);
       return this.props.posts.all.map((post) =>{
            return(
                <Link to={`posts/${post.id}`} key={post.id}>
                <li className="list-group-item" >
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
                </Link>
            );
        });
    }
    render()
    {
        return(
            <div>
          <div className="text-xs-right">
              <Link to="/newPost" className="btn btn-primary">Add a post</Link>
          </div>
                List of blogs
                {this.ListOfPosts()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {posts: state.posts}

}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);