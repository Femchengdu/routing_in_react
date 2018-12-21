import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';


class FullPost extends Component {
    state = {
        detailedPost: null
    }
    componentDidMount () {
	   console.log(this.props);
       this.loadData(); 
    }

    componentDidUpdate () {
        this.loadData();
    }

    loadData () {
        if (this.props.match.params.id) {
            if (!this.state.detailedPost || (this.state.detailedPost && this.state.detailedPost.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        //console.log(response.data);
                        this.setState({detailedPost: response.data});
                    }  );
            };

            // if (this.state.detailedPost && this.state.detailedPost.id !== this.props.match.params.id) {
            // axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            //     .then(response => {
            //         //console.log(response.data);
            //         this.setState({detailedPost: response.data});
            //     } );
            // };
            
        }
    }

    deletePost = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Select a Post!</p>;

        if (this.props.match.params.id) {
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
