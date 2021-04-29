<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <?php
$command = escapeshellcmd('code.py');
$output = shell_exec($command);
echo $output;
?>
 </body>
</html>