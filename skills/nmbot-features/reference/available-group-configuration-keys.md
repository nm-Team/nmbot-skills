# Available Group Configuration Keys

- **Generated At:** 2026-04-16T10:37:34.335Z
- **Source File:** packages/bot-next/src/utils/oneClickGroupConfigurationChanger.ts
- **Total Tags:** 10
- **Total Keys:** 115
- **Function Field Output:** Function body is omitted for safety and readability.

---

## Tags

### Action Log

- **Key:** actionLog
- **Description:** Record the actions of the group administrators.

### Auto-Delete Messages by Type

- **Key:** autoDeleteByMessageType
- **Description:** Automatically delete messages by message type.

### Group Entertainment Function

- **Key:** entertainmentFeature
- **Description:** These features can activate groups.

### Join Verification

- **Key:** joinVerification
- **Description:** New members must complete verification before speaking.

### Language

- **Key:** language
- **Description:** Set the language of group interaction.

### Group Management Feature

- **Key:** managementFeature
- **Description:** These functions require the group management function to be enabled.

### Mention Group Administrators

- **Key:** mentionAdministrators
- **Description:** Remind the group administrators.

### Smart Chat

- **Key:** smartChatFeature
- **Description:** These features allow nmBot to communicate with group members and messages within the group.

### Spam Detector

- **Key:** spamDetector
- **Description:** Automatically intercept spam messages in the group.

### Speak Frequency Limitation

- **Key:** speakFrequencyLimitation
- **Description:** Limit the number of messages sent by users in a short time.

---

## Keys

### actionLogChannel

- **Key:** actionLogChannel
- **Name:** Action Log Channel
- **Available values:** Dynamic (validated by valueFunction)
- **Required permissions:** actionLog
- **Tags:**
  - Action Log (actionLog)
- **valueFunction:** Defined (function body omitted for safety and readability)

---

### actionLogEnabled

- **Key:** actionLogEnabled
- **Name:** Enable Action Log
- **Available values:** Dynamic (validated by valueFunction)
- **Required permissions:** actionLog
- **Tags:**
  - Action Log (actionLog)
- **valueFunction:** Defined (function body omitted for safety and readability)

---

### adminFunctionsEnabled

- **Key:** adminFunctionsEnabled
- **Name:** Group Management Function
- **Description:** Controls whether nmBot group management functionality is enabled. Most nmBot management features require this enabled.
- **Available values:** Dynamic (validated by valueFunction)
- **Required permissions:** adminFunctions
- **Tags:**
  - Group Management Feature (managementFeature)
- **valueFunction:** Defined (function body omitted for safety and readability)

---

### autoBanChannelsOnUserJoin

- **Key:** autoBanChannelsOnUserJoin
- **Name:** Aggressively ban the channels of users who join the group
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)
- **Intelligence description:** Requires Auto Delete Channel Messages and Join Verification enabled

---

### autoDeleteChannelMessages

- **Key:** autoDeleteChannelMessages
- **Name:** Auto-Delete Channel Identity Messages
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteChannelMessagesBan

- **Key:** autoDeleteChannelMessagesBan
- **Name:** Ban all channels of the user when auto-delete channel message
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)
- **Intelligence description:** Requires Auto Delete Channel Messages enabled

---

### autoDeleteCommand

- **Key:** autoDeleteCommand
- **Name:** Auto-Delete Command
- **Available values:**
  - 0
  - 1
  - 2
  - 3
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Group Management Feature (managementFeature)
- **Available values (English labels):**
  - Disabled
  - Only delete the commands calling nmBot
  - Delete commands calling nmBot and unspecified bots
  - Delete all command messages

---

### autoDeleteContacts

- **Key:** autoDeleteContacts
- **Name:** Auto-Delete Contact Cards
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteExternalQuotes

- **Key:** autoDeleteExternalQuotes
- **Name:** Auto-Delete External Quote Messages
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteGifs

- **Key:** autoDeleteGifs
- **Name:** Auto-Delete GIFs
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteLongMessages

