import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        detailedPost: null
    }
    componentDidUpdate () {
        if (this.props.id) {
            if (!this.state.detailedPost || (this.state.detailedPost && this.state.detailedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        //console.log(response.data);
                        this.setState({detailedPost: response.data});
                    }  );
            };

            // if (this.state.detailedPost && this.state.detailedPost.id !== this.props.id) {
            // axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            //     .then(response => {
            //         //console.log(response.data);
            //         this.setState({detailedPost: response.data});
            //     } );
            // };
            
        }
    }

    deletePost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Select a Post!</p>;

        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading.....</p>;
        }

        if (this.state.detailedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.detailedPost.title}</h1>
                    <p>{this.state.detailedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePost} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;
