export const privacyPolicyData = {
  lastUpdated: 'November 28, 2025',
  highlights: [
    'No personal information collected',
    'Notification token used only for app functionality',
    'No tracking, analytics, or data sharing',
  ],
  sections: [
    {
      title: '1. No Personal Data Collection',
      content:
        'AI Short News does not collect, store, or process any personally identifiable information. The app only uses a device-generated notification token required to deliver push notifications. This token cannot identify you personally and is not linked to any user profile.',
      subSection: {
        title: 'What is NOT Collected:',
        items: [
          'Name, email, phone number, or any contact information',
          'Location data',
          "Your device's personal information (except the notification token)",
          'Usage analytics or behavior tracking',
          'Browsing or reading habits',
          'Cookies or website data',
          'Any account or login information',
        ],
      },
    },
    {
      title: '2. App Functionality',
      content:
        '• Display AI-generated news summaries\n• Organize content by categories\n• Save articles locally on your device\n• Deliver push notifications about new articles\n• No account creation or login required',
    },
    {
      title: '3. Notification Token Usage',
      content:
        'To send push notifications, your device generates a secure, random notification token. This token is processed only by Apple Push Notification Service (APNs) and Firebase Cloud Messaging (FCM) to deliver notifications. We do not store, share, or link this token to any personal data.',
      subSection: {
        title: 'How the Notification Token is Used:',
        items: [
          'Used only to send new article alerts',
          'Not linked to your identity',
          'Not shared with advertisers or third parties',
          'Not used for analytics, tracking, or profiling',
          'Deleted automatically if you disable notifications or uninstall the app',
        ],
      },
    },
    {
      title: '4. Third-Party Services',
      content:
        'We use Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs) only to deliver notifications. These services handle message delivery but do not collect personal information. We do not use advertising networks, tracking SDKs, or analytics tools.',
    },
    {
      title: '5. App Security',
      content:
        '• Secure transmission of notification data\n• Regular security updates\n• No storage of user data on our servers\n• Local-only storage for saved articles and app preferences',
    },
    {
      title: '6. Local Data Storage & Notifications',
      content:
        '• Saved articles are stored only on your device\n• App settings remain on your device\n• Notification history stays on your device\n• Notification token used only for sending alerts\n• No personal data is shared or transmitted outside your device',
    },
    {
      title: '7. Your Privacy & Notification Control',
      content:
        'You have full control over your notifications. You can enable or disable notifications anytime from your device settings. We do not track whether you open or dismiss notifications.',
    },
    {
      title: "8. Children's Privacy",
      content:
        'Our app is safe for all ages and does not collect or store personal information from anyone, including children.',
    },
    {
      title: '9. International Usage',
      content:
        'The app complies with international privacy laws due to our zero personal data collection policy and limited use of a non-identifying device notification token.',
    },
    {
      title: '10. Policy Changes',
      content:
        'We may update this Privacy Policy occasionally. When changes are made, we will:\n\n• Update the policy within the app\n• Update the "Last Updated" date\n• Notify users if significant changes occur\n\nYour continued use of the app signifies acceptance of the latest version of this policy.',
    },
    {
      title: '11. Contact Information',
      content:
        'If you have any questions or concerns about this Privacy Policy or how notifications work, please contact us:\n\nEmail: info@eshalore.com',
    },
  ],
};
