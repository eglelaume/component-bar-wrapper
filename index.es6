import React from 'react';
import Icon from '@economist/component-icon';

export default class BarWrapper extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    close: React.PropTypes.bool,
    onClose: React.PropTypes.func,
  }
  static defaultProps = {
    close: true,
  }
  constructor(...args) {
    super(...args);
    this.onClose = this.onClose.bind(this);
  }
  onClose(event) {
    if (event.button !== 0) { return; }
    if (event.ctrlKey) { return; }
    if (this.props.onClose) {
      this.props.onClose(event);
    }
    this.setState({ closed: true });
  }
  render() {
    const { className, children, close, onClose } = this.props;

    let classNames = [ 'bar-wrapper' ];
    let closedClassNames = [ 'bar-wrapper--closed' ];
    let containerClassNames = [ 'bar-wrapper--container' ];
    let closeWrapperClassNames = [ 'bar-wrapper--close-wrapper' ]
    let closeClassNames = [ 'bar-wrapper--close' ];

    if (className) {
      classNames = classNames.concat([ className ]);
      closedClassNames = closedClassNames.concat([ `${className}--closed` ]);
      containerClassNames = containerClassNames.concat([ `${className}--container` ]);
      closeClassNames = closeClassNames.concat([ `${className}--close` ]);
      closeWrapperClassNames = closeWrapperClassNames.concat([ `${className}--close-wrapper` ]);
    }

    if (this.state && this.state.closed) {
      return (<div className={closedClassNames.join(' ')}></div>);
    }

    let closeButton = null;

    if (close) {
      closeButton = (
        <span onClick={this.onClose}
          className={closeWrapperClassNames.join(' ')}
          tabIndex={0}
        >
          <Icon icon="close" className={closeClassNames.join(' ')} />
        </span>
      );
    }

    return (
      <div className={classNames.join(' ')}>
        <div className={containerClassNames.join(' ')}>
          {closeButton}
          {children}
        </div>
      </div>
    );
  }
}

