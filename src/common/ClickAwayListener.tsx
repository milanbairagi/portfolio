import { useEffect, useRef, type HTMLAttributes } from "react";

type ClickAwayListenerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  onClickAway: () => void;
};

function ClickAwayListener({
  children,
  onClickAway,
  ...props
}: ClickAwayListenerProps) {
  const ref: React.RefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!ref || !ref.current) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClickAway]);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}

export default ClickAwayListener;
