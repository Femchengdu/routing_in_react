import React, { Component } from 'react';

import './Blog.css';

import Posts from './Posts/Posts';

import NewPost from './NewPost/NewPost';

import {Route, NavLink} from 'react-router-dom';

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
                            <li><NavLink to='/' exact>Home</NavLink> </li>
                            <li><NavLink to={{ pathname: '/new_post' }}>New Post</NavLink> </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <Posts />} /> */}
                {/* This component is a a class or function we have defined */}
                <Route path='/' exact component={Posts} />
		<Route path='/new_post' exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;
