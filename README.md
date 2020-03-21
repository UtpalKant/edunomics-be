# edunomics-be
edunomics test related node code.

follow below steps:

npm install
npm start

api details:

1. 
url: http://localhost:52898/api/bounceDetails
type: post
data: 'Content-Type: application/x-www-form-urlencoded' from body

import below given curl to your postman for more details:

curl --location --request POST 'http://localhost:52898/api/bounceDetails' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'height=150' \
--data-urlencode 'cr=1'

2. 
url: http://localhost:52898/api/getSavedData
type: get

import below given curl to your postman for more details:

curl --location --request GET 'http://localhost:52898/api/getSavedData'

Feel free to reach me at +91 620055721 or write to me at rudra.utpal@gmail.com if you face any issues.
