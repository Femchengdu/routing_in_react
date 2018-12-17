import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        clickedPostId: null,
        getError: false
    }

    componentDidMount () {
        axios.get('/posts')
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
            )
            .catch(error => {
                //console.log(error);
                this.setState({getError: true});
            });  
    }

    GetPostId = (id) => {
        this.setState({clickedPostId: id});
    }
    
    render () {
        let postData = <p style={{textAlign: 'center'}}>Sorry, a request error prevented me from downloading the posts from the server</p>
        if (!this.state.getError) {
            postData = this.state.posts.map( singlePost => {
                return <Post 
                    key={singlePost.id} 
                    title={singlePost.title} 
                    author={singlePost.author}
                    // Why use the anonymous function here?
                    postId={() => this.GetPostId(singlePost.id)}/>
            });
        }
        // const postData = this.state.posts.map( singlePost => {
        //     return <Post 
        //         key={singlePost.id} 
        //         title={singlePost.title} 
        //         author={singlePost.author}
        //         // Why use the anonymous function here?
        //         postId={() => this.GetPostId(singlePost.id)}/>
        // }
        // );
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
