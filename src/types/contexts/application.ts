import { ReactElement, ReactNode } from 'react';

export type AplicationContextProps = {
    isMoreThanTablet: boolean
}

export type ApplicationContextProviderProps = {
    children: ReactNode | ReactElement | JSX.Element
}