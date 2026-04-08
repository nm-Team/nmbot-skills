# nmBot Available MCP Tools

Generated at: 2026-04-08T13:31:03.331Z

**Project Title:** nmBot
**Project Version:** 1\.0\.0
**OpenAPI Version:** 3\.0\.1
**OpenAPI Source:** C:\\Users\\agou\\Documents\\GitHub\\nmBot\-Telegram\\openapi\\nmBot\-full\.openapi\.json
**Allowed Tag:** Allow Tools Calling
**Total Methods:** 49
**Total MCP Tools:** 49

## getChatJpacList

**Tool Name:** getChatJpacList
**Tool Description:** Get JPAC lists created by the chat and lists the chat has joined\. Method: POST /getChatJpacList\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Target group chat id."
    }
  },
  "required": [
    "chatId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getChatJpacList",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getChatJpacList
**Method Name:** getChatJpacList
**Readonly:** No
**Deprecated:** No
**Summary:** getChatJpacList
**Description:** Get JPAC lists created by the chat and lists the chat has joined\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Target group chat id."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Target group chat id."
      }
    },
    "required": [
      "chatId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "data"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ]
        },
        "data": {
          "type": "object",
          "required": [
            "chatJPAC",
            "joinedJPAC"
          ],
          "properties": {
            "chatJPAC": {
              "type": "array",
              "items": {
                "type": "object",
                "required": [
                  "id",
                  "userId",
                  "title",
                  "shareId",
                  "autoAddNewBannedUsers"
                ],
                "properties": {
                  "chatId": {
                    "type": "integer"
                  },
                  "id": {
                    "type": "integer"
                  },
                  "userId": {
                    "type": "integer",
                    "description": "Creator user id."
                  },
                  "title": {
                    "type": "string"
                  },
                  "shareId": {
                    "type": "string"
                  },
                  "createDate": {
                    "type": "integer",
                    "description": "Unix timestamp."
                  },
                  "updateDate": {
                    "type": "integer",
                    "description": "Unix timestamp."
                  },
                  "managementChats": {
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  "autoAddNewBannedUsers": {
                    "type": "boolean"
                  }
                },
                "title": "JpacList"
              }
            },
            "joinedJPAC": {
              "type": "array",
              "items": {
                "type": "object",
                "required": [
                  "id",
                  "userId",
                  "title",
                  "shareId",
                  "autoAddNewBannedUsers"
                ],
                "properties": {
                  "chatId": {
                    "type": "integer"
                  },
                  "id": {
                    "type": "integer"
                  },
                  "userId": {
                    "type": "integer",
                    "description": "Creator user id."
                  },
                  "title": {
                    "type": "string"
                  },
                  "shareId": {
                    "type": "string"
                  },
                  "createDate": {
                    "type": "integer",
                    "description": "Unix timestamp."
                  },
                  "updateDate": {
                    "type": "integer",
                    "description": "Unix timestamp."
                  },
                  "managementChats": {
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  "autoAddNewBannedUsers": {
                    "type": "boolean"
                  }
                },
                "title": "JpacList"
              }
            }
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "403",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## createJpacList

**Tool Name:** createJpacList
**Tool Description:** Create a JPAC list for the chat \(one per chat\)\. Method: POST /createJpacList\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Target group chat id."
    },
    "title": {
      "type": "string",
      "description": "JPAC title. One JPAC per chat.",
      "maxLength": 99
    }
  },
  "required": [
    "chatId",
    "title"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "createJpacList",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /createJpacList
**Method Name:** createJpacList
**Readonly:** No
**Deprecated:** No
**Summary:** createJpacList
**Description:** Create a JPAC list for the chat \(one per chat\)\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "title"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Target group chat id."
        },
        "title": {
          "type": "string",
          "description": "JPAC title. One JPAC per chat.",
          "maxLength": 99
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Target group chat id."
      },
      "title": {
        "type": "string",
        "description": "JPAC title. One JPAC per chat.",
        "maxLength": 99
      }
    },
    "required": [
      "chatId",
      "title"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ]
        },
        "msg": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "properties": {
            "ok": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "created": {
              "type": "object",
              "required": [
                "id",
                "userId",
                "title",
                "shareId",
                "autoAddNewBannedUsers"
              ],
              "properties": {
                "chatId": {
                  "type": "integer"
                },
                "id": {
                  "type": "integer"
                },
                "userId": {
                  "type": "integer",
                  "description": "Creator user id."
                },
                "title": {
                  "type": "string"
                },
                "shareId": {
                  "type": "string"
                },
                "createDate": {
                  "type": "integer",
                  "description": "Unix timestamp."
                },
                "updateDate": {
                  "type": "integer",
                  "description": "Unix timestamp."
                },
                "managementChats": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "autoAddNewBannedUsers": {
                  "type": "boolean"
                }
              },
              "title": "JpacList"
            }
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "403",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## setJpacAutoAddNewBannedUsers

**Tool Name:** setJpacAutoAddNewBannedUsers
**Tool Description:** Toggle auto\-add newly banned users into the JPAC list \(nmBot\+ required\)\. Method: POST /setJpacAutoAddNewBannedUsers\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Target group chat id."
    },
    "id": {
      "type": "integer",
      "description": "JPAC solution id."
    },
    "value": {
      "type": "boolean",
      "description": "Whether to auto-add new banned users."
    }
  },
  "required": [
    "chatId",
    "id",
    "value"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "setJpacAutoAddNewBannedUsers",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /setJpacAutoAddNewBannedUsers
**Method Name:** setJpacAutoAddNewBannedUsers
**Readonly:** No
**Deprecated:** No
**Summary:** setJpacAutoAddNewBannedUsers
**Description:** Toggle auto\-add newly banned users into the JPAC list \(nmBot\+ required\)\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "id",
        "value"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Target group chat id."
        },
        "id": {
          "type": "integer",
          "description": "JPAC solution id."
        },
        "value": {
          "type": "boolean",
          "description": "Whether to auto-add new banned users."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Target group chat id."
      },
      "id": {
        "type": "integer",
        "description": "JPAC solution id."
      },
      "value": {
        "type": "boolean",
        "description": "Whether to auto-add new banned users."
      }
    },
    "required": [
      "chatId",
      "id",
      "value"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ]
        },
        "msg": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "properties": {
            "ok": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "403",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## grantJpacAccessToChat

**Tool Name:** grantJpacAccessToChat
**Tool Description:** Grant another chat permission to manage this JPAC \(up to 3 management chats\)\. Method: POST /grantJpacAccessToChat\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Owner group chat id."
    },
    "id": {
      "type": "integer",
      "description": "JPAC solution id."
    },
    "targetChatId": {
      "type": "integer",
      "description": "Chat id to grant management access."
    }
  },
  "required": [
    "chatId",
    "id",
    "targetChatId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "grantJpacAccessToChat",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /grantJpacAccessToChat
**Method Name:** grantJpacAccessToChat
**Readonly:** No
**Deprecated:** No
**Summary:** grantJpacAccessToChat
**Description:** Grant another chat permission to manage this JPAC \(up to 3 management chats\)\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "id",
        "targetChatId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Owner group chat id."
        },
        "id": {
          "type": "integer",
          "description": "JPAC solution id."
        },
        "targetChatId": {
          "type": "integer",
          "description": "Chat id to grant management access."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Owner group chat id."
      },
      "id": {
        "type": "integer",
        "description": "JPAC solution id."
      },
      "targetChatId": {
        "type": "integer",
        "description": "Chat id to grant management access."
      }
    },
    "required": [
      "chatId",
      "id",
      "targetChatId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ]
        },
        "msg": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "properties": {
            "ok": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "403",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## disableJpacList

**Tool Name:** disableJpacList
**Tool Description:** Disable \(delete\) a JPAC list created by the chat\. Method: POST /disableJpacList\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Owner group chat id."
    },
    "id": {
      "type": "integer",
      "description": "JPAC solution id."
    }
  },
  "required": [
    "chatId",
    "id"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "disableJpacList",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /disableJpacList
**Method Name:** disableJpacList
**Readonly:** No
**Deprecated:** No
**Summary:** disableJpacList
**Description:** Disable \(delete\) a JPAC list created by the chat\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "id"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Owner group chat id."
        },
        "id": {
          "type": "integer",
          "description": "JPAC solution id."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Owner group chat id."
      },
      "id": {
        "type": "integer",
        "description": "JPAC solution id."
      }
    },
    "required": [
      "chatId",
      "id"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ]
        },
        "msg": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "properties": {
            "ok": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "403",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## addJpacList

**Tool Name:** addJpacList
**Tool Description:** Join an existing JPAC list via shareId\. Method: POST /addJpacList\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Group chat id that wants to join."
    },
    "shareId": {
      "type": "string",
      "description": "Share id of the target JPAC."
    }
  },
  "required": [
    "chatId",
    "shareId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "addJpacList",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /addJpacList
**Method Name:** addJpacList
**Readonly:** No
**Deprecated:** No
**Summary:** addJpacList
**Description:** Join an existing JPAC list via shareId\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "shareId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Group chat id that wants to join."
        },
        "shareId": {
          "type": "string",
          "description": "Share id of the target JPAC."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Group chat id that wants to join."
      },
      "shareId": {
        "type": "string",
        "description": "Share id of the target JPAC."
      }
    },
    "required": [
      "chatId",
      "shareId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ]
        },
        "msg": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "properties": {
            "ok": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "joined": {
              "type": "object",
              "required": [
                "id",
                "userId",
                "title",
                "shareId",
                "autoAddNewBannedUsers"
              ],
              "properties": {
                "chatId": {
                  "type": "integer"
                },
                "id": {
                  "type": "integer"
                },
                "userId": {
                  "type": "integer",
                  "description": "Creator user id."
                },
                "title": {
                  "type": "string"
                },
                "shareId": {
                  "type": "string"
                },
                "createDate": {
                  "type": "integer",
                  "description": "Unix timestamp."
                },
                "updateDate": {
                  "type": "integer",
                  "description": "Unix timestamp."
                },
                "managementChats": {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  }
                },
                "autoAddNewBannedUsers": {
                  "type": "boolean"
                }
              },
              "title": "JpacList"
            }
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "403",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## leaveJpacList

**Tool Name:** leaveJpacList
**Tool Description:** Leave a JPAC list that the chat has joined\. Method: POST /leaveJpacList\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Group chat id."
    },
    "id": {
      "type": "integer",
      "description": "JPAC solution id to leave."
    }
  },
  "required": [
    "chatId",
    "id"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "leaveJpacList",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /leaveJpacList
**Method Name:** leaveJpacList
**Readonly:** No
**Deprecated:** No
**Summary:** leaveJpacList
**Description:** Leave a JPAC list that the chat has joined\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "id"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Group chat id."
        },
        "id": {
          "type": "integer",
          "description": "JPAC solution id to leave."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Group chat id."
      },
      "id": {
        "type": "integer",
        "description": "JPAC solution id to leave."
      }
    },
    "required": [
      "chatId",
      "id"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ]
        },
        "msg": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "properties": {
            "ok": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "403",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getJpacUserList

**Tool Name:** getJpacUserList
**Tool Description:** Get JPAC user list for a specific JPAC list ID\. Method: POST /getJpacUserList\. Permission scope: Group Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Managing group ID."
    },
    "id": {
      "type": "integer",
      "description": "JPAC list ID."
    }
  },
  "required": [
    "chatId",
    "id"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getJpacUserList",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getJpacUserList
**Method Name:** getJpacUserList
**Readonly:** Yes
**Deprecated:** No
**Summary:** getJpacUserList
**Description:** Get JPAC user list for a specific JPAC list ID\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "chatId",
        "id"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Managing group ID."
        },
        "id": {
          "type": "integer",
          "description": "JPAC list ID."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Managing group ID."
      },
      "id": {
        "type": "integer",
        "description": "JPAC list ID."
      }
    },
    "required": [
      "chatId",
      "id"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "users": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        },
        "data": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## importJpacFromCSV

**Tool Name:** importJpacFromCSV
**Tool Description:** Import JPAC users from CSV content\. Method: POST /importJpacFromCSV\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Managing group ID."
    },
    "id": {
      "type": "integer",
      "description": "JPAC list ID."
    },
    "csv": {
      "type": "string",
      "description": "CSV text containing user identifiers to import."
    }
  },
  "required": [
    "chatId",
    "id",
    "csv"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "importJpacFromCSV",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /importJpacFromCSV
**Method Name:** importJpacFromCSV
**Readonly:** No
**Deprecated:** No
**Summary:** importJpacFromCSV
**Description:** Import JPAC users from CSV content\.
**Tags:** Allow Tools Calling, JPAC, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "chatId",
        "id",
        "csv"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Managing group ID."
        },
        "id": {
          "type": "integer",
          "description": "JPAC list ID."
        },
        "csv": {
          "type": "string",
          "description": "CSV text containing user identifiers to import."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Managing group ID."
      },
      "id": {
        "type": "integer",
        "description": "JPAC list ID."
      },
      "csv": {
        "type": "string",
        "description": "CSV text containing user identifiers to import."
      }
    },
    "required": [
      "chatId",
      "id",
      "csv"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getIntelligenceChatSettings

**Tool Name:** getIntelligenceChatSettings
**Tool Description:** Get the user's nmBot Intelligence chat settings\. Method: POST /getIntelligenceChatSettings\. Permission scope: User Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {}
}
```
**Tool Annotations:**
```json
{
  "title": "getIntelligenceChatSettings",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getIntelligenceChatSettings
**Method Name:** getIntelligenceChatSettings
**Readonly:** Yes
**Deprecated:** No
**Summary:** getIntelligenceChatSettings
**Description:** Get the user's nmBot Intelligence chat settings\.
**Tags:** Allow Tools Calling, nmBot Intelligence API, User, User Only, nmBot Intelligence, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "properties": {}
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {}
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "allOf": [
        {
          "type": "object",
          "required": [
            "code"
          ],
          "properties": {
            "code": {
              "type": "integer"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "intelligenceSettings"
          ],
          "properties": {
            "intelligenceSettings": {
              "type": "object",
              "required": [
                "model",
                "autoConfirmReadonlyApiRequest"
              ],
              "properties": {
                "model": {
                  "type": "string",
                  "description": "The model type to use. \"default\" or \"advanced\". Advanced is plus-user-only.",
                  "enum": [
                    "default",
                    "anvanced"
                  ]
                },
                "autoConfirmReadonlyApiRequest": {
                  "type": "boolean",
                  "description": "Auto-confirm access to readonly API requested by nmBot Intelligence."
                }
              },
              "title": "IntelligenceSettings"
            }
          }
        }
      ]
    }
  }
]
```

## updateIntelligenceChatSettings

**Tool Name:** updateIntelligenceChatSettings
**Tool Description:** Update the user's nmBot Intelligence chat settings\. Method: POST /updateIntelligenceChatSettings\. Permission scope: User Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "settings": {
      "type": "object",
      "required": [
        "model",
        "autoConfirmReadonlyApiRequest"
      ],
      "properties": {
        "model": {
          "type": "string",
          "description": "The model type to use. \"default\" or \"advanced\". Advanced is plus-user-only.",
          "enum": [
            "default",
            "anvanced"
          ]
        },
        "autoConfirmReadonlyApiRequest": {
          "type": "boolean",
          "description": "Auto-confirm access to readonly API requested by nmBot Intelligence."
        }
      },
      "title": "IntelligenceSettings"
    }
  },
  "required": [
    "settings"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "updateIntelligenceChatSettings",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /updateIntelligenceChatSettings
**Method Name:** updateIntelligenceChatSettings
**Readonly:** No
**Deprecated:** No
**Summary:** updateIntelligenceChatSettings
**Description:** Update the user's nmBot Intelligence chat settings\.
**Tags:** Allow Tools Calling, nmBot Intelligence API, User, User Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "settings"
      ],
      "properties": {
        "settings": {
          "type": "object",
          "required": [
            "model",
            "autoConfirmReadonlyApiRequest"
          ],
          "properties": {
            "model": {
              "type": "string",
              "description": "The model type to use. \"default\" or \"advanced\". Advanced is plus-user-only.",
              "enum": [
                "default",
                "anvanced"
              ]
            },
            "autoConfirmReadonlyApiRequest": {
              "type": "boolean",
              "description": "Auto-confirm access to readonly API requested by nmBot Intelligence."
            }
          },
          "title": "IntelligenceSettings"
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "settings": {
        "type": "object",
        "required": [
          "model",
          "autoConfirmReadonlyApiRequest"
        ],
        "properties": {
          "model": {
            "type": "string",
            "description": "The model type to use. \"default\" or \"advanced\". Advanced is plus-user-only.",
            "enum": [
              "default",
              "anvanced"
            ]
          },
          "autoConfirmReadonlyApiRequest": {
            "type": "boolean",
            "description": "Auto-confirm access to readonly API requested by nmBot Intelligence."
          }
        },
        "title": "IntelligenceSettings"
      }
    },
    "required": [
      "settings"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "allOf": [
        {
          "type": "object",
          "required": [
            "code"
          ],
          "properties": {
            "code": {
              "type": "integer"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "intelligenceSettings"
          ],
          "properties": {
            "intelligenceSettings": {
              "type": "object",
              "required": [
                "model",
                "autoConfirmReadonlyApiRequest"
              ],
              "properties": {
                "model": {
                  "type": "string",
                  "description": "The model type to use. \"default\" or \"advanced\". Advanced is plus-user-only.",
                  "enum": [
                    "default",
                    "anvanced"
                  ]
                },
                "autoConfirmReadonlyApiRequest": {
                  "type": "boolean",
                  "description": "Auto-confirm access to readonly API requested by nmBot Intelligence."
                }
              },
              "title": "IntelligenceSettings"
            }
          }
        }
      ]
    }
  }
]
```

## getKeywordReplies

**Tool Name:** getKeywordReplies
**Tool Description:** Get all keyword replies for a group or user\.  Method: POST /getKeywordReplies\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The id of the group/user to get keyword replies for."
    }
  },
  "required": [
    "chatId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getKeywordReplies",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getKeywordReplies
**Method Name:** getKeywordReplies
**Readonly:** Yes
**Deprecated:** No
**Summary:** getKeywordReplies
**Description:** Get all keyword replies for a group or user\.
**Tags:** Allow Tools Calling, Keyword Reply, nmBot Intelligence, Readonly, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The id of the group/user to get keyword replies for."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The id of the group/user to get keyword replies for."
      }
    },
    "required": [
      "chatId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "maxCount",
        "keywordReplies"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "maxCount": {
          "type": "integer",
          "description": "The max count of keyword replies that the chat can create."
        },
        "keywordReplies": {
          "type": "array",
          "description": "The keyword replies of the chat.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "groupId",
              "isEnabled",
              "matchForwarder",
              "matchEditedMessage",
              "independentlyMatch",
              "replyMessageIds",
              "isRandomReply",
              "randomReplyCount",
              "autoDeleteOriginalMessageAfter",
              "autoDeleteReplyMessageAfter",
              "ignoreGroupAdministators",
              "ignoreCase",
              "ignoreChinesePunctuation",
              "cooldown",
              "preferCrossMessageReplies",
              "addDeleteButton",
              "disableNmartchat",
              "warnSender",
              "muteSender",
              "businessMatchSelf",
              "businessMatchFrom",
              "matchText",
              "matchStickerEmoji",
              "matchStickerSetName",
              "matchSender",
              "matchFileName",
              "reactToDelete",
              "businessMarkMessagesAsRead",
              "matchEmotionsToxicity"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The id of keyword reply."
              },
              "groupId": {
                "type": "integer",
                "description": "The group id/user id of the keyword reply. If groupId > 0, the keyword reply is a business keyword reply."
              },
              "isEnabled": {
                "type": "boolean",
                "description": "Whether the keyword reply is enabled."
              },
              "matchText": {
                "type": "string",
                "description": "The RegExp string of the text to be matched."
              },
              "matchFileName": {
                "type": "string",
                "description": "The RegExp string of the file name to be matched."
              },
              "matchStickerEmoji": {
                "type": "string",
                "description": "The RegExp string of the sticker emoji to be matched."
              },
              "matchStickerSetName": {
                "type": "string",
                "description": "The RegExp string of the sticker set name (not title) be matched."
              },
              "matchEmotionsToxicity": {
                "type": "number",
                "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
              },
              "matchEmotionsSevereToxicity": {
                "type": "number",
                "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
              },
              "matchEmotionsIdentityAttack": {
                "type": "number",
                "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
              },
              "matchEmotionsInsult": {
                "type": "number",
                "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
              },
              "matchEmotionsProfanity": {
                "type": "number",
                "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
              },
              "matchEmotionsThreat": {
                "type": "number",
                "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
              },
              "matchSender": {
                "type": "string",
                "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
              },
              "matchForwarder": {
                "type": "string",
                "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
              },
              "matchEditedMessage": {
                "type": "boolean",
                "description": "Whether to match edited message."
              },
              "independentlyMatch": {
                "type": "boolean",
                "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
              },
              "replyMessageIds": {
                "type": "array",
                "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
                "items": {
                  "type": "integer",
                  "description": "Id of the message template to reply with."
                }
              },
              "isRandomReply": {
                "type": "boolean",
                "description": "Only choose `randomReplyCount` item(s) from all templates."
              },
              "randomReplyCount": {
                "type": "integer",
                "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
              },
              "autoDeleteOriginalMessageAfter": {
                "type": "integer",
                "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
                "enum": [
                  0,
                  1,
                  3,
                  5,
                  10,
                  30,
                  60,
                  120,
                  180,
                  240,
                  300
                ]
              },
              "autoDeleteReplyMessageAfter": {
                "type": "integer",
                "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
                "enum": [
                  0,
                  1,
                  3,
                  5,
                  10,
                  30,
                  60,
                  120,
                  180,
                  240,
                  300
                ]
              },
              "ignoreGroupAdministators": {
                "type": "boolean",
                "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
              },
              "ignoreCase": {
                "type": "boolean",
                "description": "Ignore English char case in match RegExps."
              },
              "ignoreChinesePunctuation": {
                "type": "boolean",
                "description": "Ignore Simplized/Traditional Chinese in match RegExps."
              },
              "cooldown": {
                "type": "integer",
                "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
                "enum": [
                  0,
                  10,
                  30,
                  60,
                  120,
                  600,
                  1800
                ]
              },
              "preferCrossMessageReplies": {
                "type": "boolean",
                "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
              },
              "addDeleteButton": {
                "type": "boolean",
                "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
              },
              "reactToDelete": {
                "type": "boolean",
                "description": "Not implemented yet."
              },
              "disableNmartchat": {
                "type": "boolean",
                "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
              },
              "warnSender": {
                "type": "integer",
                "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
                "enum": [
                  0,
                  1,
                  2,
                  3
                ]
              },
              "muteSender": {
                "type": "integer",
                "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
              },
              "businessMatchSelf": {
                "type": "boolean",
                "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
              },
              "businessMatchFrom": {
                "type": "boolean",
                "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
              },
              "businessMarkMessagesAsRead": {
                "type": "boolean",
                "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
              }
            },
            "title": "KeywordReply"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## addKeywordReply

