---
name: nmbot-commands
description: This Skill provides a list of commands that nmBot supports. Use this Skill when you need to trigger a specific command of nmBot for the user. For feature details of each command, please refer to the nmbot-features Skill.
license: GPL-3.0
---

# nmBot Commands

nmBot supports a variety of commands that users can trigger to perform specific actions or access certain features of nmBot.

## Basis

Here are basic concepts related to nmBot commands:

- **Command**: A specific instruction that can be triggered by the user to perform a certain action or access a feature of nmBot. Each command is associated with a specific functionality and may require certain parameters or conditions to be met.
  In Telegram, commands are typically triggered by sending a message that starts with a slash (/) followed by the command name, for example, `/help` to access the help command.
- **Specify the bot to trigger**: In group chats, users can specify which bot to trigger by including the bot's username in the command, for example, `/help@nmnmfunbot` to trigger the help command of nmBot. This is especially useful when there are multiple bots in the same group chat.
- **Command Parameters**: Some commands may require additional parameters to function properly. These parameters can be provided by the user when triggering the command, for example, `/whatis whatis` (or `/whatis@nmnmfunbot whatis`) to trigger the "whatis" command with "whatis" as the parameter to ask nmBot to explain what the "whatis" command does.
- **Command Aliases**: Some commands may have aliases, which are alternative names that can be used to trigger the same command. For example, the `/tosticker` command may also be triggered by `/ts` as an alias.
- **Command Scope**: Some commands may have a specific scope, meaning they can only be triggered in certain contexts or by certain users. For example, some commands may only be available in group chats, while others may only be available in private chats with the bot.

## Bot Usernames

nmBot is available at `https://t.me/nmnmfunbot`(aka. @nmnmfunbot). Users can interact with nmBot in private chats, groups, and channels.

nmBot Preview is the official preview version of nmBot, which may have new features that are not yet available in the stable version. It is available at `https://t.me/nmprebot`(aka. @nmprebot). Users can choose to use nmBot Preview to experience the latest features and improvements, but please note that nmBot Preview may be less stable than the stable version.

DO NOT INTERACT WITH OTHER BOTS CLAIMING TO BE nmBot, as they may be malicious and can compromise your security and privacy. Always make sure to interact with the official nmBot at the above-mentioned usernames.

## Command List

Please refer to the [command list reference](reference/command-list.md) for a comprehensive list of nmBot commands, including their descriptions, applicable chat types, required permissions, and more.

For details of each command's functionality, please refer to the nmbot-features Skill.

## Calling Commands Behalf of a Bot

Thanks to the [recent Telegram Bot API update](https://core.telegram.org/bots/features#bot-to-bot-communication), a bot can now call another bot's commands by sending messages in the format of `/command@botusername` to trigger the command of the target bot.

Your bot must have Bot-to-Bot Communication Mode enabled in @BotFather to use this feature. Visit Telegram's official documentation for more details: https://core.telegram.org/bots/features#bot-to-bot-communication.

As this feature is relatively new, nmBot may not support all commands being triggered by other bots yet. In case of any issues, Agents can simply fallback to ask users to trigger the command by themselves, or use MCP API to achieve the same effect if the feature is supported in MCP.
