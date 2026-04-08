# nmBot Skills

This repository contains the [Agent Skills](https://agentskills.io/) for nmBot.

## Skills

This repository includes the following Skills:

- [nmbot-features](skills/nmbot-features/SKILL.md): This Skill provides a list of features that nmBot supports. Use this Skill when you need to trigger a specific feature of nmBot for the user. For details of each feature, please refer to the nmbot-features Skill.

- [nmbot-commands](skills/nmbot-commands/SKILL.md): This Skill provides a list of commands that nmBot supports. Use this Skill when you need to trigger a specific command of nmBot for the user. For feature details of each command, please refer to the nmbot-features Skill.

- [nmbot-api](skills/nmbot-api/SKILL.md): This Skill tells how to use the nmBot Panel API (MCP) to control the user's settings of nmBot. Use this Skill to help the user to control nmBot's behavior and settings.

## Installation

You can use [Vercel's Skill Manager](https://github.com/vercel-labs/skills) to install:

```bash
npx skills add nm-Team/nmbot-skills
```

Or, you can clone this repository and add the Skills manually:

```bash
git clone https://github.com/nm-Team/nmbot-skills.git
cd nmbot-skills
```

Then install the Skills in your agent.

## Contributing

Contributions to this repository are welcome! If you have any suggestions, improvements, or new Skills to add, please feel free to submit a pull request.

## License

This repository is licensed under the [GPL-3.0 License](LICENSE). Please see the LICENSE file for more details.
