import React, { Component } from 'react';
import './Chat.css'; 
import sit from './cut/img-removebg-preview.png'

export class Chat extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: '2d7c579417b1e36ee7d5725b41aaced74',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return (
        
<>


      <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <div className='img'>
      <img src={sit} alt='uni'/>
    </div>
</>

      
    );
  }
}

export default Chat;




