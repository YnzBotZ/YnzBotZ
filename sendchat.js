
{
  "type": "whatsapp",
  "statuses": [
    {
      "message_id": "01DPNXZ0WCF9XD19MH84XD0P62",
      "recipient": "+46732001122",
      "status": "success",
      "state": "queued"
    }
  ]
}

{
  "to": ["46732001122"],
  "message": {
    "type": "template",
    "template_name": "test_template",
    "language": "en",
    "body_params": ["param here"],
    "media": {
      "type": "text"
    }
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "template",
    "template_name": "some_template_name",
    "language": "en",
    "body_params": ["some_first_parameter", "some_second_parameter"],
    "media": {
      "type": "image",
      "url": "https://www.example.com/some_image.jpg",
      "provider": "some_provider_name"
    },
    "buttons": [
      {
        "type": "call"
      },
      {
        "type": "url",
        "parameter": "some_url_parameter"
      }
    ]
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "text",
    "preview_url": false,
    "text": "Greetings from Sinch"
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "image",
    "url": "https://example.com/image.jpg",
    "caption": "Example Image"
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "video",
    "url": "https://example.com/video.mp4",
    "caption": "Example Video",
    "provider": "your-bearer-provider"
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "document",
    "url": "https://example.com",
    "caption": "Example study",
    "filename": "document.pdf"
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "audio",
    "url": "https://example.com/song.mp3"
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "location",
    "lat": 55.7047,
    "lng": 13.191,
    "name": "Sinch Ideon Lund",
    "address": "Scheelevägen 17"
  }
}

{
  "to": ["46732001122"],
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
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "sticker",
    "url": "https://example.com/sticker.webp"
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "interactive",
    "message": {
      "type": "button",
      "header": {
        "type": "video",
        "url": "https://example.com/video.mp4"
      },
      "body": {
        "text": "Body text"
      },
      "footer": {
        "text": "Footer text"
      },
      "action": {
        "buttons": [
          {
            "type": "reply",
            "title": "Title 1",
            "id": "Id 1"
          },
          {
            "type": "reply",
            "title": "Title 2",
            "id": "Id 2"
          },
          {
            "type": "reply",
            "title": "Title 3",
            "id": "Id 3"
          }
        ]
      }
    }
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "interactive",
    "message": {
      "type": "list",
      "header": {
        "type": "text",
        "text": "Header text"
      },
      "body": {
        "text": "Body text"
      },
      "footer": {
        "text": "Footer text"
      },
      "action": {
        "button": "Press me",
        "sections": [
          {
            "title": "Section 1",
            "rows": [
              {
                "title": "A row",
                "id": "ID 1",
                "description": "Description"
              }
            ]
          },
          {
            "title": "Section 2",
            "rows": [
              {
                "title": "Another row",
                "id": "ID 2",
                "description": "Description"
              }
            ]
          }
        ]
      }
    }
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "interactive",
    "message": {
      "type": "product",
      "body": {
        "text": "Body text"
      },
      "footer": {
        "text": "Footer text"
      },
      "action": {
        "catalog_id": "catalogid",
        "product_retailer_id": "productretailerid",
      }
    }
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "interactive",
    "message": {
      "type": "product_list",
      "header": {
        "type": "text",
        "text": "Header text"
      },
      "body": {
        "text": "Body text"
      },
      "action": {
        "catalog_id": "catalogid",
        "sections": [
          {
            "product_items": [
              {
                "product_retailer_id": "product1"
              },
              {
                "product_retailer_id": "product2"
              }
            ]
          }
        ]
      }
    }
  }
}

{
  "to": ["46732001122"],
  "message": {
    "type": "interactive",
    "message": {
      "type": "product_list",
      "header": {
        "type": "text",
        "text": "Header text"
      },
      "body": {
        "text": "Body text"
      },
      "action": {
        "catalog_id": "catalogid",
        "sections": [
          {
            "product_items": [
              {
                "product_retailer_id": "product1"
              },
              {
                "product_retailer_id": "product2"
              }
            ]
          }
        ]
      }
    }
  }
}