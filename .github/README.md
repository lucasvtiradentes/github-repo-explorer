<a name="TOC"></a>

<h3 align="center">
  GITHUB REPO APP
</h3>

<div align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/made%20with-next-1f425f?logo=next.js&.svg" /></a>
  <a href="https://www.github.com/lucasvtiradentes/github-repo-explorer/commits/master"><img src="https://img.shields.io/github/last-commit/lucasvtiradentes/github-repo-explorer?color=green&label=updated"></a>
  <br>
    <a href="#"><img src="https://img.shields.io/badge/maintained%3F-yes-green.svg" alt="maintance" /></a>
  <a href="https://www.github.com/lucasvtiradentes"><img src="https://img.shields.io/badge/maintainer-%40lucasvtiradentes-yellow"></a>
  <a href="https://github.com/lucasvtiradentes/github-repo-explorer#contributing"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="contributions" /></a>
</div>

<p align="center">
  <a href="#dart-features">Features</a> • <a href="#warning-requirements">Requirements</a> • <a href="#wrench-development">Development</a> • <a href="#books-about">About</a> • <a href="#family-community">Community</a>
</p>

<details>
  <summary align="center"><span>see <b>table of content</b></span></summary>
  <p align="center">
    <ul>
      <li><a href="#dart-features">Features</a></li>
      <li><a href="#warning-requirements">Requirements</a></li>
      <li>
        <a href="#wrench-development">Development</a>
        <ul>
          <li><a href="#development-setup">Development setup</a></li>
          <li><a href="#folders-and-files-structure">Folders and files structure</a></li>
          <li><a href="#used-technologies">Used technologies</a></li>
          <li><a href="#commit-messages-style">Commit messages style</a></li>
        </ul>
      </li>
      <li>
        <a href="#books-about">About</a>
        <ul>
          <li><a href="#license">License</a></li>
        </ul>
      </li>
      <li>
        <a href="#family-community">Community</a>
        <ul>
          <li><a href="#contributing">Contributing</a></li>
          <li><a href="#feedback">Feedback</a></li>
        </ul>
      </li>
    </ul>
  </p>
</details>

<a href="#"><img src="./images/divider.png" /></a>

## :trumpet: Overview

This is a github application that allow users to see github repos detailed informations.

<div align="center" style="text-align: center;">
<img src="./images/app.webp">
</div>

## :dart: Features<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

&nbsp;&nbsp;&nbsp;✔️ Connection to github api to retrieve information;<br>
&nbsp;&nbsp;&nbsp;✔️ View specific girhub repository information;<br>
&nbsp;&nbsp;&nbsp;✔️ Save searched repositories data into localstorage.<br>

## :warning: Requirements<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

In order to use this project in your computer, you need to have the following items:

