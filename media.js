
{
  "name": "your-basic-provider",
  "type": "www",
  "config": {
    "basic": {
      "username": "user",
      "password": "AbCdEf123456"
    }
  }
}

{
  "name": "your-bearer-provider",
  "type": "www",
  "config": {
    "bearer": "AbCdEf123456"
  }
}

{
  "settings": {
    "application": {
      "media": {
        "providers": [
          {
            "name": "basic_media_provider_name",
            "type": "www",
            "config": {
              "basic": {
                "username": "user",
                "password": "AbCdEf123456&44jf"
              }
            }
          },
          {
            "name": "bearer_media_provider_name",
            "type": "www",
            "config": {
              "bearer": "AbCdEf123456&44jf"
            }
          }
        ]
      }
    }
  }
}
