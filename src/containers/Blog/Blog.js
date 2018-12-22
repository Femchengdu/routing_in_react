import React, { Component } from 'react';

import './Blog.css';

import Posts from './Posts/Posts';

import NewPost from './NewPost/NewPost';

import {Switch, Route, NavLink} from 'react-router-dom';

//import FullPost from './FullPost/FullPost';

//import axios from 'axios';
//.
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
                            <li><NavLink to='/posts' exact>Posts</NavLink> </li>
                            <li><NavLink to={{ pathname: '/new_post' }}>New Post</NavLink> </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <Posts />} /> }
                 The component part of the route is a class or function we have defined */}
                <Switch>
                    <Route path='/new_post' exact component={NewPost} />
                    <Route path='/posts'  component={Posts} />
                    {/*
                        <Route path='/post/:id' exact component={FullPost} />
                    */}
                </Switch>
               

            </div>
        );
    }
}

export default Blog;