- [npm](https://www.npmjs.com/): To install the package. Npm is installed alongside nodejs;
- [nodejs](https://nodejs.org/en/): To actually run the package.

If you want to make changes to the source code, it is recommended to also install the following items:

- [git](https://git-scm.com/): To work with version controlling;
- [vscode](https://code.visualstudio.com/): Useful for editing the code. You can choose a similar editor as you wish.

## :wrench: Development<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

### Development setup

To setup this project in your computer, download it in this link or run the following commands:

```bash
# Clone this repository
$ git clone https://github.com/lucasvtiradentes/github-repo-explorer

# Go into the repository
$ cd github-repo-explorer
```

After download it, go to the project folder and run these commands:

```bash
# Install dependencies
$ npm install

# Run the typescript code in development mode
$ npm run dev
```

If you want to contribute to the project, after you make the necessary changes, run these commands to check if everything is working fine:

```bash
# Compile the code into javascript
$ npm run build

# Run the compiled code in production mode
$ npm run start
```

### Folders and files structure

The project has the following folder strucure:

```plain
|-- .github      # contains CI-CD workflows, github templates, DOCS and images.
|-- dist         # (dev only) build folder
|-- node_modules # (dev only) dependencies folder
|-- ignore       # (dev only) offline folder
|-- src          # application source code
```

and the filles present in root folder are the following:

```plain
.editorconfig      # editorconfig settings file
.gitignore         # git ignored items
LICENSE            # application license
package.json       # project specifications
tsconfig.json      # typescript configs
tsconfig.node.json # typescript configs helper
vite.config.ts     # vite configs file
```

### Used technologies

This project uses the following thechnologies:

<div align="center">
  <table>
    <tr>
      <th>Scope</th>
      <th>Subject</th>
      <th>Technologies</th>
    </tr>
    <tr>
      <td rowspan="1">Project</td>
      <td>Main</td>
      <td align="center">
        <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white"></a>
        <a target="_blank" href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB"></a>
        <a target="_blank" href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white"></a>
      </td>
    </tr>
    <!-- <tr> -->
      <!-- <td rowspan="2">Main</td> -->
      <!-- <td>Secondary</td> -->
      <!-- <td align="center"> -->
        <!-- <a target="_blank" href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/tailwind-1e3a8a?logo=tailwindcss&logoColor=white"></a> -->
      <!-- </td> -->
    <!-- </tr> -->
    <!-- <tr> -->
      <!-- <td rowspan="2">Setup</td> -->
      <!-- <td>Code linting</td> -->
      <!-- <td align="center"> -->
        <!-- <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/prettier-1A2C34?logo=prettier&logoColor=F7BA3E"></a> -->
        <!-- <a href="https://github.com/eslint/eslint"><img src="https://img.shields.io/badge/eslint-3A33D1?logo=eslint&logoColor=white"></a> -->
      <!-- </td> -->
    <!-- </tr> -->
    <!-- <tr> -->
      <!-- <td rowspan="2">Setup</td> -->
      <!-- <td>Commit linting</td> -->
      <!-- <td align="center"> -->
      <!-- <a target="_blank" href="https://github.com/conventional-changelog/commitlint"><img src="https://img.shields.io/badge/commitlint-red?logo=commitlint&logoColor=white"></a> -->
      <!-- <a target="_blank" href="https://github.com/commitizen/cz-cli"><img src="https://img.shields.io/badge/commitizen-pink?logo=conventionalcommits&logoColor=white"></a> -->
      <!-- <a href="https://gitmoji.dev"><img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji"/></a> -->
      <!-- </td> -->
    <!-- </tr> -->
    <tr>
      <td rowspan="1">Setup</td>
      <td>Other</td>
      <td align="center">
        <a href="https://editorconfig.org/"><img src="https://img.shields.io/badge/Editor%20Config-E0EFEF?logo=editorconfig&logoColor=000"></a>
        <!-- <a target="_blank" href="https://github.com/typicode/husky"><img src="https://img.shields.io/badge/🐶%20husky-green?logo=husky&logoColor=white"></a> -->
        <!-- <a target="_blank" href="https://github.com/okonet/lint-staged"><img src="https://img.shields.io/badge/🚫%20lint%20staged-yellow?&logoColor=white"></a> -->
      </td>
    </tr>
  </table>
</div>

And also this project used the following packages:

```plain
# DEPENDENCIES

- polished             #
- react                # react base package
- react-dom            # react util package
- react-icons          # icons package for react
- react-router-dom     # react routing package
- styled-components    # components style package
- typescript           # typescript basic package

# DEV DEPENDENCIES (skip @types/*)

- @vitejs/plugin-react # vite plugin
- vite                 # vite basic package
```

### Commit messages style

This project uses the best of two main conventions to commit messages validation:

- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/): it's powerfull messages structure;
- [gitmoji](https://gitmoji.dev/): it's beutiful and visual way to display commits.

So a typically valid commit message has this pattern:

> 🔧 config: add lint-staged to the project (#2)

Also, in order to have this integration working correctly, I buld a [script](../scripts/update-commits-configs.ts) that we can specify only allowed types and it take care to update both commitizen and commitlint settings.

<a href="#"><img src="./images/divider.png" /></a>

## :books: About<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

## License

**Boilermanager** is distributed under the terms of the MIT License Version 2.0. A complete version of the license is available in the [LICENSE](LICENSE) file in this repository. Any contribution made to this project will be licensed under the MIT License Version 2.0.

<a href="#"><img src="./images/divider.png" /></a>

## :family: Community<a href="#TOC"><img align="right" src="./images/up_arrow.png" width="22"></a>

## Contributing
if you want to positivily impact this project, consider:

- **:star: Star this repository**: my goal is to impact the maximum number of developers around the world;
- ✍️ **Fix english mistakes** I might have made in this project, may it be in the DOCS or even in the code (I'm a portuguese natural speaker);
- [:heart: Say thanks](https://saythanks.io/to/lucasvtiradentes): kind words have a huge impact in anyone's life;
- [💰 Donate](https://github.com/lucasvtiradentes): if you want to support my work even more, consider make a small donation. I would be really happy!

## Feedback

Any questions or suggestions? You are welcome to discuss it on:

- [Github issues](https://github.com/lucasvtiradentes/github-repo-explorer/discussions)
- [Email](mailto:lucasvtiradentes@gmail.com)

<a href="#"><img src="./images/divider.png" /></a>

<div align="center">
  <p>
    <a target="_blank" href="https://www.linkedin.com/in/lucasvtiradentes/"><img src="https://img.shields.io/badge/-linkedin-blue?logo=Linkedin&logoColor=white" alt="LinkedIn"></a>
    <a target="_blank" href="mailto:lucasvtiradentes@gmail.com"><img src="https://img.shields.io/badge/gmail-red?logo=gmail&logoColor=white" alt="Gmail"></a>
    <a target="_blank" href="https://discord.com/users/262326726892191744"><img src="https://img.shields.io/badge/discord-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
    <a target="_blank" href="https://github.com/lucasvtiradentes/"><img src="https://img.shields.io/badge/github-gray?logo=github&logoColor=white" alt="Github"></a>
  </p>
  <p>Made with ❤️ by Lucas Vieira.</p>
  <p>👉 See also all <a href="https://github.com/lucasvtiradentes/lucasvtiradentes/blob/master/portfolio/PROJECTS.md#TOC">my projects</a></p>
  <p>👉 See also all <a href="https://github.com/lucasvtiradentes/my-tutorials#readme">my articles</a></p>
</div>
