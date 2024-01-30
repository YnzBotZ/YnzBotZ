  {
  "type": "whatsapp",
  "statuses": [
    {
      "status": "success",
      "state": "sent",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "recipient": "+46732001122",
      "conversation": {
        "conversation_id": "06209994d9d7f3b595f05891dfd66cad",
        "expiration_timestamp": 1642858500,
        "pricing_category": "user_initiated"
      },
      "timestamp": "2022-01-02T18:40:42Z"
    }
  ]
}

{
  "type": "whatsapp",
  "statuses": [
    {
      "status": "success",
      "state": "delivered",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "recipient": "+46732001122",
      "conversation": {
        "conversation_id": "06209994d9d7f3b595f05891dfd66cad",
        "pricing_category": "user_initiated"
      },
      "timestamp": "2022-01-02T18:40:42Z"
    }
  ]
}

{
  "type": "whatsapp",
  "statuses": [
    {
      "status": "success",
      "state": "read",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "recipient": "+46732001122",
      "conversation": {},
      "timestamp": "2022-01-02T18:40:42Z"
    }
  ]
}

{
  "type":"whatsapp",
  "statuses": [
    {
      "status":"success",
      "state":"warning",
      "message_id": "01FX0FGEH0E2E50HRCA7190ZE8",
      "recipient":"+46732001122",
      "timestamp":"2022-02-28T15:34:45Z",
      "conversation":{},
      "errors": [
        {
          "code":2026,
          "title":"Some products could not be sent because they are either hidden or they don't have an approved status. Please check your catalog. Products not sent include: productid"
        }
      ]
    }
  ]
}

{
  "type": "whatsapp",
  "contacts": [
    {
      "profile": {
        "name": "John Smith"
      },
      "wa_id": "0732001122"
    }
  ],
  "notifications": [
    {
      "from": "0732001122",
      "to": "sinchbot",
      "replying_to": {
        "from": "447537817391",
        "message_id": "01E7Q9AVTRB5A30JD7D9ZN0HTE"
      },
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "message": {
        "type": "text",
        "body": "Hello bot I want to know something!"
      },
      "timestamp": "2020-05-02T19:48:42Z"
    }
  ]
}

{
  "type": "whatsapp",
  "contacts": [
    {
      "profile": {
        "name": "John Smith"
      },
      "wa_id": "0732001122"
    }
  ],
  "notifications": [
    {
      "from": "0732001122",
      "to": "sinchbot",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "message": {
        "type": "location",
        "latitude": 55.7047,
        "longitude": 13.191,
        "name": "Sinch Ideon Lund",
        "address": "Scheelevägen 17"
      },
      "timestamp": "2020-05-02T19:40:52Z"
    }
  ]
}

{
  "type": "whatsapp",
  "notifications": [
    {
      "from": "0732001122",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "message": {
        "type": "button",
        "index": "2",
        "text": "Option 3",
        "payload": "some_payload"
      },
      "timestamp": "2020-05-07T10:02:10Z",
      "to": "sinchbot",
      "replying_to": {
        "from": "447537817391",
        "message_id": "01E7Q9AVTRB5A30JD7D9ZN0HTE"
      }
    }
  ]
}

{
  "type": "whatsapp",
  "contacts": [
    {
      "profile": {
        "name": "John Smith"
      },
      "wa_id": "0732001122"
    }
  ],
  "notifications": [
    {
      "from": "0732001122",
      "to": "sinchbot",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "message": {
        "type": "text",
        "body": "Hello bot I want to know something!"
      },
      "timestamp": "2020-05-02T17:43:32Z",
      "forwarded": true
    }
  ]
}

{
  "type" : "whatsapp",
  "notifications" : [
    {
      "from" : "0732001122",
      "message_id" : "01DPNXZ0WCF9XD19MH84XD0P62",
      "message" : {
        "type" : "interactive",
        "message" : {
          "type" : "button",
          "id" : "Reply button id 1",
          "title" : "Reply button title 1"
        }
      },
      "timestamp" : "2021-06-07T13:38:36Z",
      "to" : "sinchbot",
      "replying_to": {
        "from": "447537817391",
        "message_id": "01E7Q9AVTRB5A30JD7D9ZN0HTE"
      }
    }
  ]
}