- **Key:** autoDeleteLongMessages
- **Name:** Auto-Delete Long Text Messages
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteMessagesSentViaBot

- **Key:** autoDeleteMessagesSentViaBot
- **Name:** Auto-Delete Messages Sent via Bot
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteMessagesWithCustomEmoji

- **Key:** autoDeleteMessagesWithCustomEmoji
- **Name:** Auto-Delete Messages with Custom Emoji
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteMessagesWithLinks

- **Key:** autoDeleteMessagesWithLinks
- **Name:** Auto-Delete Messages with Links
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeletePictures

- **Key:** autoDeletePictures
- **Name:** Auto-Delete Pictures
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeletePremiumStickers

- **Key:** autoDeletePremiumStickers
- **Name:** Auto-Delete Premium Stickers
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteReplyToOperationTimeout

- **Key:** autoDeleteReplyToOperationTimeout
- **Name:** Auto-Delete operation reply message delay
- **Available values:**
  - 0
  - 30
  - 60
  - 120
  - 360
  - 600
- **Plus only values:**
  - 30
  - 60
  - 120
  - 360
  - 600
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Group Management Feature (managementFeature)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### autoDeleteStickers

- **Key:** autoDeleteStickers
- **Name:** Auto-Delete Stickers
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteStories

- **Key:** autoDeleteStories
- **Name:** Auto-Delete Stories
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteSystemServiceMessages

- **Key:** autoDeleteSystemServiceMessages
- **Name:** Auto-Delete System Messages
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteVideoNotes

- **Key:** autoDeleteVideoNotes
- **Name:** Auto-Delete Video Notes
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteVideos

- **Key:** autoDeleteVideos
- **Name:** Auto-Delete Videos
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoDeleteVoiceMessages

- **Key:** autoDeleteVoiceMessages
- **Name:** Auto-Delete Voice Messages
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
  - Auto-Delete Messages by Type (autoDeleteByMessageType)

---

### autoWarnAfterAutoDeleteCount

- **Key:** autoWarnAfterAutoDeleteCount
- **Name:** Warn users when automatically deleting by types of messages
- **Available values:**
  - 0
  - 1
- **Plus only values:**
  - 1
- **Required permissions:** speakLimitations
- **Available values (English labels):**
  - Not warn
  - Warn

---

### banmeEnabled

- **Key:** banmeEnabled
- **Name:** Banme
- **Description:** When the member sent /banme, there is a chance to get a random duration.
- **Available values:**
  - true
  - false
- **Required permissions:** games

---

### banUsersLeftTheGroup

- **Key:** banUsersLeftTheGroup
- **Name:** Ban users left the group
- **Available values:**
  - true
  - false
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Group Management Feature (managementFeature)

---

### banUsersLeftTheGroupTime

- **Key:** banUsersLeftTheGroupTime
- **Name:** Time to Ban Users Who Left the Group
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Group Management Feature (managementFeature)
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### commandLimitationData

- **Key:** commandLimitationData
- **Name:** Restricted Command List
- **Required permissions:** speakLimitations
- **valueConverter:** Defined (function body omitted for safety and readability)

---

### commandLimitationEnabled

- **Key:** commandLimitationEnabled
- **Name:** Command Limitation
- **Available values:** Dynamic (validated by valueFunction)
- **Required permissions:** speakLimitations
- **Tags:**
  - Group Management Feature (managementFeature)
- **valueFunction:** Defined (function body omitted for safety and readability)

---

### creditApiEnabled

- **Key:** creditApiEnabled
- **Name:** Enable Credit Features
- **Available values:**
  - true
  - false
- **Required permissions:** otherAdminFunctions

---

### emergencyOfflineModeActiveUntil

- **Key:** emergencyOfflineModeActiveUntil
- **Name:** Offline Mode
- **Description:** Let nmBot stop receiving and processing group messages.
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:**
  - 0
