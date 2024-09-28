import { Meta, StoryFn } from "@storybook/react";
import InviteMembersPresenter from "./InviteMembersPresenter"; // Adjust the import path
import { InviteMembersProps } from "@goflock/types/src/index"; // Adjust based on your structure
import { IonContent } from "@ionic/react";

// Mock data
const mockAdmins = [
  { id: "1", name: "Admin 1", phone: "1234567890" },
  { id: "2", name: "Admin 2", phone: "9876543210" },
];

const mockMembers = [
  { id: "3", name: "Member 1", phone: "1111111111" },
  { id: "4", name: "Member 2", phone: "2222222222" },
  { id: "5", name: "Member 3", phone: "3333333333" },
];

const mockProfile = {
  id: "user_001",
  prefName: "John Doe",
  isIntroShown: true,
  pictureUrl: "https://via.placeholder.com/150",
  preferences: {
    smsNotifications: true,
    emailNotifications: false,
    pushNotifications: true,
  },
};

const Template: StoryFn<InviteMembersProps> = (args) => (
  <IonContent>
    <InviteMembersPresenter {...args} />
  </IonContent>
);

export const Default = Template.bind({});
Default.args = {
  profile: mockProfile,
  eventId: "event_123",
  admins: mockAdmins,
  members: mockMembers,
  getMembersFromContactList: async () => [
    { name: "Contact 1", phone: "555-1111" },
    { name: "Contact 2", phone: "555-2222" },
  ],
  addAdmin: async (eventMember) => Promise.resolve(eventMember),
  removeAdmin: async () => Promise.resolve(true),
  addMember: async (eventMember) => Promise.resolve(eventMember),
  removeMember: async () => Promise.resolve(true),
};

export default {
  title: "InviteMembersPresenter",
  component: InviteMembersPresenter,
  args: Default.args,
  decorators: [
    (Story) => (
      <IonContent>
        <Story />
      </IonContent>
    ),
  ],
} as Meta<InviteMembersProps>;
