#!/usr/bin/env bash

set -u -e -o pipefail

# Setup environment
readonly thisDir=$(cd $(dirname $0); pwd)


# If the previous commands in the `script` section of .travis.yaml failed, then abort.
# The variable is not set in early stages of the build, so we default to 0 there.
# https://docs.travis-ci.com/user/environment-variables/
if [[ ${TRAVIS_TEST_RESULT=0} == 1 ]]; then
  echo "[ERROR]: fail because previous errors"
  exit 1;
fi


# Don't deploy if this is a PR build
if [[ ${TRAVIS_PULL_REQUEST} != "false" ]]; then
   echo "[INFO]: Skipping deploy because this is a PR build."
   exit 0
fi

if [[ ${TRAVIS_TAG} != "" ]]; then
  echo "=====> GENERATING GH-PAGES"
  ${thisDir}/deploy-gh-pages.sh
  echo "[INFO]: Skipping publish because this is git tag build."
  exit 0
fi
