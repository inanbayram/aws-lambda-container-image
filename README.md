# Example aws lambda node.js container image

This example shows how to create a Docker image for AWS Lambda functions based on Node.js. The node.js implementation can be customized and then a Docker image can be created and pushed to the ECR. As a result, the Docker image is available for use in AWS Lambda.

The example was created based on the AWS documentation (see https://docs.aws.amazon.com/lambda/latest/dg/images-create.html)

# How to...

## Create docker image

```docker build -t 123456789012.dkr.ecr.us-east-1.amazonaws.com/aws-lambda-nodejs-image:0.1.0 . ```

## Push image to AWS ECR

```aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com```

```docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/aws-lambda-nodejs-image:0.1.0```

## Run image (necessary for local testing)

```docker run -p 9000:8080 123456789012.dkr.ecr.us-east-1.amazonaws.com/aws-lambda-nodejs-image:0.1.0```

## Test image on local environment

Before testing the image, you have to build and start the image...

```curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'```