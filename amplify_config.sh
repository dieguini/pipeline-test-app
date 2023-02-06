#!/bin/sh
# Variables
while getopts a:k:s:e: flag
do
    case "${flag}" in
        a) APP_ID=${OPTARG};;
        k) ACCESS_KEY_ID=${OPTARG};;
        s) SECRET_ACCESS_KEY=${OPTARG};;
        e) ENV=${OPTARG};;
        \?) # Invalid option
         echo "Error: Invalid option"
         exit;;
    esac
done
# Script
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
        \"envName\":\"$ENV\",\
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

echo "Command executed succefully!"