- **Required permissions:** otherAdminFunctions
- **Intelligence description:** Only pass the seconds to active, 30min~1day, only integer minutes are allowed, or zero to close, e.g. 60, 120
- **valueFunction:** Defined (function body omitted for safety and readability)
- **valueConverter:** Defined (function body omitted for safety and readability)
- **valueTextFunction:** Defined (function body omitted for safety and readability)
- **hookFunction:** Defined (function body omitted for safety and readability)

---

### emergencySilentModeActiveUntil

- **Key:** emergencySilentModeActiveUntil
- **Name:** Silent Mode
- **Description:** Make nmBot stop sending any messages in the group.
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:**
  - 0
- **Required permissions:** otherAdminFunctions
- **Intelligence description:** Only pass the seconds to active, 30min~1day, only integer minutes are allowed, or zero to close, e.g. 60, 120
- **valueFunction:** Defined (function body omitted for safety and readability)
- **valueConverter:** Defined (function body omitted for safety and readability)
- **valueTextFunction:** Defined (function body omitted for safety and readability)
- **hookFunction:** Defined (function body omitted for safety and readability)

---

### interactionEnabled

- **Key:** interactionEnabled
- **Name:** Group Member Interaction
- **Description:** Through a "/$pinch" method, interact with other group members.
- **Available values:**
  - true
  - false
- **Required permissions:** games

---

### joinRequestNotificationMessageIds

- **Key:** joinRequestNotificationMessageIds
- **Name:** Join Request Notification Message ID
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** joinVerification
- **Message ID field:** Yes
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **valueConverter:** Defined (function body omitted for safety and readability)

---

### joinVerificationAutoApprovePremiumUser

- **Key:** joinVerificationAutoApprovePremiumUser
- **Name:** Join Verification Automatically Passes for Premium Users
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)

---

### joinVerificationAutoRejectNonPremiumUser

- **Key:** joinVerificationAutoRejectNonPremiumUser
- **Name:** Join Verification Automatically Rejects Non-Premium Users
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)

---

### joinVerificationAutoRejectSpamUser

- **Key:** joinVerificationAutoRejectSpamUser
- **Name:** Join Verification Automatically Rejects Spam Users
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)

---

### joinVerificationBanAdminRejectUserTime

- **Key:** joinVerificationBanAdminRejectUserTime
- **Name:** Join Verification Ban Time for Users Rejected by Administrator
- **Available values:**
  - -1
  - 0
  - 120
  - 600
  - 3600
  - 86400
  - 172800
  - 604800
- **Plus only values:**
  - 0
  - 120
  - 600
  - 3600
  - 86400
  - 172800
  - 604800
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationBanSpamUserTime

- **Key:** joinVerificationBanSpamUserTime
- **Name:** Join Verification Ban Time for Users Identified as Spammers
- **Available values:**
  - -1
  - 0
  - 120
  - 600
  - 3600
  - 86400
  - 172800
  - 604800
- **Plus only values:**
  - 0
  - 120
  - 600
  - 3600
  - 86400
  - 172800
  - 604800
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationBanUserTime

- **Key:** joinVerificationBanUserTime
- **Name:** Join Verification Ban User Time
- **Available values:**
  - 0
  - 120
  - 600
  - 3600
  - 86400
  - 172800
  - 604800
- **Plus only values:**
  - 600
  - 3600
  - 86400
  - 172800
  - 604800
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationChannelId

- **Key:** joinVerificationChannelId
- **Name:** Join Verification Channel ID
- **Available values:** Dynamic (validated by valueFunction)
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **Internal only:** Yes
- **Intelligence description:** Please set by /groupSetJoinVerifyChannel API Request.
- **valueFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationChannelInviteLink

- **Key:** joinVerificationChannelInviteLink
- **Name:** Join Verification Channel Invitation Link
- **Available values:** Dynamic (validated by valueFunction)
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **Internal only:** Yes
- **Hidden to intelligence:** Yes
- **valueFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationChat

