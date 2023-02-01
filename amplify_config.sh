#!/bin/bash
# VARIABLES
APP_ID=$1
ACCESS_KEY_ID=$2
SECRET_ACCESS_KEY=$3

# SCRIPT
set -e
IFS='|'

REACTCONFIG="{\
        \"SourceDir\":\"src\",\
        \"DistributionDir\":\"build\",\
        \"BuildCommand\":\"npm run-script build\",\
        \"StartCommand\":\"npm run-script start\"\
}"
AWSCLOUDFORMATIONCONFIG="{\
        \"configLevel\":\"project\",\
        \"useProfile\":false,\
        \"profileName\":\"default\",\
        \"accessKeyId\":\"$ACCESS_KEY_ID\",\
        \"secretAccessKey\":\"$SECRET_ACCESS_KEY\",\
        \"region\":\"us-east-1\"\
}"
AMPLIFY="{\
        \"projectName\":\"headlessProjectName\",\
        \"appId\":\"$APP_ID\",\
        \"envName\":\"dev\",\
        \"defaultEditor\":\"code\"\
}"
FRONTEND="{\
        \"frontend\":\"javascript\",\
        \"framework\":\"react\",\
        \"config\":$REACTCONFIG}"
PROVIDERS="{\
        \"awscloudformation\":$AWSCLOUDFORMATIONCONFIG}"

amplify pull \
  --amplify $AMPLIFY \
  --frontend $FRONTEND \
  --providers $PROVIDERS \
  --yes
