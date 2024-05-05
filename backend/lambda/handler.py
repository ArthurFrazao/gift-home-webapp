import json
import boto3
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource("dynamodb", region_name="us-east-2")
table = dynamodb.Table("gift-home-webapp")


def create_presigned_url(path):

    path = path.split("/")
    bucket = path[0]
    key = "/".join(path[1:])

    s3 = boto3.client("s3", region_name="us-east-2")
    presigned_url = s3.generate_presigned_url(
        ClientMethod="get_object",
        Params={
            "Bucket": bucket,
            "Key": key
        }
    )

    return presigned_url


def get_items(event, context):

    items = table.scan().get("Items")
    products = []

    for item in items:
        products.append(
            {
                "product": {
                    "id": item.get("id"),
                    "name": item.get("gift_name"),
                    "imageUrl": create_presigned_url(item.get("imageUrl")),
                    "links": item.get("links"),
                    "isAvailable": item.get("isAvailable")
                }
            }
        )

    response = {
        "statusCode": 200,
        "body": json.dumps(products),
        "headers": {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}
    }

    return response


def confirm_gift(event, context):
    body = json.loads(event.get("body"))
    id = body.get("id")
    name_person = body.get("namePerson")

    logger.info(f"id: {id}| namePerson: {name_person}")

    item = table.get_item(Key={"id": id}).get("Item")
    item["isAvailable"] = False
    table.put_item(Item=item)
    logger.info("Gift status updated")

    response = {
        "statusCode": 200,
        "body": json.dumps({"message": "Gift confirmed successfully"}),
        "headers": {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}
    }
    logger.info("Gift confirmed successfully")

    return response