<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <input type="text" name="name"><br>
 <?php system("python code.py ".$_POST["name"]); ?>
 </body>
</html>