- **Key:** joinVerificationChat
- **Name:** Join Verification Chat
- **Available values:**
  - group
  - private
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **Available values (English labels):**
  - Group
  - Jump to private chat

---

### joinVerificationCustomText

- **Key:** joinVerificationCustomText
- **Name:** Join Verification Custom Text
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationDeleteFailedMessageAfterEnd

- **Key:** joinVerificationDeleteFailedMessageAfterEnd
- **Name:** Delay in Deleting Messages After Join Verification Fails
- **Available values:**
  - 0
  - 60
  - 90
  - 120
  - 180
  - 300
  - 600
  - 900
  - 1800
  - 3600
- **Plus only values:**
  - 0
  - 60
  - 90
  - 180
  - 300
  - 600
  - 900
  - 1800
  - 3600
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationDeleteJoinSystemMessage

- **Key:** joinVerificationDeleteJoinSystemMessage
- **Name:** Delete Join Group System Messages
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)

---

### joinVerificationEnableJoinRequest

- **Key:** joinVerificationEnableJoinRequest
- **Name:** Join Verification via Chat Join Request
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)

---

### joinVerificationMaxAttemptsCount

- **Key:** joinVerificationMaxAttemptsCount
- **Name:** Maximum Number of Join Verification Attempts
- **Available values:**
  - 0
  - 1
  - 2
  - 3
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **Available values (English labels):**
  - Unlimited
  - 1 time
  - 2 times
  - 3 times

---

### joinVerificationTime

- **Key:** joinVerificationTime
- **Name:** Join Verification Timeout
- **Available values:**
  - 60
  - 90
  - 120
  - 180
  - 300
  - 600
  - 900
  - 1800
  - 3600
- **Plus only values:**
  - 60
  - 90
  - 300
  - 600
  - 900
  - 1800
  - 3600
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### joinVerificationType

- **Key:** joinVerificationType
- **Name:** Join Verification
- **Available values:**
  - disabled
  - math
  - web
  - subscribe_channel
  - sticker
  - star
  - semi_automatic
  - reject
- **Plus only values:**
  - semi_automatic
- **Required permissions:** joinVerification
- **Tags:**
  - Join Verification (joinVerification)
  - Group Management Feature (managementFeature)
- **Intelligence description:** math: Solve a simple math problem\nweb: Do reCAPTCHA verification\nsubscribe_channel: Subscribe to a channel\nsticker: Send a sticker\nstar: Pay Telegram Star Invoice\nreject: Reject anyone
- **Available values (English labels):**
  - disabled
  - Math
  - Web
  - Subscribe channel
  - Send sticker
  - Star
  - Semi-automatic Join Verification
  - Reject new members from joining

---

### jpacAutoSyncNewBannedUsers

- **Key:** jpacAutoSyncNewBannedUsers
- **Name:** "Joint Prevention and Control" automatically synchronizes newly banned users
- **Available values:**
  - true
  - false
- **Plus only values:**
  - true
- **Required permissions:** otherAdminFunctions

---

### jpacSendMessage

- **Key:** jpacSendMessage
- **Name:** Send a "JPAC" Prompt Message
- **Available values:**
  - true
  - false
- **Required permissions:** otherAdminFunctions

---

### language

- **Key:** language
- **Name:** Language
- **Description:** The language used by nmBot in the group.
- **Available values:**
  - en
  - zh-hans
  - zh-hant
  - zh-mars
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Language (language)
- **Available values (English labels):**
  - English
  - 简体中文
  - 繁體中文
  - 焱暒妏

---

### leaveDeleteAfter

- **Key:** leaveDeleteAfter
- **Name:** Leave message deletion delay
- **Available values:**
  - 0
  - 30
  - 60
  - 90
  - 120
  - 180
  - 240
  - 360
  - 600
- **Plus only values:**
  - 30
  - 60
  - 90
  - 180
  - 240
  - 360
  - 600
- **Required permissions:** welcomeMessage
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### leaveMessageIds

