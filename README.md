# Getting Started with the Megamind UI



## Requirements
---
You must have installed and configured `aws-cli` using `aws configure` command, besides you must need to have installed Amplify CLI globally, you can achieve it by using the following command `npm install -g @aws-amplify/cli`

## Usage
---
### Amplify

There are two ways of retriving the configuration needed of amplify:

- **Automatic** _(Recommended)_: Via script ([amplify_config.sh](amplify_config.sh)) explain in [Automatic] section above
- **Manual**: Via command and giving parameters explain in [Manual] section above

Both ways will generate the configuration needed wich is:

- `amplify` folder root project level
- `aws-exports.js` inside `src/` folder

#### Automatic

The [amplify_config.sh](amplify_config.sh) will retrive all the backend configuration.

To use this way you **MUST** gave the next parameters

```sh
$ amplify_config.sh -a APP_ID -e ENV -k AWS_ACCESS_KEY_ID -s AWS_SECRET_ACCESS_KEY
```

- **APP_ID**: Current app_id is `dcaoe62rxz4br`
- **ENV**: Current environment is `dev`

##### Parameters explanation

- **`-a` (APP_ID)**: Application Id provide by amplify
- **`**-e**` (ENV)**: Environment of amplify
- **`**-k**` (AWS_ACCESS_KEY_ID)**: Aws Access Key
- **`-s` (AWS_SECRET_ACCESS_KEY)**: Aws Secret Key

**NOTE**: Remember to have this file with execute permissions `chmod +x amplify_config.sh`

#### Manual

After unpack the project, in the folder of the project use `amplify pull` command.

It will ask you for next parameters:
	
	- AWS profile: default
	- Which app are you working on?: select the suggested value ( `LDO03UIbase` )
	- Choose the type of app that you're building: javascript
	- What javascript framework are you using: react
	- Source Directory Path: src
	- Distribution Directory Path: dist
	- Build Command: npm run-script build
	- Start Command: npm run-script start	
	- Do you plan on modifying this backend?: Y

### `npm install`

This install all the packages and resources necessary to run the app

For start the app use

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Design Mockup 1.0

<img src="https://i.ibb.co/k2kF6Lc/Design-Mockup1.png" alt="Alt text" title="Optional title">