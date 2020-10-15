// Rozwiązanie opracował Gladiator JS - gh: 
// rozwiązanie nie testowane pod większe ilości danych
 

import React, { useCallback, useState } from 'react'

function WithProgressBar(Component) {
  return class extends React.Component {
    state = {
      progress: 0
    }

    handleScroll = ({ target: { scrollTop, scrollHeight, clientHeight }}) => {
      const elementHeight = scrollHeight - clientHeight;
      const progress = (scrollTop / elementHeight) * 100;

      this.setState({ progress });
    }

    render() {
        const {progress} = this.state
      return (
        <div className="progress__container" onScroll={this.handleScroll}>
          <div className="progress__bar">
            <span style={{ width: `${progress}%` }} data-test-id="progressBar" />
          </div>
          <Component />
        </div>
      );
    }
  }
}

// by Przemocny
function WithProgressBarHook(Component) {
    const [progress, setter] = useState(0)

    const onScroll = useCallback((event)=>{
        const    { scrollTop, scrollHeight, clientHeight } = event.target
        const elementHeight = scrollHeight - clientHeight;
        const progress = (scrollTop / elementHeight) * 100;
        setter( progress );
    },[])

    return (props) => (
        <div className="progress__container" onScroll={onScroll}>
          <div className="progress__bar">
            <span style={{ width: `${progress}%` }} />
          </div>
          <Component />
        </div>
      );
  }

export default WithProgressBar;