- **Key:** leaveMessageIds
- **Name:** Leave message ID(s)
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** welcomeMessage
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **valueConverter:** Defined (function body omitted for safety and readability)

---

### mentionAdministratorsCustomPhrase

- **Key:** mentionAdministratorsCustomPhrase
- **Name:** Customized administrator mention phrase
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Mention Group Administrators (mentionAdministrators)
  - Group Management Feature (managementFeature)
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### mentionAdministratorsDoNotMentionInGroupChat

- **Key:** mentionAdministratorsDoNotMentionInGroupChat
- **Name:** Do not mention admins in the group
- **Available values:**
  - true
  - false
- **Plus only values:**
  - true
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Mention Group Administrators (mentionAdministrators)
  - Group Management Feature (managementFeature)

---

### mentionAdministratorsEnabled

- **Key:** mentionAdministratorsEnabled
- **Name:** Mention group administrator
- **Available values:**
  - true
  - false
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Mention Group Administrators (mentionAdministrators)
  - Group Management Feature (managementFeature)

---

### mentionAdministratorsReceiveNotificationInPrivateChat

- **Key:** mentionAdministratorsReceiveNotificationInPrivateChat
- **Name:** Receive call in private message
- **Available values:**
  - true
  - false
- **Plus only values:**
  - true
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Mention Group Administrators (mentionAdministrators)
  - Group Management Feature (managementFeature)

---

### newMemberLimitationCanSendAudios

- **Key:** newMemberLimitationCanSendAudios
- **Name:** Allow new members to send audio
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendDocuments

- **Key:** newMemberLimitationCanSendDocuments
- **Name:** Allow new members to send documents
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendMessages

- **Key:** newMemberLimitationCanSendMessages
- **Name:** Allow new members to send messages
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendOtherMessages

- **Key:** newMemberLimitationCanSendOtherMessages
- **Name:** Allow new members to send stickers and GIFs
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendPhotos

- **Key:** newMemberLimitationCanSendPhotos
- **Name:** Allow new members to send pictures
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendPolls

- **Key:** newMemberLimitationCanSendPolls
- **Name:** Allow new members to send votes
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendVideoNotes

- **Key:** newMemberLimitationCanSendVideoNotes
- **Name:** Allow new members to send video messages
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendVideos

- **Key:** newMemberLimitationCanSendVideos
- **Name:** Allow new members to send videos
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationCanSendVoiceNotes

- **Key:** newMemberLimitationCanSendVoiceNotes
- **Name:** Allow new members to send voice messages
- **Available values:**
  - true
  - false
- **Required permissions:** joinVerification

---

### newMemberLimitationDuration

- **Key:** newMemberLimitationDuration
- **Name:** New Member Permission Restrictions
- **Available values:**
  - 0
  - 1800
  - 3600
  - 7200
  - 10800
  - 21600
  - 32400
  - 43200
  - 64800
  - 86400
  - 172800
  - 259200
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** joinVerification
- **Tags:**
  - Group Management Feature (managementFeature)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### nmartChatEnabled

- **Key:** nmartChatEnabled
- **Name:** nmartChat
- **Available values:**
  - true
  - false
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)
- **Intelligence description:** Note: Always enabled if management features disabled

---

### nmartChatPlusEnabled

- **Key:** nmartChatPlusEnabled
- **Name:** nmartChat+
- **Available values:**
  - true
  - false
- **Plus only values:**
  - true
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)

---

### overrideUserLanguage

- **Key:** overrideUserLanguage
- **Name:** Group Language Overrides User Language
- **Available values:**
  - true
  - false
- **Required permissions:** otherAdminFunctions
- **Tags:**
  - Language (language)

---

### permissionActionLog

- **Key:** permissionActionLog
- **Name:** Change Permissions for Action Log Function
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionAdminFunctions

- **Key:** permissionAdminFunctions
- **Name:** Change Permissions for Group Management Functions
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionGames

