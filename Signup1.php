<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup Form</title>
  <link rel="stylesheet" href="styles/Signup.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>

<div class="signup-container">
  <div class="sidebar" id="sidebar">
    <div class="step active" data-step="1">
      <span class="step-number">Step 1</span>
    </div>
    <div class="step" data-step="2">
      <span class="step-number">Step 2</span>
    </div>
    <div class="step" data-step="3">
      <span class="step-number">Step 3</span>
    </div>
    <div class="step" data-step="4">
      <span class="step-number">Step 4</span>
    </div>
  </div>

  <form id="signup-form" class="form-content">
    <div class="form-step" data-step="1">
      <h2>Step 1: Personal Details</h2>
      <div class="input-div one">
        <div class="i">
          <i class="fas fa-user"></i>
        </div>
        <div class="div">
          <input type="text" class="input" name="name" placeholder="Name" />
        </div>
      </div>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-phone"></i>
        </div>
        <div class="div">
          <input type="text" class="input" name="phone" placeholder="Phone Number" />
        </div>
      </div>
    </div>

    <div class="form-step" data-step="2" style="display:none;">
      <h2>Step 2: Contact Details</h2>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="div">
          <input type="email" class="input" name="email" placeholder="Email" />
        </div>
      </div>
    </div>

    <div class="form-step" data-step="3" style="display:none;">
      <h2>Step 3: Password Setup</h2>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <input type="password" class="input" name="password" placeholder="Password" />
        </div>
      </div>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <input type="password" class="input" name="confirmPassword" placeholder="Confirm Password" />
        </div>
      </div>
    </div>

    <div class="button-group">
      <button type="button" id="prevButton" class="btn prev" style="display:none;">Previous</button>
      <button type="button" id="nextButton" class="btn next">Next</button>
      <button type="submit" id="submitButton" class="btn submit" style="display:none;">Submit</button>
    </div>
  </form>
</div>

<script src="script.js"></script>
</body>
</html> -->









<!-- 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup Form</title>
  <link rel="stylesheet" href="signup.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
<?php include 'navbar.php'; ?>

<div class="signup-container">
  <div class="sidebar" id="sidebar">
    <div class="step active" data-step="1">
      <span class="step-number">Step 1</span>
    </div>
    <div class="step" data-step="2">
      <span class="step-number">Step 2</span>
    </div>
    <div class="step" data-step="3">
      <span class="step-number">Step 3</span>
    </div>
    <div class="step" data-step="4">
      <span class="step-number">Step 4</span>
    </div>
  </div>

  <form id="signup-form" class="form-content" action="signup.php" method="POST">
    <div class="form-step" data-step="1">
      <h2>Step 1: Personal Details</h2>
      <div class="input-div one">
        <div class="i">
          <i class="fas fa-user"></i>
        </div>
        <div class="div">
          <input type="text" class="input" name="name" placeholder="Name" required />
        </div>
      </div>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-phone"></i>
        </div>
        <div class="div">
          <input type="text" class="input" name="phone" placeholder="Phone Number" required />
        </div>
      </div>
    </div>

    <div class="form-step" data-step="2" style="display:none;">
      <h2>Step 2: Contact Details</h2>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="div">
          <input type="email" class="input" name="email" placeholder="Email" required />
        </div>
      </div>
    </div>

    <div class="form-step" data-step="3" style="display:none;">
      <h2>Step 3: Password Setup</h2>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <input type="password" class="input" name="password" placeholder="Password" required />
        </div>
      </div>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <input type="password" class="input" name="confirmPassword" placeholder="Confirm Password" required />
        </div>
      </div>
    </div>

    <div class="button-group">
      <button type="button" id="prevButton" class="btn prev" style="display:none;">Previous</button>
      <button type="button" id="nextButton" class="btn next">Next</button>
      <button type="submit" id="submitButton" class="btn submit" style="display:none;">Submit</button>
    </div>
  </form>
</div>

<script src="signup.js"></script>
</body>
</html> -->




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup Form</title>
  <link rel="stylesheet" href="signup.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
<?php include 'navbar.php'; ?>

<div class="signup-container">
  <div class="sidebar" id="sidebar">
    <div class="step active" data-step="1">
      <span class="step-number">Step 1</span>
    </div>
    <div class="step" data-step="2">
      <span class="step-number">Step 2</span>
    </div>
    <div class="step" data-step="3">
      <span class="step-number">Step 3</span>
    </div>
    <div class="step" data-step="4">
      <span class="step-number">Step 4</span>
    </div>
  </div>

  <form id="signup-form" class="form-content" action="signup.php" method="POST">
    <div class="form-step" data-step="1">
      <h2>Step 1: Personal Details</h2>
      <div class="input-div one">
        <div class="i">
          <i class="fas fa-user"></i>
        </div>
        <div class="div">
          <input type="text" class="input" name="name" placeholder="Name" required />
        </div>
      </div>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-phone"></i>
        </div>
        <div class="div">
          <input type="text" class="input" name="phone" placeholder="Phone Number" required />
        </div>
      </div>
    </div>

    <div class="form-step" data-step="2" style="display:none;">
      <h2>Step 2: Contact Details</h2>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="div">
          <input type="email" class="input" name="email" placeholder="Email" required />
        </div>
      </div>
    </div>

    <div class="form-step" data-step="3" style="display:none;">
      <h2>Step 3: Password Setup</h2>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <input type="password" class="input" name="password" placeholder="Password" required />
        </div>
      </div>
      <div class="input-div">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <input type="password" class="input" name="confirmPassword" placeholder="Confirm Password" required />
        </div>
      </div>
    </div>

    <div class="button-group">
      <button type="button" id="prevButton" class="btn prev" style="display:none;">Previous</button>
      <button type="button" id="nextButton" class="btn next">Next</button>
      <button type="submit" id="submitButton" class="btn submit" style="display:none;">Submit</button>
    </div>
  </form>
</div>

<script src="signup.js"></script>
</body>
</html>
