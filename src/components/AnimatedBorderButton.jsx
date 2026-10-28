export const AnimatedBorderButton = ({ children, className = "", onClick, href, type = "button", ...props }) => {
  const classes = "animated-border-button " + className;
  if (href) {
    return <a className={classes} href={href} {...props}><span>{children}</span></a>;
  }
  return <button className={classes} type={type} onClick={onClick} {...props}><span>{children}</span></button>;
};