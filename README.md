# Example Implementations for Custom UI Screen Widgets

## TLDR
- Web Component
- Can use any framework or no framework
- Output format must be esm
- Recommended build tool is esbuild
- Examples / Starter Templates (ordered from simplest to most complex)
    - [Lit](lit) (easy, lightweight, recommended)
    - [Vanilla JS](vanilla) (a bit cumbersome, but fast)
    - [Stencil](stencil) (more complex)
- Note that [Hybrids](https://hybrids.js.org) does not work out of the box, since it [does not observe attribute values](https://github.com/hybridsjs/hybrids/blob/main/docs/component-model/structure.md#attributes)

## Getting Started
### Development Environment Setup
- Install [Node.js](https://nodejs.org/en/download/)
- Install `yarn` globally: `npm install -g yarn`

### Project Setup
For development it is useful to setup the git directory in the Glue data folder so that changes can be picked up automatically by Glue.
- Create a new Solution and note its id (can be found by clicking on its gear icon and then going to the advanced section)
- Go to the Solution folder (Windows: `C:\Users\<username>\AppData\Local\MakePro\glue\solutions\<solution-id>`)
- Choose a tag name for your widget (must contain only letters, numbers, and dashes and must start with `guw-`), for example `guw-my-super-widget`
- Create a new folder with the tag name, for example `guw-my-super-widget`, inside the `custom-ui-widgets` folder
- Create a new git repository inside the folder: `git init` and copy the template contents from one of the provided framework examples (e.g. `lit`) into the folder
- Open that folder in your favorite IDE (we recommend [VS Code](https://code.visualstudio.com/))
- Update the tag name, icon and display name in the `glue` property of the `package.json` file
- Open a terminal in the folder and run `yarn install` to install the dependencies
- Run `yarn build --watch` to start the build process in watch mode

### Commands
- `yarn build` - builds the widget
- `yarn build --watch` - builds the widget in watch mode (recommended for development as only the Page needs to be reloaded in Glue)
- `yarn pack` - builds the widget and creates a zip file that can be uploaded to Glue