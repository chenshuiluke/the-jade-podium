import React, { Component } from 'react';
import { subscribe } from 'alfa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Heading } from 'react-bulma-components';
import {
    Field,
    Control,
    Label,
    Input,
  } from 'react-bulma-components/lib/components/form';
import Select from 'react-select';
class CreateQuestion extends Component{
    question_title = "";
    constructor(props) {
        super(props)
        this.state = { 
            text: '',
            title: ''
        } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this);
      }
    
      handleChange(value) {
        this.setState({ text: value })
      }
      handleTitleChange(event){
        this.setState({title: event.target.value});
      }
      render() {
        let modules = {
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline','strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
        };
        
        let formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ];
        let style={
            backgroundColor: 'white'
        };

        let tag_options = [
            {
                label: 'Politics',
                value: 'politics'
            },
            {
                label: 'Technology',
                value: 'technology'
            }            
        ]

        return (
            
            <div style={style}>
                <Heading>Ask a Question 😃🏫</Heading>
                <Field>
                    {/* <Label>Title Here</Label> */}
                    <Control>
                        <Input placeholder="Title Here" onChange={this.handleTitleChange} value={this.state.title}/>
                    </Control>
                </Field>
                <br />
                {/* <Heading subtitle>Question Text</Heading> */}
                <ReactQuill value={this.state.text}
                    onChange={this.handleChange} modules={modules} formats={formats}/>
                <br />
                {/* <Heading subtitle>Tags</Heading> */}
                <Select
                    placeholder="Topic Tags"
                    isMulti={true}
                    isSearchable={true}
                    options={tag_options}
                />
            </div>
          
        )
      }
}
export default subscribe(CreateQuestion, ['logged_in'])
