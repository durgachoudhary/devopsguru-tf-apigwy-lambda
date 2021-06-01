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

### Note: Modify Your Bucket Name in Main.tf

terraform init & Terraform apply

### Copy the URL from the Outputs of Terrafrom apply

## Test your URL by running manually.

## Modify web-load.py with actual URL , and run script this will generate parallel load on API GWY & Lambda.

Able to see 200 Successfull Response , as below:

Iterating sending requests...+++++
<Response [200]> <h2>This is our Lambda...API Gateway...and...Terraform lab.</h2> 200

## Now go to AWS Console and Update Lambda Code for firstFunction with update_lambda & deploy the code.

This will generate failure response with 503 Error Response and web-load.py is generating parallel call to URL.

Let it be Run for 10 to 15 Mins.

### Visit AWS Console and Open AWS DevOps Guru, assuming its already enable for all the account Resource.

## Insight able to catch a High Severity Alarm that Affect API-Gateway & Lambda
<img width="765" alt="DevopsGuru_Insight_Page" src="https://user-images.githubusercontent.com/23376953/120282904-3c942b80-c2d8-11eb-886d-2d46f26d5f12.PNG">

## Aggregated metrics - Metrics analysised to represent start time of anamoly
<img width="754" alt="devopsguru_agg_view" src="https://user-images.githubusercontent.com/23376953/120283653-0905d100-c2d9-11eb-86ef-c1f2db7d6f6d.PNG">

## Relevant Event - When Insight start and if nay changes that cause this Issue , as we have updated Lambda Code
<img width="768" alt="devops_guru_insight_start" src="https://user-images.githubusercontent.com/23376953/120283895-4ff3c680-c2d9-11eb-9a32-93d002303b76.PNG">

