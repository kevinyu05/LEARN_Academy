<!DOCTYPE HTML>

<head>
  <title>Magic 8 Ball</title>
</head>

<body>
  <img src="8ball.jpg" />
  <h1>Magic 8 Ball</h1>
  <p>Ask Me Anything</p>
  <input id="userinput" type="input" />
  <input id="button" type="button" value="submit" onclick="response()" />
  <p id="response"></p>
  <script>
    function response() {
      var list = ["yes, surely", "no doubt about it", "unable to determine", "never!", "no"]
      var number = Math.floor(Math.random() * 5)
      // document.write(number); //check to see if it generates a random number
      document.getElementById("response").innerHTML = list[number]
    }
  </script>

  <body>

    </html>
