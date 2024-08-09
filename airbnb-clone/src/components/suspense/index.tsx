import React, { FC, Suspense } from "react";

type CustomSuspenseType = {
    children: React.ReactNode,
    fallback: React.ReactNode
}

const CustomSuspense: FC<CustomSuspenseType> = ({ children, fallback }) => {
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    );
};

export default CustomSuspense;