- **Key:** permissionGames
- **Name:** Change Permissions for Group Entertainment Functions
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionImportOrExportConfiguration

- **Key:** permissionImportOrExportConfiguration
- **Name:** Permission to Import or Export Configurations
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionJoinVerification

- **Key:** permissionJoinVerification
- **Name:** Change Permissions for Join Verification Function
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionKeywordReply

- **Key:** permissionKeywordReply
- **Name:** Change Permissions for Keyword Reply Function
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionOtherAdminFunctions

- **Key:** permissionOtherAdminFunctions
- **Name:** Change Permissions for Other Group Management Features
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionSmartChat

- **Key:** permissionSmartChat
- **Name:** Change Permissions for Smart Chat Features
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionSpeakLimitations

- **Key:** permissionSpeakLimitations
- **Name:** Change Permissions for Speak Limitation Functions
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### permissionWelcomeMessage

- **Key:** permissionWelcomeMessage
- **Name:** Change Permissions for Group Welcome Messages
- **Available values:**
  - default
  - admins_can_change_info
  - admins_can_promote_users
  - only_creator
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** owner
- **plusValueFunction:** Defined (function body omitted for safety and readability)

---

### properWarmUpDisableForwarding

- **Key:** properWarmUpDisableForwarding
- **Name:** Proper Warm Up Prohibits Forwarding and Saving
- **Available values:**
  - true
  - false
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)

---

### properWarmUpEnabled

- **Key:** properWarmUpEnabled
- **Name:** Proper Warm Up
- **Available values:**
  - true
  - false
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)
- **Intelligence description:** Proper Warm Up v1 will be ignored if Proper Warm Up v2 is enabled

---

### properWarmUpPersonalities

- **Key:** properWarmUpPersonalities
- **Name:** Proper Warm Up Personality
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### properWarmUpV2AttitudePreference

- **Key:** properWarmUpV2AttitudePreference
- **Name:** New Proper Warm Up Attitude Preference
- **Description:** Set up your opinion on the content of the post.
- **Available values:**
  - random
  - positive
  - negative
  - neutral
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)
- **Available values (English labels):**
  - Random
  - Positive
  - Negative
  - Neutral

---

### properWarmUpV2CharacterSetting

- **Key:** properWarmUpV2CharacterSetting
- **Name:** New Proper Warm Up Character Setting
- **Description:** Set the kind of identity to comment on posts for "Proper Warm Up".
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### properWarmUpV2ContinuousChatPreference

- **Key:** properWarmUpV2ContinuousChatPreference
- **Name:** New Proper Warm Up Continuous Chat Preference
- **Description:** Set up how to respond to other comments.
- **Available values:**
  - balance
  - continuous
  - intermittent
  - rare
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)
- **Available values (English labels):**
  - Balance
  - Continuous
  - Intermittent
  - Rare

---

### properWarmUpV2DisableForwarding

- **Key:** properWarmUpV2DisableForwarding
- **Name:** New Proper Warm Up Disable Copying or Forwarding
- **Available values:**
  - true
  - false
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)

---

### properWarmUpV2Enabled

- **Key:** properWarmUpV2Enabled
- **Name:** New Proper Warm Up
- **Available values:**
  - true
  - false
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)

---

### properWarmUpV2SpeakStyle

- **Key:** properWarmUpV2SpeakStyle
- **Name:** New Proper Warm Up Speak Style
- **Description:** Setting up speeches is more straightforward, more tactful or more ironic.
- **Available values:**
  - random
  - normal
  - cute
  - humorous
  - serious
  - critical
  - professor
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)
- **Available values (English labels):**
  - Random
  - Normal
  - Cute
  - Humorous
  - Serious
  - Critical
  - Professor

---

### properWarmUpV2WorkWithImages

- **Key:** properWarmUpV2WorkWithImages
- **Name:** New Proper Warm Up Process Post with Images
- **Available values:**
  - true
  - false
- **Required permissions:** smartChat
- **Tags:**
  - Smart Chat (smartChatFeature)

