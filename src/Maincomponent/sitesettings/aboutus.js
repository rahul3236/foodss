import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState , ContentState} from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

let content = `<div class="note-editable" style="height: 720px;" contenteditable="true"><p>"Fooderia is a food ordering and delivery company based out of Sri Ganganagar, India. Fooderia was inspired by the thought of providing a complete food ordering and delivery solution from the magical hands of our chef to the urban foodie. A single window for ordering from a wide range of menu, we have our own exclusive fleet of delivery personnel to deliver it to customers. Having our own fleet gives us the flexibility to offer customers a no minimum order policy and accept online payments for all the order’s placed by the customers. Our delivery personnel carry one order at a time which ensures you get reliable and fast deliveries."</p></div>`
const blocksFromHtml = htmlToDraft(content);
const { contentBlocks, entityMap } = blocksFromHtml;
const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
const editorStatee = EditorState.createWithContent(contentState);
class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: editorStatee,
    };
  }

  onEditorStateChange: Function = (editorState) => {
    console.log(editorState)
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorStyle={{marginRight:"1%",padding:"10px",border:"1px solid #9efaff", overflow:"auto" }}
        toolbarStyle={{marginRight:"1%"}}
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}

export default MyEditor;
