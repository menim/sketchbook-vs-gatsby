import React from 'react';

const Button = ({as: Element, theme, children, className, ...restProps}) => {
  const btnTheme = theme ? `btn btn--${theme}-theme` : '';
  const classNames = [btnTheme, className].join(' ');

  return (
    <Element className={classNames} {...restProps}>
      {children}
    </Element>
  );
};

Button.defaultProps = {
  as: 'button',
};

export default Button;