---

### quoteEnabled

- **Key:** quoteEnabled
- **Name:** Enable Message Quote
- **Description:** Quote text messages into stickers.
- **Available values:**
  - true
  - false
- **Required permissions:** games

---

### repeatEnabled

- **Key:** repeatEnabled
- **Name:** Repeat
- **Description:** Repeat the messages repeatedly sent by multiple members.
- **Available values:**
  - true
  - false
- **Required permissions:** games

---

### replyChannelPostsMessageIds

- **Key:** replyChannelPostsMessageIds
- **Name:** Channel Post Auto-Reply Message
- **Available values:** Dynamic (validated by valueFunction)
- **Plus only values:** Dynamic (validated by plusValueFunction)
- **Required permissions:** otherAdminFunctions
- **Message ID field:** Yes
- **valueFunction:** Defined (function body omitted for safety and readability)
- **plusValueFunction:** Defined (function body omitted for safety and readability)
- **valueConverter:** Defined (function body omitted for safety and readability)

---

### spamDetectorAction

- **Key:** spamDetectorAction
- **Name:** Spam User Actions
- **Available values:**
  - false
  - ban
  - delete
- **Required permissions:** speakLimitations
- **Tags:**
  - Spam Detector (spamDetector)
  - Group Management Feature (managementFeature)
- **valueConverter:** Defined (function body omitted for safety and readability)
- **importValueConverter:** Defined (function body omitted for safety and readability)

---

### spamDetectorAllowSupportToUnbanUsers

- **Key:** spamDetectorAllowSupportToUnbanUsers
- **Name:** Allow nmTeam Support to Unban Users Banned by Mistake
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Spam Detector (spamDetector)
  - Group Management Feature (managementFeature)

---

### spamDetectorCASAction

- **Key:** spamDetectorCASAction
- **Name:** Combot Anti-Spam Harasses User Operations
- **Available values:**
  - false
  - ban
  - delete
- **Required permissions:** speakLimitations
- **valueConverter:** Defined (function body omitted for safety and readability)
- **importValueConverter:** Defined (function body omitted for safety and readability)
- **Available values (English labels):**
  - Disabled
  - Delete
  - Delete and ban

---

### spamDetectorNMBotIntelligenceAction

- **Key:** spamDetectorNMBotIntelligenceAction
- **Name:** nmBot intelligence spam user operation
- **Available values:**
  - false
  - ban
  - delete
- **Required permissions:** speakLimitations
- **valueConverter:** Defined (function body omitted for safety and readability)
- **importValueConverter:** Defined (function body omitted for safety and readability)
- **Available values (English labels):**
  - Disabled
  - Delete
  - Delete and ban

---

### spamDetectorNMBotIntelligenceSmartAction

- **Key:** spamDetectorNMBotIntelligenceSmartAction
- **Name:** Spam interception nmBot Intelligence Smart Action
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Spam Detector (spamDetector)
  - Group Management Feature (managementFeature)

---

### spamDetectorNMBotIntelligenceThreshold

- **Key:** spamDetectorNMBotIntelligenceThreshold
- **Name:** Spam interception nmBot Intelligence recognition sensitivity
- **Available values:**
  - 0.5
  - 0.55
  - 0.6
  - 0.65
  - 0.7
  - 0.75
  - 0.8
  - 0.85
  - 0.9
  - 0.95
- **Required permissions:** speakLimitations
- **Tags:**
  - Spam Detector (spamDetector)
  - Group Management Feature (managementFeature)

---

### spamDetectorOnlyBanUsersSendMultipleMessageTextsMatched

- **Key:** spamDetectorOnlyBanUsersSendMultipleMessageTextsMatched
- **Name:** Only Ban When Message Rules Are Triggered Multiple Times in a Short Period of Time
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Spam Detector (spamDetector)
  - Group Management Feature (managementFeature)

---

### spamDetectorSendMessage

