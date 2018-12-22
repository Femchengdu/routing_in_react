import React, { Component } from 'react';
//.
import './NewPost.css';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Ajayi',
        submitted: false
    }


    sendFormData = () => {
        const formData =  {
            title: this.state.title,
            body: this.state.content
        }

        axios.post('/posts', formData )
            .then(response => {
                console.log(response);
                this.setState({submitted: true});
            });
    }

    render () {
        let willRedirect = null;
        if (this.state.submitted) {
            willRedirect = <Redirect to='/' />;
        }
        return (
            <div className="NewPost">
                {willRedirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Ajayi">Ajayi</option>
                    <option value="Samuel">Samuel</option>
                </select>
                <button onClick={this.sendFormData}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
