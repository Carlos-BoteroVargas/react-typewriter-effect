import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ text }) => {

  const index = useRef(0);

  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    index.current = 0;
    setCurrentText('');
  }, [text])

  useEffect(() => {
    // if (index.current < text.lenght) {
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index.current));
        index.current += 1;
      }, 200);
      return () => {
        clearTimeout(timeoutId);
      }
    // }
      }, [currentText, text])

  return (
    <div>
      <p>{currentText}</p>
    </div>
  )
}

export default TypeWriter
