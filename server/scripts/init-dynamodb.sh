#!/bin/sh

alias awslocal="aws --endpoint-url=http://localhost:4566" 

#
# Create local DynamoDB tables for users and counters
#
awslocal dynamodb create-table \
    --table-name users \
    --attribute-definitions \
        AttributeName=pk,AttributeType=S \
    --key-schema \
        AttributeName=pk,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST

awslocal dynamodb create-table \
    --table-name counters \
    --attribute-definitions \
        AttributeName=pk,AttributeType=S \
    --key-schema \
        AttributeName=pk,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST
