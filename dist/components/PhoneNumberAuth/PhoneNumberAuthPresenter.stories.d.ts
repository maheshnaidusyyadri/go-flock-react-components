import { Meta } from '@storybook/react';
import { default as PhoneNumberAuth } from './PhoneNumberAuthPresenter';
import { PhoneNumberAuthProps } from '@goflock/types';
import { JSX } from 'react/jsx-runtime';
declare const _default: Meta<typeof PhoneNumberAuth>;
export default _default;
export declare const Default: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, PhoneNumberAuthProps>;
export declare const Welcome: {
    (args: JSX.IntrinsicAttributes & PhoneNumberAuthProps): JSX.Element;
    args: {};
};
