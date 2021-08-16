<!DOCTYPE html>
<html>
<head>
<style>
fieldset{width:180px; border-radius:6px; background:skyblue;}
fieldset >*{width:100%; height:30px; box-sizing:border-box;}
</style>
</head>
<body>
<form method="POST" action="login.php">
<fieldset>
	<input type="text" name="username" placeholder="Username" required autofocus>
	<input type="password" name="password" placeholder="Password" 
	                                                 required autocomplate="off">
	<input type="submit" name="submit" value="submit">
</fieldset>		
</form>
</body>
</html>
