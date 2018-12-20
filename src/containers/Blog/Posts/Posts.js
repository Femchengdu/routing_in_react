import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
	state = {
        posts: [],
        //clickedPostId: null,
        //getError: false
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
                console.log(error);
                //this.setState({getError: true});
            });  
    }

    GetPostId = (id) => {
        //this.setState({clickedPostId: id});
        // Use this method to set the route programatically
        /*
        this.props.history.push('/post/' + id);
        */
    }


	render () {
		let postData = <p style={{textAlign: 'center'}}>Sorry, a request error prevented me from downloading the posts from the server</p>;

        if (!this.state.getError) {
            postData = this.state.posts.map( singlePost => {
                return (
                    <Link to={'/post/' + singlePost.id} key={singlePost.id}>
                        <Post  
                            title={singlePost.title} 
                            author={singlePost.author}
                            // Why use the anonymous function here?
                            postId={() => this.GetPostId(singlePost.id)}/>
                    </Link> 
                );
            } );
        }

		return (
            <div>
                <section className="Posts">
                    {postData}
                </section>
                <Route path='/post/:id' exact component={FullPost} />
            </div>
		);
	}
}

export default Posts;
