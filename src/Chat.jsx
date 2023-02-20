import React, { useEffect, useState } from 'react'
import TextArea from './Textarea'

const ChatSectionBoxCSS = {
  backgroundColor: '#eff5fe',
}

const ChatBox = {
  height: '400px',
  overflow: 'auto',
}

const SenderMessageBoxCSS = {
  backgroundColor: '#fffafa',
  borderRadius: '15px',
  textAlign: 'justify',
  whiteSpace: 'pre-wrap'
}

const RecieverMessageBoxCSS = {
  backgroundColor: '#2b2b9c',
  borderRadius: '15px',
  color: 'whitesmoke',
  textAlign: 'justify',
  whiteSpace: 'pre-wrap'
}

const recommenditemCss = {
  normal: {
    marginLeft: '8px',
    padding: '3px 10px',
    border: '2px solid #7b7be3',
    borderRadius: '15px',
    color: '#7b7be3',
    backgroundColor: 'white',
    cursor: 'pointer',
    textAlign: 'justify',
    marginBottom: '4px',
    marginTop: '4px'
  },
  hover: {
    backgroundColor: 'lightgrey'
  }
}


const SenderChat = ({ msg }) => {
  // console.log(msg);
  return (
    <div className='row justify-content-start my-2'>
      <div className='col-lg-7 col-md-8 col-sm-9 col-10 p-2' style={SenderMessageBoxCSS}>
        {msg}
      </div>
    </div>
  )
}

const RecieverChat = ({ msg }) => {
  // console.log(msg)
  return (
    <div className='row justify-content-end my-2'>
      <div className='col-lg-7 col-md-8 col-sm-9 col-10 p-2' style={RecieverMessageBoxCSS}>
        {msg}
      </div>
    </div>
  )
}


const Recommendation = () => {
  const [activerec, setactiverec] = useState({ one: false, two: false, three: false });

  return (
    <>
      <div className='col-11 mx-auto d-flex justify-content-end flex-wrap'>
        <div>
          <i className="bi bi-question-circle" style={{ color: '#7b7be3', fontSize: '22px' }}></i>
        </div>
        <div style={{ ...recommenditemCss.normal, ...(activerec.one === true ? recommenditemCss.hover : null) }}
          onMouseEnter={() => setactiverec({ one: true, two: false, three: false })}
          onMouseLeave={() => setactiverec({ one: false, two: false, three: false })}>
          You are right
        </div>
        <div style={{ ...recommenditemCss.normal, ...(activerec.two === true ? recommenditemCss.hover : null) }}
          onMouseEnter={() => setactiverec({ one: false, two: true, three: false })}
          onMouseLeave={() => setactiverec({ one: false, two: false, three: false })}>
          Let see in future
        </div>
        <div style={{ ...recommenditemCss.normal, ...(activerec.three === true ? recommenditemCss.hover : null) }}
          onMouseEnter={() => setactiverec({ one: false, two: false, three: true })}
          onMouseLeave={() => setactiverec({ one: false, two: false, three: false })}>
          You are better
        </div>
      </div>
    </>
  )
}


function Chat() {

  const Durrmy = [{ to: true, text: "Hello! I am ChatGPT, a large language model developed by OpenAI. I am designed to understand and respond to natural language queries from humans. I'm here to help answer any questions you may have, so feel free to ask me anything!" },
  {
    to: false,
    text: 'What do you think google bard is better than you?'
  },
  {
    to: true,
    text: "I can tell you that both Google Bard and I are designed to provide natural language processing capabilities to users. While both models have their strengths and weaknesses, they are ultimately designed to serve different purposes and cater to different use cases."
  }]

  const [chats, setChats] = useState(Durrmy);

  return (
    <div className='row mb-3'>
      <div style={ChatSectionBoxCSS} className='col-lg-9 col-md-10 col-sm-11 col-12 mx-auto mt-md-4 mt-2' width='100%'>
        <img src='https://neuralmind.io/images/logo-techplus-x-template.svg' alt='banner'></img>

        <div style={ChatBox}>
          {chats.map((obj) => (obj.to === true) ? <SenderChat msg={obj.text} /> : <RecieverChat msg={obj.text} />)}
        </div>

        <div className='row'>
          <Recommendation />
        </div>

        <div className='row'>
          <TextArea msgArr={chats} setChats={setChats} />
        </div>
      </div>
    </div>
  )
}

export default Chat;
