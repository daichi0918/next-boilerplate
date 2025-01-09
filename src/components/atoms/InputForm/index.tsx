import type { JSX } from "react";
import { memo } from "react";

import styles from "./styles.module.css";

/**
 * InputForm
 *
 * @package atoms
 */

type Props = JSX.IntrinsicElements["input"];

/**
 * @param {InputFormProps} props
 * @returns {JSX.Element}
 */
export const InputForm = memo((props: Props) => {
  const {
    placeholder = "",
    value,
    onChange,
    onKeyDown,
    readOnly = false,
  } = props;
  return (
    <input
      type={"text"}
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      onKeyDown={onKeyDown}
    />
  );
});
