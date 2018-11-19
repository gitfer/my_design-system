This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DEPLOY

- Edit files

- Local commits

- `npm run publish` (which is a "lerna publish" asking for version)

### `npm run storybook`

- In design system's package.json I'm referencing my designsystem's packages in latest version.

- I have a .npmrc pointing to my local registry.

- In case a node_module/@mydesignsystem package is missing, clean your folder and run `npm install`

### Push on git withoush a tag?

- `npx lerna version 0.0.7 --force-publish`

(tag on git)

- `npx lerna publish from-git`

(publish su registry della 0.0.7)
