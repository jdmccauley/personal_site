import json
import os
import boto3

region = os.environ["REGION"]
contact_email = os.environ["CONTACT_EMAIL"]

client = boto3.client('ses', region_name=region)

def send_contact_form(name: str, email: str, msg: str):
    """
    Sends an email to myself containing the msg, name, and email.
    
    :param name: Name of person contacting me.
    :param email: Email of the person.
    :param msg: The person's contact message.
    """
    send_args = {
        "Source": contact_email,
        "Destination": {"ToAddresses": [contact_email]},
        "Message": {
            "Subject": {"Data": f"Contact from {name}"},
            "Body": {"Text": {"Data": msg}},
        },
        "ReplyToAddresses": [email]
    }

    client.send_email(**send_args)
    

def lambda_handler(event, context):
    print(event)
    req = json.loads(event["body"])
    try:
        name = req["name"]
        email = req["email"]
        msg = req["message"]
    except KeyError as e:
        return {
            'statusCode': 400,
            'body': f"{e} not provided in request."   
        }
    
    try:
        send_contact_form(name, email, msg)
    except Exception as e:
        return {
            'statusCode': 500,
            'body': "Bad request."
        }

    return {
        'statusCode': 200,
    }