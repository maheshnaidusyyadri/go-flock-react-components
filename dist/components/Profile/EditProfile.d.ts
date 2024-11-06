import { default as React } from 'react';
import { Profile } from '@goflock/types';
type EditProfileProps = {
    profile: Profile;
    setPreferredName: (prefName: string) => Promise<boolean>;
    setSMSPreference: (smsNotifications: boolean) => Promise<boolean>;
    setProfileOpen: (close: boolean) => void;
};
declare const EditProfile: React.FC<EditProfileProps>;
export default EditProfile;
