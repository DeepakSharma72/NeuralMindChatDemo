import { useState } from "react";

const textAreaCSS = {
    width: '100%',
    border: 'none',
    borderRadius: '20px',
    outline: 'none',
    resize: 'none'
}

function Lookup({msgArr, setChats}) {
  const [message, setmessage] = useState('');
  const KeyPress = (e) => {
    e.preventDefault();
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    else if (e.key === 'Enter') {
      let newMsgArr = [...msgArr];
      console.log(newMsgArr);
      newMsgArr.push({to: false, text: message.trim()})
      console.log(newMsgArr);
      setChats(newMsgArr);
      setmessage('');
    }
  }
  return (
    <div className="Lookup col-11 mx-auto">
      <textarea className="p-2 px-3 shadow my-2" placeholder="Ask me anything..."
        style={textAreaCSS} type='text' value={message}
        onKeyUp={KeyPress} onChange={(e) => setmessage(e.target.value)} rows={1} />
    </div>
  );
}

export default Lookup;