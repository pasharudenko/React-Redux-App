import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost,deletePost } from "../../actions/index";
import { Link } from 'react-router';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }
    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
        .then(() => {
            this.context.router.push('/ReactRouterApp');
        });
    }
    render()
    {
        console.log(this.props.posts.post);
        if(!this.props.posts.post) {
           return( <div>Loading...</div> );
        }
        return (
          <div>
              <Link to='/ReactRouterApp'>Back to index</Link>
              <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete Post</button>
              <h3>{this.props.posts.post.title}</h3>
              <h6>Categories: {this.props.posts.post.categories}</h6>
              <p>{this.props.posts.post.content}</p>

          </div>
        );
    }
}
function mapStateToProps(state) {
    return {posts: state.posts}

}
export default connect(mapStateToProps, { fetchPost,deletePost })(PostsShow);