**Tool Name:** addKeywordReply
**Tool Description:** POST /addKeywordReply
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The id of the group/user to get keyword replies for."
    },
    "newObject": {
      "type": "object",
      "description": "The new keyword reply to add.",
      "required": [
        "isEnabled",
        "matchText",
        "matchFileName",
        "matchStickerEmoji",
        "matchStickerSetName",
        "matchEmotionsToxicity",
        "matchSender",
        "matchForwarder",
        "matchEditedMessage",
        "independentlyMatch",
        "replyMessageIds",
        "isRandomReply",
        "randomReplyCount",
        "autoDeleteOriginalMessageAfter",
        "autoDeleteReplyMessageAfter",
        "ignoreGroupAdministators",
        "ignoreCase",
        "ignoreChinesePunctuation",
        "cooldown",
        "preferCrossMessageReplies",
        "addDeleteButton",
        "reactToDelete",
        "disableNmartchat",
        "warnSender",
        "muteSender",
        "businessMatchSelf",
        "businessMatchFrom",
        "businessMarkMessagesAsRead"
      ],
      "properties": {
        "isEnabled": {
          "type": "boolean",
          "description": "Whether the keyword reply is enabled."
        },
        "matchText": {
          "type": "string",
          "description": "The RegExp string of the text to be matched."
        },
        "matchFileName": {
          "type": "string",
          "description": "The RegExp string of the file name to be matched."
        },
        "matchStickerEmoji": {
          "type": "string",
          "description": "The RegExp string of the sticker emoji to be matched."
        },
        "matchStickerSetName": {
          "type": "string",
          "description": "The RegExp string of the sticker set name (not title) be matched."
        },
        "matchEmotionsToxicity": {
          "type": "number",
          "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsSevereToxicity": {
          "type": "number",
          "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsIdentityAttack": {
          "type": "number",
          "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsInsult": {
          "type": "number",
          "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsProfanity": {
          "type": "number",
          "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsThreat": {
          "type": "number",
          "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchSender": {
          "type": "string",
          "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
        },
        "matchForwarder": {
          "type": "string",
          "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
        },
        "matchEditedMessage": {
          "type": "boolean",
          "description": "Whether to match edited message."
        },
        "independentlyMatch": {
          "type": "boolean",
          "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
        },
        "replyMessageIds": {
          "type": "array",
          "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
          "items": {
            "type": "integer",
            "description": "Id of the message template to reply with."
          }
        },
        "isRandomReply": {
          "type": "boolean",
          "description": "Only choose `randomReplyCount` item(s) from all templates."
        },
        "randomReplyCount": {
          "type": "integer",
          "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
        },
        "autoDeleteOriginalMessageAfter": {
          "type": "integer",
          "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
          "enum": [
            0,
            1,
            3,
            5,
            10,
            30,
            60,
            120,
            180,
            240,
            300
          ]
        },
        "autoDeleteReplyMessageAfter": {
          "type": "integer",
          "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
          "enum": [
            0,
            1,
            3,
            5,
            10,
            30,
            60,
            120,
            180,
            240,
            300
          ]
        },
        "ignoreGroupAdministators": {
          "type": "boolean",
          "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
        },
        "ignoreCase": {
          "type": "boolean",
          "description": "Ignore English char case in match RegExps."
        },
        "ignoreChinesePunctuation": {
          "type": "boolean",
          "description": "Ignore Simplized/Traditional Chinese in match RegExps."
        },
        "cooldown": {
          "type": "integer",
          "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
          "enum": [
            0,
            10,
            30,
            60,
            120,
            600,
            1800
          ]
        },
        "preferCrossMessageReplies": {
          "type": "boolean",
          "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
        },
        "addDeleteButton": {
          "type": "boolean",
          "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
        },
        "reactToDelete": {
          "type": "boolean",
          "description": "Not implemented yet."
        },
        "disableNmartchat": {
          "type": "boolean",
          "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
        },
        "warnSender": {
          "type": "integer",
          "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
          "enum": [
            0,
            1,
            2,
            3
          ]
        },
        "muteSender": {
          "type": "integer",
          "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
        },
        "businessMatchSelf": {
          "type": "boolean",
          "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
        },
        "businessMatchFrom": {
          "type": "boolean",
          "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
        },
        "businessMarkMessagesAsRead": {
          "type": "boolean",
          "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
        }
      }
    }
  },
  "required": [
    "chatId",
    "newObject"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "addKeywordReply",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /addKeywordReply
**Method Name:** addKeywordReply
**Readonly:** No
**Deprecated:** No
**Summary:** addKeywordReply
**Description:** POST /addKeywordReply
**Tags:** Allow Tools Calling, Keyword Reply, nmBot Intelligence, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "newObject"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The id of the group/user to get keyword replies for."
        },
        "newObject": {
          "type": "object",
          "description": "The new keyword reply to add.",
          "required": [
            "isEnabled",
            "matchText",
            "matchFileName",
            "matchStickerEmoji",
            "matchStickerSetName",
            "matchEmotionsToxicity",
            "matchSender",
            "matchForwarder",
            "matchEditedMessage",
            "independentlyMatch",
            "replyMessageIds",
            "isRandomReply",
            "randomReplyCount",
            "autoDeleteOriginalMessageAfter",
            "autoDeleteReplyMessageAfter",
            "ignoreGroupAdministators",
            "ignoreCase",
            "ignoreChinesePunctuation",
            "cooldown",
            "preferCrossMessageReplies",
            "addDeleteButton",
            "reactToDelete",
            "disableNmartchat",
            "warnSender",
            "muteSender",
            "businessMatchSelf",
            "businessMatchFrom",
            "businessMarkMessagesAsRead"
          ],
          "properties": {
            "isEnabled": {
              "type": "boolean",
              "description": "Whether the keyword reply is enabled."
            },
            "matchText": {
              "type": "string",
              "description": "The RegExp string of the text to be matched."
            },
            "matchFileName": {
              "type": "string",
              "description": "The RegExp string of the file name to be matched."
            },
            "matchStickerEmoji": {
              "type": "string",
              "description": "The RegExp string of the sticker emoji to be matched."
            },
            "matchStickerSetName": {
              "type": "string",
              "description": "The RegExp string of the sticker set name (not title) be matched."
            },
            "matchEmotionsToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsSevereToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsIdentityAttack": {
              "type": "number",
              "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsInsult": {
              "type": "number",
              "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsProfanity": {
              "type": "number",
              "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsThreat": {
              "type": "number",
              "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchSender": {
              "type": "string",
              "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchForwarder": {
              "type": "string",
              "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchEditedMessage": {
              "type": "boolean",
              "description": "Whether to match edited message."
            },
            "independentlyMatch": {
              "type": "boolean",
              "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
            },
            "replyMessageIds": {
              "type": "array",
              "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
              "items": {
                "type": "integer",
                "description": "Id of the message template to reply with."
              }
            },
            "isRandomReply": {
              "type": "boolean",
              "description": "Only choose `randomReplyCount` item(s) from all templates."
            },
            "randomReplyCount": {
              "type": "integer",
              "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
            },
            "autoDeleteOriginalMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "autoDeleteReplyMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "ignoreGroupAdministators": {
              "type": "boolean",
              "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
            },
            "ignoreCase": {
              "type": "boolean",
              "description": "Ignore English char case in match RegExps."
            },
            "ignoreChinesePunctuation": {
              "type": "boolean",
              "description": "Ignore Simplized/Traditional Chinese in match RegExps."
            },
            "cooldown": {
              "type": "integer",
              "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
              "enum": [
                0,
                10,
                30,
                60,
                120,
                600,
                1800
              ]
            },
            "preferCrossMessageReplies": {
              "type": "boolean",
              "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
            },
            "addDeleteButton": {
              "type": "boolean",
              "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
            },
            "reactToDelete": {
              "type": "boolean",
              "description": "Not implemented yet."
            },
            "disableNmartchat": {
              "type": "boolean",
              "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
            },
            "warnSender": {
              "type": "integer",
              "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
              "enum": [
                0,
                1,
                2,
                3
              ]
            },
            "muteSender": {
              "type": "integer",
              "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
            },
            "businessMatchSelf": {
              "type": "boolean",
              "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMatchFrom": {
              "type": "boolean",
              "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMarkMessagesAsRead": {
              "type": "boolean",
              "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
            }
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The id of the group/user to get keyword replies for."
      },
      "newObject": {
        "type": "object",
        "description": "The new keyword reply to add.",
        "required": [
          "isEnabled",
          "matchText",
          "matchFileName",
          "matchStickerEmoji",
          "matchStickerSetName",
          "matchEmotionsToxicity",
          "matchSender",
          "matchForwarder",
          "matchEditedMessage",
          "independentlyMatch",
          "replyMessageIds",
          "isRandomReply",
          "randomReplyCount",
          "autoDeleteOriginalMessageAfter",
          "autoDeleteReplyMessageAfter",
          "ignoreGroupAdministators",
          "ignoreCase",
          "ignoreChinesePunctuation",
          "cooldown",
          "preferCrossMessageReplies",
          "addDeleteButton",
          "reactToDelete",
          "disableNmartchat",
          "warnSender",
          "muteSender",
          "businessMatchSelf",
          "businessMatchFrom",
          "businessMarkMessagesAsRead"
        ],
        "properties": {
          "isEnabled": {
            "type": "boolean",
            "description": "Whether the keyword reply is enabled."
          },
          "matchText": {
            "type": "string",
            "description": "The RegExp string of the text to be matched."
          },
          "matchFileName": {
            "type": "string",
            "description": "The RegExp string of the file name to be matched."
          },
          "matchStickerEmoji": {
            "type": "string",
            "description": "The RegExp string of the sticker emoji to be matched."
          },
          "matchStickerSetName": {
            "type": "string",
            "description": "The RegExp string of the sticker set name (not title) be matched."
          },
          "matchEmotionsToxicity": {
            "type": "number",
            "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsSevereToxicity": {
            "type": "number",
            "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsIdentityAttack": {
            "type": "number",
            "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsInsult": {
            "type": "number",
            "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsProfanity": {
            "type": "number",
            "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsThreat": {
            "type": "number",
            "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchSender": {
            "type": "string",
            "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
          },
          "matchForwarder": {
            "type": "string",
            "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
          },
          "matchEditedMessage": {
            "type": "boolean",
            "description": "Whether to match edited message."
          },
          "independentlyMatch": {
            "type": "boolean",
            "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
          },
          "replyMessageIds": {
            "type": "array",
            "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
            "items": {
              "type": "integer",
              "description": "Id of the message template to reply with."
            }
          },
          "isRandomReply": {
            "type": "boolean",
            "description": "Only choose `randomReplyCount` item(s) from all templates."
          },
          "randomReplyCount": {
            "type": "integer",
            "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
          },
          "autoDeleteOriginalMessageAfter": {
            "type": "integer",
            "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
            "enum": [
              0,
              1,
              3,
              5,
              10,
              30,
              60,
              120,
              180,
              240,
              300
            ]
          },
          "autoDeleteReplyMessageAfter": {
            "type": "integer",
            "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
            "enum": [
              0,
              1,
              3,
              5,
              10,
              30,
              60,
              120,
              180,
              240,
              300
            ]
          },
          "ignoreGroupAdministators": {
            "type": "boolean",
            "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
          },
          "ignoreCase": {
            "type": "boolean",
            "description": "Ignore English char case in match RegExps."
          },
          "ignoreChinesePunctuation": {
            "type": "boolean",
            "description": "Ignore Simplized/Traditional Chinese in match RegExps."
          },
          "cooldown": {
            "type": "integer",
            "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
            "enum": [
              0,
              10,
              30,
              60,
              120,
              600,
              1800
            ]
          },
          "preferCrossMessageReplies": {
            "type": "boolean",
            "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
          },
          "addDeleteButton": {
            "type": "boolean",
            "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
          },
          "reactToDelete": {
            "type": "boolean",
            "description": "Not implemented yet."
          },
          "disableNmartchat": {
            "type": "boolean",
            "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
          },
          "warnSender": {
            "type": "integer",
            "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
            "enum": [
              0,
              1,
              2,
              3
            ]
          },
          "muteSender": {
            "type": "integer",
            "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
          },
          "businessMatchSelf": {
            "type": "boolean",
            "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
          },
          "businessMatchFrom": {
            "type": "boolean",
            "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
          },
          "businessMarkMessagesAsRead": {
            "type": "boolean",
            "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
          }
        }
      }
    },
    "required": [
      "chatId",
      "newObject"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "added"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "added": {
          "type": "object",
          "required": [
            "id",
            "groupId",
            "isEnabled",
            "matchForwarder",
            "matchEditedMessage",
            "independentlyMatch",
            "replyMessageIds",
            "isRandomReply",
            "randomReplyCount",
            "autoDeleteOriginalMessageAfter",
            "autoDeleteReplyMessageAfter",
            "ignoreGroupAdministators",
            "ignoreCase",
            "ignoreChinesePunctuation",
            "cooldown",
            "preferCrossMessageReplies",
            "addDeleteButton",
            "disableNmartchat",
            "warnSender",
            "muteSender",
            "businessMatchSelf",
            "businessMatchFrom",
            "matchText",
            "matchStickerEmoji",
            "matchStickerSetName",
            "matchSender",
            "matchFileName",
            "reactToDelete",
            "businessMarkMessagesAsRead",
            "matchEmotionsToxicity"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of keyword reply."
            },
            "groupId": {
              "type": "integer",
              "description": "The group id/user id of the keyword reply. If groupId > 0, the keyword reply is a business keyword reply."
            },
            "isEnabled": {
              "type": "boolean",
              "description": "Whether the keyword reply is enabled."
            },
            "matchText": {
              "type": "string",
              "description": "The RegExp string of the text to be matched."
            },
            "matchFileName": {
              "type": "string",
              "description": "The RegExp string of the file name to be matched."
            },
            "matchStickerEmoji": {
              "type": "string",
              "description": "The RegExp string of the sticker emoji to be matched."
            },
            "matchStickerSetName": {
              "type": "string",
              "description": "The RegExp string of the sticker set name (not title) be matched."
            },
            "matchEmotionsToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsSevereToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsIdentityAttack": {
              "type": "number",
              "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsInsult": {
              "type": "number",
              "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsProfanity": {
              "type": "number",
              "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsThreat": {
              "type": "number",
              "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchSender": {
              "type": "string",
              "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchForwarder": {
              "type": "string",
              "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchEditedMessage": {
              "type": "boolean",
              "description": "Whether to match edited message."
            },
            "independentlyMatch": {
              "type": "boolean",
              "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
            },
            "replyMessageIds": {
              "type": "array",
              "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
              "items": {
                "type": "integer",
                "description": "Id of the message template to reply with."
              }
            },
            "isRandomReply": {
              "type": "boolean",
              "description": "Only choose `randomReplyCount` item(s) from all templates."
            },
            "randomReplyCount": {
              "type": "integer",
              "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
            },
            "autoDeleteOriginalMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "autoDeleteReplyMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "ignoreGroupAdministators": {
              "type": "boolean",
              "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
            },
            "ignoreCase": {
              "type": "boolean",
              "description": "Ignore English char case in match RegExps."
            },
            "ignoreChinesePunctuation": {
              "type": "boolean",
              "description": "Ignore Simplized/Traditional Chinese in match RegExps."
            },
            "cooldown": {
              "type": "integer",
              "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
              "enum": [
                0,
                10,
                30,
                60,
                120,
                600,
                1800
              ]
            },
            "preferCrossMessageReplies": {
              "type": "boolean",
              "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
            },
            "addDeleteButton": {
              "type": "boolean",
              "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
            },
            "reactToDelete": {
              "type": "boolean",
              "description": "Not implemented yet."
            },
            "disableNmartchat": {
              "type": "boolean",
              "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
            },
            "warnSender": {
              "type": "integer",
              "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
              "enum": [
                0,
                1,
                2,
                3
              ]
            },
            "muteSender": {
              "type": "integer",
              "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
            },
            "businessMatchSelf": {
              "type": "boolean",
              "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMatchFrom": {
              "type": "boolean",
              "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMarkMessagesAsRead": {
              "type": "boolean",
              "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
            }
          },
          "title": "KeywordReply"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## editKeywordReply

**Tool Name:** editKeywordReply
**Tool Description:** POST /editKeywordReply
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The id of the group/user to get keyword replies for."
    },
    "id": {
      "type": "integer",
      "description": "The keyword reply id to edit."
    },
    "newObject": {
      "type": "object",
      "description": "The new keyword reply to edit.",
      "required": [
        "isEnabled",
        "matchText",
        "matchFileName",
        "matchStickerEmoji",
        "matchStickerSetName",
        "matchEmotionsToxicity",
        "matchSender",
        "matchForwarder",
        "matchEditedMessage",
        "independentlyMatch",
        "replyMessageIds",
        "isRandomReply",
        "randomReplyCount",
        "autoDeleteOriginalMessageAfter",
        "autoDeleteReplyMessageAfter",
        "ignoreGroupAdministators",
        "ignoreCase",
        "ignoreChinesePunctuation",
        "cooldown",
        "preferCrossMessageReplies",
        "addDeleteButton",
        "reactToDelete",
        "disableNmartchat",
        "warnSender",
        "muteSender",
        "businessMatchSelf",
        "businessMatchFrom",
        "businessMarkMessagesAsRead"
      ],
      "properties": {
        "isEnabled": {
          "type": "boolean",
          "description": "Whether the keyword reply is enabled."
        },
        "matchText": {
          "type": "string",
          "description": "The RegExp string of the text to be matched."
        },
        "matchFileName": {
          "type": "string",
          "description": "The RegExp string of the file name to be matched."
        },
        "matchStickerEmoji": {
          "type": "string",
          "description": "The RegExp string of the sticker emoji to be matched."
        },
        "matchStickerSetName": {
          "type": "string",
          "description": "The RegExp string of the sticker set name (not title) be matched."
        },
        "matchEmotionsToxicity": {
          "type": "number",
          "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsSevereToxicity": {
          "type": "number",
          "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsIdentityAttack": {
          "type": "number",
          "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsInsult": {
          "type": "number",
          "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsProfanity": {
          "type": "number",
          "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchEmotionsThreat": {
          "type": "number",
          "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
        },
        "matchSender": {
          "type": "string",
          "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
        },
        "matchForwarder": {
          "type": "string",
          "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
        },
        "matchEditedMessage": {
          "type": "boolean",
          "description": "Whether to match edited message."
        },
        "independentlyMatch": {
          "type": "boolean",
          "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
        },
        "replyMessageIds": {
          "type": "array",
          "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
          "items": {
            "type": "integer",
            "description": "Id of the message template to reply with."
          }
        },
        "isRandomReply": {
          "type": "boolean",
          "description": "Only choose `randomReplyCount` item(s) from all templates."
        },
        "randomReplyCount": {
          "type": "integer",
          "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
        },
        "autoDeleteOriginalMessageAfter": {
          "type": "integer",
          "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
          "enum": [
            0,
            1,
            3,
            5,
            10,
            30,
            60,
            120,
            180,
            240,
            300
          ]
        },
        "autoDeleteReplyMessageAfter": {
          "type": "integer",
          "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
          "enum": [
            0,
            1,
            3,
            5,
            10,
            30,
            60,
            120,
            180,
            240,
            300
          ]
        },
        "ignoreGroupAdministators": {
          "type": "boolean",
          "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
        },
        "ignoreCase": {
          "type": "boolean",
          "description": "Ignore English char case in match RegExps."
        },
        "ignoreChinesePunctuation": {
          "type": "boolean",
          "description": "Ignore Simplized/Traditional Chinese in match RegExps."
        },
        "cooldown": {
          "type": "integer",
          "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
          "enum": [
            0,
            10,
            30,
            60,
            120,
            600,
            1800
          ]
        },
        "preferCrossMessageReplies": {
          "type": "boolean",
          "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
        },
        "addDeleteButton": {
          "type": "boolean",
          "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
        },
        "reactToDelete": {
          "type": "boolean",
          "description": "Not implemented yet."
        },
        "disableNmartchat": {
          "type": "boolean",
          "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
        },
        "warnSender": {
          "type": "integer",
          "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
          "enum": [
            0,
            1,
            2,
            3
          ]
        },
        "muteSender": {
          "type": "integer",
          "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
        },
        "businessMatchSelf": {
          "type": "boolean",
          "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
        },
        "businessMatchFrom": {
          "type": "boolean",
          "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
        },
        "businessMarkMessagesAsRead": {
          "type": "boolean",
          "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
        }
      }
    }
  },
  "required": [
    "chatId",
    "newObject",
    "id"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "editKeywordReply",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /editKeywordReply
**Method Name:** editKeywordReply
**Readonly:** No
**Deprecated:** No
**Summary:** editKeywordReply
**Description:** POST /editKeywordReply
**Tags:** Allow Tools Calling, Keyword Reply, nmBot Intelligence, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "newObject",
        "id"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The id of the group/user to get keyword replies for."
        },
        "id": {
          "type": "integer",
          "description": "The keyword reply id to edit."
        },
        "newObject": {
          "type": "object",
          "description": "The new keyword reply to edit.",
          "required": [
            "isEnabled",
            "matchText",
            "matchFileName",
            "matchStickerEmoji",
            "matchStickerSetName",
            "matchEmotionsToxicity",
            "matchSender",
            "matchForwarder",
            "matchEditedMessage",
            "independentlyMatch",
            "replyMessageIds",
            "isRandomReply",
            "randomReplyCount",
            "autoDeleteOriginalMessageAfter",
            "autoDeleteReplyMessageAfter",
            "ignoreGroupAdministators",
            "ignoreCase",
            "ignoreChinesePunctuation",
            "cooldown",
            "preferCrossMessageReplies",
            "addDeleteButton",
            "reactToDelete",
            "disableNmartchat",
            "warnSender",
            "muteSender",
            "businessMatchSelf",
            "businessMatchFrom",
            "businessMarkMessagesAsRead"
          ],
          "properties": {
            "isEnabled": {
              "type": "boolean",
              "description": "Whether the keyword reply is enabled."
            },
            "matchText": {
              "type": "string",
              "description": "The RegExp string of the text to be matched."
            },
            "matchFileName": {
              "type": "string",
              "description": "The RegExp string of the file name to be matched."
            },
            "matchStickerEmoji": {
              "type": "string",
              "description": "The RegExp string of the sticker emoji to be matched."
            },
            "matchStickerSetName": {
              "type": "string",
              "description": "The RegExp string of the sticker set name (not title) be matched."
            },
            "matchEmotionsToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsSevereToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsIdentityAttack": {
              "type": "number",
              "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsInsult": {
              "type": "number",
              "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsProfanity": {
              "type": "number",
              "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsThreat": {
              "type": "number",
              "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchSender": {
              "type": "string",
              "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchForwarder": {
              "type": "string",
              "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchEditedMessage": {
              "type": "boolean",
              "description": "Whether to match edited message."
            },
            "independentlyMatch": {
              "type": "boolean",
              "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
            },
            "replyMessageIds": {
              "type": "array",
              "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
              "items": {
                "type": "integer",
                "description": "Id of the message template to reply with."
              }
            },
            "isRandomReply": {
              "type": "boolean",
              "description": "Only choose `randomReplyCount` item(s) from all templates."
            },
            "randomReplyCount": {
              "type": "integer",
              "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
            },
            "autoDeleteOriginalMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "autoDeleteReplyMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "ignoreGroupAdministators": {
              "type": "boolean",
              "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
            },
            "ignoreCase": {
              "type": "boolean",
              "description": "Ignore English char case in match RegExps."
            },
            "ignoreChinesePunctuation": {
              "type": "boolean",
              "description": "Ignore Simplized/Traditional Chinese in match RegExps."
            },
            "cooldown": {
              "type": "integer",
              "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
              "enum": [
                0,
                10,
                30,
                60,
                120,
                600,
                1800
              ]
            },
            "preferCrossMessageReplies": {
              "type": "boolean",
              "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
            },
            "addDeleteButton": {
              "type": "boolean",
              "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
            },
            "reactToDelete": {
              "type": "boolean",
              "description": "Not implemented yet."
            },
            "disableNmartchat": {
              "type": "boolean",
              "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
            },
            "warnSender": {
              "type": "integer",
              "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
              "enum": [
                0,
                1,
                2,
                3
              ]
            },
            "muteSender": {
              "type": "integer",
              "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
            },
            "businessMatchSelf": {
              "type": "boolean",
              "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMatchFrom": {
              "type": "boolean",
              "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMarkMessagesAsRead": {
              "type": "boolean",
              "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
            }
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The id of the group/user to get keyword replies for."
      },
      "id": {
        "type": "integer",
        "description": "The keyword reply id to edit."
      },
      "newObject": {
        "type": "object",
        "description": "The new keyword reply to edit.",
        "required": [
          "isEnabled",
          "matchText",
          "matchFileName",
          "matchStickerEmoji",
          "matchStickerSetName",
          "matchEmotionsToxicity",
          "matchSender",
          "matchForwarder",
          "matchEditedMessage",
          "independentlyMatch",
          "replyMessageIds",
          "isRandomReply",
          "randomReplyCount",
          "autoDeleteOriginalMessageAfter",
          "autoDeleteReplyMessageAfter",
          "ignoreGroupAdministators",
          "ignoreCase",
          "ignoreChinesePunctuation",
          "cooldown",
          "preferCrossMessageReplies",
          "addDeleteButton",
          "reactToDelete",
          "disableNmartchat",
          "warnSender",
          "muteSender",
          "businessMatchSelf",
          "businessMatchFrom",
          "businessMarkMessagesAsRead"
        ],
        "properties": {
          "isEnabled": {
            "type": "boolean",
            "description": "Whether the keyword reply is enabled."
          },
          "matchText": {
            "type": "string",
            "description": "The RegExp string of the text to be matched."
          },
          "matchFileName": {
            "type": "string",
            "description": "The RegExp string of the file name to be matched."
          },
          "matchStickerEmoji": {
            "type": "string",
            "description": "The RegExp string of the sticker emoji to be matched."
          },
          "matchStickerSetName": {
            "type": "string",
            "description": "The RegExp string of the sticker set name (not title) be matched."
          },
          "matchEmotionsToxicity": {
            "type": "number",
            "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsSevereToxicity": {
            "type": "number",
            "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsIdentityAttack": {
            "type": "number",
            "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsInsult": {
            "type": "number",
            "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsProfanity": {
            "type": "number",
            "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchEmotionsThreat": {
            "type": "number",
            "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
          },
          "matchSender": {
            "type": "string",
            "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
          },
          "matchForwarder": {
            "type": "string",
            "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
          },
          "matchEditedMessage": {
            "type": "boolean",
            "description": "Whether to match edited message."
          },
          "independentlyMatch": {
            "type": "boolean",
            "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
          },
          "replyMessageIds": {
            "type": "array",
            "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
            "items": {
              "type": "integer",
              "description": "Id of the message template to reply with."
            }
          },
          "isRandomReply": {
            "type": "boolean",
            "description": "Only choose `randomReplyCount` item(s) from all templates."
          },
          "randomReplyCount": {
            "type": "integer",
            "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
          },
          "autoDeleteOriginalMessageAfter": {
            "type": "integer",
            "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
            "enum": [
              0,
              1,
              3,
              5,
              10,
              30,
              60,
              120,
              180,
              240,
              300
            ]
          },
          "autoDeleteReplyMessageAfter": {
            "type": "integer",
            "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
            "enum": [
              0,
              1,
              3,
              5,
              10,
              30,
              60,
              120,
              180,
              240,
              300
            ]
          },
          "ignoreGroupAdministators": {
            "type": "boolean",
            "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
          },
          "ignoreCase": {
            "type": "boolean",
            "description": "Ignore English char case in match RegExps."
          },
          "ignoreChinesePunctuation": {
            "type": "boolean",
            "description": "Ignore Simplized/Traditional Chinese in match RegExps."
          },
          "cooldown": {
            "type": "integer",
            "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
            "enum": [
              0,
              10,
              30,
              60,
              120,
              600,
              1800
            ]
          },
          "preferCrossMessageReplies": {
            "type": "boolean",
            "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
          },
          "addDeleteButton": {
            "type": "boolean",
            "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
          },
          "reactToDelete": {
            "type": "boolean",
            "description": "Not implemented yet."
          },
          "disableNmartchat": {
            "type": "boolean",
            "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
          },
          "warnSender": {
            "type": "integer",
            "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
            "enum": [
              0,
              1,
              2,
              3
            ]
          },
          "muteSender": {
            "type": "integer",
            "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
          },
          "businessMatchSelf": {
            "type": "boolean",
            "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
          },
          "businessMatchFrom": {
            "type": "boolean",
            "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
          },
          "businessMarkMessagesAsRead": {
            "type": "boolean",
            "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
          }
        }
      }
    },
    "required": [
      "chatId",
      "newObject",
      "id"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "updated"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "updated": {
          "type": "object",
          "required": [
            "id",
            "groupId",
            "isEnabled",
            "matchForwarder",
            "matchEditedMessage",
            "independentlyMatch",
            "replyMessageIds",
            "isRandomReply",
            "randomReplyCount",
            "autoDeleteOriginalMessageAfter",
            "autoDeleteReplyMessageAfter",
            "ignoreGroupAdministators",
            "ignoreCase",
            "ignoreChinesePunctuation",
            "cooldown",
            "preferCrossMessageReplies",
            "addDeleteButton",
            "disableNmartchat",
            "warnSender",
            "muteSender",
            "businessMatchSelf",
            "businessMatchFrom",
            "matchText",
            "matchStickerEmoji",
            "matchStickerSetName",
            "matchSender",
            "matchFileName",
            "reactToDelete",
            "businessMarkMessagesAsRead",
            "matchEmotionsToxicity"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of keyword reply."
            },
            "groupId": {
              "type": "integer",
              "description": "The group id/user id of the keyword reply. If groupId > 0, the keyword reply is a business keyword reply."
            },
            "isEnabled": {
              "type": "boolean",
              "description": "Whether the keyword reply is enabled."
            },
            "matchText": {
              "type": "string",
              "description": "The RegExp string of the text to be matched."
            },
            "matchFileName": {
              "type": "string",
              "description": "The RegExp string of the file name to be matched."
            },
            "matchStickerEmoji": {
              "type": "string",
              "description": "The RegExp string of the sticker emoji to be matched."
            },
            "matchStickerSetName": {
              "type": "string",
              "description": "The RegExp string of the sticker set name (not title) be matched."
            },
            "matchEmotionsToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsSevereToxicity": {
              "type": "number",
              "description": "the severe toxicity level to match Severe Toxicity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsIdentityAttack": {
              "type": "number",
              "description": "the severe toxicity level to match Identity Attack. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsInsult": {
              "type": "number",
              "description": "the severe toxicity level to match Insult. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsProfanity": {
              "type": "number",
              "description": "the severe toxicity level to match Profanity. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchEmotionsThreat": {
              "type": "number",
              "description": "the severe toxicity level to match Threat. Accepts 0, 0.5, 0.6, 0.8, 0.9. For nmBot+ chats only."
            },
            "matchSender": {
              "type": "string",
              "description": "The RegExp string of the sender name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchForwarder": {
              "type": "string",
              "description": "The RegExp string of the forwarder name to be matched. \"id: 1234\" for id, \"@username\" for username."
            },
            "matchEditedMessage": {
              "type": "boolean",
              "description": "Whether to match edited message."
            },
            "independentlyMatch": {
              "type": "boolean",
              "description": "When this option is turned on, the keyword reply will be triggered as long as any one of the message text, file name, sticker Emoji, sticker pack name, emotions, message sender and forwarder name is met. Otherwise, all type must be met to trigger reply."
            },
            "replyMessageIds": {
              "type": "array",
              "description": "Ids of the message templates to reply with. Can contain 0 items if only uses other keyword reply features.Currently a chat subscribed to nmBot+ can add up to 12 messages. Otherwise a chat can add up to 6 messages.",
              "items": {
                "type": "integer",
                "description": "Id of the message template to reply with."
              }
            },
            "isRandomReply": {
              "type": "boolean",
              "description": "Only choose `randomReplyCount` item(s) from all templates."
            },
            "randomReplyCount": {
              "type": "integer",
              "description": "The count of reply templates to be choosed. For non-nmBot+ chats only accept 1."
            },
            "autoDeleteOriginalMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that triggered the keyword reply. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "autoDeleteReplyMessageAfter": {
              "type": "integer",
              "description": "Time in seconds to auto delete the message that replied to triggered message. Set to 0 to disable. Plus-only if is a business keyword reply.",
              "enum": [
                0,
                1,
                3,
                5,
                10,
                30,
                60,
                120,
                180,
                240,
                300
              ]
            },
            "ignoreGroupAdministators": {
              "type": "boolean",
              "description": "Don't trigger keyword reply when an admin of group's message triggered. For group keyword reply only."
            },
            "ignoreCase": {
              "type": "boolean",
              "description": "Ignore English char case in match RegExps."
            },
            "ignoreChinesePunctuation": {
              "type": "boolean",
              "description": "Ignore Simplized/Traditional Chinese in match RegExps."
            },
            "cooldown": {
              "type": "integer",
              "description": "Time in seconds to wait before the next trigger of the keyword reply. Set to 0 to disable.",
              "enum": [
                0,
                10,
                30,
                60,
                120,
                600,
                1800
              ]
            },
            "preferCrossMessageReplies": {
              "type": "boolean",
              "description": "If the message triggered the keyword reply is a message that replies another message, let the messages send by bot also reply to the message that the triggered message replies to. By default, bot's reply messages reply to triggered message. For nmBot+ chats only."
            },
            "addDeleteButton": {
              "type": "boolean",
              "description": "Add a \"OK\" button to delete the replied messages. For group keyword reply only."
            },
            "reactToDelete": {
              "type": "boolean",
              "description": "Not implemented yet."
            },
            "disableNmartchat": {
              "type": "boolean",
              "description": "Disable nmartChat if a user reply to the bot's reply message from the keyword reply."
            },
            "warnSender": {
              "type": "integer",
              "description": "The time to let nmBot warn the sender. Set to 0 to disable. For group keyword reply only. For nmBot+ chats only.",
              "enum": [
                0,
                1,
                2,
                3
              ]
            },
            "muteSender": {
              "type": "integer",
              "description": "The time to mute the sender. Set to 0 to disable, set to -1 to mute forever, otherwise the value must be less than 366 days or more than 30 seconds."
            },
            "businessMatchSelf": {
              "type": "boolean",
              "description": "Match messages from the creator of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMatchFrom": {
              "type": "boolean",
              "description": "Match messages from the other user in the private chat of business keyword reply. For business keyword reply only. One of `businessMatchSelf` and `businessMatchFrom` must be `true`."
            },
            "businessMarkMessagesAsRead": {
              "type": "boolean",
              "description": "Mark the income message as read. For business keyword reply only. Plus-only for business keyword reply."
            }
          },
          "title": "KeywordReply"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## deleteKeywordReply

**Tool Name:** deleteKeywordReply
**Tool Description:** Delete a keyword reply for a group or user\.  Method: POST /deleteKeywordReply\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The id of the group/user to get keyword replies for."
    },
    "id": {
      "type": "integer",
      "description": "The keyword reply id to delete."
    }
  },
  "required": [
    "chatId",
    "id"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "deleteKeywordReply",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /deleteKeywordReply
**Method Name:** deleteKeywordReply
**Readonly:** No
**Deprecated:** No
**Summary:** deleteKeywordReply
**Description:** Delete a keyword reply for a group or user\.
**Tags:** Allow Tools Calling, Keyword Reply, nmBot Intelligence, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "id"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The id of the group/user to get keyword replies for."
        },
        "id": {
          "type": "integer",
          "description": "The keyword reply id to delete."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The id of the group/user to get keyword replies for."
      },
      "id": {
        "type": "integer",
        "description": "The keyword reply id to delete."
      }
    },
    "required": [
      "chatId",
      "id"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "deleted"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "deleted": {
          "type": "integer",
          "description": "The id of the keyword reply deleted."
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## deleteKeywordReplies

**Tool Name:** deleteKeywordReplies
**Tool Description:** Delete keyword replies for a group or user\.  Method: POST /deleteKeywordReplies\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The id of the group/user to get keyword replies for."
    },
    "ids": {
      "type": "array",
      "description": "The keyword reply ids to delete.",
      "items": {
        "type": "integer"
      }
    }
  },
  "required": [
    "chatId",
    "ids"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "deleteKeywordReplies",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /deleteKeywordReplies
**Method Name:** deleteKeywordReplies
**Readonly:** No
**Deprecated:** No
**Summary:** deleteKeywordReplies
**Description:** Delete keyword replies for a group or user\.
**Tags:** Allow Tools Calling, Keyword Reply, nmBot Intelligence, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "ids"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The id of the group/user to get keyword replies for."
        },
        "ids": {
          "type": "array",
          "description": "The keyword reply ids to delete.",
          "items": {
            "type": "integer"
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The id of the group/user to get keyword replies for."
      },
      "ids": {
        "type": "array",
        "description": "The keyword reply ids to delete.",
        "items": {
          "type": "integer"
        }
      }
    },
    "required": [
      "chatId",
      "ids"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "deleted"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "deleted": {
          "type": "array",
          "description": "The ids of the keyword reply deleted.",
          "items": {
            "type": "integer"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getMessageTemplates

**Tool Name:** getMessageTemplates
**Tool Description:** Get a chat's message templates\.  Method: POST /getMessageTemplates\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The chat id to get message templates."
    }
  },
  "required": [
    "chatId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getMessageTemplates",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getMessageTemplates
**Method Name:** getMessageTemplates
**Readonly:** Yes
**Deprecated:** No
**Summary:** getMessageTemplates
**Description:** Get a chat's message templates\.
**Tags:** Allow Tools Calling, Message Template, nmBot Intelligence, Readonly, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The chat id to get message templates."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The chat id to get message templates."
      }
    },
    "required": [
      "chatId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "messageTemplates"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "messageTemplates": {
          "type": "array",
          "description": "The message templates of the chat.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "chatId",
              "protectContent",
              "disableNotification",
              "keyboard"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The ID of template."
              },
              "chatId": {
                "type": "integer",
                "description": "The chat the template serves for."
              },
              "title": {
                "type": "string",
                "description": "The title of the template. Will not be sent."
              },
              "text": {
                "type": "string",
                "description": "Message text. Required if template type is text."
              },
              "parseMode": {
                "type": "string",
                "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
                "enum": [
                  "Markdown",
                  "MarkdownV2",
                  "HTML"
                ]
              },
              "caption": {
                "type": "string",
                "description": "Optional. Message caption. if template type is mediaGroup or voice."
              },
              "linkPreview": {
                "type": "boolean",
                "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
              },
              "linkPreviewUrl": {
                "type": "string",
                "description": "Optional. Link preview URL of the message. Accept if template type is text."
              },
              "linkPreviewPreferSmallMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
              },
              "linkPreviewPreferLargeMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
              },
              "linkPreviewShowAboveText": {
                "type": "boolean",
                "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
              },
              "mediaGroupFileIds": {
                "type": "array",
                "description": "Not implemented yet.",
                "items": {
                  "type": "string"
                }
              },
              "voiceFileId": {
                "type": "string",
                "description": "Optional. The voice file id. Required if template type is voice."
              },
              "stickerFileId": {
                "type": "string",
                "description": "Optional. The sticker file id. Required if template type is sticker."
              },
              "messageIds": {
                "type": "array",
                "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
                "items": {
                  "anyOf": [
                    {
                      "type": "string",
                      "description": "Message link to message to copy."
                    },
                    {
                      "type": "integer",
                      "description": "Message id. Only works if message to copy is from the same chat."
                    }
                  ]
                }
              },
              "keyboard": {
                "type": "array",
                "items": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "url",
                      "text"
                    ],
                    "properties": {
                      "url": {
                        "type": "string",
                        "description": "Button target URL."
                      },
                      "text": {
                        "type": "string",
                        "description": "Button text."
                      }
                    },
                    "title": "InlineKeyboardButton"
                  }
                },
                "title": "InlineKeyboard"
              },
              "protectContent": {
                "type": "boolean",
                "description": "Disable the message from coping/forwarding."
              },
              "disableNotification": {
                "type": "boolean",
                "description": "Disable message notification."
              }
            },
            "title": "MessageTemplate"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## addMessageTemplate

**Tool Name:** addMessageTemplate
**Tool Description:** POST /addMessageTemplate
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The chat id to perform message template action."
    },
    "data": {
      "type": "object",
      "required": [
        "keyboard",
        "protectContent",
        "disableNotification"
      ],
      "properties": {
        "title": {
          "type": "string",
          "description": "The title of the template. Will not be sent."
        },
        "text": {
          "type": "string",
          "description": "Message text. Required if template type is text."
        },
        "parseMode": {
          "type": "string",
          "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
          "enum": [
            "Markdown",
            "MarkdownV2",
            "HTML"
          ]
        },
        "caption": {
          "type": "string",
          "description": "Optional. Message caption. if template type is mediaGroup or voice."
        },
        "linkPreview": {
          "type": "boolean",
          "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
        },
        "linkPreviewUrl": {
          "type": "string",
          "description": "Optional. Link preview URL of the message. Accept if template type is text."
        },
        "linkPreviewPreferSmallMedia": {
          "type": "boolean",
          "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
        },
        "linkPreviewPreferLargeMedia": {
          "type": "boolean",
          "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
        },
        "linkPreviewShowAboveText": {
          "type": "boolean",
          "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
        },
        "mediaGroupFileIds": {
          "type": "array",
          "description": "Not implemented yet.",
          "items": {
            "type": "string"
          }
        },
        "voiceFileId": {
          "type": "string",
          "description": "Optional. The voice file id. Required if template type is voice."
        },
        "stickerFileId": {
          "type": "string",
          "description": "Optional. The sticker file id. Required if template type is sticker."
        },
        "messageIds": {
          "type": "array",
          "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
          "items": {
            "anyOf": [
              {
                "type": "string",
                "description": "Message link to message to copy."
              },
              {
                "type": "integer",
                "description": "Message id. Only works if message to copy is from the same chat."
              }
            ]
          }
        },
        "keyboard": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "required": [
                "url",
                "text"
              ],
              "properties": {
                "url": {
                  "type": "string",
                  "description": "Button target URL."
                },
                "text": {
                  "type": "string",
                  "description": "Button text."
                }
              },
              "title": "InlineKeyboardButton"
            }
          },
          "title": "InlineKeyboard"
        },
        "protectContent": {
          "type": "boolean",
          "description": "Disable the message from coping/forwarding."
        },
        "disableNotification": {
          "type": "boolean",
          "description": "Disable message notification."
        }
      }
    }
  },
  "required": [
    "chatId",
    "data"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "addMessageTemplate",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /addMessageTemplate
**Method Name:** addMessageTemplate
**Readonly:** No
**Deprecated:** No
**Summary:** addMessageTemplate
**Description:** POST /addMessageTemplate
**Tags:** Allow Tools Calling, Message Template, nmBot Intelligence, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "data"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The chat id to perform message template action."
        },
        "data": {
          "type": "object",
          "required": [
            "keyboard",
            "protectContent",
            "disableNotification"
          ],
          "properties": {
            "title": {
              "type": "string",
              "description": "The title of the template. Will not be sent."
            },
            "text": {
              "type": "string",
              "description": "Message text. Required if template type is text."
            },
            "parseMode": {
              "type": "string",
              "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
              "enum": [
                "Markdown",
                "MarkdownV2",
                "HTML"
              ]
            },
            "caption": {
              "type": "string",
              "description": "Optional. Message caption. if template type is mediaGroup or voice."
            },
            "linkPreview": {
              "type": "boolean",
              "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
            },
            "linkPreviewUrl": {
              "type": "string",
              "description": "Optional. Link preview URL of the message. Accept if template type is text."
            },
            "linkPreviewPreferSmallMedia": {
              "type": "boolean",
              "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
            },
            "linkPreviewPreferLargeMedia": {
              "type": "boolean",
              "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
            },
            "linkPreviewShowAboveText": {
              "type": "boolean",
              "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
            },
            "mediaGroupFileIds": {
              "type": "array",
              "description": "Not implemented yet.",
              "items": {
                "type": "string"
              }
            },
            "voiceFileId": {
              "type": "string",
              "description": "Optional. The voice file id. Required if template type is voice."
            },
            "stickerFileId": {
              "type": "string",
              "description": "Optional. The sticker file id. Required if template type is sticker."
            },
            "messageIds": {
              "type": "array",
              "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
              "items": {
                "anyOf": [
                  {
                    "type": "string",
                    "description": "Message link to message to copy."
                  },
                  {
                    "type": "integer",
                    "description": "Message id. Only works if message to copy is from the same chat."
                  }
                ]
              }
            },
            "keyboard": {
              "type": "array",
              "items": {
                "type": "array",
                "items": {
                  "type": "object",
                  "required": [
                    "url",
                    "text"
                  ],
                  "properties": {
                    "url": {
                      "type": "string",
                      "description": "Button target URL."
                    },
                    "text": {
                      "type": "string",
                      "description": "Button text."
                    }
                  },
                  "title": "InlineKeyboardButton"
                }
              },
              "title": "InlineKeyboard"
            },
            "protectContent": {
              "type": "boolean",
              "description": "Disable the message from coping/forwarding."
            },
            "disableNotification": {
              "type": "boolean",
              "description": "Disable message notification."
            }
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The chat id to perform message template action."
      },
      "data": {
        "type": "object",
        "required": [
          "keyboard",
          "protectContent",
          "disableNotification"
        ],
        "properties": {
          "title": {
            "type": "string",
            "description": "The title of the template. Will not be sent."
          },
          "text": {
            "type": "string",
            "description": "Message text. Required if template type is text."
          },
          "parseMode": {
            "type": "string",
            "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
            "enum": [
              "Markdown",
              "MarkdownV2",
              "HTML"
            ]
          },
          "caption": {
            "type": "string",
            "description": "Optional. Message caption. if template type is mediaGroup or voice."
          },
          "linkPreview": {
            "type": "boolean",
            "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
          },
          "linkPreviewUrl": {
            "type": "string",
            "description": "Optional. Link preview URL of the message. Accept if template type is text."
          },
          "linkPreviewPreferSmallMedia": {
            "type": "boolean",
            "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
          },
          "linkPreviewPreferLargeMedia": {
            "type": "boolean",
            "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
          },
          "linkPreviewShowAboveText": {
            "type": "boolean",
            "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
          },
          "mediaGroupFileIds": {
            "type": "array",
            "description": "Not implemented yet.",
            "items": {
              "type": "string"
            }
          },
          "voiceFileId": {
            "type": "string",
            "description": "Optional. The voice file id. Required if template type is voice."
          },
          "stickerFileId": {
            "type": "string",
            "description": "Optional. The sticker file id. Required if template type is sticker."
          },
          "messageIds": {
            "type": "array",
            "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
            "items": {
              "anyOf": [
                {
                  "type": "string",
                  "description": "Message link to message to copy."
                },
                {
                  "type": "integer",
                  "description": "Message id. Only works if message to copy is from the same chat."
                }
              ]
            }
          },
          "keyboard": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "object",
                "required": [
                  "url",
                  "text"
                ],
                "properties": {
                  "url": {
                    "type": "string",
                    "description": "Button target URL."
                  },
                  "text": {
                    "type": "string",
                    "description": "Button text."
                  }
                },
                "title": "InlineKeyboardButton"
              }
            },
            "title": "InlineKeyboard"
          },
          "protectContent": {
            "type": "boolean",
            "description": "Disable the message from coping/forwarding."
          },
          "disableNotification": {
            "type": "boolean",
            "description": "Disable message notification."
          }
        }
      }
    },
    "required": [
      "chatId",
      "data"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "messageTemplates",
        "insertId"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "insertId": {
          "type": "integer",
          "description": "The id of the new message template."
        },
        "messageTemplates": {
          "type": "array",
          "description": "The message templates of the chat.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "chatId",
              "protectContent",
              "disableNotification",
              "keyboard"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The ID of template."
              },
              "chatId": {
                "type": "integer",
                "description": "The chat the template serves for."
              },
              "title": {
                "type": "string",
                "description": "The title of the template. Will not be sent."
              },
              "text": {
                "type": "string",
                "description": "Message text. Required if template type is text."
              },
              "parseMode": {
                "type": "string",
                "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
                "enum": [
                  "Markdown",
                  "MarkdownV2",
                  "HTML"
                ]
              },
              "caption": {
                "type": "string",
                "description": "Optional. Message caption. if template type is mediaGroup or voice."
              },
              "linkPreview": {
                "type": "boolean",
                "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
              },
              "linkPreviewUrl": {
                "type": "string",
                "description": "Optional. Link preview URL of the message. Accept if template type is text."
              },
              "linkPreviewPreferSmallMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
              },
              "linkPreviewPreferLargeMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
              },
              "linkPreviewShowAboveText": {
                "type": "boolean",
                "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
              },
              "mediaGroupFileIds": {
                "type": "array",
                "description": "Not implemented yet.",
                "items": {
                  "type": "string"
                }
              },
              "voiceFileId": {
                "type": "string",
                "description": "Optional. The voice file id. Required if template type is voice."
              },
              "stickerFileId": {
                "type": "string",
                "description": "Optional. The sticker file id. Required if template type is sticker."
              },
              "messageIds": {
                "type": "array",
                "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
                "items": {
                  "anyOf": [
                    {
                      "type": "string",
                      "description": "Message link to message to copy."
                    },
                    {
                      "type": "integer",
                      "description": "Message id. Only works if message to copy is from the same chat."
                    }
                  ]
                }
              },
              "keyboard": {
                "type": "array",
                "items": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "url",
                      "text"
                    ],
                    "properties": {
                      "url": {
                        "type": "string",
                        "description": "Button target URL."
                      },
                      "text": {
                        "type": "string",
                        "description": "Button text."
                      }
                    },
                    "title": "InlineKeyboardButton"
                  }
                },
                "title": "InlineKeyboard"
              },
              "protectContent": {
                "type": "boolean",
                "description": "Disable the message from coping/forwarding."
              },
              "disableNotification": {
                "type": "boolean",
                "description": "Disable message notification."
              }
            },
            "title": "MessageTemplate"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## editMessageTemplate

**Tool Name:** editMessageTemplate
**Tool Description:** Edit a message template from a chat\.  Method: POST /editMessageTemplate\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The chat id to perform message template action."
    },
    "templateId": {
      "type": "integer",
      "description": "The id of the message template to edit."
    },
    "data": {
      "type": "object",
      "required": [
        "keyboard",
        "protectContent",
        "disableNotification"
      ],
      "properties": {
        "title": {
          "type": "string",
          "description": "The title of the template. Will not be sent."
        },
        "text": {
          "type": "string",
          "description": "Message text. Required if template type is text."
        },
        "parseMode": {
          "type": "string",
          "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
          "enum": [
            "Markdown",
            "MarkdownV2",
            "HTML"
          ]
        },
        "caption": {
          "type": "string",
          "description": "Optional. Message caption. if template type is mediaGroup or voice."
        },
        "linkPreview": {
          "type": "boolean",
          "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
        },
        "linkPreviewUrl": {
          "type": "string",
          "description": "Optional. Link preview URL of the message. Accept if template type is text."
        },
        "linkPreviewPreferSmallMedia": {
          "type": "boolean",
          "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
        },
        "linkPreviewPreferLargeMedia": {
          "type": "boolean",
          "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
        },
        "linkPreviewShowAboveText": {
          "type": "boolean",
          "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
        },
        "mediaGroupFileIds": {
          "type": "array",
          "description": "Not implemented yet.",
          "items": {
            "type": "string"
          }
        },
        "voiceFileId": {
          "type": "string",
          "description": "Optional. The voice file id. Required if template type is voice."
        },
        "stickerFileId": {
          "type": "string",
          "description": "Optional. The sticker file id. Required if template type is sticker."
        },
        "messageIds": {
          "type": "array",
          "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
          "items": {
            "anyOf": [
              {
                "type": "string",
                "description": "Message link to message to copy."
              },
              {
                "type": "integer",
                "description": "Message id. Only works if message to copy is from the same chat."
              }
            ]
          }
        },
        "keyboard": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "required": [
                "url",
                "text"
              ],
              "properties": {
                "url": {
                  "type": "string",
                  "description": "Button target URL."
                },
                "text": {
                  "type": "string",
                  "description": "Button text."
                }
              },
              "title": "InlineKeyboardButton"
            }
          },
          "title": "InlineKeyboard"
        },
        "protectContent": {
          "type": "boolean",
          "description": "Disable the message from coping/forwarding."
        },
        "disableNotification": {
          "type": "boolean",
          "description": "Disable message notification."
        }
      }
    }
  },
  "required": [
    "chatId",
    "data",
    "templateId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "editMessageTemplate",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /editMessageTemplate
**Method Name:** editMessageTemplate
**Readonly:** No
**Deprecated:** No
**Summary:** editMessageTemplate
**Description:** Edit a message template from a chat\.
**Tags:** Allow Tools Calling, Message Template, nmBot Intelligence, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "data",
        "templateId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The chat id to perform message template action."
        },
        "templateId": {
          "type": "integer",
          "description": "The id of the message template to edit."
        },
        "data": {
          "type": "object",
          "required": [
            "keyboard",
            "protectContent",
            "disableNotification"
          ],
          "properties": {
            "title": {
              "type": "string",
              "description": "The title of the template. Will not be sent."
            },
            "text": {
              "type": "string",
              "description": "Message text. Required if template type is text."
            },
            "parseMode": {
              "type": "string",
              "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
              "enum": [
                "Markdown",
                "MarkdownV2",
                "HTML"
              ]
            },
            "caption": {
              "type": "string",
              "description": "Optional. Message caption. if template type is mediaGroup or voice."
            },
            "linkPreview": {
              "type": "boolean",
              "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
            },
            "linkPreviewUrl": {
              "type": "string",
              "description": "Optional. Link preview URL of the message. Accept if template type is text."
            },
            "linkPreviewPreferSmallMedia": {
              "type": "boolean",
              "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
            },
            "linkPreviewPreferLargeMedia": {
              "type": "boolean",
              "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
            },
            "linkPreviewShowAboveText": {
              "type": "boolean",
              "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
            },
            "mediaGroupFileIds": {
              "type": "array",
              "description": "Not implemented yet.",
              "items": {
                "type": "string"
              }
            },
            "voiceFileId": {
              "type": "string",
              "description": "Optional. The voice file id. Required if template type is voice."
            },
            "stickerFileId": {
              "type": "string",
              "description": "Optional. The sticker file id. Required if template type is sticker."
            },
            "messageIds": {
              "type": "array",
              "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
              "items": {
                "anyOf": [
                  {
                    "type": "string",
                    "description": "Message link to message to copy."
                  },
                  {
                    "type": "integer",
                    "description": "Message id. Only works if message to copy is from the same chat."
                  }
                ]
              }
            },
            "keyboard": {
              "type": "array",
              "items": {
                "type": "array",
                "items": {
                  "type": "object",
                  "required": [
                    "url",
                    "text"
                  ],
                  "properties": {
                    "url": {
                      "type": "string",
                      "description": "Button target URL."
                    },
                    "text": {
                      "type": "string",
                      "description": "Button text."
                    }
                  },
                  "title": "InlineKeyboardButton"
                }
              },
              "title": "InlineKeyboard"
            },
            "protectContent": {
              "type": "boolean",
              "description": "Disable the message from coping/forwarding."
            },
            "disableNotification": {
              "type": "boolean",
              "description": "Disable message notification."
            }
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The chat id to perform message template action."
      },
      "templateId": {
        "type": "integer",
        "description": "The id of the message template to edit."
      },
      "data": {
        "type": "object",
        "required": [
          "keyboard",
          "protectContent",
          "disableNotification"
        ],
        "properties": {
          "title": {
            "type": "string",
            "description": "The title of the template. Will not be sent."
          },
          "text": {
            "type": "string",
            "description": "Message text. Required if template type is text."
          },
          "parseMode": {
            "type": "string",
            "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
            "enum": [
              "Markdown",
              "MarkdownV2",
              "HTML"
            ]
          },
          "caption": {
            "type": "string",
            "description": "Optional. Message caption. if template type is mediaGroup or voice."
          },
          "linkPreview": {
            "type": "boolean",
            "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
          },
          "linkPreviewUrl": {
            "type": "string",
            "description": "Optional. Link preview URL of the message. Accept if template type is text."
          },
          "linkPreviewPreferSmallMedia": {
            "type": "boolean",
            "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
          },
          "linkPreviewPreferLargeMedia": {
            "type": "boolean",
            "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
          },
          "linkPreviewShowAboveText": {
            "type": "boolean",
            "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
          },
          "mediaGroupFileIds": {
            "type": "array",
            "description": "Not implemented yet.",
            "items": {
              "type": "string"
            }
          },
          "voiceFileId": {
            "type": "string",
            "description": "Optional. The voice file id. Required if template type is voice."
          },
          "stickerFileId": {
            "type": "string",
            "description": "Optional. The sticker file id. Required if template type is sticker."
          },
          "messageIds": {
            "type": "array",
            "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
            "items": {
              "anyOf": [
                {
                  "type": "string",
                  "description": "Message link to message to copy."
                },
                {
                  "type": "integer",
                  "description": "Message id. Only works if message to copy is from the same chat."
                }
              ]
            }
          },
          "keyboard": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "object",
                "required": [
                  "url",
                  "text"
                ],
                "properties": {
                  "url": {
                    "type": "string",
                    "description": "Button target URL."
                  },
                  "text": {
                    "type": "string",
                    "description": "Button text."
                  }
                },
                "title": "InlineKeyboardButton"
              }
            },
            "title": "InlineKeyboard"
          },
          "protectContent": {
            "type": "boolean",
            "description": "Disable the message from coping/forwarding."
          },
          "disableNotification": {
            "type": "boolean",
            "description": "Disable message notification."
          }
        }
      }
    },
    "required": [
      "chatId",
      "data",
      "templateId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "messageTemplates"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "messageTemplates": {
          "type": "array",
          "description": "The message templates of the chat.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "chatId",
              "protectContent",
              "disableNotification",
              "keyboard"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The ID of template."
              },
              "chatId": {
                "type": "integer",
                "description": "The chat the template serves for."
              },
              "title": {
                "type": "string",
                "description": "The title of the template. Will not be sent."
              },
              "text": {
                "type": "string",
                "description": "Message text. Required if template type is text."
              },
              "parseMode": {
                "type": "string",
                "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
                "enum": [
                  "Markdown",
                  "MarkdownV2",
                  "HTML"
                ]
              },
              "caption": {
                "type": "string",
                "description": "Optional. Message caption. if template type is mediaGroup or voice."
              },
              "linkPreview": {
                "type": "boolean",
                "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
              },
              "linkPreviewUrl": {
                "type": "string",
                "description": "Optional. Link preview URL of the message. Accept if template type is text."
              },
              "linkPreviewPreferSmallMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
              },
              "linkPreviewPreferLargeMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
              },
              "linkPreviewShowAboveText": {
                "type": "boolean",
                "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
              },
              "mediaGroupFileIds": {
                "type": "array",
                "description": "Not implemented yet.",
                "items": {
                  "type": "string"
                }
              },
              "voiceFileId": {
                "type": "string",
                "description": "Optional. The voice file id. Required if template type is voice."
              },
              "stickerFileId": {
                "type": "string",
                "description": "Optional. The sticker file id. Required if template type is sticker."
              },
              "messageIds": {
                "type": "array",
                "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
                "items": {
                  "anyOf": [
                    {
                      "type": "string",
                      "description": "Message link to message to copy."
                    },
                    {
                      "type": "integer",
                      "description": "Message id. Only works if message to copy is from the same chat."
                    }
                  ]
                }
              },
              "keyboard": {
                "type": "array",
                "items": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "url",
                      "text"
                    ],
                    "properties": {
                      "url": {
                        "type": "string",
                        "description": "Button target URL."
                      },
                      "text": {
                        "type": "string",
                        "description": "Button text."
                      }
                    },
                    "title": "InlineKeyboardButton"
                  }
                },
                "title": "InlineKeyboard"
              },
              "protectContent": {
                "type": "boolean",
                "description": "Disable the message from coping/forwarding."
              },
              "disableNotification": {
                "type": "boolean",
                "description": "Disable message notification."
              }
            },
            "title": "MessageTemplate"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## deleteMessageTemplate

**Tool Name:** deleteMessageTemplate
**Tool Description:** Delete a message template from a chat\.  Method: POST /deleteMessageTemplate\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "The chat id to perform message template action."
    },
    "templateId": {
      "type": "integer",
      "description": "The id of the message template to edit."
    }
  },
  "required": [
    "chatId",
    "templateId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "deleteMessageTemplate",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /deleteMessageTemplate
**Method Name:** deleteMessageTemplate
**Readonly:** No
**Deprecated:** No
**Summary:** deleteMessageTemplate
**Description:** Delete a message template from a chat\.
**Tags:** Allow Tools Calling, Message Template, nmBot Intelligence, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "chatId",
        "templateId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "The chat id to perform message template action."
        },
        "templateId": {
          "type": "integer",
          "description": "The id of the message template to edit."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "The chat id to perform message template action."
      },
      "templateId": {
        "type": "integer",
        "description": "The id of the message template to edit."
      }
    },
    "required": [
      "chatId",
      "templateId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "messageTemplates"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "messageTemplates": {
          "type": "array",
          "description": "The message templates of the chat.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "chatId",
              "protectContent",
              "disableNotification",
              "keyboard"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The ID of template."
              },
              "chatId": {
                "type": "integer",
                "description": "The chat the template serves for."
              },
              "title": {
                "type": "string",
                "description": "The title of the template. Will not be sent."
              },
              "text": {
                "type": "string",
                "description": "Message text. Required if template type is text."
              },
              "parseMode": {
                "type": "string",
                "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
                "enum": [
                  "Markdown",
                  "MarkdownV2",
                  "HTML"
                ]
              },
              "caption": {
                "type": "string",
                "description": "Optional. Message caption. if template type is mediaGroup or voice."
              },
              "linkPreview": {
                "type": "boolean",
                "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
              },
              "linkPreviewUrl": {
                "type": "string",
                "description": "Optional. Link preview URL of the message. Accept if template type is text."
              },
              "linkPreviewPreferSmallMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
              },
              "linkPreviewPreferLargeMedia": {
                "type": "boolean",
                "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
              },
              "linkPreviewShowAboveText": {
                "type": "boolean",
                "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
              },
              "mediaGroupFileIds": {
                "type": "array",
                "description": "Not implemented yet.",
                "items": {
                  "type": "string"
                }
              },
              "voiceFileId": {
                "type": "string",
                "description": "Optional. The voice file id. Required if template type is voice."
              },
              "stickerFileId": {
                "type": "string",
                "description": "Optional. The sticker file id. Required if template type is sticker."
              },
              "messageIds": {
                "type": "array",
                "description": "Optional. The message id/link to be copied. Required if template type is copy message.",
                "items": {
                  "anyOf": [
                    {
                      "type": "string",
                      "description": "Message link to message to copy."
                    },
                    {
                      "type": "integer",
                      "description": "Message id. Only works if message to copy is from the same chat."
                    }
                  ]
                }
              },
              "keyboard": {
                "type": "array",
                "items": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "url",
                      "text"
                    ],
                    "properties": {
                      "url": {
                        "type": "string",
                        "description": "Button target URL."
                      },
                      "text": {
                        "type": "string",
                        "description": "Button text."
                      }
                    },
                    "title": "InlineKeyboardButton"
                  }
                },
                "title": "InlineKeyboard"
              },
              "protectContent": {
                "type": "boolean",
                "description": "Disable the message from coping/forwarding."
              },
              "disableNotification": {
                "type": "boolean",
                "description": "Disable message notification."
              }
            },
            "title": "MessageTemplate"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## sendMessageTemplateTestMessage

**Tool Name:** sendMessageTemplateTestMessage
**Tool Description:** Send a test message to the user to confirm message settings\.  Method: POST /sendMessageTemplateTestMessage\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "Message text. Required if template type is text."
    },
    "parseMode": {
      "type": "string",
      "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
      "enum": [
        "Markdown",
        "MarkdownV2",
        "HTML"
      ]
    },
    "linkPreview": {
      "type": "boolean",
      "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
    },
    "linkPreviewUrl": {
      "type": "string",
      "description": "Optional. Link preview URL of the message. Accept if template type is text."
    },
    "linkPreviewPreferSmallMedia": {
      "type": "boolean",
      "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
    },
    "linkPreviewPreferLargeMedia": {
      "type": "boolean",
      "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
    },
    "linkPreviewShowAboveText": {
      "type": "boolean",
      "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
    }
  }
}
```
**Tool Annotations:**
```json
{
  "title": "sendMessageTemplateTestMessage",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /sendMessageTemplateTestMessage
**Method Name:** sendMessageTemplateTestMessage
**Readonly:** Yes
**Deprecated:** No
**Summary:** sendMessageTemplateTestMessage
**Description:** Send a test message to the user to confirm message settings\.
**Tags:** Allow Tools Calling, Message Template, nmBot Intelligence, Readonly, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "description": "Message text. Required if template type is text."
        },
        "parseMode": {
          "type": "string",
          "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
          "enum": [
            "Markdown",
            "MarkdownV2",
            "HTML"
          ]
        },
        "linkPreview": {
          "type": "boolean",
          "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
        },
        "linkPreviewUrl": {
          "type": "string",
          "description": "Optional. Link preview URL of the message. Accept if template type is text."
        },
        "linkPreviewPreferSmallMedia": {
          "type": "boolean",
          "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
        },
        "linkPreviewPreferLargeMedia": {
          "type": "boolean",
          "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
        },
        "linkPreviewShowAboveText": {
          "type": "boolean",
          "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "text": {
        "type": "string",
        "description": "Message text. Required if template type is text."
      },
      "parseMode": {
        "type": "string",
        "description": "Optional. Message/caption parse mode. Accept if template has text/caption.",
        "enum": [
          "Markdown",
          "MarkdownV2",
          "HTML"
        ]
      },
      "linkPreview": {
        "type": "boolean",
        "description": "Optional. Whether to enable link preview of message. Accept if template type is text."
      },
      "linkPreviewUrl": {
        "type": "string",
        "description": "Optional. Link preview URL of the message. Accept if template type is text."
      },
      "linkPreviewPreferSmallMedia": {
        "type": "boolean",
        "description": "Optional. Whether prefer show a small preview media. Accept if template type is text."
      },
      "linkPreviewPreferLargeMedia": {
        "type": "boolean",
        "description": "Optional. Whether prefer show a large preview media. Accept if template type is text."
      },
      "linkPreviewShowAboveText": {
        "type": "boolean",
        "description": "Optional. Whether prefer show preview above text. Accept if template type is text."
      }
    }
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getGroupScheduledTasks

**Tool Name:** getGroupScheduledTasks
**Tool Description:** Get all scheduled tasks for a group\.  Method: POST /getGroupScheduledTasks\. Permission scope: Group Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "The id of the group."
    }
  },
  "required": [
    "groupId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getGroupScheduledTasks",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getGroupScheduledTasks
**Method Name:** getGroupScheduledTasks
**Readonly:** Yes
**Deprecated:** No
**Summary:** getGroupScheduledTasks
**Description:** Get all scheduled tasks for a group\.
**Tags:** Allow Tools Calling, nmBot Intelligence, Readonly, Scheduled Task, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "The id of the group."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "The id of the group."
      }
    },
    "required": [
      "groupId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "maxCount",
        "lockdowns"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "maxCount": {
          "type": "integer",
          "description": "The max count of scheduled tasks can create."
        },
        "lockdowns": {
          "type": "array",
          "description": "The scheduld tasks of the chat.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "groupId",
              "isEnabled",
              "actionTime",
              "actionDaysOfWeek",
              "type",
              "nmBotAutoDeleteStickers",
              "nmBotAutoDeletePictures",
              "nmBotAutoDeleteGifs",
              "nmBotAutoDeleteVideos",
              "nmBotAutoDeleteVoiceMessages",
              "nmBotAutoDeleteVideoNotes",
              "nmBotAutoDeleteMessagesSentViaBot",
              "nmBotAutoDeleteStories",
              "nmBotAutoDeleteChannelMessages",
              "messageIds",
              "systemCanSendMessages",
              "systemCanSendAudios",
              "systemCanSendDocuments",
              "systemCanSendVideos",
              "systemCanSendVideoNotes",
              "systemCanSendVoiceNotes",
              "systemCanSendPolls",
              "systemCanSendOtherMessages",
              "systemCanAddWebPagePreviews",
              "nmBotAutoDeleteSystemServiceMessages",
              "nmBotAutoDeleteLongMessages",
              "nmBotAutoDeleteMessagesWithLinks",
              "nmBotAutoDeleteMessagesWithCustomEmoji",
              "nmBotAutoDeletePremiumStickers",
              "nmBotAutoDeleteExternalQuotes",
              "pinMessage",
              "deleteLastMessage",
              "unpinLastMessage"
            ],
            "properties": {
              "id": {
                "type": "integer"
              },
              "groupId": {
                "type": "integer"
              },
              "isEnabled": {
                "type": "boolean"
              },
              "actionTime": {
                "type": "integer",
                "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
              },
              "actionDaysOfWeek": {
                "type": "array",
                "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
                "items": {
                  "type": "integer"
                }
              },
              "type": {
                "type": "string",
                "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
                "enum": [
                  "system",
                  "nmBot",
                  "disabled"
                ]
              },
              "systemCanSendMessages": {
                "type": "boolean",
                "description": "Controls send messages permissions. Ignored if type is not system."
              },
              "systemCanSendAudios": {
                "type": "boolean",
                "description": "Controls send audios permissions. Ignored if type is not system."
              },
              "systemCanSendDocuments": {
                "type": "boolean",
                "description": "Controls send documents permissions. Ignored if type is not system."
              },
              "systemCanSendPhotos": {
                "type": "boolean",
                "description": "Controls send photos permissions. Ignored if type is not system."
              },
              "systemCanSendVideos": {
                "type": "boolean",
                "description": "Controls send video permissions. Ignored if type is not system."
              },
              "systemCanSendVideoNotes": {
                "type": "boolean",
                "description": "Controls send video notes permissions. Ignored if type is not system."
              },
              "systemCanSendVoiceNotes": {
                "type": "boolean",
                "description": "Controls send voice notes permissions. Ignored if type is not system."
              },
              "systemCanSendPolls": {
                "type": "boolean",
                "description": "Controls send polls permissions. Ignored if type is not system."
              },
              "systemCanSendOtherMessages": {
                "type": "boolean",
                "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
              },
              "systemCanAddWebPagePreviews": {
                "type": "boolean",
                "description": "Controls link preview permissions. Ignored if type is not system."
              },
              "nmBotAutoDeleteSystemServiceMessages": {
                "type": "boolean",
                "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteLongMessages": {
                "type": "boolean",
                "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteMessagesWithLinks": {
                "type": "boolean",
                "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteMessagesWithCustomEmoji": {
                "type": "boolean",
                "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteStickers": {
                "type": "boolean",
                "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
              },
              "nmBotAutoDeletePremiumStickers": {
                "type": "boolean",
                "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
              },
              "nmBotAutoDeletePictures": {
                "type": "boolean",
                "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteGifs": {
                "type": "boolean",
                "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteVideos": {
                "type": "boolean",
                "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteVoiceMessages": {
                "type": "boolean",
                "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteVideoNotes": {
                "type": "boolean",
                "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteMessagesSentViaBot": {
                "type": "boolean",
                "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteStories": {
                "type": "boolean",
                "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteChannelMessages": {
                "type": "boolean",
                "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
              },
              "nmBotAutoDeleteExternalQuotes": {
                "type": "boolean",
                "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
              },
              "messageIds": {
                "type": "array",
                "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
                "items": {
                  "type": "integer"
                }
              },
              "pinMessage": {
                "type": "boolean",
                "description": "Pin the sent message."
              },
              "deleteLastMessage": {
                "type": "boolean",
                "description": "Delete the last scheduled task message. nmBot+ only."
              },
              "unpinLastMessage": {
                "type": "boolean",
                "description": "Unpin the last scheduled task message. nmBot+ only."
              }
            },
            "title": "GroupScheduledTask"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## addGroupScheduledTask

**Tool Name:** addGroupScheduledTask
**Tool Description:** POST /addGroupScheduledTask
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "The id of the group."
    },
    "newObject": {
      "type": "object",
      "description": "The new item to add.",
      "required": [
        "isEnabled",
        "actionTime",
        "actionDaysOfWeek",
        "type",
        "systemCanSendMessages",
        "systemCanSendAudios",
        "systemCanSendDocuments",
        "systemCanSendVideos",
        "systemCanSendVideoNotes",
        "systemCanSendVoiceNotes",
        "systemCanSendPolls",
        "systemCanSendOtherMessages",
        "systemCanAddWebPagePreviews",
        "nmBotAutoDeleteSystemServiceMessages",
        "nmBotAutoDeleteLongMessages",
        "nmBotAutoDeleteMessagesWithLinks",
        "nmBotAutoDeleteMessagesWithCustomEmoji",
        "nmBotAutoDeleteStickers",
        "nmBotAutoDeletePremiumStickers",
        "nmBotAutoDeletePictures",
        "nmBotAutoDeleteGifs",
        "nmBotAutoDeleteVideos",
        "nmBotAutoDeleteVoiceMessages",
        "nmBotAutoDeleteVideoNotes",
        "nmBotAutoDeleteMessagesSentViaBot",
        "nmBotAutoDeleteStories",
        "nmBotAutoDeleteChannelMessages",
        "nmBotAutoDeleteExternalQuotes",
        "messageIds",
        "pinMessage",
        "deleteLastMessage",
        "unpinLastMessage"
      ],
      "properties": {
        "isEnabled": {
          "type": "boolean"
        },
        "actionTime": {
          "type": "integer",
          "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
        },
        "actionDaysOfWeek": {
          "type": "array",
          "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
          "items": {
            "type": "integer"
          }
        },
        "type": {
          "type": "string",
          "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
          "enum": [
            "system",
            "nmBot",
            "disabled"
          ]
        },
        "systemCanSendMessages": {
          "type": "boolean",
          "description": "Controls send messages permissions. Ignored if type is not system."
        },
        "systemCanSendAudios": {
          "type": "boolean",
          "description": "Controls send audios permissions. Ignored if type is not system."
        },
        "systemCanSendDocuments": {
          "type": "boolean",
          "description": "Controls send documents permissions. Ignored if type is not system."
        },
        "systemCanSendPhotos": {
          "type": "boolean",
          "description": "Controls send photos permissions. Ignored if type is not system."
        },
        "systemCanSendVideos": {
          "type": "boolean",
          "description": "Controls send video permissions. Ignored if type is not system."
        },
        "systemCanSendVideoNotes": {
          "type": "boolean",
          "description": "Controls send video notes permissions. Ignored if type is not system."
        },
        "systemCanSendVoiceNotes": {
          "type": "boolean",
          "description": "Controls send voice notes permissions. Ignored if type is not system."
        },
        "systemCanSendPolls": {
          "type": "boolean",
          "description": "Controls send polls permissions. Ignored if type is not system."
        },
        "systemCanSendOtherMessages": {
          "type": "boolean",
          "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
        },
        "systemCanAddWebPagePreviews": {
          "type": "boolean",
          "description": "Controls link preview permissions. Ignored if type is not system."
        },
        "nmBotAutoDeleteSystemServiceMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteLongMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteMessagesWithLinks": {
          "type": "boolean",
          "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteMessagesWithCustomEmoji": {
          "type": "boolean",
          "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteStickers": {
          "type": "boolean",
          "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
        },
        "nmBotAutoDeletePremiumStickers": {
          "type": "boolean",
          "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
        },
        "nmBotAutoDeletePictures": {
          "type": "boolean",
          "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteGifs": {
          "type": "boolean",
          "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteVideos": {
          "type": "boolean",
          "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteVoiceMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteVideoNotes": {
          "type": "boolean",
          "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteMessagesSentViaBot": {
          "type": "boolean",
          "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteStories": {
          "type": "boolean",
          "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteChannelMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteExternalQuotes": {
          "type": "boolean",
          "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
        },
        "messageIds": {
          "type": "array",
          "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
          "items": {
            "type": "integer"
          }
        },
        "pinMessage": {
          "type": "boolean",
          "description": "Pin the sent message."
        },
        "deleteLastMessage": {
          "type": "boolean",
          "description": "Delete the last scheduled task message. nmBot+ only."
        },
        "unpinLastMessage": {
          "type": "boolean",
          "description": "Unpin the last scheduled task message. nmBot+ only."
        }
      }
    }
  },
  "required": [
    "groupId",
    "newObject"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "addGroupScheduledTask",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /addGroupScheduledTask
**Method Name:** addGroupScheduledTask
**Readonly:** No
**Deprecated:** No
**Summary:** addGroupScheduledTask
**Description:** POST /addGroupScheduledTask
**Tags:** Allow Tools Calling, nmBot Intelligence, Scheduled Task, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId",
        "newObject"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "The id of the group."
        },
        "newObject": {
          "type": "object",
          "description": "The new item to add.",
          "required": [
            "isEnabled",
            "actionTime",
            "actionDaysOfWeek",
            "type",
            "systemCanSendMessages",
            "systemCanSendAudios",
            "systemCanSendDocuments",
            "systemCanSendVideos",
            "systemCanSendVideoNotes",
            "systemCanSendVoiceNotes",
            "systemCanSendPolls",
            "systemCanSendOtherMessages",
            "systemCanAddWebPagePreviews",
            "nmBotAutoDeleteSystemServiceMessages",
            "nmBotAutoDeleteLongMessages",
            "nmBotAutoDeleteMessagesWithLinks",
            "nmBotAutoDeleteMessagesWithCustomEmoji",
            "nmBotAutoDeleteStickers",
            "nmBotAutoDeletePremiumStickers",
            "nmBotAutoDeletePictures",
            "nmBotAutoDeleteGifs",
            "nmBotAutoDeleteVideos",
            "nmBotAutoDeleteVoiceMessages",
            "nmBotAutoDeleteVideoNotes",
            "nmBotAutoDeleteMessagesSentViaBot",
            "nmBotAutoDeleteStories",
            "nmBotAutoDeleteChannelMessages",
            "nmBotAutoDeleteExternalQuotes",
            "messageIds",
            "pinMessage",
            "deleteLastMessage",
            "unpinLastMessage"
          ],
          "properties": {
            "isEnabled": {
              "type": "boolean"
            },
            "actionTime": {
              "type": "integer",
              "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
            },
            "actionDaysOfWeek": {
              "type": "array",
              "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
              "items": {
                "type": "integer"
              }
            },
            "type": {
              "type": "string",
              "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
              "enum": [
                "system",
                "nmBot",
                "disabled"
              ]
            },
            "systemCanSendMessages": {
              "type": "boolean",
              "description": "Controls send messages permissions. Ignored if type is not system."
            },
            "systemCanSendAudios": {
              "type": "boolean",
              "description": "Controls send audios permissions. Ignored if type is not system."
            },
            "systemCanSendDocuments": {
              "type": "boolean",
              "description": "Controls send documents permissions. Ignored if type is not system."
            },
            "systemCanSendPhotos": {
              "type": "boolean",
              "description": "Controls send photos permissions. Ignored if type is not system."
            },
            "systemCanSendVideos": {
              "type": "boolean",
              "description": "Controls send video permissions. Ignored if type is not system."
            },
            "systemCanSendVideoNotes": {
              "type": "boolean",
              "description": "Controls send video notes permissions. Ignored if type is not system."
            },
            "systemCanSendVoiceNotes": {
              "type": "boolean",
              "description": "Controls send voice notes permissions. Ignored if type is not system."
            },
            "systemCanSendPolls": {
              "type": "boolean",
              "description": "Controls send polls permissions. Ignored if type is not system."
            },
            "systemCanSendOtherMessages": {
              "type": "boolean",
              "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
            },
            "systemCanAddWebPagePreviews": {
              "type": "boolean",
              "description": "Controls link preview permissions. Ignored if type is not system."
            },
            "nmBotAutoDeleteSystemServiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteLongMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithLinks": {
              "type": "boolean",
              "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithCustomEmoji": {
              "type": "boolean",
              "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePremiumStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePictures": {
              "type": "boolean",
              "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteGifs": {
              "type": "boolean",
              "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideos": {
              "type": "boolean",
              "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVoiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideoNotes": {
              "type": "boolean",
              "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesSentViaBot": {
              "type": "boolean",
              "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStories": {
              "type": "boolean",
              "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteChannelMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteExternalQuotes": {
              "type": "boolean",
              "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
            },
            "messageIds": {
              "type": "array",
              "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
              "items": {
                "type": "integer"
              }
            },
            "pinMessage": {
              "type": "boolean",
              "description": "Pin the sent message."
            },
            "deleteLastMessage": {
              "type": "boolean",
              "description": "Delete the last scheduled task message. nmBot+ only."
            },
            "unpinLastMessage": {
              "type": "boolean",
              "description": "Unpin the last scheduled task message. nmBot+ only."
            }
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "The id of the group."
      },
      "newObject": {
        "type": "object",
        "description": "The new item to add.",
        "required": [
          "isEnabled",
          "actionTime",
          "actionDaysOfWeek",
          "type",
          "systemCanSendMessages",
          "systemCanSendAudios",
          "systemCanSendDocuments",
          "systemCanSendVideos",
          "systemCanSendVideoNotes",
          "systemCanSendVoiceNotes",
          "systemCanSendPolls",
          "systemCanSendOtherMessages",
          "systemCanAddWebPagePreviews",
          "nmBotAutoDeleteSystemServiceMessages",
          "nmBotAutoDeleteLongMessages",
          "nmBotAutoDeleteMessagesWithLinks",
          "nmBotAutoDeleteMessagesWithCustomEmoji",
          "nmBotAutoDeleteStickers",
          "nmBotAutoDeletePremiumStickers",
          "nmBotAutoDeletePictures",
          "nmBotAutoDeleteGifs",
          "nmBotAutoDeleteVideos",
          "nmBotAutoDeleteVoiceMessages",
          "nmBotAutoDeleteVideoNotes",
          "nmBotAutoDeleteMessagesSentViaBot",
          "nmBotAutoDeleteStories",
          "nmBotAutoDeleteChannelMessages",
          "nmBotAutoDeleteExternalQuotes",
          "messageIds",
          "pinMessage",
          "deleteLastMessage",
          "unpinLastMessage"
        ],
        "properties": {
          "isEnabled": {
            "type": "boolean"
          },
          "actionTime": {
            "type": "integer",
            "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
          },
          "actionDaysOfWeek": {
            "type": "array",
            "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
            "items": {
              "type": "integer"
            }
          },
          "type": {
            "type": "string",
            "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
            "enum": [
              "system",
              "nmBot",
              "disabled"
            ]
          },
          "systemCanSendMessages": {
            "type": "boolean",
            "description": "Controls send messages permissions. Ignored if type is not system."
          },
          "systemCanSendAudios": {
            "type": "boolean",
            "description": "Controls send audios permissions. Ignored if type is not system."
          },
          "systemCanSendDocuments": {
            "type": "boolean",
            "description": "Controls send documents permissions. Ignored if type is not system."
          },
          "systemCanSendPhotos": {
            "type": "boolean",
            "description": "Controls send photos permissions. Ignored if type is not system."
          },
          "systemCanSendVideos": {
            "type": "boolean",
            "description": "Controls send video permissions. Ignored if type is not system."
          },
          "systemCanSendVideoNotes": {
            "type": "boolean",
            "description": "Controls send video notes permissions. Ignored if type is not system."
          },
          "systemCanSendVoiceNotes": {
            "type": "boolean",
            "description": "Controls send voice notes permissions. Ignored if type is not system."
          },
          "systemCanSendPolls": {
            "type": "boolean",
            "description": "Controls send polls permissions. Ignored if type is not system."
          },
          "systemCanSendOtherMessages": {
            "type": "boolean",
            "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
          },
          "systemCanAddWebPagePreviews": {
            "type": "boolean",
            "description": "Controls link preview permissions. Ignored if type is not system."
          },
          "nmBotAutoDeleteSystemServiceMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteLongMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteMessagesWithLinks": {
            "type": "boolean",
            "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteMessagesWithCustomEmoji": {
            "type": "boolean",
            "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteStickers": {
            "type": "boolean",
            "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
          },
          "nmBotAutoDeletePremiumStickers": {
            "type": "boolean",
            "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
          },
          "nmBotAutoDeletePictures": {
            "type": "boolean",
            "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteGifs": {
            "type": "boolean",
            "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteVideos": {
            "type": "boolean",
            "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteVoiceMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteVideoNotes": {
            "type": "boolean",
            "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteMessagesSentViaBot": {
            "type": "boolean",
            "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteStories": {
            "type": "boolean",
            "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteChannelMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteExternalQuotes": {
            "type": "boolean",
            "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
          },
          "messageIds": {
            "type": "array",
            "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
            "items": {
              "type": "integer"
            }
          },
          "pinMessage": {
            "type": "boolean",
            "description": "Pin the sent message."
          },
          "deleteLastMessage": {
            "type": "boolean",
            "description": "Delete the last scheduled task message. nmBot+ only."
          },
          "unpinLastMessage": {
            "type": "boolean",
            "description": "Unpin the last scheduled task message. nmBot+ only."
          }
        }
      }
    },
    "required": [
      "groupId",
      "newObject"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "added"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "added": {
          "type": "object",
          "required": [
            "id",
            "groupId",
            "isEnabled",
            "actionTime",
            "actionDaysOfWeek",
            "type",
            "nmBotAutoDeleteStickers",
            "nmBotAutoDeletePictures",
            "nmBotAutoDeleteGifs",
            "nmBotAutoDeleteVideos",
            "nmBotAutoDeleteVoiceMessages",
            "nmBotAutoDeleteVideoNotes",
            "nmBotAutoDeleteMessagesSentViaBot",
            "nmBotAutoDeleteStories",
            "nmBotAutoDeleteChannelMessages",
            "messageIds",
            "systemCanSendMessages",
            "systemCanSendAudios",
            "systemCanSendDocuments",
            "systemCanSendVideos",
            "systemCanSendVideoNotes",
            "systemCanSendVoiceNotes",
            "systemCanSendPolls",
            "systemCanSendOtherMessages",
            "systemCanAddWebPagePreviews",
            "nmBotAutoDeleteSystemServiceMessages",
            "nmBotAutoDeleteLongMessages",
            "nmBotAutoDeleteMessagesWithLinks",
            "nmBotAutoDeleteMessagesWithCustomEmoji",
            "nmBotAutoDeletePremiumStickers",
            "nmBotAutoDeleteExternalQuotes",
            "pinMessage",
            "deleteLastMessage",
            "unpinLastMessage"
          ],
          "properties": {
            "id": {
              "type": "integer"
            },
            "groupId": {
              "type": "integer"
            },
            "isEnabled": {
              "type": "boolean"
            },
            "actionTime": {
              "type": "integer",
              "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
            },
            "actionDaysOfWeek": {
              "type": "array",
              "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
              "items": {
                "type": "integer"
              }
            },
            "type": {
              "type": "string",
              "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
              "enum": [
                "system",
                "nmBot",
                "disabled"
              ]
            },
            "systemCanSendMessages": {
              "type": "boolean",
              "description": "Controls send messages permissions. Ignored if type is not system."
            },
            "systemCanSendAudios": {
              "type": "boolean",
              "description": "Controls send audios permissions. Ignored if type is not system."
            },
            "systemCanSendDocuments": {
              "type": "boolean",
              "description": "Controls send documents permissions. Ignored if type is not system."
            },
            "systemCanSendPhotos": {
              "type": "boolean",
              "description": "Controls send photos permissions. Ignored if type is not system."
            },
            "systemCanSendVideos": {
              "type": "boolean",
              "description": "Controls send video permissions. Ignored if type is not system."
            },
            "systemCanSendVideoNotes": {
              "type": "boolean",
              "description": "Controls send video notes permissions. Ignored if type is not system."
            },
            "systemCanSendVoiceNotes": {
              "type": "boolean",
              "description": "Controls send voice notes permissions. Ignored if type is not system."
            },
            "systemCanSendPolls": {
              "type": "boolean",
              "description": "Controls send polls permissions. Ignored if type is not system."
            },
            "systemCanSendOtherMessages": {
              "type": "boolean",
              "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
            },
            "systemCanAddWebPagePreviews": {
              "type": "boolean",
              "description": "Controls link preview permissions. Ignored if type is not system."
            },
            "nmBotAutoDeleteSystemServiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteLongMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithLinks": {
              "type": "boolean",
              "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithCustomEmoji": {
              "type": "boolean",
              "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePremiumStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePictures": {
              "type": "boolean",
              "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteGifs": {
              "type": "boolean",
              "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideos": {
              "type": "boolean",
              "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVoiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideoNotes": {
              "type": "boolean",
              "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesSentViaBot": {
              "type": "boolean",
              "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStories": {
              "type": "boolean",
              "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteChannelMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteExternalQuotes": {
              "type": "boolean",
              "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
            },
            "messageIds": {
              "type": "array",
              "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
              "items": {
                "type": "integer"
              }
            },
            "pinMessage": {
              "type": "boolean",
              "description": "Pin the sent message."
            },
            "deleteLastMessage": {
              "type": "boolean",
              "description": "Delete the last scheduled task message. nmBot+ only."
            },
            "unpinLastMessage": {
              "type": "boolean",
              "description": "Unpin the last scheduled task message. nmBot+ only."
            }
          },
          "title": "GroupScheduledTask"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## editGroupScheduledTask

**Tool Name:** editGroupScheduledTask
**Tool Description:** POST /editGroupScheduledTask
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "The id of the group."
    },
    "id": {
      "type": "integer",
      "description": "The task id to edit."
    },
    "newObject": {
      "type": "object",
      "description": "The new task to edit.",
      "required": [
        "isEnabled",
        "actionTime",
        "actionDaysOfWeek",
        "type",
        "systemCanSendMessages",
        "systemCanSendAudios",
        "systemCanSendDocuments",
        "systemCanSendVideos",
        "systemCanSendVideoNotes",
        "systemCanSendVoiceNotes",
        "systemCanSendPolls",
        "systemCanSendOtherMessages",
        "systemCanAddWebPagePreviews",
        "nmBotAutoDeleteSystemServiceMessages",
        "nmBotAutoDeleteLongMessages",
        "nmBotAutoDeleteMessagesWithLinks",
        "nmBotAutoDeleteMessagesWithCustomEmoji",
        "nmBotAutoDeleteStickers",
        "nmBotAutoDeletePremiumStickers",
        "nmBotAutoDeletePictures",
        "nmBotAutoDeleteGifs",
        "nmBotAutoDeleteVideos",
        "nmBotAutoDeleteVoiceMessages",
        "nmBotAutoDeleteVideoNotes",
        "nmBotAutoDeleteMessagesSentViaBot",
        "nmBotAutoDeleteStories",
        "nmBotAutoDeleteChannelMessages",
        "nmBotAutoDeleteExternalQuotes",
        "messageIds",
        "pinMessage",
        "deleteLastMessage",
        "unpinLastMessage"
      ],
      "properties": {
        "isEnabled": {
          "type": "boolean"
        },
        "actionTime": {
          "type": "integer",
          "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
        },
        "actionDaysOfWeek": {
          "type": "array",
          "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
          "items": {
            "type": "integer"
          }
        },
        "type": {
          "type": "string",
          "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
          "enum": [
            "system",
            "nmBot",
            "disabled"
          ]
        },
        "systemCanSendMessages": {
          "type": "boolean",
          "description": "Controls send messages permissions. Ignored if type is not system."
        },
        "systemCanSendAudios": {
          "type": "boolean",
          "description": "Controls send audios permissions. Ignored if type is not system."
        },
        "systemCanSendDocuments": {
          "type": "boolean",
          "description": "Controls send documents permissions. Ignored if type is not system."
        },
        "systemCanSendPhotos": {
          "type": "boolean",
          "description": "Controls send photos permissions. Ignored if type is not system."
        },
        "systemCanSendVideos": {
          "type": "boolean",
          "description": "Controls send video permissions. Ignored if type is not system."
        },
        "systemCanSendVideoNotes": {
          "type": "boolean",
          "description": "Controls send video notes permissions. Ignored if type is not system."
        },
        "systemCanSendVoiceNotes": {
          "type": "boolean",
          "description": "Controls send voice notes permissions. Ignored if type is not system."
        },
        "systemCanSendPolls": {
          "type": "boolean",
          "description": "Controls send polls permissions. Ignored if type is not system."
        },
        "systemCanSendOtherMessages": {
          "type": "boolean",
          "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
        },
        "systemCanAddWebPagePreviews": {
          "type": "boolean",
          "description": "Controls link preview permissions. Ignored if type is not system."
        },
        "nmBotAutoDeleteSystemServiceMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteLongMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteMessagesWithLinks": {
          "type": "boolean",
          "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteMessagesWithCustomEmoji": {
          "type": "boolean",
          "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteStickers": {
          "type": "boolean",
          "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
        },
        "nmBotAutoDeletePremiumStickers": {
          "type": "boolean",
          "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
        },
        "nmBotAutoDeletePictures": {
          "type": "boolean",
          "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteGifs": {
          "type": "boolean",
          "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteVideos": {
          "type": "boolean",
          "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteVoiceMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteVideoNotes": {
          "type": "boolean",
          "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteMessagesSentViaBot": {
          "type": "boolean",
          "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteStories": {
          "type": "boolean",
          "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteChannelMessages": {
          "type": "boolean",
          "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
        },
        "nmBotAutoDeleteExternalQuotes": {
          "type": "boolean",
          "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
        },
        "messageIds": {
          "type": "array",
          "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
          "items": {
            "type": "integer"
          }
        },
        "pinMessage": {
          "type": "boolean",
          "description": "Pin the sent message."
        },
        "deleteLastMessage": {
          "type": "boolean",
          "description": "Delete the last scheduled task message. nmBot+ only."
        },
        "unpinLastMessage": {
          "type": "boolean",
          "description": "Unpin the last scheduled task message. nmBot+ only."
        }
      }
    }
  },
  "required": [
    "groupId",
    "newObject",
    "id"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "editGroupScheduledTask",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /editGroupScheduledTask
**Method Name:** editGroupScheduledTask
**Readonly:** No
**Deprecated:** No
**Summary:** editGroupScheduledTask
**Description:** POST /editGroupScheduledTask
**Tags:** Allow Tools Calling, nmBot Intelligence, Scheduled Task, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId",
        "newObject",
        "id"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "The id of the group."
        },
        "id": {
          "type": "integer",
          "description": "The task id to edit."
        },
        "newObject": {
          "type": "object",
          "description": "The new task to edit.",
          "required": [
            "isEnabled",
            "actionTime",
            "actionDaysOfWeek",
            "type",
            "systemCanSendMessages",
            "systemCanSendAudios",
            "systemCanSendDocuments",
            "systemCanSendVideos",
            "systemCanSendVideoNotes",
            "systemCanSendVoiceNotes",
            "systemCanSendPolls",
            "systemCanSendOtherMessages",
            "systemCanAddWebPagePreviews",
            "nmBotAutoDeleteSystemServiceMessages",
            "nmBotAutoDeleteLongMessages",
            "nmBotAutoDeleteMessagesWithLinks",
            "nmBotAutoDeleteMessagesWithCustomEmoji",
            "nmBotAutoDeleteStickers",
            "nmBotAutoDeletePremiumStickers",
            "nmBotAutoDeletePictures",
            "nmBotAutoDeleteGifs",
            "nmBotAutoDeleteVideos",
            "nmBotAutoDeleteVoiceMessages",
            "nmBotAutoDeleteVideoNotes",
            "nmBotAutoDeleteMessagesSentViaBot",
            "nmBotAutoDeleteStories",
            "nmBotAutoDeleteChannelMessages",
            "nmBotAutoDeleteExternalQuotes",
            "messageIds",
            "pinMessage",
            "deleteLastMessage",
            "unpinLastMessage"
          ],
          "properties": {
            "isEnabled": {
              "type": "boolean"
            },
            "actionTime": {
              "type": "integer",
              "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
            },
            "actionDaysOfWeek": {
              "type": "array",
              "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
              "items": {
                "type": "integer"
              }
            },
            "type": {
              "type": "string",
              "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
              "enum": [
                "system",
                "nmBot",
                "disabled"
              ]
            },
            "systemCanSendMessages": {
              "type": "boolean",
              "description": "Controls send messages permissions. Ignored if type is not system."
            },
            "systemCanSendAudios": {
              "type": "boolean",
              "description": "Controls send audios permissions. Ignored if type is not system."
            },
            "systemCanSendDocuments": {
              "type": "boolean",
              "description": "Controls send documents permissions. Ignored if type is not system."
            },
            "systemCanSendPhotos": {
              "type": "boolean",
              "description": "Controls send photos permissions. Ignored if type is not system."
            },
            "systemCanSendVideos": {
              "type": "boolean",
              "description": "Controls send video permissions. Ignored if type is not system."
            },
            "systemCanSendVideoNotes": {
              "type": "boolean",
              "description": "Controls send video notes permissions. Ignored if type is not system."
            },
            "systemCanSendVoiceNotes": {
              "type": "boolean",
              "description": "Controls send voice notes permissions. Ignored if type is not system."
            },
            "systemCanSendPolls": {
              "type": "boolean",
              "description": "Controls send polls permissions. Ignored if type is not system."
            },
            "systemCanSendOtherMessages": {
              "type": "boolean",
              "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
            },
            "systemCanAddWebPagePreviews": {
              "type": "boolean",
              "description": "Controls link preview permissions. Ignored if type is not system."
            },
            "nmBotAutoDeleteSystemServiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteLongMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithLinks": {
              "type": "boolean",
              "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithCustomEmoji": {
              "type": "boolean",
              "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePremiumStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePictures": {
              "type": "boolean",
              "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteGifs": {
              "type": "boolean",
              "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideos": {
              "type": "boolean",
              "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVoiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideoNotes": {
              "type": "boolean",
              "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesSentViaBot": {
              "type": "boolean",
              "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStories": {
              "type": "boolean",
              "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteChannelMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteExternalQuotes": {
              "type": "boolean",
              "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
            },
            "messageIds": {
              "type": "array",
              "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
              "items": {
                "type": "integer"
              }
            },
            "pinMessage": {
              "type": "boolean",
              "description": "Pin the sent message."
            },
            "deleteLastMessage": {
              "type": "boolean",
              "description": "Delete the last scheduled task message. nmBot+ only."
            },
            "unpinLastMessage": {
              "type": "boolean",
              "description": "Unpin the last scheduled task message. nmBot+ only."
            }
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "The id of the group."
      },
      "id": {
        "type": "integer",
        "description": "The task id to edit."
      },
      "newObject": {
        "type": "object",
        "description": "The new task to edit.",
        "required": [
          "isEnabled",
          "actionTime",
          "actionDaysOfWeek",
          "type",
          "systemCanSendMessages",
          "systemCanSendAudios",
          "systemCanSendDocuments",
          "systemCanSendVideos",
          "systemCanSendVideoNotes",
          "systemCanSendVoiceNotes",
          "systemCanSendPolls",
          "systemCanSendOtherMessages",
          "systemCanAddWebPagePreviews",
          "nmBotAutoDeleteSystemServiceMessages",
          "nmBotAutoDeleteLongMessages",
          "nmBotAutoDeleteMessagesWithLinks",
          "nmBotAutoDeleteMessagesWithCustomEmoji",
          "nmBotAutoDeleteStickers",
          "nmBotAutoDeletePremiumStickers",
          "nmBotAutoDeletePictures",
          "nmBotAutoDeleteGifs",
          "nmBotAutoDeleteVideos",
          "nmBotAutoDeleteVoiceMessages",
          "nmBotAutoDeleteVideoNotes",
          "nmBotAutoDeleteMessagesSentViaBot",
          "nmBotAutoDeleteStories",
          "nmBotAutoDeleteChannelMessages",
          "nmBotAutoDeleteExternalQuotes",
          "messageIds",
          "pinMessage",
          "deleteLastMessage",
          "unpinLastMessage"
        ],
        "properties": {
          "isEnabled": {
            "type": "boolean"
          },
          "actionTime": {
            "type": "integer",
            "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
          },
          "actionDaysOfWeek": {
            "type": "array",
            "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
            "items": {
              "type": "integer"
            }
          },
          "type": {
            "type": "string",
            "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
            "enum": [
              "system",
              "nmBot",
              "disabled"
            ]
          },
          "systemCanSendMessages": {
            "type": "boolean",
            "description": "Controls send messages permissions. Ignored if type is not system."
          },
          "systemCanSendAudios": {
            "type": "boolean",
            "description": "Controls send audios permissions. Ignored if type is not system."
          },
          "systemCanSendDocuments": {
            "type": "boolean",
            "description": "Controls send documents permissions. Ignored if type is not system."
          },
          "systemCanSendPhotos": {
            "type": "boolean",
            "description": "Controls send photos permissions. Ignored if type is not system."
          },
          "systemCanSendVideos": {
            "type": "boolean",
            "description": "Controls send video permissions. Ignored if type is not system."
          },
          "systemCanSendVideoNotes": {
            "type": "boolean",
            "description": "Controls send video notes permissions. Ignored if type is not system."
          },
          "systemCanSendVoiceNotes": {
            "type": "boolean",
            "description": "Controls send voice notes permissions. Ignored if type is not system."
          },
          "systemCanSendPolls": {
            "type": "boolean",
            "description": "Controls send polls permissions. Ignored if type is not system."
          },
          "systemCanSendOtherMessages": {
            "type": "boolean",
            "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
          },
          "systemCanAddWebPagePreviews": {
            "type": "boolean",
            "description": "Controls link preview permissions. Ignored if type is not system."
          },
          "nmBotAutoDeleteSystemServiceMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteLongMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteMessagesWithLinks": {
            "type": "boolean",
            "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteMessagesWithCustomEmoji": {
            "type": "boolean",
            "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteStickers": {
            "type": "boolean",
            "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
          },
          "nmBotAutoDeletePremiumStickers": {
            "type": "boolean",
            "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
          },
          "nmBotAutoDeletePictures": {
            "type": "boolean",
            "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteGifs": {
            "type": "boolean",
            "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteVideos": {
            "type": "boolean",
            "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteVoiceMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteVideoNotes": {
            "type": "boolean",
            "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteMessagesSentViaBot": {
            "type": "boolean",
            "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteStories": {
            "type": "boolean",
            "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteChannelMessages": {
            "type": "boolean",
            "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
          },
          "nmBotAutoDeleteExternalQuotes": {
            "type": "boolean",
            "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
          },
          "messageIds": {
            "type": "array",
            "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
            "items": {
              "type": "integer"
            }
          },
          "pinMessage": {
            "type": "boolean",
            "description": "Pin the sent message."
          },
          "deleteLastMessage": {
            "type": "boolean",
            "description": "Delete the last scheduled task message. nmBot+ only."
          },
          "unpinLastMessage": {
            "type": "boolean",
            "description": "Unpin the last scheduled task message. nmBot+ only."
          }
        }
      }
    },
    "required": [
      "groupId",
      "newObject",
      "id"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "updated"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "updated": {
          "type": "object",
          "required": [
            "id",
            "groupId",
            "isEnabled",
            "actionTime",
            "actionDaysOfWeek",
            "type",
            "nmBotAutoDeleteStickers",
            "nmBotAutoDeletePictures",
            "nmBotAutoDeleteGifs",
            "nmBotAutoDeleteVideos",
            "nmBotAutoDeleteVoiceMessages",
            "nmBotAutoDeleteVideoNotes",
            "nmBotAutoDeleteMessagesSentViaBot",
            "nmBotAutoDeleteStories",
            "nmBotAutoDeleteChannelMessages",
            "messageIds",
            "systemCanSendMessages",
            "systemCanSendAudios",
            "systemCanSendDocuments",
            "systemCanSendVideos",
            "systemCanSendVideoNotes",
            "systemCanSendVoiceNotes",
            "systemCanSendPolls",
            "systemCanSendOtherMessages",
            "systemCanAddWebPagePreviews",
            "nmBotAutoDeleteSystemServiceMessages",
            "nmBotAutoDeleteLongMessages",
            "nmBotAutoDeleteMessagesWithLinks",
            "nmBotAutoDeleteMessagesWithCustomEmoji",
            "nmBotAutoDeletePremiumStickers",
            "nmBotAutoDeleteExternalQuotes",
            "pinMessage",
            "deleteLastMessage",
            "unpinLastMessage"
          ],
          "properties": {
            "id": {
              "type": "integer"
            },
            "groupId": {
              "type": "integer"
            },
            "isEnabled": {
              "type": "boolean"
            },
            "actionTime": {
              "type": "integer",
              "description": "The action time of scheduled task. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
            },
            "actionDaysOfWeek": {
              "type": "array",
              "description": "Days of week to perform task. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
              "items": {
                "type": "integer"
              }
            },
            "type": {
              "type": "string",
              "description": "The type of permission modify. Acceptable values:- system. Modify group members' permission with Telegram's built in system.- nmBot. Modify nmBot's \"autoDeleteMessage(ByType)\" configurations.- disabled. Don't modify any permission configuration. Only available for nmBot+ chats.",
              "enum": [
                "system",
                "nmBot",
                "disabled"
              ]
            },
            "systemCanSendMessages": {
              "type": "boolean",
              "description": "Controls send messages permissions. Ignored if type is not system."
            },
            "systemCanSendAudios": {
              "type": "boolean",
              "description": "Controls send audios permissions. Ignored if type is not system."
            },
            "systemCanSendDocuments": {
              "type": "boolean",
              "description": "Controls send documents permissions. Ignored if type is not system."
            },
            "systemCanSendPhotos": {
              "type": "boolean",
              "description": "Controls send photos permissions. Ignored if type is not system."
            },
            "systemCanSendVideos": {
              "type": "boolean",
              "description": "Controls send video permissions. Ignored if type is not system."
            },
            "systemCanSendVideoNotes": {
              "type": "boolean",
              "description": "Controls send video notes permissions. Ignored if type is not system."
            },
            "systemCanSendVoiceNotes": {
              "type": "boolean",
              "description": "Controls send voice notes permissions. Ignored if type is not system."
            },
            "systemCanSendPolls": {
              "type": "boolean",
              "description": "Controls send polls permissions. Ignored if type is not system."
            },
            "systemCanSendOtherMessages": {
              "type": "boolean",
              "description": "Controls send stickers&GIFs permissions. Ignored if type is not system."
            },
            "systemCanAddWebPagePreviews": {
              "type": "boolean",
              "description": "Controls link preview permissions. Ignored if type is not system."
            },
            "nmBotAutoDeleteSystemServiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of system messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteLongMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of long messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithLinks": {
              "type": "boolean",
              "description": "Controls auto-delete of link messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesWithCustomEmoji": {
              "type": "boolean",
              "description": "Controls auto-delete of custom-emoji messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePremiumStickers": {
              "type": "boolean",
              "description": "Controls auto-delete of Telegram-Premium-only stickers. Ignored if type is not nmBot."
            },
            "nmBotAutoDeletePictures": {
              "type": "boolean",
              "description": "Controls auto-delete of photos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteGifs": {
              "type": "boolean",
              "description": "Controls auto-delete of GIFs. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideos": {
              "type": "boolean",
              "description": "Controls auto-delete of videos. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVoiceMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of voices. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteVideoNotes": {
              "type": "boolean",
              "description": "Controls auto-delete of video notes. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteMessagesSentViaBot": {
              "type": "boolean",
              "description": "Controls auto-delete of message sent \"via\" a bot. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteStories": {
              "type": "boolean",
              "description": "Controls auto-delete of stories. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteChannelMessages": {
              "type": "boolean",
              "description": "Controls auto-delete of channel-behalf messages. Ignored if type is not nmBot."
            },
            "nmBotAutoDeleteExternalQuotes": {
              "type": "boolean",
              "description": "Controls auto-delete of message quoted other chat's message. Ignored if type is not nmBot."
            },
            "messageIds": {
              "type": "array",
              "description": "Ids of the message templates to send scheduled. Must not be empty if using \"disabled\" as type.Currently a chat subscribed to nmBot+ can add up to 6 messages. Otherwise a chat can add up to 3 messages.",
              "items": {
                "type": "integer"
              }
            },
            "pinMessage": {
              "type": "boolean",
              "description": "Pin the sent message."
            },
            "deleteLastMessage": {
              "type": "boolean",
              "description": "Delete the last scheduled task message. nmBot+ only."
            },
            "unpinLastMessage": {
              "type": "boolean",
              "description": "Unpin the last scheduled task message. nmBot+ only."
            }
          },
          "title": "GroupScheduledTask"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## deleteGroupScheduledTask

**Tool Name:** deleteGroupScheduledTask
**Tool Description:** Delete a scheduled task for a group\. Method: POST /deleteGroupScheduledTask\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "The id of the group."
    },
    "id": {
      "type": "integer",
      "description": "The task id to delete."
    }
  },
  "required": [
    "groupId",
    "id"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "deleteGroupScheduledTask",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /deleteGroupScheduledTask
**Method Name:** deleteGroupScheduledTask
**Readonly:** No
**Deprecated:** No
**Summary:** deleteGroupScheduledTask
**Description:** Delete a scheduled task for a group\.
**Tags:** Allow Tools Calling, nmBot Intelligence, Scheduled Task, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId",
        "id"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "The id of the group."
        },
        "id": {
          "type": "integer",
          "description": "The task id to delete."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "The id of the group."
      },
      "id": {
        "type": "integer",
        "description": "The task id to delete."
      }
    },
    "required": [
      "groupId",
      "id"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "deleted"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "deleted": {
          "type": "integer",
          "description": "The id of the task deleted."
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getBusinessScheduledTasks

**Tool Name:** getBusinessScheduledTasks
**Tool Description:** Get the Business Scheduled Tasks for the user\. Method: POST /getBusinessScheduledTasks\. Permission scope: User Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {}
}
```
**Tool Annotations:**
```json
{
  "title": "getBusinessScheduledTasks",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getBusinessScheduledTasks
**Method Name:** getBusinessScheduledTasks
**Readonly:** Yes
**Deprecated:** No
**Summary:** getBusinessScheduledTasks
**Description:** Get the Business Scheduled Tasks for the user\.
**Tags:** Allow Tools Calling, nmBot Intelligence, User, User Only, Readonly, Business Scheduled Task
**Request:**
```json
{
  "parameters": [],
  "inputSchema": {
    "type": "object",
    "properties": {}
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "businessScheduledTasks",
        "maxCount"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "businessScheduledTasks": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "id",
              "userId",
              "isEnabled",
              "actionTime",
              "actionDaysOfWeek",
              "firstName",
              "lastName",
              "username",
              "bio"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The id of the BST."
              },
              "userId": {
                "type": "integer",
                "description": "The id of the user created the BST."
              },
              "isEnabled": {
                "type": "boolean",
                "description": "Whether the BST is enabled."
              },
              "actionTime": {
                "type": "integer",
                "description": "The action time of the BST. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
              },
              "actionDaysOfWeek": {
                "type": "array",
                "description": "Days of week to perform the BST. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
                "items": {
                  "type": "integer"
                }
              },
              "firstName": {
                "type": "string",
                "description": "The new first name to be set. Pass Null to keep the current name. Can't be an empty string."
              },
              "lastName": {
                "type": "string",
                "description": "The new last name to be set. Pass Null to keep the current name. Can be an empty string."
              },
              "username": {
                "type": "string",
                "description": "The new username to be set. Pass Null to keep the current username. Can be an empty string."
              },
              "bio": {
                "type": "string",
                "description": "The new bio to be set. Pass Null to keep the current bio. Can be an empty string."
              }
            },
            "title": "BusinessScheduledTask"
          }
        },
        "maxCount": {
          "type": "integer",
          "description": "The max number of BST the user can create."
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## mergeBusinessScheduledTasks

**Tool Name:** mergeBusinessScheduledTasks
**Tool Description:** mergeBusinessScheduledTasks Method: POST /mergeBusinessScheduledTasks\. Permission scope: User Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "businessScheduledTasks": {
      "type": "array",
      "description": "The array of BST list to save.For added tasks, pass a non-existing id; for tasks to delete, simply spilce them from the list.",
      "items": {
        "type": "object",
        "required": [
          "id",
          "userId",
          "isEnabled",
          "actionTime",
          "actionDaysOfWeek",
          "firstName",
          "lastName",
          "username",
          "bio"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "description": "The id of the BST."
          },
          "userId": {
            "type": "integer",
            "description": "The id of the user created the BST."
          },
          "isEnabled": {
            "type": "boolean",
            "description": "Whether the BST is enabled."
          },
          "actionTime": {
            "type": "integer",
            "description": "The action time of the BST. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
          },
          "actionDaysOfWeek": {
            "type": "array",
            "description": "Days of week to perform the BST. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
            "items": {
              "type": "integer"
            }
          },
          "firstName": {
            "type": "string",
            "description": "The new first name to be set. Pass Null to keep the current name. Can't be an empty string."
          },
          "lastName": {
            "type": "string",
            "description": "The new last name to be set. Pass Null to keep the current name. Can be an empty string."
          },
          "username": {
            "type": "string",
            "description": "The new username to be set. Pass Null to keep the current username. Can be an empty string."
          },
          "bio": {
            "type": "string",
            "description": "The new bio to be set. Pass Null to keep the current bio. Can be an empty string."
          }
        },
        "title": "BusinessScheduledTask"
      }
    }
  },
  "required": [
    "businessScheduledTasks"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "mergeBusinessScheduledTasks",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /mergeBusinessScheduledTasks
**Method Name:** mergeBusinessScheduledTasks
**Readonly:** No
**Deprecated:** No
**Summary:** mergeBusinessScheduledTasks
**Description:** POST /mergeBusinessScheduledTasks
**Tags:** Allow Tools Calling, nmBot Intelligence, User Only, User, Business Scheduled Task
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "businessScheduledTasks"
      ],
      "properties": {
        "businessScheduledTasks": {
          "type": "array",
          "description": "The array of BST list to save.For added tasks, pass a non-existing id; for tasks to delete, simply spilce them from the list.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "userId",
              "isEnabled",
              "actionTime",
              "actionDaysOfWeek",
              "firstName",
              "lastName",
              "username",
              "bio"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The id of the BST."
              },
              "userId": {
                "type": "integer",
                "description": "The id of the user created the BST."
              },
              "isEnabled": {
                "type": "boolean",
                "description": "Whether the BST is enabled."
              },
              "actionTime": {
                "type": "integer",
                "description": "The action time of the BST. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
              },
              "actionDaysOfWeek": {
                "type": "array",
                "description": "Days of week to perform the BST. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
                "items": {
                  "type": "integer"
                }
              },
              "firstName": {
                "type": "string",
                "description": "The new first name to be set. Pass Null to keep the current name. Can't be an empty string."
              },
              "lastName": {
                "type": "string",
                "description": "The new last name to be set. Pass Null to keep the current name. Can be an empty string."
              },
              "username": {
                "type": "string",
                "description": "The new username to be set. Pass Null to keep the current username. Can be an empty string."
              },
              "bio": {
                "type": "string",
                "description": "The new bio to be set. Pass Null to keep the current bio. Can be an empty string."
              }
            },
            "title": "BusinessScheduledTask"
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "businessScheduledTasks": {
        "type": "array",
        "description": "The array of BST list to save.For added tasks, pass a non-existing id; for tasks to delete, simply spilce them from the list.",
        "items": {
          "type": "object",
          "required": [
            "id",
            "userId",
            "isEnabled",
            "actionTime",
            "actionDaysOfWeek",
            "firstName",
            "lastName",
            "username",
            "bio"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of the BST."
            },
            "userId": {
              "type": "integer",
              "description": "The id of the user created the BST."
            },
            "isEnabled": {
              "type": "boolean",
              "description": "Whether the BST is enabled."
            },
            "actionTime": {
              "type": "integer",
              "description": "The action time of the BST. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
            },
            "actionDaysOfWeek": {
              "type": "array",
              "description": "Days of week to perform the BST. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
              "items": {
                "type": "integer"
              }
            },
            "firstName": {
              "type": "string",
              "description": "The new first name to be set. Pass Null to keep the current name. Can't be an empty string."
            },
            "lastName": {
              "type": "string",
              "description": "The new last name to be set. Pass Null to keep the current name. Can be an empty string."
            },
            "username": {
              "type": "string",
              "description": "The new username to be set. Pass Null to keep the current username. Can be an empty string."
            },
            "bio": {
              "type": "string",
              "description": "The new bio to be set. Pass Null to keep the current bio. Can be an empty string."
            }
          },
          "title": "BusinessScheduledTask"
        }
      }
    },
    "required": [
      "businessScheduledTasks"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "message",
        "code",
        "businessScheduledTasks"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "message": {
          "type": "string"
        },
        "businessScheduledTasks": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "id",
              "userId",
              "isEnabled",
              "actionTime",
              "actionDaysOfWeek",
              "firstName",
              "lastName",
              "username",
              "bio"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "The id of the BST."
              },
              "userId": {
                "type": "integer",
                "description": "The id of the user created the BST."
              },
              "isEnabled": {
                "type": "boolean",
                "description": "Whether the BST is enabled."
              },
              "actionTime": {
                "type": "integer",
                "description": "The action time of the BST. Divide the number with 60, the value is the hour, and the remain is the minute. E.g. 374 means 6:14."
              },
              "actionDaysOfWeek": {
                "type": "array",
                "description": "Days of week to perform the BST. Contains an array of 0-6 tp reflect day of week. If is an empty array, the scheduled task runs everyday.",
                "items": {
                  "type": "integer"
                }
              },
              "firstName": {
                "type": "string",
                "description": "The new first name to be set. Pass Null to keep the current name. Can't be an empty string."
              },
              "lastName": {
                "type": "string",
                "description": "The new last name to be set. Pass Null to keep the current name. Can be an empty string."
              },
              "username": {
                "type": "string",
                "description": "The new username to be set. Pass Null to keep the current username. Can be an empty string."
              },
              "bio": {
                "type": "string",
                "description": "The new bio to be set. Pass Null to keep the current bio. Can be an empty string."
              }
            },
            "title": "BusinessScheduledTask"
          }
        }
      }
    }
  }
]
```

## init

**Tool Name:** init
**Tool Description:** Initialize panel runtime context for the current user, including permissions, plans, feature availability, and cached resources\. Method: POST /init\. Permission scope: User Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "language": {
      "type": "string",
      "description": "Preferred language code used for i18n hydration."
    },
    "ignoreSubscribeStatus": {
      "type": "boolean",
      "description": "Skip checking channel subscription status when true."
    }
  }
}
```
**Tool Annotations:**
```json
{
  "title": "init",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /init
**Method Name:** init
**Readonly:** Yes
**Deprecated:** No
**Summary:** init
**Description:** Initialize panel runtime context for the current user, including permissions, plans, feature availability, and cached resources\.
**Tags:** User, User Only, Readonly, Allow Tools Calling
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "properties": {
        "language": {
          "type": "string",
          "description": "Preferred language code used for i18n hydration."
        },
        "ignoreSubscribeStatus": {
          "type": "boolean",
          "description": "Skip checking channel subscription status when true."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "language": {
        "type": "string",
        "description": "Preferred language code used for i18n hydration."
      },
      "ignoreSubscribeStatus": {
        "type": "boolean",
        "description": "Skip checking channel subscription status when true."
      }
    }
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "user": {
          "type": "object",
          "description": "Authenticated user info from current session.",
          "properties": {},
          "additionalProperties": true
        },
        "adminGroups": {
          "type": "array",
          "description": "Group IDs where current user has admin privileges.",
          "items": {
            "type": "integer"
          }
        },
        "pinnedChatsList": {
          "type": "array",
          "description": "Pinned chat IDs shown in panel sidebar.",
          "items": {
            "type": "integer"
          }
        },
        "isAdmin": {
          "type": "boolean"
        },
        "isSubscribedChannel": {
          "type": "string",
          "description": "Subscription status or boolean-like string."
        },
        "apiVersion": {
          "type": "string"
        },
        "commandList": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        },
        "bindNmteamAccountUuid": {
          "type": "string"
        },
        "plusStatus": {
          "type": "object",
          "description": "Current Plus status for private chat.",
          "properties": {},
          "additionalProperties": true
        },
        "plusPlans": {
          "type": "array",
          "description": "Purchasable Plus plans for current scope.",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        },
        "plusAvailableGiftPlans": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        },
        "plusBenefits": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        },
        "ads": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        },
        "messageTemplates": {
          "type": "array",
          "items": {}
        },
        "whatsNew": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        },
        "eventPopUp": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        },
        "botApiVersionRecommended": {
          "type": "string"
        },
        "featureInfo": {
          "type": "object",
          "description": "Metadata for one-click configurable features.",
          "properties": {},
          "additionalProperties": {
            "type": "object",
            "additionalProperties": true
          }
        },
        "summary2024Enabled": {
          "type": "boolean"
        },
        "specialThemeId": {
          "type": "string"
        },
        "intelligenceAvailability": {
          "type": "object",
          "description": "Availability and gating of intelligence features.",
          "properties": {},
          "additionalProperties": true
        },
        "intelligenceSettings": {},
        "businessInfo": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        },
        "userConfiguration": {}
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getUserConfiguration

**Tool Name:** getUserConfiguration
**Tool Description:** getUserConfiguration Method: POST /getUserConfiguration\. Permission scope: User Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {}
}
```
**Tool Annotations:**
```json
{
  "title": "getUserConfiguration",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getUserConfiguration
**Method Name:** getUserConfiguration
**Readonly:** Yes
**Deprecated:** No
**Summary:** getUserConfiguration
**Description:** POST /getUserConfiguration
**Tags:** Allow Tools Calling, User, User Only, Readonly, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "inputSchema": {
    "type": "object",
    "properties": {}
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "userConfiguration"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "userConfiguration": {
          "type": "object",
          "required": [
            "receiveGroupMentionAdministratorNotifications"
          ],
          "properties": {
            "receiveGroupMentionAdministratorNotifications": {
              "type": "boolean",
              "description": "Whether to receive mention administrator notifications in managed group. Requires nmBot+ to set to false."
            }
          },
          "title": "UserConfiguration"
        }
      }
    }
  }
]
```

## setUserConfiguration

**Tool Name:** setUserConfiguration
**Tool Description:** setUserConfiguration Method: POST /setUserConfiguration\. Permission scope: User Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "configuration": {
      "type": "object",
      "description": "The object of configuration to change.",
      "properties": {
        "receiveGroupMentionAdministratorNotifications": {
          "type": "boolean",
          "description": "Whether to receive mention administrator notifications in managed group. Requires nmBot+ to set to false."
        }
      }
    }
  },
  "required": [
    "configuration"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "setUserConfiguration",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /setUserConfiguration
**Method Name:** setUserConfiguration
**Readonly:** No
**Deprecated:** No
**Summary:** setUserConfiguration
**Description:** POST /setUserConfiguration
**Tags:** Allow Tools Calling, User, User Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "configuration"
      ],
      "properties": {
        "configuration": {
          "type": "object",
          "description": "The object of configuration to change.",
          "properties": {
            "receiveGroupMentionAdministratorNotifications": {
              "type": "boolean",
              "description": "Whether to receive mention administrator notifications in managed group. Requires nmBot+ to set to false."
            }
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "configuration": {
        "type": "object",
        "description": "The object of configuration to change.",
        "properties": {
          "receiveGroupMentionAdministratorNotifications": {
            "type": "boolean",
            "description": "Whether to receive mention administrator notifications in managed group. Requires nmBot+ to set to false."
          }
        }
      }
    },
    "required": [
      "configuration"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "userConfiguration"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "userConfiguration": {
          "type": "object",
          "required": [
            "receiveGroupMentionAdministratorNotifications"
          ],
          "properties": {
            "receiveGroupMentionAdministratorNotifications": {
              "type": "boolean",
              "description": "Whether to receive mention administrator notifications in managed group. Requires nmBot+ to set to false."
            }
          },
          "title": "UserConfiguration"
        }
      }
    }
  }
]
```

## getCredit

**Tool Name:** getCredit
**Tool Description:** Get credit balance and daily sign status for current user\. Method: POST /getCredit\. Permission scope: User Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {}
}
```
**Tool Annotations:**
```json
{
  "title": "getCredit",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getCredit
**Method Name:** getCredit
**Readonly:** Yes
**Deprecated:** No
**Summary:** getCredit
**Description:** Get credit balance and daily sign status for current user\.
**Tags:** Allow Tools Calling, User, User Only, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "properties": {},
      "additionalProperties": true
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {}
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "message": {
          "type": "string"
        },
        "data": {
          "type": "object",
          "description": "Current credit status payload.",
          "required": [
            "credit",
            "signed"
          ],
          "properties": {
            "credit": {
              "type": "number"
            },
            "signed": {
              "type": "boolean"
            }
          }
        },
        "activities": {
          "type": "array",
          "description": "Configured credit-related activity metadata.",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getCreditHistory

**Tool Name:** getCreditHistory
**Tool Description:** Get recent credit change records from credit service\. Method: POST /getCreditHistory\. Permission scope: User Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {}
}
```
**Tool Annotations:**
```json
{
  "title": "getCreditHistory",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getCreditHistory
**Method Name:** getCreditHistory
**Readonly:** Yes
**Deprecated:** No
**Summary:** getCreditHistory
**Description:** Get recent credit change records from credit service\.
**Tags:** Allow Tools Calling, User, User Only, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "properties": {},
      "additionalProperties": true
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {}
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "status": {
          "type": "string"
        },
        "history": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        }
      },
      "additionalProperties": true
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## setPinnedChats

**Tool Name:** setPinnedChats
**Tool Description:** Pin or unpin a chat in current user panel\. Method: POST /setPinnedChats\. Permission scope: User Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "chatId": {
      "type": "integer",
      "description": "Chat ID to pin/unpin."
    },
    "isUnpin": {
      "type": "boolean",
      "description": "Set true to unpin, false/omit to pin."
    }
  },
  "required": [
    "chatId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "setPinnedChats",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /setPinnedChats
**Method Name:** setPinnedChats
**Readonly:** No
**Deprecated:** No
**Summary:** setPinnedChats
**Description:** Pin or unpin a chat in current user panel\.
**Tags:** Allow Tools Calling, User, User Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "chatId"
      ],
      "properties": {
        "chatId": {
          "type": "integer",
          "description": "Chat ID to pin/unpin."
        },
        "isUnpin": {
          "type": "boolean",
          "description": "Set true to unpin, false/omit to pin."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "chatId": {
        "type": "integer",
        "description": "Chat ID to pin/unpin."
      },
      "isUnpin": {
        "type": "boolean",
        "description": "Set true to unpin, false/omit to pin."
      }
    },
    "required": [
      "chatId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "pinnedChatsList": {
          "type": "array",
          "items": {
            "type": "integer"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## spamLogQuery

**Tool Name:** spamLogQuery
**Tool Description:** List recent spam moderation actions related to current user\. Method: POST /spamLogQuery\. Permission scope: User Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {}
}
```
**Tool Annotations:**
```json
{
  "title": "spamLogQuery",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /spamLogQuery
**Method Name:** spamLogQuery
**Readonly:** Yes
**Deprecated:** No
**Summary:** spamLogQuery
**Description:** List recent spam moderation actions related to current user\.
**Tags:** Allow Tools Calling, User, User Only, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "properties": {},
      "additionalProperties": true
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {}
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "log"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "log": {
          "type": "array",
          "items": {}
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getGroupWhitelist

**Tool Name:** getGroupWhitelist
**Tool Description:** POST /getGroupWhitelist
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer"
    }
  },
  "required": [
    "groupId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getGroupWhitelist",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getGroupWhitelist
**Method Name:** getGroupWhitelist
**Readonly:** Yes
**Deprecated:** No
**Summary:** getGroupWhitelist
**Description:** POST /getGroupWhitelist
**Tags:** Allow Tools Calling, Group White List, Readonly, nmBot Intelligence, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId"
      ],
      "properties": {
        "groupId": {
          "type": "integer"
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer"
      }
    },
    "required": [
      "groupId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "whitelist"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "whitelist": {
          "type": "array",
          "description": "The whitelist of the group.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "groupId",
              "chatId",
              "addByUserId",
              "date"
            ],
            "properties": {
              "id": {
                "type": "integer"
              },
              "groupId": {
                "type": "integer",
                "description": "The group where the user is whitelisted."
              },
              "chatId": {
                "type": "integer",
                "description": "The whitelisted user/channel's id. If chatId starts with \"-100\", then the whitelisted is a channel."
              },
              "addByUserId": {
                "type": "integer",
                "description": "The admin id who added the user to whitelist."
              },
              "date": {
                "type": "integer",
                "description": "The time the user was added."
              }
            },
            "title": "GroupUserWhiteList"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getGroupCustomRules

**Tool Name:** getGroupCustomRules
**Tool Description:** POST /getGroupCustomRules
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer"
    }
  },
  "required": [
    "groupId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getGroupCustomRules",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getGroupCustomRules
**Method Name:** getGroupCustomRules
**Readonly:** Yes
**Deprecated:** No
**Summary:** getGroupCustomRules
**Description:** POST /getGroupCustomRules
**Tags:** Allow Tools Calling, Group Custom Rules, nmBot Intelligence, Readonly, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId"
      ],
      "properties": {
        "groupId": {
          "type": "integer"
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer"
      }
    },
    "required": [
      "groupId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "customRules"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "customRules": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "id",
              "chatId",
              "type",
              "content",
              "isEnabled",
              "date"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "Rule id."
              },
              "chatId": {
                "type": "integer",
                "description": "The chat id of the rule set."
              },
              "type": {
                "type": "string",
                "description": "The match type of the rule. Accepts the following value:- userId: match id of the Telegram user.- userName: match the user's name.- userBio: match the bio of the user.- emojiStatusStickerSetName: user emoji status pack.- stickerSetName: The sticker name(id) the user sent.",
                "enum": [
                  "userId",
                  "userName",
                  "userBio"
                ]
              },
              "content": {
                "type": "string",
                "description": "Match content of the rule, will be using as a RegExp string."
              },
              "isEnabled": {
                "type": "boolean",
                "description": "Whether the rule is enabled."
              },
              "date": {
                "type": "integer",
                "description": "The date the rule added."
              }
            },
            "title": "CustomSpamRule"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## mergeGroupCustomRules

**Tool Name:** mergeGroupCustomRules
**Tool Description:** POST /mergeGroupCustomRules
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer"
    },
    "customRules": {
      "type": "array",
      "description": "All new custom spam rules to update. Items not in the list will be removed.",
      "items": {
        "type": "object",
        "required": [
          "id",
          "chatId",
          "type",
          "content",
          "isEnabled",
          "date"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "description": "Rule id."
          },
          "chatId": {
            "type": "integer",
            "description": "The chat id of the rule set."
          },
          "type": {
            "type": "string",
            "description": "The match type of the rule. Accepts the following value:- userId: match id of the Telegram user.- userName: match the user's name.- userBio: match the bio of the user.- emojiStatusStickerSetName: user emoji status pack.- stickerSetName: The sticker name(id) the user sent.",
            "enum": [
              "userId",
              "userName",
              "userBio"
            ]
          },
          "content": {
            "type": "string",
            "description": "Match content of the rule, will be using as a RegExp string."
          },
          "isEnabled": {
            "type": "boolean",
            "description": "Whether the rule is enabled."
          },
          "date": {
            "type": "integer",
            "description": "The date the rule added."
          }
        },
        "title": "CustomSpamRule"
      }
    }
  },
  "required": [
    "groupId",
    "customRules"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "mergeGroupCustomRules",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /mergeGroupCustomRules
**Method Name:** mergeGroupCustomRules
**Readonly:** No
**Deprecated:** No
**Summary:** mergeGroupCustomRules
**Description:** POST /mergeGroupCustomRules
**Tags:** Allow Tools Calling, Group Custom Rules, Group, Group Only, nmBot Intelligence
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId",
        "customRules"
      ],
      "properties": {
        "groupId": {
          "type": "integer"
        },
        "customRules": {
          "type": "array",
          "description": "All new custom spam rules to update. Items not in the list will be removed.",
          "items": {
            "type": "object",
            "required": [
              "id",
              "chatId",
              "type",
              "content",
              "isEnabled",
              "date"
            ],
            "properties": {
              "id": {
                "type": "integer",
                "description": "Rule id."
              },
              "chatId": {
                "type": "integer",
                "description": "The chat id of the rule set."
              },
              "type": {
                "type": "string",
                "description": "The match type of the rule. Accepts the following value:- userId: match id of the Telegram user.- userName: match the user's name.- userBio: match the bio of the user.- emojiStatusStickerSetName: user emoji status pack.- stickerSetName: The sticker name(id) the user sent.",
                "enum": [
                  "userId",
                  "userName",
                  "userBio"
                ]
              },
              "content": {
                "type": "string",
                "description": "Match content of the rule, will be using as a RegExp string."
              },
              "isEnabled": {
                "type": "boolean",
                "description": "Whether the rule is enabled."
              },
              "date": {
                "type": "integer",
                "description": "The date the rule added."
              }
            },
            "title": "CustomSpamRule"
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer"
      },
      "customRules": {
        "type": "array",
        "description": "All new custom spam rules to update. Items not in the list will be removed.",
        "items": {
          "type": "object",
          "required": [
            "id",
            "chatId",
            "type",
            "content",
            "isEnabled",
            "date"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "Rule id."
            },
            "chatId": {
              "type": "integer",
              "description": "The chat id of the rule set."
            },
            "type": {
              "type": "string",
              "description": "The match type of the rule. Accepts the following value:- userId: match id of the Telegram user.- userName: match the user's name.- userBio: match the bio of the user.- emojiStatusStickerSetName: user emoji status pack.- stickerSetName: The sticker name(id) the user sent.",
              "enum": [
                "userId",
                "userName",
                "userBio"
              ]
            },
            "content": {
              "type": "string",
              "description": "Match content of the rule, will be using as a RegExp string."
            },
            "isEnabled": {
              "type": "boolean",
              "description": "Whether the rule is enabled."
            },
            "date": {
              "type": "integer",
              "description": "The date the rule added."
            }
          },
          "title": "CustomSpamRule"
        }
      }
    },
    "required": [
      "groupId",
      "customRules"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## checkGroup

**Tool Name:** checkGroup
**Tool Description:** Validate and fetch detailed management context for one or multiple chats\. Method: POST /checkGroup\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target chat ID for single-check mode."
    },
    "groupIds": {
      "type": "array",
      "description": "Target chat IDs for batch-check mode.",
      "items": {
        "type": "integer"
      }
    },
    "isToAdd": {
      "type": "boolean",
      "description": "When true, add chat(s) to user managed list after validation."
    },
    "isToDelete": {
      "type": "boolean",
      "description": "When true, remove chat(s) from user managed list without remote checks."
    }
  }
}
```
**Tool Annotations:**
```json
{
  "title": "checkGroup",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /checkGroup
**Method Name:** checkGroup
**Readonly:** No
**Deprecated:** No
**Summary:** checkGroup
**Description:** Validate and fetch detailed management context for one or multiple chats\.
**Tags:** Allow Tools Calling, Group, User
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target chat ID for single-check mode."
        },
        "groupIds": {
          "type": "array",
          "description": "Target chat IDs for batch-check mode.",
          "items": {
            "type": "integer"
          }
        },
        "isToAdd": {
          "type": "boolean",
          "description": "When true, add chat(s) to user managed list after validation."
        },
        "isToDelete": {
          "type": "boolean",
          "description": "When true, remove chat(s) from user managed list without remote checks."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target chat ID for single-check mode."
      },
      "groupIds": {
        "type": "array",
        "description": "Target chat IDs for batch-check mode.",
        "items": {
          "type": "integer"
        }
      },
      "isToAdd": {
        "type": "boolean",
        "description": "When true, add chat(s) to user managed list after validation."
      },
      "isToDelete": {
        "type": "boolean",
        "description": "When true, remove chat(s) from user managed list without remote checks."
      }
    }
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "groups"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "groups": {
          "type": "array",
          "description": "Per-chat check result array. Each item contains code/message and optional group payload.",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        },
        "group": {
          "type": "object",
          "description": "Convenience alias for the first group payload in groups.",
          "properties": {},
          "additionalProperties": true
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getGroupCommands

**Tool Name:** getGroupCommands
**Tool Description:** Get custom command visibility config for a managed group\. Method: POST /getGroupCommands\. Permission scope: Group Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    }
  },
  "required": [
    "groupId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getGroupCommands",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getGroupCommands
**Method Name:** getGroupCommands
**Readonly:** Yes
**Deprecated:** No
**Summary:** getGroupCommands
**Description:** Get custom command visibility config for a managed group\.
**Tags:** Allow Tools Calling, Group, Group Only, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      }
    },
    "required": [
      "groupId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "command",
              "isAdminOnly",
              "enabled"
            ],
            "properties": {
              "command": {
                "type": "string"
              },
              "descriptionI18nKey": {
                "type": "string"
              },
              "isAdminOnly": {
                "type": "boolean"
              },
              "enabled": {
                "type": "boolean"
              }
            }
          }
        },
        "isDefault": {
          "type": "boolean"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## setGroupCommands

**Tool Name:** setGroupCommands
**Tool Description:** Persist enabled command list for group admins and members\. Method: POST /setGroupCommands\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    },
    "commands": {
      "type": "array",
      "description": "Enabled command names (without slash).",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "groupId",
    "commands"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "setGroupCommands",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /setGroupCommands
**Method Name:** setGroupCommands
**Readonly:** No
**Deprecated:** No
**Summary:** setGroupCommands
**Description:** Persist enabled command list for group admins and members\.
**Tags:** Allow Tools Calling, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId",
        "commands"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        },
        "commands": {
          "type": "array",
          "description": "Enabled command names (without slash).",
          "items": {
            "type": "string"
          }
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      },
      "commands": {
        "type": "array",
        "description": "Enabled command names (without slash).",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "groupId",
      "commands"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## resetGroupCommands

**Tool Name:** resetGroupCommands
**Tool Description:** Reset group custom command config back to defaults\. Method: POST /resetGroupCommands\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    }
  },
  "required": [
    "groupId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "resetGroupCommands",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /resetGroupCommands
**Method Name:** resetGroupCommands
**Readonly:** No
**Deprecated:** No
**Summary:** resetGroupCommands
**Description:** Reset group custom command config back to defaults\.
**Tags:** Allow Tools Calling, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      }
    },
    "required": [
      "groupId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getGroupActionLog

**Tool Name:** getGroupActionLog
**Tool Description:** Search moderation/action logs in a managed group\. Method: POST /getGroupActionLog\. Permission scope: Group Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    },
    "language": {
      "type": "string",
      "description": "Language used for localized parsed log text."
    },
    "type": {
      "type": "array",
      "description": "Filter by action type list.",
      "items": {
        "type": "string"
      }
    },
    "keyword": {
      "type": "string",
      "description": "Keyword filter for searchable fields."
    },
    "limit": {
      "type": "integer",
      "description": "Max records to return."
    },
    "from": {
      "type": "integer",
      "description": "Pagination cursor or offset."
    },
    "userId": {
      "type": "integer",
      "description": "Filter by actor user ID."
    }
  },
  "required": [
    "groupId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getGroupActionLog",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getGroupActionLog
**Method Name:** getGroupActionLog
**Readonly:** Yes
**Deprecated:** No
**Summary:** getGroupActionLog
**Description:** Search moderation/action logs in a managed group\.
**Tags:** Allow Tools Calling, Group, Group Only, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        },
        "language": {
          "type": "string",
          "description": "Language used for localized parsed log text."
        },
        "type": {
          "type": "array",
          "description": "Filter by action type list.",
          "items": {
            "type": "string"
          }
        },
        "keyword": {
          "type": "string",
          "description": "Keyword filter for searchable fields."
        },
        "limit": {
          "type": "integer",
          "description": "Max records to return."
        },
        "from": {
          "type": "integer",
          "description": "Pagination cursor or offset."
        },
        "userId": {
          "type": "integer",
          "description": "Filter by actor user ID."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      },
      "language": {
        "type": "string",
        "description": "Language used for localized parsed log text."
      },
      "type": {
        "type": "array",
        "description": "Filter by action type list.",
        "items": {
          "type": "string"
        }
      },
      "keyword": {
        "type": "string",
        "description": "Keyword filter for searchable fields."
      },
      "limit": {
        "type": "integer",
        "description": "Max records to return."
      },
      "from": {
        "type": "integer",
        "description": "Pagination cursor or offset."
      },
      "userId": {
        "type": "integer",
        "description": "Filter by actor user ID."
      }
    },
    "required": [
      "groupId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "actionLogs": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## getGroupJoinVerificationHistory

**Tool Name:** getGroupJoinVerificationHistory
**Tool Description:** Get recent join\-verification records for a managed group\. Method: POST /getGroupJoinVerificationHistory\. Permission scope: Group Only\. Readonly endpoint\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    }
  },
  "required": [
    "groupId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "getGroupJoinVerificationHistory",
  "readOnlyHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /getGroupJoinVerificationHistory
**Method Name:** getGroupJoinVerificationHistory
**Readonly:** Yes
**Deprecated:** No
**Summary:** getGroupJoinVerificationHistory
**Description:** Get recent join\-verification records for a managed group\.
**Tags:** Allow Tools Calling, Group, Group Only, Readonly
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      }
    },
    "required": [
      "groupId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "history": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {},
            "additionalProperties": true
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## banGroupJoinVerificationUser

**Tool Name:** banGroupJoinVerificationUser
**Tool Description:** Ban or unban user from join\-verification history\. Method: POST /banGroupJoinVerificationUser\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    },
    "banUserId": {
      "type": "integer",
      "description": "User ID to ban/unban."
    },
    "isUnabn": {
      "type": "boolean",
      "description": "When true, perform unban instead of ban."
    }
  },
  "required": [
    "groupId",
    "banUserId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "banGroupJoinVerificationUser",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /banGroupJoinVerificationUser
**Method Name:** banGroupJoinVerificationUser
**Readonly:** No
**Deprecated:** No
**Summary:** banGroupJoinVerificationUser
**Description:** Ban or unban user from join\-verification history\.
**Tags:** Allow Tools Calling, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId",
        "banUserId"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        },
        "banUserId": {
          "type": "integer",
          "description": "User ID to ban/unban."
        },
        "isUnabn": {
          "type": "boolean",
          "description": "When true, perform unban instead of ban."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      },
      "banUserId": {
        "type": "integer",
        "description": "User ID to ban/unban."
      },
      "isUnabn": {
        "type": "boolean",
        "description": "When true, perform unban instead of ban."
      }
    },
    "required": [
      "groupId",
      "banUserId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## groupSetConfig

**Tool Name:** groupSetConfig
**Tool Description:** Apply one\-click group configuration changes\. Method: POST /groupSetConfig\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    },
    "config": {
      "type": "object",
      "description": "Key-value map of configuration changes to apply.",
      "properties": {},
      "additionalProperties": true
    }
  },
  "required": [
    "groupId",
    "config"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "groupSetConfig",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /groupSetConfig
**Method Name:** groupSetConfig
**Readonly:** No
**Deprecated:** No
**Summary:** groupSetConfig
**Description:** Apply one\-click group configuration changes\.
**Tags:** Allow Tools Calling, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId",
        "config"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        },
        "config": {
          "type": "object",
          "description": "Key-value map of configuration changes to apply.",
          "properties": {},
          "additionalProperties": true
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      },
      "config": {
        "type": "object",
        "description": "Key-value map of configuration changes to apply.",
        "properties": {},
        "additionalProperties": true
      }
    },
    "required": [
      "groupId",
      "config"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "newGroupConfiguration": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        },
        "results": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "type": "string"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## channelSetConfig

**Tool Name:** channelSetConfig
**Tool Description:** Update channel\-level configuration keys\. Method: POST /channelSetConfig\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "channelId": {
      "type": "integer",
      "description": "Target channel ID."
    },
    "config": {
      "type": "object",
      "description": "Configuration patch object.",
      "properties": {},
      "additionalProperties": true
    },
    "postId": {
      "type": "integer",
      "description": "Required when editing post markup related settings."
    }
  },
  "required": [
    "channelId",
    "config"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "channelSetConfig",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /channelSetConfig
**Method Name:** channelSetConfig
**Readonly:** No
**Deprecated:** No
**Summary:** channelSetConfig
**Description:** Update channel\-level configuration keys\.
**Tags:** Allow Tools Calling, Group
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "channelId",
        "config"
      ],
      "properties": {
        "channelId": {
          "type": "integer",
          "description": "Target channel ID."
        },
        "config": {
          "type": "object",
          "description": "Configuration patch object.",
          "properties": {},
          "additionalProperties": true
        },
        "postId": {
          "type": "integer",
          "description": "Required when editing post markup related settings."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "channelId": {
        "type": "integer",
        "description": "Target channel ID."
      },
      "config": {
        "type": "object",
        "description": "Configuration patch object.",
        "properties": {},
        "additionalProperties": true
      },
      "postId": {
        "type": "integer",
        "description": "Required when editing post markup related settings."
      }
    },
    "required": [
      "channelId",
      "config"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "newChannelConfiguration": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        },
        "results": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "type": "string"
          }
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## groupSetJoinVerifyChannel

**Tool Name:** groupSetJoinVerifyChannel
**Tool Description:** Set the Join Verification Channel of a group\. Method: POST /groupSetJoinVerifyChannel\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "The id of the group to set new verification channel."
    },
    "channelId": {
      "description": "The new channel id or username, which new group members must join to finish verification.",
      "anyOf": [
        {
          "type": "string",
          "description": "The username of the channel."
        },
        {
          "type": "integer",
          "description": "The id of the channel."
        }
      ]
    }
  },
  "required": [
    "groupId",
    "channelId"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "groupSetJoinVerifyChannel (nmBot Intelligence)",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /groupSetJoinVerifyChannel
**Method Name:** groupSetJoinVerifyChannel
**Readonly:** No
**Deprecated:** No
**Summary:** groupSetJoinVerifyChannel \(nmBot Intelligence\)
**Description:** Set the Join Verification Channel of a group\.
**Tags:** Allow Tools Calling, nmBot Intelligence, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": false,
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "groupId",
        "channelId"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "The id of the group to set new verification channel."
        },
        "channelId": {
          "description": "The new channel id or username, which new group members must join to finish verification.",
          "anyOf": [
            {
              "type": "string",
              "description": "The username of the channel."
            },
            {
              "type": "integer",
              "description": "The id of the channel."
            }
          ]
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "The id of the group to set new verification channel."
      },
      "channelId": {
        "description": "The new channel id or username, which new group members must join to finish verification.",
        "anyOf": [
          {
            "type": "string",
            "description": "The username of the channel."
          },
          {
            "type": "integer",
            "description": "The id of the channel."
          }
        ]
      }
    },
    "required": [
      "groupId",
      "channelId"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "msg"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "enum": [
            200
          ],
          "title": "ResponseCodeSuccess"
        },
        "msg": {
          "type": "string"
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## setGroupPermissionException

**Tool Name:** setGroupPermissionException
**Tool Description:** Set or clear per\-admin permission exception for a group\. Method: POST /setGroupPermissionException\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    },
    "userId": {
      "type": "integer",
      "description": "Admin user ID to configure."
    },
    "permission": {
      "type": "string",
      "description": "Permission key name."
    },
    "setting": {
      "type": "boolean",
      "description": "Set true/false to override, omit to remove exception."
    }
  },
  "required": [
    "groupId",
    "userId",
    "permission"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "setGroupPermissionException",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /setGroupPermissionException
**Method Name:** setGroupPermissionException
**Readonly:** No
**Deprecated:** No
**Summary:** setGroupPermissionException
**Description:** Set or clear per\-admin permission exception for a group\.
**Tags:** Allow Tools Calling, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId",
        "userId",
        "permission"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        },
        "userId": {
          "type": "integer",
          "description": "Admin user ID to configure."
        },
        "permission": {
          "type": "string",
          "description": "Permission key name."
        },
        "setting": {
          "type": "boolean",
          "description": "Set true/false to override, omit to remove exception."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      },
      "userId": {
        "type": "integer",
        "description": "Admin user ID to configure."
      },
      "permission": {
        "type": "string",
        "description": "Permission key name."
      },
      "setting": {
        "type": "boolean",
        "description": "Set true/false to override, omit to remove exception."
      }
    },
    "required": [
      "groupId",
      "userId",
      "permission"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code",
        "newGroupConfiguration"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "newGroupConfiguration": {
          "type": "object",
          "properties": {},
          "additionalProperties": true
        }
      }
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```

## importConfigurationFromNmBot

**Tool Name:** importConfigurationFromNmBot
**Tool Description:** Parse encrypted nmBot exported configuration and validate importable items\. Method: POST /importConfigurationFromNmBot\. Permission scope: Group Only\. Includes documented 200 response schema\.
**Tool Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer",
      "description": "Target group ID."
    },
    "language": {
      "type": "string",
      "description": "Language for parsed messages."
    },
    "nmBotConfiguration": {
      "description": "Encrypted payload object from nmBot export."
    }
  },
  "required": [
    "groupId",
    "language",
    "nmBotConfiguration"
  ]
}
```
**Tool Annotations:**
```json
{
  "title": "importConfigurationFromNmBot",
  "readOnlyHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```
**HTTP Method:** POST
**Path:** /importConfigurationFromNmBot
**Method Name:** importConfigurationFromNmBot
**Readonly:** No
**Deprecated:** No
**Summary:** importConfigurationFromNmBot
**Description:** Parse encrypted nmBot exported configuration and validate importable items\.
**Tags:** Allow Tools Calling, Group, Group Only
**Request:**
```json
{
  "parameters": [],
  "body": {
    "required": true,
    "description": "",
    "schema": {
      "type": "object",
      "description": "Request body",
      "required": [
        "groupId",
        "language",
        "nmBotConfiguration"
      ],
      "properties": {
        "groupId": {
          "type": "integer",
          "description": "Target group ID."
        },
        "language": {
          "type": "string",
          "description": "Language for parsed messages."
        },
        "nmBotConfiguration": {
          "description": "Encrypted payload object from nmBot export."
        }
      }
    }
  },
  "inputSchema": {
    "type": "object",
    "properties": {
      "groupId": {
        "type": "integer",
        "description": "Target group ID."
      },
      "language": {
        "type": "string",
        "description": "Language for parsed messages."
      },
      "nmBotConfiguration": {
        "description": "Encrypted payload object from nmBot export."
      }
    },
    "required": [
      "groupId",
      "language",
      "nmBotConfiguration"
    ]
  }
}
```
**Responses:**
```json
[
  {
    "statusCode": "200",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "success": {
          "type": "boolean"
        },
        "msg": {
          "type": "string"
        },
        "error": {
          "type": "string"
        }
      },
      "additionalProperties": true
    }
  },
  {
    "statusCode": "400",
    "description": "",
    "schema": {
      "type": "object",
      "required": [
        "code"
      ],
      "properties": {
        "code": {
          "type": "integer"
        },
        "msg": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
]
```
