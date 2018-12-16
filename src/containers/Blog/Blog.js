import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        clickedPostId: null
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                // Call setState inside the then methond becase the call to the server is asynchronous
                response => {
                    const samplePosts = response.data.slice(0, 8);
                    const transPosts = samplePosts.map(transPost => {
                        return {
                            ...transPost,
                            author: 'Ajayi'
                        }
                    }); 
                    this.setState({posts: transPosts})
                    //console.log(response);
                }
            );  
    }

    GetPostId = (id) => {
        this.setState({clickedPostId: id});
    }
    
    render () {
        const postData = this.state.posts.map( singlePost => {
            return <Post 
                key={singlePost.id} 
                title={singlePost.title} 
                author={singlePost.author}
                // Why use the anonymous function here?
                postId={() => this.GetPostId(singlePost.id)}/>
        }
        );
        return (
            <div>
                <section className="Posts">
                    {postData}
                </section>
                <section>
                    <FullPost id={this.state.clickedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
