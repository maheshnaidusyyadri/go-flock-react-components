import { CreateNewEventProps } from '@goflock/types/src/presenter';
import { JSX } from 'react/jsx-runtime';
declare const _default: {
    title: string;
    component: import('react').FC<CreateNewEventProps>;
    NoEventPresenter: import('react').FC<CreateNewEventProps>;
};
export default _default;
export declare const Default: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, CreateNewEventProps>;
export declare const NoEvent: {
    (args: JSX.IntrinsicAttributes & CreateNewEventProps): JSX.Element;
    args: {};
};
export declare const CreatingEvent: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, CreateNewEventProps>;
export declare const ErrorState: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, CreateNewEventProps>;
export declare const EventCreated: {
    (args: JSX.IntrinsicAttributes & CreateNewEventProps): JSX.Element;
    args: {};
};
