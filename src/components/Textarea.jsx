import { useState } from 'react';
import Warning from './Warning';

export default function Textarea({ text, setText }) {
  const [warning, setWarning] = useState('');

  const handleTextChange = (e) => {
    let newText = e.target.value;

    // basic validation
    if (newText.includes('<script>')) {
      setWarning('No scripts allowed');
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@')) {
      setWarning('No @ symbol allowed');
      newText = newText.replace('@', '');
    } else {
      setWarning('');
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warning ? <Warning warning={warning} /> : null}
    </div>
  );
}
