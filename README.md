# Key Value Store Server

This is an in-memory key-value store server implemented in Node.js/Express.

#### Endpoints

| Request                  | Function                                       |
| ------------------------ | ---------------------------------------------- |
| `/set?somekey=somevalue` | store `somevalue` in store                     |
| `/get?somekey`           | read `somekey` from store and return its value |

#### Commands

Start server: `npm run start`
