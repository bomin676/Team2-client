import React, { forwardRef, useMemo } from "react";

type ProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    /** 0~100 사이 퍼센트 값 */
    value?: number;
    /** 기본 100 */
    max?: number;
    /** 너비 변화 애니메이션 on/off (기본 true) */
    animated?: boolean;
};

const clamp = (n: number, min = 0, max = 100) => Math.min(max, Math.max(min, n));

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
    ({ value = 0, max = 100, animated = true, className = "", ...rest }, ref) => {
        const pct = useMemo(() => {
            // value 가 0~max 라면 퍼센트로 환산, 그 외엔 0~100 가정
            const v = max !== 100 ? (value / max) * 100 : value;
            return clamp(Number.isFinite(v) ? v : 0);
        }, [value, max]);

        const rootClass =
            "relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800 " + className;

        return (
            <div
                ref={ref}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={Math.round((pct * max) / 100)}
                className={rootClass}
                {...rest}
            >
                <div
                    className={
                        "h-full bg-blue-600 dark:bg-blue-500 " +
                        (animated ? "transition-[width] duration-300 ease-in-out" : "")
                    }
                    style={{ width: `${pct}%` }}
                />
            </div>
        );
    }
);

Progress.displayName = "Progress";
export default Progress;
