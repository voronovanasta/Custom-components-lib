import React, { useState, MouseEvent, useEffect, useRef, useLayoutEffect } from 'react';
import './Select.scss';
export type SelectProps = React.InputHTMLAttributes<HTMLInputElement>;
const Select: React.FC<SelectProps> = ({
  size,
  required,
  multiple,
  children,
  className,
  onChange,
  ...restProps
}) => {
  const classes = [`select-lib`, className].filter(Boolean).join(' ');
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

    let value: string | undefined;
    if ('value' in target && typeof target.value === 'string') {
      value = target.value;
      if (multiple) {
        setSelected((prev) => {
          if (prev.includes(target.value as string)) {
            target.classList.remove('selected');
            return prev.filter((el) => el !== target.value);
          }
          target.classList.add('selected');
          return [...prev, target.value as string];
        });
      } else {
        setSelected([target.value]);
      }
    } else {
      value = target.textContent || '';
      setSelected([target.textContent || '']);
    }

    if (!multiple) {
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
    <div ref={containerRef} className={required ? 'select-container required' : 'select-container'}>
      <input
        id='select-lib'
        className={classes}
        type='text'
        value={selected}
        onClick={clickHandler}
        required
        readOnly
        {...restProps}
      ></input>
      {isOpen && (
        <div
          ref={listRef}
          onClick={clickOptionHandler}
          className={`select-children`}
          style={{ ...listStyle }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<HTMLOptionElement>(child)) {
              const childProps = { ...child.props };
              const childValue = childProps.value.toString();
              const isSelected = selected.includes(childValue);
              const existingClassName = childProps.className || '';
              const newClassName = `${existingClassName} ${isSelected ? 'selected' : ''}`.trim();

              return React.cloneElement(child, {
                ...childProps,
                className: newClassName,
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
