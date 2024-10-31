import { ProfileProps } from '@goflock/types';
declare const _default: {
    title: string;
    component: import('react').FC<import('@goflock/types/src').ProfileProps>;
};
export default _default;
export declare const Default: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, ProfileProps>;
export declare const LoadingState: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, ProfileProps>;
export declare const ErrorState: import('@storybook/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, ProfileProps>;
export declare const EditProfile: {
    (args: JSX.IntrinsicAttributes & ProfileProps): import("react/jsx-runtime").JSX.Element;
    args: {
        profile: {
            id: string;
            prefName: string;
            isIntroShown: boolean;
            pictureUrl: string;
            preferences: {
                smsNotifications: boolean;
                emailNotifications: boolean;
                pushNotifications: boolean;
            };
            phone: string;
        };
    };
};
export declare const PrivacyPolicy: {
    (args: JSX.IntrinsicAttributes & ProfileProps): import("react/jsx-runtime").JSX.Element;
    args: {};
};
