import React, { useState, MouseEvent, useEffect, useRef, useLayoutEffect } from 'react';
import * as styles from './Select.module.scss';
export type SelectProps = React.InputHTMLAttributes<HTMLInputElement>;
const Select: React.FC<SelectProps> = ({
  size,
  multiple,
  children,
  className,
  onChange,
  ...restProps
}) => {
  const classes = [styles['select-lib'], className].filter(Boolean).join(' ');
  const [listStyle, setListStyle] = useState<React.CSSProperties>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (listRef.current && isOpen) {
      const listHeight = listRef.current.scrollHeight;
      const itemCount = React.Children.count(children);
      if (itemCount > 0 && size) {
        const itemHeight = listHeight / itemCount;
        const totalVisibleHeight = itemHeight * size;

        setListStyle({
          height: totalVisibleHeight,
        });
      }
    }
  }, [isOpen, children, size]);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function clickHandler() {
    setIsOpen((prev) => !prev);
  }

  function clickOptionHandler(event: MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    const value = target.getAttribute('value') || target.textContent || '';

    if (multiple) {
      setSelected((prev) => {
        if (prev.includes(value)) {
          target.classList.remove('selected');
          return prev.filter((el) => el !== value);
        }
        target.classList.add('selected');
        return [...prev, value];
      });
    } else {
      setSelected([value]);
      setIsOpen(false);
    }

    if (onChange) {
      const fakeEvent = {
        ...event,
        target: multiple ? { value: [...selected, value] } : { value },
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      onChange(fakeEvent);
    }
  }
  return (
    <div ref={containerRef} className={styles['select-container']}>
      <input
        className={classes}
        type='text'
        value={selected.join(', ')}
        onClick={clickHandler}
        readOnly
        {...restProps}
      />
      <svg
        onClick={clickHandler}
        className={isOpen ? `${styles.arrow} ${styles.down}` : `${styles.arrow} ${styles.up}`}
        width='12'
        height='8'
        viewBox='0 0 12 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <path
          d='M1 1L6 6L11 1'
          stroke='rgb(111 107 107 / 87%)'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
      {isOpen && (
        <div
          ref={listRef}
          onClick={clickOptionHandler}
          className={styles['select-children']}
          style={{ ...listStyle }}
          data-testid='select-list'
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<HTMLOptionElement>(child)) {
              const childProps = { ...child.props };
              const childValue = childProps.value.toString();
              const isSelected = selected.includes(childValue);
              const existingClassName = childProps.className || '';
              const newClassName =
                `${existingClassName} ${isSelected ? styles.selected : ''}`.trim();

              return React.cloneElement(child, {
                ...childProps,
                className: newClassName,
              });
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