- **Key:** spamDetectorSendMessage
- **Name:** Send Reminder Messages When Intercepting Spam Messages
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Spam Detector (spamDetector)
  - Group Management Feature (managementFeature)

---

### speakLimitationCountMediaGroupAsOne

- **Key:** speakLimitationCountMediaGroupAsOne
- **Name:** Speak Frequency Limit Treats Media Group as One Message
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)

---

### speakLimitationGear

- **Key:** speakLimitationGear
- **Name:** Speech Frequency Limit Number
- **Available values:**
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
  - 8
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### speakLimitationSendMessage

- **Key:** speakLimitationSendMessage
- **Name:** Speak Frequency Limit and Sending Reminder Messages
- **Available values:**
  - true
  - false
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)

---

### speakLimitationWeightedIndexGearFile

- **Key:** speakLimitationWeightedIndexGearFile
- **Name:** Speak Frequency Limit File Gear
- **Available values:**
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)
- **Available values (English labels):**
  - x1
  - x0
  - x0.5
  - x0.75
  - x1.25
  - x1.5
  - x2
  - x3

---

### speakLimitationWeightedIndexGearMedia

- **Key:** speakLimitationWeightedIndexGearMedia
- **Name:** Speak Frequency Limit Media Gear
- **Available values:**
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)
- **Available values (English labels):**
  - x1
  - x0
  - x0.5
  - x0.75
  - x1.25
  - x1.5
  - x2
  - x3

---

### speakLimitationWeightedIndexGearSticker

- **Key:** speakLimitationWeightedIndexGearSticker
- **Name:** Speak Frequency Limit Sticker Gear
- **Available values:**
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)
- **Available values (English labels):**
  - x1
  - x0
  - x0.5
  - x0.75
  - x1.25
  - x1.5
  - x2
  - x3

---

### speakLimitationWeightedIndexGearText

- **Key:** speakLimitationWeightedIndexGearText
- **Name:** Speak Frequency Limit Text Gear
- **Available values:**
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)
- **Available values (English labels):**
  - x1
  - x0
  - x0.5
  - x0.75
  - x1.25
  - x1.5
  - x2
  - x3

---

### speakLimitationWeightedIndexGearVoice

- **Key:** speakLimitationWeightedIndexGearVoice
- **Name:** Speak Frequency Limit Voice Gear
- **Available values:**
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
- **Required permissions:** speakLimitations
- **Tags:**
  - Speak Frequency Limitation (speakFrequencyLimitation)
  - Group Management Feature (managementFeature)
- **Available values (English labels):**
  - x1
  - x0
  - x0.5
  - x0.75
  - x1.25
  - x1.5
  - x2
  - x3

---

### unpinChannelPosts

- **Key:** unpinChannelPosts
- **Name:** Unpin Channel Posts
- **Available values:**
  - true
  - false
- **Required permissions:** otherAdminFunctions

---

### warnMaxCount

- **Key:** warnMaxCount
- **Name:** Maximum Number of Warnings
- **Available values:**
  - -1
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
  - 8
- **Required permissions:** otherAdminFunctions
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### welcomeDeleteAfter

- **Key:** welcomeDeleteAfter
- **Name:** Join Welcome Message Deletion Delay
- **Description:** The delay time before deleting the group welcome message.
- **Available values:**
  - 0
  - 30
  - 60
  - 90
  - 120
  - 180
  - 240
  - 360
  - 600
- **Plus only values:**
  - 30
  - 60
  - 90
  - 180
  - 240
  - 360
  - 600
- **Required permissions:** welcomeMessage
- **valueTextFunction:** Defined (function body omitted for safety and readability)

---

### welcomeMessageId

- **Key:** welcomeMessageId
- **Name:** Join welcome message ID
- **Available values:** Dynamic (validated by valueFunction)
- **Required permissions:** welcomeMessage
- **Message ID field:** Yes
- **valueFunction:** Defined (function body omitted for safety and readability)
- **valueConverter:** Defined (function body omitted for safety and readability)

---
