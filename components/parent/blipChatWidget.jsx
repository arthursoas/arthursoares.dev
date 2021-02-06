import { Component } from 'react';

class BlipChatWidget extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.onload = () => {
      new BlipChat()
        .withAppKey('d2Vic2l0ZTQ6YWEzYmM5MDEtNzk2My00OTJiLWE4NmEtYzllZGZjZGVkNjZm')
        .withButton({color: '#000'})
        .withCustomCommonUrl('https://chat.blip.ai/')
        .build();
    }
  }

  render() {
    return (
      <script src="https://unpkg.com/blip-chat-widget" type="text/javascript" />
    )
  }
}

export default BlipChatWidget;