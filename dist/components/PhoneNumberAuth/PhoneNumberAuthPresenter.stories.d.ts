import { Meta } from '@storybook/react';
import { default as PhoneNumberAuth } from './PhoneNumberAuthPresenter';
import { PhoneNumberAuthProps } from '@goflock/types';
declare const _default: Meta<typeof PhoneNumberAuth>;
export default _default;
export declare const SuccessfulVerification: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, PhoneNumberAuthProps>;
export declare const OtpSendingFailed: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, PhoneNumberAuthProps>;
export declare const OtpVerificationFailed: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, PhoneNumberAuthProps>;
