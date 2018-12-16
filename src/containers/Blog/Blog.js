import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                // Call setState inside the then methond becase the call to the server is asynchronous
                response => {
                    this.setState({posts: response.data})
                    //console.log(response);
                }
            );  
    }
    
    render () {
        const postData = this.state.posts.map( singlePost => {
            return <Post key={singlePost.id} title={singlePost.title} />
        }
        );
        return (
            <div>
                <section className="Posts">
                    {postData}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;