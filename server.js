var express = require('express')
var port = process.env.PORT || 8080

var app = express()

app.get('/', function (req, res) 
{
    var ip = req.get('x-forwarded-for')
    var language = req.get('accept-language')
    var software = req.get('user-agent')
    
    if(language.split(',').length > 1)
    {
        language = language.split(',')[0]
    }
    
    software = software.split('(')[1]
    software = software.split(')')[0]
    
    var object = {
        "ipaddress": ip,
        "language": language,
        "software": software
    }
    
    res.send(JSON.stringify(object))
})

app.listen(port, function () 
{
  console.log('Example app listening on port ' + port + '!')
})
