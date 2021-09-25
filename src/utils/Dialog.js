import React, {Component} from 'react';
import Dialog from 'react-native-dialog';

export default class DialogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      title: '',
      description: '',
      showButtons: false,
    };
  }

  show(title = 'Success', description, showButtons = false) {
    this.setState(
      {
        title: title,
        description: description,
        showButtons: showButtons,
      },
      () => {
        this.setState({visible: true});
      },
    );
  }

  hide() {
    this.setState({visible: false});
  }

  render() {
    return (
      <Dialog.Container visible={this.state.visible}>
        <Dialog.Title>{this.state.title}</Dialog.Title>
        <Dialog.Description>{this.state.description}</Dialog.Description>
        {this.state.showButtons && <Dialog.Button label="Cancel" />}
      </Dialog.Container>
    );
  }
}