{
  "type" : "whatsapp",
  "notifications" : [
    {
      "from" : "0732001122",
      "message_id" : "01DPNXZ0WCF9XD19MH84XD0P62",
      "message" : {
        "type" : "order",
        "text" : "Here's my order",
        "catalog_id" : "catalogid",
        "product_items" : [
          {
            "product_retailer_id" : "product1",
            "quantity" : 10,
            "item_price" : 10.2,
            "currency" : "USD"
          },
          {
            "product_retailer_id" : "product2",
            "quantity" : 2,
            "item_price" : 4,
            "currency" : "SEK"
          }
        ]
      },
      "timestamp" : "2021-06-07T13:38:36Z",
      "to" : "sinchbot"
    }
  ]
}

{
  "type" : "whatsapp",
  "notifications" : [
    {
      "from" : "0732001122",
      "message_id" : "01DPNXZ0WCF9XD19MH84XD0P62",
      "message" : {
        "type" : "interactive",
        "message" : {
          "type" : "list",
          "id" : "ID 1",
          "title" : "Title",
          "description" : "Description",
        }
      },
      "timestamp" : "2021-06-07T13:38:36Z",
      "to" : "sinchbot",
      "replying_to": {
        "from": "447537817391",
        "message_id": "01E7Q9AVTRB5A30JD7D9ZN0HTE"
      }
    }
  ]
}

{
  "type": "whatsapp",
  "contacts": [
    {
      "profile": {
        "name": "John Smith"
      },
      "wa_id": "0732001122"
    }
  ],
  "notifications": [
    {
      "from": "0732001122",
      "to": "sinchbot",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "message": {
        "type": "contacts",
        "contacts": [
          {
            "addresses": [
              {
                "city": "Menlo Park",
                "country": "United States",
                "country_code": "us",
                "state": "CA",
                "street": "1 Hacker Way",
                "type": "HOME",
                "zip": "94025"
              }
            ],
            "birthday": "2012-08-18",
            "emails": [
              {
                "email": "test@fb.com",
                "type": "WORK"
              }
            ],
            "name": {
              "first_name": "John",
              "formatted_name": "John Smith",
              "last_name": "Smith"
            },
            "org": {
              "company": "WhatsApp",
              "department": "Design",
              "title": "Manager"
            },
            "phones": [
              {
                "phone": "+1 (650) 555-1234",
                "type": "WORK",
                "wa_id": "16505551234"
              }
            ],
            "urls": [
              {
                "url": "https://www.facebook.com",
                "type": "WORK"
              }
            ]
          }
        ]
      },
      "timestamp": "2020-05-02T17:23:55Z"
    }
  ]
}

{
  "type": "whatsapp",
  "notifications": [
    {
      "from": "0732001122",
      "to": "sinchbot",
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "message": {
        "type": "image",
        "url": "http://www.example.com/img.jpg",
        "mime_type": "image/jpeg",
        "caption": "Fantastic headphones"
      },
      "timestamp": "2020-05-02T15:43:52Z"
    }
  ]
}

{
  "type": "whatsapp",
  "notifications": [
    {
      "from": "46702291874",
      "message_id": "01E7T5K8CREY9K0HGZW3ME1F26ABGGRnAiI1JfAhC5kP7rPIamw3JHBDfxEzvm",
      "message": {
        "type": "error",
        "details": "Unexpected callback contents received. Remember to add quick reply buttons to the request payload when sending the message template, even if no quick reply button payload is added."
      },
      "timestamp": "2020-05-08T12:54:07Z",
      "to": "bot_id",
      "replying_to": {
        "from": "447537918329"
      }
    }
  ]
}

{
  "type": "read",
  "message_id": "01E7SP2FX8E16R0X3GE8Z41VSQABGGSFATkBVvAgo61AND5uEmlo54"
}