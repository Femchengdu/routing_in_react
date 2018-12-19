import React, { Component } from 'react';

import './Blog.css';

import Posts from './Posts/Posts';

import {Route} from 'react-router-dom';

//import axios from 'axios';

class Blog extends Component {
   

    
    
    render () {
        
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
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a> </li>
                            <li><a href='/new_post'>New Post</a> </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <Posts />} /> */}
                {/* This component is a a class or function we have defined */}
                <Route path='/' exact component={Posts} />
            </div>
        );
    }
}

export default Blog;
