import { useEffect } from 'react';

// Scroll event listener
export const useScrollToBottom = (callback) => {
  useEffect(() => {

    console.log('useScrollToBottom hook is running');
    const handleScroll = () => {
      console.log('body offset: ', document.body.offsetHeight)
      console.log('scrolling...', window.innerHeight + window.scrollY >= document.body.offsetHeight)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};