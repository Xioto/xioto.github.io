<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
    $command = escapeshellcmd('./code.py');
    $output = shell_exec($command);
    echo $output;
?>
</body>
</html>