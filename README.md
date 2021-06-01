# Amazon DevOps Guru POC for resource created Using Terraform

## As part of this POC we are creating Serverless Application Using API-Gateway & Lambda
<img width="367" alt="architecture-tf" src="https://user-images.githubusercontent.com/23376953/120278348-cc36db80-c2d2-11eb-9897-58f7f574fa7a.PNG">

## Setup Your Terraform Enviornment , Not covering setup of Enviornment.

## Create Lambda Handler Zip Using mylab.js 

7z a -r mylab.zip *  

## Create S3 Bucket and Uplead mylab.zip 

aws s3api create-bucket --bucket=tfe-devopsguru-bucket --region=us-east-1 --profile=adfs

aws s3 cp mylab.zip s3://tfe-devopsguru-bucket --profile adfs

## Run Terraform init and apply

Go to your Clone Repository & run 

### Note: Modify Youir Bucket Name in Main.tf

terraform init & Terraform apply

### Copy the URL from the Outputs of Terrafrom apply
