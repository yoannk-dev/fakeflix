// components/atoms/Button.tsx

import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode,
  href: string,
  target?: string,
}

const Button: React.FunctionComponent<Props> = ({ children, href, target }): JSX.Element => {
  return (
    <a href={href} className={styles.button} target={target}>
      {children}
    </a>
  )
}

Button.defaultProps = {
  target: '_blank',
};

export default Button
